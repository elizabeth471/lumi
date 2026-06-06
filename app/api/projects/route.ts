import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const FILE = () => path.join(process.cwd(), "data", "projects.json");

function read() {
  try {
    return JSON.parse(fs.readFileSync(FILE(), "utf8"));
  } catch {
    return { currency: "USD", note: "", projects: [] };
  }
}

// GET — the projects list + their costs (single source of truth).
export async function GET() {
  return NextResponse.json(read());
}

// POST — create a new project: { name }.
export async function POST(req: Request) {
  let name = "";
  try {
    name = String((await req.json())?.name || "").trim();
  } catch {
    return new Response("Invalid body", { status: 400 });
  }
  if (!name) return new Response("Project name required", { status: 400 });

  const data = read();
  const id = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!id) return new Response("Invalid name", { status: 400 });
  if (data.projects.some((p: { id: string }) => p.id === id)) {
    return new Response("A project with that name already exists", { status: 409 });
  }

  data.projects.push({ id, name, priority: false, status: "active", expenses: [] });
  fs.writeFileSync(FILE(), JSON.stringify(data, null, 2));
  return NextResponse.json({ ok: true, id });
}
