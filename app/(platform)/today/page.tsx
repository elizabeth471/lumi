"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import View from "@/components/view";
import { usePlatform } from "@/components/platform-provider";

interface Msg {
  id: number;
  role: "user" | "blossom";
  text: string;
  time: string;
}

const SEED: Msg[] = [
  {
    id: 1,
    role: "blossom",
    text: "Good morning. Jelex domain check is complete — App Store and Google Play are clean, no trademark in Classes 9 or 41. The only remaining risk is phonetic in Spanish. I'd recommend a quick pronunciation test with a native speaker before committing. Want me to move forward with the attorney trademark search, or hold?",
    time: "Blossom · 9:14 am",
  },
  {
    id: 2,
    role: "blossom",
    text: "Also: I've drafted the James & Alexander advisory framework. Short version — unpaid involvement as a Junior Advisory Board has zero legal complexity at their ages. Compensation through the C-Corp is possible but requires proper payroll setup. Full brief is in the Decisions queue.",
    time: "Blossom · 9:15 am",
  },
];

const CONSULTS = [
  { name: "Sage", msg: "Let me run a quick scan on that." },
  { name: "Reed", msg: "I can draft that for you." },
  { name: "Moss", msg: "Checking the numbers on that." },
];

const REPLIES = [
  "Logged. I'll get to that — let me finish what's in front of me first.",
  "On it. Give me a moment to think through the implications.",
  "Captured. That's queued as a new thread. Anything else before I start?",
  "Got it. That touches the formation sequence — I'll flag the dependencies.",
  "Noted. I'd want Sage to weigh in on this before I give you a recommendation.",
  "That's a good one to sit with. I've added it to the open questions log.",
  "Understood. I'll surface this at the next decision point.",
];

const CHECKLIST_SEED = [
  { label: "Stakeholder materials package", done: true },
  { label: "Agent team configured", done: true },
  { label: "Final brand name selected", done: false },
  { label: "Delaware C-Corp via Stripe Atlas", done: false },
  { label: "Oregon foreign registration", done: false },
  { label: "Mercury bank account", done: false },
  { label: "Google Workspace + domain", done: false },
  { label: "Anthropic API account", done: false },
];

export default function TodayPage() {
  const router = useRouter();
  const { user, toast, setThinking, consulting, setConsulting } = usePlatform();
  const [messages, setMessages] = useState<Msg[]>(SEED);
  const [thinkingLabel, setThinkingLabel] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [checklist, setChecklist] = useState(CHECKLIST_SEED);
  const boxRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(100);

  const isCofounder = user?.role === "cofounder";

  const scroll = () => {
    requestAnimationFrame(() => {
      if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
    });
  };

  const send = (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const um: Msg = { id: ++nextId.current, role: "user", text, time: "Just now" };
    setMessages((m) => [...m, um]);
    setInput("");
    setThinking(true);
    scroll();

    let label = "Blossom · thinking…";
    if (Math.random() > 0.5) {
      const c = CONSULTS[Math.floor(Math.random() * CONSULTS.length)];
      setConsulting({ visible: true, text: `Consulting ${c.name} — ${c.msg}` });
      label = `Blossom · consulting ${c.name}…`;
    }
    setThinkingLabel(label);

    setTimeout(() => {
      setThinking(false);
      setConsulting({ visible: false, text: "" });
      setThinkingLabel(null);
      const rm: Msg = {
        id: ++nextId.current,
        role: "blossom",
        text: REPLIES[Math.floor(Math.random() * REPLIES.length)],
        time: "Blossom · Just now",
      };
      setMessages((m) => [...m, rm]);
      scroll();
    }, 1800);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const toggleCheck = (i: number) => {
    setChecklist((cl) => {
      const next = cl.map((c, j) => (j === i ? { ...c, done: !c.done } : c));
      if (next[i].done) toast("Checked off", next[i].label, "✅", 2500);
      return next;
    });
  };

  return (
    <View>
      <div className="today-layout" style={{ flex: 1 }}>
        {/* CHAT COL */}
        <div className="chat-col">
          <div className="brief-card">
            <div className="card-label">Morning Brief — June 5</div>
            <div className="card-body">
              {isCofounder
                ? "First login detected. Full onboarding briefing is ready — it covers Lumi, your role, the agent team, and your first deliverable."
                : "Four active threads. Naming search (Jelex is cleanest candidate), James & Alexander advisory structure, new Mac setup, and Blossom UI design. No time-sensitive deadlines today."}
            </div>
            <div className="brief-qs">
              {(isCofounder
                ? [
                    "Answer four profile questions in chat so I can brief the founder before you meet.",
                    "Read docs/platform-technical-brief.md before your first working session.",
                  ]
                : [
                    "Continue Jelex trademark check, or hold naming until entity is formed?",
                    "New Mac arriving — run setup checklist when ready.",
                  ]
              ).map((q, i) => (
                <div className="brief-q" key={i}>
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className={`consulting-bar${consulting.visible ? " visible" : ""}`}>
            <div className="consulting-dots">
              <span />
              <span />
              <span />
            </div>
            <span>{consulting.text || "Consulting…"}</span>
          </div>

          <div className="chat-box" ref={boxRef}>
            {messages.map((m) => (
              <div className={`msg${m.role === "user" ? " user" : ""}`} key={m.id}>
                <div className="msg-av">{m.role === "user" ? "👤" : "🌵"}</div>
                <div>
                  <div className="msg-bubble">{m.text}</div>
                  <div className="msg-time">{m.time}</div>
                </div>
              </div>
            ))}
            {thinkingLabel && (
              <div className="msg">
                <div className="msg-av">🌵</div>
                <div>
                  <div className="thinking-bub">
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                  </div>
                  <div className="msg-time">{thinkingLabel}</div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-row">
            <textarea
              className="chat-input"
              placeholder="Talk to Blossom…"
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
            />
            <button className="send-btn" onClick={() => send()}>
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* SIDE COL */}
        <div className="side-col">
          <div className="widget">
            <div className="widget-title">Open Decisions</div>
            <div className="open-item" onClick={() => router.push("/decisions")}>
              <div className="oi-label">
                Brand name — Jelex <span className="oi-urgent">Waiting</span>
              </div>
              <div className="oi-meta">Needs: pronunciation test · attorney clearance</div>
            </div>
            <div className="open-item">
              <div className="oi-label">Entity formation</div>
              <div className="oi-meta">Needs: final brand name first</div>
            </div>
            <div className="open-item">
              <div className="oi-label">Kids advisory structure</div>
              <div className="oi-meta">Needs: your call on compensation</div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">Formation Checklist</div>
            <div className="checklist">
              {checklist.map((c, i) => (
                <div className={`cl-item${c.done ? " done" : ""}`} key={i} onClick={() => toggleCheck(i)}>
                  <div className="cl-box">{c.done ? "✓" : ""}</div>
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          <div className="widget">
            <div className="widget-title">Quick Asks</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "What's the one thing I should do today?",
                "Summarize where we are on Jelex",
                "What's blocking formation?",
                "Show me the full budget breakdown",
              ].map((q) => (
                <div className="brief-q" style={{ cursor: "pointer" }} key={q} onClick={() => send(q)}>
                  {q}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
