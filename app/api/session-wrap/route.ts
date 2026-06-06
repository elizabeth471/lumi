import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { loadMessages } from "@/lib/chat-store";

export const runtime = "nodejs";

function getApiKey(): string {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY;
  return fs.readFileSync(path.join(os.homedir(), ".anthropic", "api_key"), "utf8").trim();
}

function todayStamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

export async function POST(req: Request) {
  // Local-only — never spend the key from a public tunnel.
  const host = req.headers.get("host") || "";
  if (!/^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(host)) {
    return Response.json({ ok: false, message: "Session Wrap runs only on the local machine." });
  }

  const msgs = loadMessages();
  if (msgs.length < 2) {
    return Response.json({
      ok: false,
      message: "Not enough conversation to wrap yet — talk to Blossom first.",
    });
  }

  let summary = "";
  try {
    const client = new Anthropic({ apiKey: getApiKey() });
    const transcript = msgs
      .map((m) => `${m.role === "user" ? "Founder" : "Blossom"}: ${m.text}`)
      .join("\n");
    const r = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 700,
      system:
        "You are Blossom writing a concise end-of-session wrap for the operations log. Output markdown: a one-line TL;DR, then short bullet lists for Decisions, Open items, and Next session. Be direct, no preamble.",
      messages: [{ role: "user", content: `Summarize this session for the daily log:\n\n${transcript}` }],
    });
    summary = r.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("");
  } catch (e) {
    return Response.json({
      ok: false,
      message: "Couldn't generate the wrap: " + (e instanceof Error ? e.message : "error"),
    });
  }

  // Append to today's eod.md (never clobber the curated record).
  const dir = path.join(process.cwd(), "operations", todayStamp());
  fs.mkdirSync(dir, { recursive: true });
  const eod = path.join(dir, "eod.md");
  fs.appendFileSync(eod, `\n\n## Session wrap (auto · ${new Date().toISOString()})\n\n${summary}\n`);

  return Response.json({ ok: true, summary });
}
