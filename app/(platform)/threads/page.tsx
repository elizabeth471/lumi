"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import View from "@/components/view";

interface Thread {
  title: string;
  status: string;
  statusClass: string;
  body: string;
  tags: string[];
  agent: string;
  time: string;
  pinned?: boolean;
  dim?: boolean;
}

const THREADS: Thread[] = [
  {
    title: "Brand Naming — James & Alexander Derivations",
    status: "Waiting · Founder",
    statusClass: "st-waiting",
    body: "Jelex (J+Alex) is the cleanest candidate — both stores clear, no trademark found in Classes 9/41. JELU eliminated due to JELU-WERK conflict. Phonetic Spanish check outstanding. 90+ names reviewed this session.",
    tags: ["Naming", "Trademark"],
    agent: "🌿 Sage · Reed",
    time: "Active now",
    pinned: true,
  },
  {
    title: "James & Alexander — Junior Advisory Board",
    status: "Waiting · Founder",
    statusClass: "st-waiting",
    body: "Research complete. Unpaid involvement as informal advisors = zero legal complexity. Compensation through the C-Corp requires payroll setup. Founder decision needed: compensate or informal only?",
    tags: ["Legal", "Strategy"],
    agent: "🌿 Sage",
    time: "Completed this session",
  },
  {
    title: "New Mac Setup — Blossom on Device",
    status: "Queued",
    statusClass: "st-queued",
    body: "Full setup checklist ready: Homebrew → Node → Claude Code → Git → clone lumi repo. Estimated 30–45 min. Waiting for Mac to arrive.",
    tags: ["Infrastructure"],
    agent: "Blossom direct",
    time: "Today",
  },
  {
    title: "Blossom UI Platform Design",
    status: "Active",
    statusClass: "st-active",
    body: "HTML/CSS prototype in progress. Cactus character with full animation suite. Multi-view platform (Today, Threads, Decisions, Agents, Files). Grove consulted on visual direction.",
    tags: ["UI", "Design"],
    agent: "🌳 Grove",
    time: "Active now",
  },
  {
    title: "Entity Formation — Delaware C-Corp",
    status: "Blocked",
    statusClass: "st-blocked",
    body: "Blocked on: final brand name (needed for entity name). Once name is confirmed: Stripe Atlas → Oregon foreign reg → Mercury → Google Workspace → API account.",
    tags: ["Formation", "Legal"],
    agent: "🪨 Moss · Sage",
    time: "Blocked",
    dim: true,
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "waiting", label: "Waiting" },
  { key: "blocked", label: "Blocked" },
];

export default function ThreadsPage() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    return THREADS.filter((t) => {
      const matchesQ =
        !q ||
        (t.title + " " + t.body + " " + t.tags.join(" ") + " " + t.status)
          .toLowerCase()
          .includes(q.toLowerCase());
      const s = t.status.toLowerCase();
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && s.includes("active")) ||
        (filter === "waiting" && s.includes("waiting")) ||
        (filter === "blocked" && s.includes("blocked"));
      return matchesQ && matchesFilter;
    });
  }, [q, filter]);

  return (
    <View>
      <div className="threads-toolbar">
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Search threads…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            autoComplete="off"
          />
        </div>
        {FILTERS.map((f) => (
          <div
            key={f.key}
            className={`filter-chip${filter === f.key ? " active" : ""}`}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </div>
        ))}
      </div>

      <div className="threads-grid">
        {visible.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🧵</div>
            <div className="empty-state-title">No threads match</div>
            <div className="empty-state-body">Try a different search term or filter.</div>
          </div>
        ) : (
          visible.map((t) => (
            <div
              key={t.title}
              className={`thread-card${t.pinned ? " pinned" : ""}`}
              style={t.dim ? { opacity: 0.6 } : undefined}
              onClick={() => router.push("/today")}
            >
              <div className="tc-top">
                <div className="tc-title">{t.title}</div>
                <div className={`tc-status ${t.statusClass}`}>{t.status}</div>
              </div>
              <div className="tc-body">{t.body}</div>
              <div className="tc-footer">
                {t.tags.map((tag) => (
                  <span className="tc-tag" key={tag}>
                    {tag}
                  </span>
                ))}
                <div className="tc-agent">{t.agent}</div>
                <div className="tc-time">{t.time}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </View>
  );
}
