"use client";

import View from "@/components/view";
import { usePlatform } from "@/components/platform-provider";

export default function DecisionsPage() {
  const { toast } = usePlatform();
  return (
    <View>
      <div className="decisions-layout">
        <div className="dec-col">
          <div className="dec-col-header">🔴 Founder Decision Required</div>

          <div className="dec-card urgent">
            <div className="dc-title">Confirm brand name — Jelex</div>
            <div className="dc-body">
              Jelex has cleared app stores, domain ($11–12/yr available), and trademark Classes 9/41. One outstanding
              item: Spanish pronunciation test (could read as 3 syllables). If you approve, next step is $300–500
              attorney trademark clearance search before entity filing.
            </div>
            <div className="dc-footer">
              <span className="dc-tag">Naming</span>
              <span className="dc-tag">Tier 2</span>
            </div>
            <div className="dc-actions">
              <button
                className="btn primary"
                onClick={() =>
                  toast("Decision logged ✓", "Jelex confirmed. Next: attorney trademark clearance ($300–500). Blossom will queue this.", "✅")
                }
              >
                Proceed with Jelex
              </button>
              <button
                className="btn"
                onClick={() => toast("Back to search", "Noted. I'll flag Jelex as a candidate and continue scanning.", "🌵")}
              >
                Keep searching
              </button>
            </div>
          </div>

          <div className="dec-card high">
            <div className="dc-title">James &amp; Alexander — compensate or informal?</div>
            <div className="dc-body">
              Both options are legally clean. Informal = no paperwork, no tax complexity, still meaningful. Compensated
              = valid work, proper payroll through C-Corp (FICA applies), requires accountant setup. At Phase 0,
              informal is simpler and equally powerful for ownership feeling.
            </div>
            <div className="dc-footer">
              <span className="dc-tag">People</span>
              <span className="dc-tag">Tier 3</span>
            </div>
            <div className="dc-actions">
              <button
                className="btn primary"
                onClick={() => toast("Decision logged ✓", "Informal advisory arrangement confirmed. No paperwork needed at this stage.", "✅")}
              >
                Informal for now
              </button>
              <button
                className="btn"
                onClick={() => toast("Compensation track", "Flagged for accountant setup after entity formation.", "📋")}
              >
                Set up compensation
              </button>
            </div>
          </div>
        </div>

        <div className="dec-col">
          <div className="dec-col-header">🟡 Queued — Waiting on Prior Decision</div>

          <div className="dec-card">
            <div className="dc-title">Register domain</div>
            <div className="dc-body">
              hellojélex.com or meetjelex.com — both likely available at standard pricing. Waiting on brand name
              confirmation before purchasing.
            </div>
            <div className="dc-footer">
              <span className="dc-tag">Infrastructure</span>
              <div className="spacer" />
              <span className="dep-badge">⛓ Blocked by: name decision</span>
            </div>
          </div>

          <div className="dec-card">
            <div className="dc-title">File Delaware C-Corp via Stripe Atlas</div>
            <div className="dc-body">
              ~$500. Requires confirmed entity name (= brand name). Triggers Oregon foreign registration (~$275),
              Mercury bank, and EIN. Full formation sequence is ready to run once name is locked.
            </div>
            <div className="dc-footer">
              <span className="dc-tag">Formation</span>
              <div className="spacer" />
              <span className="dep-badge">⛓ Blocked by: name + domain</span>
            </div>
          </div>

          <div className="dec-card">
            <div className="dc-title">Blossom UI — build real version</div>
            <div className="dc-body">
              The HTML mockup is a prototype. A real connected version (Claude API + React frontend) can be built in
              1–2 days by a developer. Requires: business card for API billing. Waiting on entity formation.
            </div>
            <div className="dc-footer">
              <span className="dc-tag">UI</span>
              <span className="dc-tag">Wishlist #5</span>
              <div className="spacer" />
              <span className="dep-badge">⛓ Blocked by: entity + API account</span>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
