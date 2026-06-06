import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// Blossom's chat runs on the Node runtime so it can read the key + profile from disk.
export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

function getApiKey(): string {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  const keyPath = path.join(os.homedir(), ".anthropic", "api_key");
  return fs.readFileSync(keyPath, "utf8").trim();
}

let cachedSystem: string | null = null;
function getSystemPrompt(): string {
  if (cachedSystem) return cachedSystem;
  const p = path.join(process.cwd(), "agents", "admin-assistant.md");
  cachedSystem = fs.readFileSync(p, "utf8");
  return cachedSystem;
}

// Memory loop: pull the most recent day's end-of-day summary into the system
// prompt so Blossom continues with continuity instead of starting cold.
// (Not cached — re-read each request so the latest summary is always current.)
function getCarryForward(): string {
  try {
    const opsDir = path.join(process.cwd(), "operations");
    const days = fs
      .readdirSync(opsDir)
      .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
      .sort();
    if (days.length === 0) return "";
    const latest = days[days.length - 1];
    const eodPath = path.join(opsDir, latest, "eod.md");
    if (!fs.existsSync(eodPath)) return "";
    return (
      `\n\n---\n# Carry-forward memory (most recent session, ${latest})\n` +
      `You are not starting cold — continue with this context in mind.\n\n` +
      fs.readFileSync(eodPath, "utf8")
    );
  } catch {
    return "";
  }
}

export async function POST(req: Request) {
  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response("Invalid request body", { status: 400 });
  }

  // The Messages API requires the first turn to be from the user; drop any
  // leading assistant turns (Blossom's seeded morning brief is UI-only).
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (messages.length === 0) {
    return new Response("No user message", { status: 400 });
  }

  let client: Anthropic;
  let system: string;
  try {
    client = new Anthropic({ apiKey: getApiKey() });
    system = getSystemPrompt() + getCarryForward();
  } catch {
    return new Response(
      "Blossom isn't connected yet — no API key found at ~/.anthropic/api_key.",
      { status: 500 }
    );
  }

  const stream = client.messages.stream({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    system,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "unknown error";
        controller.enqueue(encoder.encode(`\n\n[Blossom hit an error: ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
