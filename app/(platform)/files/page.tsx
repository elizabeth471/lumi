"use client";

import { useState } from "react";
import View from "@/components/view";

interface FileEntry {
  id: string;
  name: string;
  meta: string;
  content: string;
  icon: string;
  indent?: boolean;
}

const FILES: FileEntry[] = [
  {
    id: "admin",
    name: "admin-assistant.md",
    meta: "agents/ · Last modified: June 5, 2026 · Branch: claude/laughing-allen-4aMzt",
    icon: "📄",
    indent: true,
    content: `# Lumi Admin Assistant — Agent Profile

## Project Context — Lumi World

What Lumi is: A children's screen time product designed to give
kids safe, enriching digital interaction.

The mission: Give parents a trustworthy alternative to
smartphones for school-age children.

Current stage: Phase 0 — idea validation.

## Identity

You are Blossom, the administrative orchestrator agent
for the Lumi project. You coordinate a team of specialist
sub-agents, manage information flow, prepare recommendations,
and ensure nothing falls through the cracks — but you never
act unilaterally on consequential decisions.

## Agent Roster

Phase 0 (always active):
  Sage    — Research & Strategy
  Reed    — Writing & Communications
  Moss    — Finance & Modeling

Phase 1 (on-demand):
  Willow  — Child Safety / COPPA
  Grove   — Visual Development
  Meadow  — Customer Voice

Phase 2 (dormant):
  Clover  — Child Development SME
  Fern    — Neurodivergent Accessibility
  Briar   — SEL & Emotional Safety
  Thistle — Bilingual & Cultural

[... full profile in repository ...]`,
  },
  {
    id: "blossom",
    name: "blossom-platform.html",
    meta: "/ · Last modified: June 5, 2026",
    icon: "🌵",
    indent: true,
    content: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Blossom — Lumi OS</title>
  <!-- Full multi-view platform UI -->
  <!-- Designed by: Blossom + Grove -->
  <!-- Cactus character, desert palette -->
  <!-- Views: Today · Threads · Decisions -->
  <!--         Agents · Files -->
</head>
...`,
  },
  {
    id: "readme",
    name: "README.md",
    meta: "/ · Last modified: June 5, 2026",
    icon: "📄",
    content: `# Lumi

Children's screen time product — Phase 0.
Pre-product. Pre-team. Pre-funding.

## Agent Team

Blossom (orchestrator) coordinates:
- Sage, Reed, Moss (Phase 0 active)
- Willow, Grove, Meadow (Phase 1)
- Clover, Fern, Briar, Thistle (Phase 2)

## Branch

claude/laughing-allen-4aMzt`,
  },
];

export default function FilesPage() {
  const [selected, setSelected] = useState("admin");
  const file = FILES.find((f) => f.id === selected) || FILES[0];

  return (
    <View>
      <div className="files-layout" style={{ flex: 1 }}>
        <div className="file-tree">
          <div className="tree-label">lumi / repo</div>
          <div className="tree-item folder">
            <span className="tree-icon">📁</span> agents
          </div>
          {FILES.map((f) => (
            <div
              key={f.id}
              className={`tree-item${f.indent ? " tree-indent" : ""}${selected === f.id ? " active" : ""}`}
              onClick={() => setSelected(f.id)}
            >
              <span className="tree-icon">{f.icon}</span> {f.name}
            </div>
          ))}
        </div>
        <div className="file-preview">
          <div className="fp-name">{file.name}</div>
          <div className="fp-meta">{file.meta}</div>
          <div className="fp-content">{file.content}</div>
        </div>
      </div>
    </View>
  );
}
