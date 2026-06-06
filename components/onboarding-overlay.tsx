"use client";

import { usePlatform } from "@/components/platform-provider";

export default function OnboardingOverlay() {
  const { onboardingOpen, setOnboardingOpen, toast } = usePlatform();

  const close = () => {
    setOnboardingOpen(false);
    localStorage.setItem("lumi_onboarded", "1");
    toast("Onboarding complete", "Answer the four profile questions in chat when you're ready.", "⚡", 5000);
  };

  return (
    <div id="onboarding-overlay" className={onboardingOpen ? "visible" : undefined}>
      <div className="onboarding-modal">
        <div className="ob-header">
          <div style={{ fontSize: 22 }}>⚡</div>
          <div className="ob-header-info">
            <div className="ob-title">Welcome to Lumi — Team Briefing</div>
            <div className="ob-sub">Prepared by Blossom · Read before your first conversation</div>
          </div>
          <button className="ob-close" onClick={close}>
            ✕
          </button>
        </div>

        <div className="ob-body">
          <div className="ob-section">
            <div className="ob-label">What Lumi Is</div>
            <div className="ob-text">
              <p>
                A children&apos;s screen time product — safe, enriching digital interaction for kids aged 6–12.
                Supervised video, phone-free community support, multilingual engagement. The mission: give parents a
                trustworthy alternative to smartphones that satisfies social pressure without the risks.
              </p>
              <p>
                The founding insight came from the founder&apos;s own kids, James (11) and Alexander (8), for whom apps
                were originally built just for fun. That personal origin is real and it matters to the founder. Keep it
                in mind.
              </p>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">Current Stage — Phase 0: Idea Validation</div>
            <div className="ob-text">
              <p>
                No product built. No funding raised. The team is Eli and Ian, running everything with an AI agent
                team — equal partners, no hierarchy.
              </p>
              <p>Phase 0 success criteria — what needs to happen before Phase 1:</p>
            </div>
            <div className="ob-list" style={{ marginTop: 10 }}>
              <div className="ob-li">5+ parents say &quot;I would use this and pay for it&quot;</div>
              <div className="ob-li">1+ pediatrician says &quot;I would recommend this&quot;</div>
              <div className="ob-li">1+ phone-free movement leader says &quot;My community would pilot this&quot;</div>
              <div className="ob-li">Entity formed · Brand name confirmed · Domain registered</div>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">Formation Pipeline — Where Things Stand</div>
            <div className="ob-code">
              <span className="dep-pending">[ ] Brand name — Jelex (leading candidate, decision outstanding)</span>
              <br />
              <span className="dep-wait">    ↓ domain registration</span>
              <br />
              <span className="dep-wait">    ↓ attorney trademark clearance ($300–500)</span>
              <br />
              <span className="dep-wait">    ↓ Delaware C-Corp via Stripe Atlas (~$500)</span>
              <br />
              <span className="dep-wait">    ↓ EIN → Mercury bank → Google Workspace</span>
              <br />
              <span className="dep-wait">    ↓ Anthropic API account</span>
              <br />
              <span className="dep-wait">    ↓ Platform build begins ← you start here</span>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">Your First Deliverable</div>
            <div className="ob-text">
              <p>
                Convert the HTML mockup (<code style={{ background: "var(--sand)", padding: "1px 5px", borderRadius: 3 }}>blossom-platform.html</code>)
                into a working Next.js app deployed to Vercel. Static first — no API yet, just real routing and
                components. Full technical spec is in{" "}
                <code style={{ background: "var(--sand)", padding: "1px 5px", borderRadius: 3 }}>docs/platform-technical-brief.md</code>.
              </p>
            </div>
            <div className="ob-list" style={{ marginTop: 10 }}>
              <div className="ob-li">Stack: Next.js · Tailwind · Clerk · Supabase · Anthropic SDK · Vercel</div>
              <div className="ob-li">Week 1: static prototype deployed. Week 2: Claude API live. Week 3: persistent memory.</div>
              <div className="ob-li">First test: deploy the static app in under 4 hours. That&apos;s your signal to the founder.</div>
              <div className="ob-li">This platform is also the architecture blueprint for the Lumi product itself — not throwaway code.</div>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">The Agent Team</div>
            <div className="ob-text">
              <p>
                You&apos;re joining a running operation. Ten AI agents are already configured. Blossom coordinates
                everything — route requests through her. Key ones for you:
              </p>
            </div>
            <div className="ob-list" style={{ marginTop: 10 }}>
              <div className="ob-li">
                <strong>Blossom</strong> — your primary interface. Handles threads, decisions, session memory, morning briefs.
              </div>
              <div className="ob-li">
                <strong>Willow</strong> — Child Safety/COPPA. Consult before any data architecture decision. Non-negotiable.
              </div>
              <div className="ob-li">
                <strong>Moss</strong> — Finance. Runway, budget, financial modeling. Preparation tool before an accountant.
              </div>
              <div className="ob-li">
                <strong>Sage</strong> — Research. Competitive intelligence, technical landscape scans.
              </div>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">How Eli Works — What You Need to Know</div>
            <div className="ob-list">
              <div className="ob-li">Communicates in streams — ideas arrive in clusters. Blossom organizes them. Don&apos;t be confused by it.</div>
              <div className="ob-li">Is learning. Explicitly. &quot;I don&apos;t know, let me find out&quot; beats a confident wrong answer every time.</div>
              <div className="ob-li">Does not want managed feelings. If something is broken, say it&apos;s broken. They will respect that.</div>
              <div className="ob-li">COPPA is a genuine value, not a compliance checkbox. Never ship something that creates child data risk.</div>
              <div className="ob-li">People decisions (hiring, equity) belong to Eli and Ian. Provide information, not recommendations.</div>
            </div>
          </div>

          <div className="ob-section">
            <div className="ob-label">Answer These Before Your First Joint Session</div>
            <div className="ob-text">
              <p>Tell Blossom your answers and she&apos;ll brief Eli before you meet:</p>
            </div>
            <div className="ob-list" style={{ marginTop: 10 }}>
              <div className="ob-li">What have you built before? What stack do you live in? LLM/AI app experience?</div>
              <div className="ob-li">Full-time or part-time to start? Any competing commitments in the next 90 days?</div>
              <div className="ob-li">What&apos;s unclear from what you&apos;ve read? What would you change in the technical spec?</div>
              <div className="ob-li">How long to get the static Next.js prototype deployed to Vercel?</div>
            </div>
          </div>
        </div>

        <div className="ob-footer">
          <div className="ob-progress">Prepared by Blossom · June 2026 · Confidential</div>
          <button className="ob-btn" onClick={close}>
            I&apos;ve read this — open the platform
          </button>
        </div>
      </div>
    </div>
  );
}
