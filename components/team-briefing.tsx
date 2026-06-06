"use client";

import { useState } from "react";

interface Agent {
  name: string;
  role: string;
  model: string;
  note: string;
  dot: string; // background color for the status dot
  status: string;
}

const ACTIVE: Agent[] = [
  { name: "Sage", role: "Research & Strategy", model: "haiku-4-5 ↑ sonnet-4-6", note: "Market research, competitive intel, validation support.", dot: "var(--green-dot)", status: "Active" },
  { name: "Reed", role: "Writing & Comms", model: "sonnet-4-6 · never haiku", note: "All drafts, outreach, brand voice, documents.", dot: "var(--green-dot)", status: "Active" },
  { name: "Moss", role: "Finance & Modeling", model: "sonnet-4-6 ↑ opus-4-8", note: "Runway, budget, funding research. Never tax advice.", dot: "var(--green-dot)", status: "Active" },
];

const ONDEMAND: Agent[] = [
  { name: "Willow", role: "Child Safety / COPPA", model: "sonnet-4-6 ↑ opus-4-8", note: "Compliance prep. Consult before any data decision.", dot: "var(--text-lt)", status: "Idle" },
  { name: "Grove", role: "Visual Development", model: "haiku-4-5 ↑ sonnet-4-6", note: "Style direction, visual briefs. Pre-Lead-Artist.", dot: "var(--text-lt)", status: "Idle" },
  { name: "Meadow", role: "Customer Voice", model: "sonnet-4-6", note: "Parent + child voice pre-filter. Not real research.", dot: "var(--text-lt)", status: "Idle" },
];

const DORMANT: Agent[] = [
  { name: "Clover", role: "Child Development SME", model: "sonnet-4-6 ↑ opus-4-8", note: "Developmental alignment of activities.", dot: "var(--sand-dark)", status: "Dormant" },
  { name: "Fern", role: "Neurodivergent Accessibility", model: "haiku-4-5 ↑ sonnet-4-6", note: "ADHD, ASC, dyslexia, dyscalculia, SPD review.", dot: "var(--sand-dark)", status: "Dormant" },
  { name: "Briar", role: "SEL & Emotional Safety", model: "sonnet-4-6 ↑ opus-4-8", note: "CASEL mapping, dark-pattern detection.", dot: "var(--sand-dark)", status: "Dormant" },
  { name: "Thistle", role: "Bilingual & Cultural", model: "haiku-4-5 ↑ sonnet-4-6", note: "Validity across 5 target languages.", dot: "var(--sand-dark)", status: "Dormant" },
];

function Group({ label, agents }: { label: string; agents: Agent[] }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-mid)", fontWeight: 600, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 8 }}>
        {agents.map((a) => (
          <div
            key={a.name}
            style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--r-sm)", padding: "10px 12px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dot, flexShrink: 0 }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{a.name}</span>
              <span style={{ fontSize: 11, color: "var(--text-lt)" }}>· {a.role}</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--text-mid)", lineHeight: 1.5, margin: "4px 0" }}>{a.note}</div>
            <div style={{ fontSize: 10, color: "var(--text-lt)", background: "var(--sand)", display: "inline-block", padding: "2px 7px", borderRadius: 4 }}>
              {a.model}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TeamBriefing() {
  const [open, setOpen] = useState(true);

  return (
    <div className="brief-card" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div className="card-label" style={{ marginBottom: 0 }}>Blossom &amp; Team — Founder Briefing</div>
        <button
          onClick={() => setOpen((o) => !o)}
          style={{ background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "3px 10px", fontSize: 11, color: "var(--text-mid)", cursor: "pointer", fontFamily: "inherit" }}
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: 12 }}>
          {/* BLOSSOM */}
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 14 }}>
            <div style={{ fontSize: 22, lineHeight: 1 }}>🌵</div>
            <div className="card-body" style={{ flex: 1 }}>
              <strong>Blossom — Admin Orchestrator</strong> (claude-sonnet-4-6 ↑ claude-opus-4-8). Your primary
              interface and the only agent who talks to you directly. She runs the morning brief and session wrap,
              maintains the threads / decisions / backlog, prepares recommendations, and coordinates the specialists
              below. She operates under <strong>Decision Tiers</strong> (Tier 1 she executes, Tier 2 she recommends,
              Tier 3 is yours alone), <strong>Hard Limits</strong> (never moves money, signs legal docs, makes people
              decisions, or contacts outsiders without your sign-off), and a <strong>Self-Update Protocol</strong> that
              lets her refine her own and the team&apos;s files sustainably. Her standing purpose is to learn — project
              over project — how to build a company and orchestrate a team, getting more efficient each time. She
              reports to <strong>Ian</strong>, who has final authority over every plan.
            </div>
          </div>

          <Group label="Active — Phase 0" agents={ACTIVE} />
          <Group label="On-Demand — Phase 1" agents={ONDEMAND} />
          <Group label="Dormant — Phase 2" agents={DORMANT} />

          {/* HOW THEY WORK + LIMITS */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 4 }}>
            <div style={{ background: "var(--sand)", borderRadius: "var(--r-sm)", padding: "12px 14px" }}>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-mid)", fontWeight: 600, marginBottom: 6 }}>
                How the team works
              </div>
              <div style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.6 }}>
                Route everything through Blossom — sub-agents never contact you directly. She briefs them, reviews their
                output, and synthesizes. Caveat: all agents share one base model, so consulting them is a useful check,
                not independent validation. Human expert review stays the standard for consequential calls.
              </div>
            </div>
            <div style={{ background: "var(--amber-pale)", borderRadius: "var(--r-sm)", padding: "12px 14px" }}>
              <div style={{ fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--amber)", fontWeight: 600, marginBottom: 6 }}>
                Know her limits
              </div>
              <div style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.6 }}>
                She can be confidently wrong, has no memory beyond what&apos;s stored, and is barred from money / legal /
                people / external actions by design. She prepares for human experts — she isn&apos;t one. Requires real
                oversight, not rubber-stamping.
              </div>
            </div>
          </div>

          <div style={{ fontSize: 11, color: "var(--text-lt)", marginTop: 12, lineHeight: 1.6 }}>
            Platform status — Phase 0 · Blossom OS Week 1: static views live locally · Week 2: live Claude API · Week 3:
            persistent memory. Prepared by Blossom for Ian · June 2026.
          </div>
        </div>
      )}
    </div>
  );
}
