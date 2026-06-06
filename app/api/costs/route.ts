import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

// Returns the running investment data so the Costs view can edit-and-reload
// without a rebuild (just edit data/costs.json).
export async function GET() {
  try {
    const p = path.join(process.cwd(), "data", "costs.json");
    return NextResponse.json(JSON.parse(fs.readFileSync(p, "utf8")));
  } catch {
    return NextResponse.json({ currency: "USD", projects: [], note: "" });
  }
}
