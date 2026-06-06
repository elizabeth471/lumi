"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { usePlatform } from "@/components/platform-provider";

interface CmdItem {
  icon: string;
  label: string;
  hint: string;
  action: () => void;
}

export default function CommandPalette() {
  const { cmdOpen, closeCmd, toast, consultAgent } = usePlatform();
  const router = useRouter();
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items: CmdItem[] = [
    { icon: "🌅", label: "Go to Today", hint: "View 1", action: () => router.push("/today") },
    { icon: "🧵", label: "Go to Threads", hint: "View 2", action: () => router.push("/threads") },
    { icon: "⚖️", label: "Go to Decisions", hint: "View 3", action: () => router.push("/decisions") },
    { icon: "🌿", label: "Go to Agents", hint: "View 4", action: () => router.push("/agents") },
    { icon: "📁", label: "Go to Files", hint: "View 5", action: () => router.push("/files") },
    {
      icon: "🌵",
      label: "Proceed with Jelex",
      hint: "Brand naming",
      action: () => toast("Decision logged", "Jelex selected as brand name. Moving to attorney trademark search.", "✅"),
    },
    {
      icon: "🌵",
      label: "Start Session Wrap",
      hint: "Close today",
      action: () => toast("Session Wrap", "Preparing end-of-session summary. All open items will be logged.", "📋"),
    },
    {
      icon: "🧵",
      label: "New Thread",
      hint: "Create",
      action: () => {
        router.push("/today");
        toast("New Thread", "Type your task in the chat to start a new thread.", "🧵");
      },
    },
    { icon: "🌿", label: "Consult Sage", hint: "Research", action: () => consultAgent("Sage", "Running market context scan…") },
    { icon: "🌿", label: "Consult Reed", hint: "Writing", action: () => consultAgent("Reed", "Preparing draft…") },
    { icon: "🪨", label: "Consult Moss", hint: "Finance", action: () => consultAgent("Moss", "Reviewing financials…") },
  ];

  const filtered = q
    ? items.filter(
        (it) =>
          it.label.toLowerCase().includes(q.toLowerCase()) ||
          it.hint.toLowerCase().includes(q.toLowerCase())
      )
    : items;

  useEffect(() => {
    if (cmdOpen) {
      setQ("");
      setSel(0);
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [cmdOpen]);

  const run = (it: CmdItem | undefined) => {
    if (!it) return;
    closeCmd();
    it.action();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      run(filtered[sel]);
    } else if (e.key === "Escape") {
      closeCmd();
    }
  };

  return (
    <div
      className={`cmd-backdrop${cmdOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCmd();
      }}
    >
      <div className="cmd-palette" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-search-row">
          <span className="cmd-icon">⌘</span>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Search views, agents, actions…"
            aria-label="Search views, agents, and actions"
            role="combobox"
            aria-expanded={cmdOpen}
            aria-controls="cmd-results"
            aria-autocomplete="list"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setSel(0);
            }}
            onKeyDown={onKey}
            autoComplete="off"
          />
          <span className="cmd-kbd">ESC</span>
        </div>
        <div className="cmd-results" id="cmd-results" role="listbox" aria-label="Command results">
          {filtered.length === 0 ? (
            <div style={{ padding: 24, textAlign: "center", color: "var(--text-mid)", fontSize: 13 }}>
              No commands found
            </div>
          ) : (
            <>
              <div className="cmd-section-label">Actions</div>
              {filtered.map((it, i) => (
                <div
                  key={it.label}
                  className={`cmd-item${i === sel ? " selected" : ""}`}
                  role="option"
                  aria-selected={i === sel}
                  onClick={() => run(it)}
                  onMouseEnter={() => setSel(i)}
                >
                  <div className="cmd-item-icon">{it.icon}</div>
                  <div className="cmd-item-label">{it.label}</div>
                  <div className="cmd-item-hint">{it.hint}</div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="cmd-footer">
          <span>
            <kbd>↑↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> select
          </span>
          <span>
            <kbd>ESC</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
