import fs from "node:fs";
import path from "node:path";

// Local-first chat persistence: messages are stored as plain JSON inside the
// day's operations folder, so the record is portable, git-versioned, and
// readable by any future (local) Blossom — no database required.

export interface StoredMessage {
  role: "user" | "blossom";
  text: string;
  time: string;
  ts: number;
}

function todayStamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function chatFile(): string {
  return path.join(process.cwd(), "operations", todayStamp(), "chat.json");
}

export function loadMessages(): StoredMessage[] {
  try {
    const data = JSON.parse(fs.readFileSync(chatFile(), "utf8"));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function appendMessage(msg: StoredMessage): void {
  const file = chatFile();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const msgs = loadMessages();
  msgs.push(msg);
  fs.writeFileSync(file, JSON.stringify(msgs, null, 2));
}
