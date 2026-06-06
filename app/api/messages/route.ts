import { NextResponse } from "next/server";
import { loadMessages, appendMessage, type StoredMessage } from "@/lib/chat-store";

export const runtime = "nodejs";

// GET — return today's saved conversation so it survives reloads.
export async function GET() {
  return NextResponse.json({ messages: loadMessages() });
}

// POST — append one message to today's stored conversation.
export async function POST(req: Request) {
  let body: { message?: Partial<StoredMessage> };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid body", { status: 400 });
  }
  const m = body.message;
  if (!m || (m.role !== "user" && m.role !== "blossom") || typeof m.text !== "string") {
    return new Response("Invalid message", { status: 400 });
  }
  appendMessage({
    role: m.role,
    text: m.text,
    time: typeof m.time === "string" ? m.time : "",
    ts: typeof m.ts === "number" ? m.ts : Date.now(),
  });
  return NextResponse.json({ ok: true });
}
