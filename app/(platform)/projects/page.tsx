"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import View from "@/components/view";
import { usePlatform } from "@/components/platform-provider";

interface Project {
  id: string;
  name: string;
  priority?: boolean;
  status?: string;
  expenses?: { amount: number | null }[];
}

export default function ProjectsPage() {
  const { toast } = usePlatform();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  const load = () =>
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjects(d.projects || []))
      .catch(() => setProjects([]));

  useEffect(() => {
    load();
  }, []);

  const create = async () => {
    const n = name.trim();
    if (!n || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: n }),
      });
      if (!res.ok) {
        toast("Couldn't create project", await res.text().catch(() => ""), "🌵");
      } else {
        setName("");
        await load();
        toast("Project created", `"${n}" added.`, "✅");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <View>
      {/* Create */}
      <div className="brief-card" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
        <h2 className="card-label" style={{ marginBottom: 8 }}>New Project</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            className="search-input"
            style={{ paddingLeft: 12 }}
            placeholder="Project name…"
            aria-label="New project name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") create();
            }}
          />
          <button className="btn primary" onClick={create} disabled={busy}>
            {busy ? "Adding…" : "Add project"}
          </button>
        </div>
      </div>

      {/* List */}
      <div className="threads-grid" style={{ marginTop: 16 }}>
        {projects === null ? (
          <div style={{ color: "var(--text-mid)", fontSize: 13 }}>Loading projects…</div>
        ) : (
          projects.map((p) => (
            <div
              key={p.id}
              className={`thread-card${p.priority ? " pinned" : ""}`}
              onClick={() => router.push("/costs")}
            >
              <div className="tc-top">
                <div className="tc-title">{p.name}</div>
                {p.priority ? <div className="tc-status st-active">Priority</div> : null}
              </div>
              <div className="tc-footer">
                <span className="tc-tag">{p.status || "active"}</span>
                {typeof p.expenses?.length === "number" && (
                  <span className="tc-tag">
                    {p.expenses.length} expense{p.expenses.length === 1 ? "" : "s"}
                  </span>
                )}
                <div className="tc-time">View costs →</div>
              </div>
            </div>
          ))
        )}
      </div>
    </View>
  );
}
