"use client";

import { usePathname } from "next/navigation";
import { usePlatform } from "@/components/platform-provider";

const META: Record<string, { title: string; sub: string }> = {
  today: { title: "Today", sub: "Thursday, June 5 · Morning Brief ready" },
  threads: { title: "Threads", sub: "4 active · 1 blocked" },
  decisions: { title: "Decisions", sub: "2 need founder input · 3 queued" },
  agents: { title: "Agent Roster", sub: "10 agents · 3 active · 3 on-demand · 4 dormant" },
  files: { title: "Files", sub: "lumi / repo · branch: claude/laughing-allen-4aMzt" },
};

export default function Topbar() {
  const pathname = usePathname();
  const key = pathname.replace("/", "") || "today";
  const meta = META[key] || META.today;
  const { openCmd, toast, user, logout } = usePlatform();

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="view-title">{meta.title}</div>
        <div className="breadcrumb">{meta.sub}</div>
      </div>
      <div className="topbar-right">
        <div className="phase-badge">Phase 0</div>
        <div className="kbd-hint tip" data-tip="Open command palette" onClick={openCmd}>
          <kbd>⌘K</kbd>
        </div>
        <div
          className="tb-chip"
          onClick={() =>
            toast("Session Wrap", "Preparing end-of-session summary. All open items will be logged.", "📋")
          }
        >
          Session Wrap
        </div>
        <div
          className="tb-chip primary"
          onClick={() =>
            toast("New Task", "Type your task in the chat below, or press ⌘K to search commands.", "🌵")
          }
        >
          + New Task
        </div>
        <div className="user-badge" onClick={logout}>
          <div className="user-av">{user?.avatar}</div>
          <div className="user-name">{user?.name}</div>
        </div>
      </div>
    </div>
  );
}
