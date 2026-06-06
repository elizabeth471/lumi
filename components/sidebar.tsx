"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BlossomCharacter from "@/components/blossom-character";

const NAV = [
  { id: "today", icon: "🌅", label: "Today" },
  { id: "threads", icon: "🧵", label: "Threads", badge: "4", badgeLabel: "4 active threads" },
  { id: "decisions", icon: "⚖️", label: "Decisions", badge: "3", badgeLabel: "3 pending decisions" },
  { id: "agents", icon: "🌿", label: "Agents" },
  { id: "files", icon: "📁", label: "Files" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="logo">Lumi</div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <BlossomCharacter />
        <div className="char-name">Blossom</div>
        <div className="char-role">Admin Orchestrator</div>
      </div>

      <div className="status-pill">
        <div className="s-dot" />
        Active · Phase 0
      </div>

      <nav className="nav" style={{ width: "100%" }} aria-label="Main navigation">
        {NAV.map((n) => {
          const active = pathname === "/" + n.id;
          return (
            <Link
              key={n.id}
              href={"/" + n.id}
              className={`nav-item${active ? " active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <div className="nav-icon" aria-hidden="true">
                {n.icon}
              </div>
              {n.label}
              {n.badge ? (
                <span className="nav-badge" aria-label={n.badgeLabel}>
                  {n.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-sep" />
      <div className="sidebar-footer">
        Phase 0 · Idea Validation
        <br />
        for every bloom.
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 4, fontSize: 10, color: "#5a4028" }}>
          <div>
            <span style={{ color: "#7a5a30" }}>⌘K</span> — command palette
          </div>
          <div>
            <span style={{ color: "#7a5a30" }}>1–5</span> — navigate views
          </div>
          <div>
            <span style={{ color: "#7a5a30" }}>↵</span> — send message
          </div>
        </div>
      </div>
    </aside>
  );
}
