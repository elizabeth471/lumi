"use client";

import { useEffect, useState } from "react";
import View from "@/components/view";

interface Expense {
  label: string;
  category: string;
  amount: number | null;
  note?: string;
}
interface Project {
  id: string;
  name: string;
  expenses: Expense[];
}
interface CostsData {
  currency: string;
  note?: string;
  projects: Project[];
}

const fmt = (n: number, cur: string) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: cur || "USD", maximumFractionDigits: 2 }).format(n);

const catTag: Record<string, string> = {
  hardware: "tag",
  subscription: "tag amber",
  tokens: "tag green",
  other: "tag",
};

function known(exps: Expense[]): number {
  return exps.reduce((s, e) => s + (typeof e.amount === "number" ? e.amount : 0), 0);
}
function pending(exps: Expense[]): number {
  return exps.filter((e) => e.amount === null).length;
}

export default function CostsPage() {
  const [data, setData] = useState<CostsData | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ currency: "USD", projects: [] }));
  }, []);

  if (!data) {
    return (
      <View>
        <div style={{ color: "var(--text-mid)", fontSize: 13 }}>Loading running costs…</div>
      </View>
    );
  }

  const cur = data.currency || "USD";
  const allExpenses = data.projects.flatMap((p) => p.expenses);
  const grandKnown = known(allExpenses);
  const grandPending = pending(allExpenses);

  return (
    <View>
      {/* At-a-glance summary */}
      <div className="brief-card" style={{ background: "var(--white)", borderColor: "var(--border)" }}>
        <h2 className="card-label" style={{ marginBottom: 8 }}>Total Invested — at a glance</h2>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 30, fontWeight: 700, color: "var(--text)" }}>{fmt(grandKnown, cur)}</div>
          {grandPending > 0 && (
            <div style={{ fontSize: 12, color: "var(--amber)" }}>
              + {grandPending} expense{grandPending === 1 ? "" : "s"} pending an amount
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 12, flexWrap: "wrap" }}>
          {data.projects.map((p) => (
            <div key={p.id} style={{ fontSize: 12, color: "var(--text-mid)" }}>
              <strong style={{ color: "var(--text)" }}>{p.name}:</strong> {fmt(known(p.expenses), cur)}
              {pending(p.expenses) > 0 ? ` (+${pending(p.expenses)} pending)` : ""}
            </div>
          ))}
        </div>
        {data.note && (
          <div style={{ fontSize: 11, color: "var(--text-lt)", marginTop: 12, lineHeight: 1.6 }}>{data.note}</div>
        )}
      </div>

      {/* Per-project breakdown */}
      {data.projects.map((p) => (
        <div className="widget" key={p.id} style={{ marginTop: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
            <h2 className="widget-title" style={{ marginBottom: 0 }}>{p.name}</h2>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{fmt(known(p.expenses), cur)}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {p.expenses.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 0",
                  borderBottom: i < p.expenses.length - 1 ? "1px solid var(--sand)" : "none",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "var(--text)", fontWeight: 500 }}>{e.label}</div>
                  {e.note && <div style={{ fontSize: 11, color: "var(--text-lt)", marginTop: 2 }}>{e.note}</div>}
                </div>
                <span className={catTag[e.category] || "tag"}>{e.category}</span>
                <div
                  style={{
                    minWidth: 90,
                    textAlign: "right",
                    fontSize: 13,
                    fontWeight: 600,
                    color: e.amount === null ? "var(--amber)" : "var(--text)",
                  }}
                >
                  {e.amount === null ? "— pending" : fmt(e.amount, cur)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ fontSize: 11, color: "var(--text-lt)", marginTop: 16, lineHeight: 1.7 }}>
        Edit amounts in <code style={{ background: "var(--sand)", padding: "1px 5px", borderRadius: 3 }}>data/costs.json</code> — totals update on reload. Tracks subscriptions, tokens, hardware, and any expense.
      </div>
    </View>
  );
}
