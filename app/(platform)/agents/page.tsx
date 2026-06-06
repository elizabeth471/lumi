"use client";

import View from "@/components/view";

export default function AgentsPage() {
  return (
    <View>
      <div style={{ fontSize: 13, color: "var(--text-mid)", marginBottom: 4 }}>
        10 agents configured · 3 active · 3 on-demand · 4 dormant
      </div>
      <div className="agents-grid">
        {/* BLOSSOM */}
        <div className="agent-card" style={{ borderColor: "var(--amber)", gridColumn: "span 2" }}>
          <div className="ac-top">
            <div className="ac-mini" style={{ width: 52, height: 52 }}>
              <svg viewBox="0 0 52 52" width="52" height="52">
                <rect x="18" y="38" width="16" height="10" rx="3" fill="#c4714a" />
                <rect x="14" y="36" width="24" height="6" rx="2" fill="#d4845a" />
                <rect x="16" y="36" width="20" height="3" rx="1" fill="#5a3a20" />
                <rect x="17" y="16" width="18" height="23" rx="9" fill="#5a8a50" />
                <rect x="22" y="18" width="5" height="15" rx="2" fill="rgba(255,255,255,.13)" />
                <circle cx="18" cy="25" r="2" fill="#e8dcc8" />
                <circle cx="34" cy="25" r="2" fill="#e8dcc8" />
                <circle cx="23" cy="23" r="2.5" fill="#1a1208" />
                <circle cx="29" cy="23" r="2.5" fill="#1a1208" />
                <ellipse cx="21" cy="27" rx="3" ry="1.5" fill="rgba(220,100,80,.3)" />
                <ellipse cx="31" cy="27" rx="3" ry="1.5" fill="rgba(220,100,80,.3)" />
                <circle cx="26" cy="9" r="3" fill="#f5d060" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(51 26 9)" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(102 26 9)" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(153 26 9)" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(204 26 9)" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(255 26 9)" />
                <ellipse cx="26" cy="4" rx="3" ry="5" fill="#e8607a" opacity=".9" transform="rotate(306 26 9)" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Blossom</div>
              <div className="ac-role">Admin Orchestrator · Always Active</div>
            </div>
            <div className="ac-phase ph-0">Core</div>
          </div>
          <div className="ac-desc">
            Coordinates all agents, manages information flow, runs the session-start and session-end protocols,
            maintains the open decisions log, and ensures nothing falls through the cracks. Never acts unilaterally on
            consequential decisions.
          </div>
          <div className="ac-footer">
            <span className="ac-model">claude-sonnet-4-6</span>
            <span className="ac-model">↑ claude-opus-4-8</span>
            <div className="ac-status-row">
              <div className="ac-dot live" style={{ background: "var(--green-dot)" }} />
              <div className="ac-status-label">Active</div>
            </div>
          </div>
        </div>

        {/* SAGE */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim">
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#d4e8c0" />
                <line x1="22" y1="38" x2="22" y2="12" stroke="#5a8040" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="17" cy="25" rx="6" ry="3.5" fill="#7ab85a" transform="rotate(-30 17 25)" />
                <ellipse cx="27" cy="20" rx="6" ry="3.5" fill="#8ac86a" transform="rotate(30 27 20)" />
                <ellipse cx="18" cy="16" rx="5" ry="3" fill="#7ab85a" transform="rotate(-20 18 16)" />
                <circle cx="22" cy="12" r="3" fill="#6aa84a" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name tip" data-tip="Handles market research, competitive intelligence, validation support">
                Sage
              </div>
              <div className="ac-role">Research &amp; Strategy</div>
            </div>
            <div className="ac-phase ph-0">Phase 0</div>
          </div>
          <div className="ac-desc">
            Market research, competitive intelligence, investor landscape, validation support. Primary model for
            background scans; escalates to Sonnet for synthesis.
          </div>
          <div className="ac-footer">
            <span className="ac-model">haiku-4-5</span>
            <span className="ac-model">↑ sonnet-4-6</span>
            <div className="ac-status-row">
              <div className="ac-dot live" style={{ background: "var(--green-dot)" }} />
              <div className="ac-status-label">Active</div>
            </div>
          </div>
        </div>

        {/* REED */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim" style={{ animationDelay: ".3s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#e0ead0" />
                <line x1="15" y1="38" x2="15" y2="14" stroke="#8aaa60" strokeWidth="2.2" strokeLinecap="round" />
                <ellipse cx="15" cy="11" rx="3" ry="6" fill="#a0c070" />
                <line x1="22" y1="38" x2="22" y2="10" stroke="#7a9a50" strokeWidth="2.2" strokeLinecap="round" />
                <ellipse cx="22" cy="7" rx="3" ry="6" fill="#90b060" />
                <line x1="29" y1="38" x2="29" y2="14" stroke="#8aaa60" strokeWidth="2.2" strokeLinecap="round" />
                <ellipse cx="29" cy="11" rx="3" ry="6" fill="#a0c070" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name tip" data-tip="All drafts, outreach copy, brand voice. Sonnet only — never Haiku">
                Reed
              </div>
              <div className="ac-role">Writing &amp; Comms</div>
            </div>
            <div className="ac-phase ph-0">Phase 0</div>
          </div>
          <div className="ac-desc">
            All drafts, outreach copy, brand voice, documents. Sonnet only — never Haiku. Adapts tone for investors,
            partners, regulators, and families.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <span style={{ fontSize: 10, color: "var(--text-lt)", padding: "2px 8px" }}>never haiku</span>
            <div className="ac-status-row">
              <div className="ac-dot live" style={{ background: "var(--green-dot)" }} />
              <div className="ac-status-label">Active</div>
            </div>
          </div>
        </div>

        {/* MOSS */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim" style={{ animationDelay: ".6s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#c8d8b0" />
                <ellipse cx="22" cy="30" rx="16" ry="7" fill="#7a9850" />
                <circle cx="14" cy="26" r="6" fill="#8aaa58" />
                <circle cx="22" cy="23" r="7" fill="#9aba60" />
                <circle cx="30" cy="26" r="5.5" fill="#8aaa58" />
                <circle cx="18" cy="21" r="5" fill="#a0c068" />
                <circle cx="27" cy="22" r="4.5" fill="#98b860" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name tip" data-tip="Financial model, budget tracking, runway scenarios. Never gives tax advice">
                Moss
              </div>
              <div className="ac-role">Finance &amp; Modeling</div>
            </div>
            <div className="ac-phase ph-0">Phase 0</div>
          </div>
          <div className="ac-desc">
            Financial model, budget tracking, runway scenarios, funding research. Translates numbers into plain-language
            founder decisions. Never gives tax advice.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <span className="ac-model">↑ opus-4-8</span>
            <div className="ac-status-row">
              <div className="ac-dot live" style={{ background: "var(--green-dot)" }} />
              <div className="ac-status-label">Active</div>
            </div>
          </div>
        </div>

        {/* WILLOW */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim" style={{ animationDelay: ".9s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#d8e8d0" />
                <line x1="22" y1="38" x2="22" y2="14" stroke="#6a9048" strokeWidth="2" strokeLinecap="round" />
                <path d="M10 14 Q22 6 34 14" fill="none" stroke="#6a9048" strokeWidth="2" />
                <path d="M11 15 Q10 25 12 33" fill="none" stroke="#8ab060" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 14 Q15 24 16 32" fill="none" stroke="#7aa050" strokeWidth="2" strokeLinecap="round" />
                <path d="M27 14 Q29 24 28 32" fill="none" stroke="#8ab060" strokeWidth="2" strokeLinecap="round" />
                <path d="M33 15 Q34 25 32 33" fill="none" stroke="#7aa050" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Willow</div>
              <div className="ac-role">Child Safety / COPPA</div>
            </div>
            <div className="ac-phase ph-1">Phase 1</div>
          </div>
          <div className="ac-desc">
            Regulatory review, COPPA compliance preparation, investor prep on child safety claims. Consultation-prep
            only — never issues compliance verdicts.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <span className="ac-model">↑ opus-4-8</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--text-lt)" }} />
              <div className="ac-status-label">Idle</div>
            </div>
          </div>
        </div>

        {/* GROVE */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim" style={{ animationDelay: "1.2s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#c8dcc0" />
                <rect x="19" y="30" width="6" height="10" rx="2" fill="#8a6040" />
                <circle cx="22" cy="21" r="12" fill="#5a8840" />
                <circle cx="15" cy="24" r="8" fill="#6a9848" />
                <circle cx="29" cy="24" r="7" fill="#6a9848" />
                <circle cx="22" cy="17" r="10" fill="#7aaa50" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Grove</div>
              <div className="ac-role">Visual Development</div>
            </div>
            <div className="ac-phase ph-1">Phase 1</div>
          </div>
          <div className="ac-desc">
            Style exploration, visual briefs, consistency specification. Activates before hiring Lead Artist. Produces
            direction documents, not final assets.
          </div>
          <div className="ac-footer">
            <span className="ac-model">haiku-4-5</span>
            <span className="ac-model">↑ sonnet-4-6</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--text-lt)" }} />
              <div className="ac-status-label">Idle</div>
            </div>
          </div>
        </div>

        {/* MEADOW */}
        <div className="agent-card">
          <div className="ac-top">
            <div className="ac-mini mini-anim" style={{ animationDelay: "1.5s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#f0e8d0" />
                <line x1="22" y1="40" x2="22" y2="26" stroke="#6a9040" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="16" cy="34" rx="5" ry="2.5" fill="#7aaa48" transform="rotate(-30 16 34)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" stroke="#e0d0c0" strokeWidth=".7" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(45 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(90 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(135 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(180 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(225 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(270 22 22)" />
                <ellipse cx="22" cy="15" rx="3" ry="7" fill="white" transform="rotate(315 22 22)" />
                <circle cx="22" cy="22" r="7" fill="#f0c840" />
                <circle cx="22" cy="22" r="4" fill="#e0a820" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Meadow</div>
              <div className="ac-role">Customer Voice</div>
            </div>
            <div className="ac-phase ph-1">Phase 1</div>
          </div>
          <div className="ac-desc">
            Parent archetype + child voices by age tier (3–5, 6–8, 9–12). Pre-filter for obvious mismatches before real
            families see anything. Not a replacement for real user research.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--text-lt)" }} />
              <div className="ac-status-label">Idle</div>
            </div>
          </div>
        </div>

        {/* CLOVER */}
        <div className="agent-card dormant">
          <div className="ac-top">
            <div className="ac-mini" style={{ animation: "mfloat 7s ease-in-out infinite" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#d0e0c8" />
                <line x1="22" y1="40" x2="22" y2="24" stroke="#6a9040" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="18" r="7" fill="#78b050" opacity=".7" />
                <circle cx="15" cy="24" r="7" fill="#70a848" opacity=".7" />
                <circle cx="29" cy="24" r="7" fill="#78b050" opacity=".7" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Clover</div>
              <div className="ac-role">Child Development SME</div>
            </div>
            <div className="ac-phase ph-2">Phase 2</div>
          </div>
          <div className="ac-desc">
            Developmental alignment of activities and interactions. Activates when activity design begins in Phase 2.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <span className="ac-model">↑ opus-4-8</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--sand-dark)" }} />
              <div className="ac-status-label">Dormant</div>
            </div>
          </div>
        </div>

        {/* FERN */}
        <div className="agent-card dormant">
          <div className="ac-top">
            <div className="ac-mini" style={{ animation: "mfloat 8s ease-in-out infinite", animationDelay: ".5s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#c8d8b8" />
                <path d="M22 40 Q24 28 30 16" fill="none" stroke="#6a9040" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="28" cy="20" rx="5.5" ry="2.5" fill="#80a848" transform="rotate(-50 28 20)" opacity=".8" />
                <ellipse cx="30" cy="27" rx="5.5" ry="2.5" fill="#78a040" transform="rotate(-40 30 27)" opacity=".8" />
                <path d="M22 40 Q20 28 14 16" fill="none" stroke="#6a9040" strokeWidth="1.8" strokeLinecap="round" />
                <ellipse cx="16" cy="20" rx="5" ry="2.5" fill="#80a848" transform="rotate(50 16 20)" opacity=".7" />
                <ellipse cx="14" cy="27" rx="5" ry="2.5" fill="#78a040" transform="rotate(40 14 27)" opacity=".7" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Fern</div>
              <div className="ac-role">Neurodivergent Accessibility</div>
            </div>
            <div className="ac-phase ph-2">Phase 2</div>
          </div>
          <div className="ac-desc">
            Accessibility review across ADHD, ASC, dyslexia, dyscalculia, SPD profiles. Runs weekly platform checks at
            Phase 0 minimum.
          </div>
          <div className="ac-footer">
            <span className="ac-model">haiku-4-5</span>
            <span className="ac-model">↑ sonnet-4-6</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--sand-dark)" }} />
              <div className="ac-status-label">Dormant</div>
            </div>
          </div>
        </div>

        {/* BRIAR */}
        <div className="agent-card dormant">
          <div className="ac-top">
            <div className="ac-mini" style={{ animation: "mfloat 6s ease-in-out infinite", animationDelay: "1s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#e8d0d0" />
                <line x1="22" y1="40" x2="22" y2="20" stroke="#7a6040" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="31" x2="13" y2="28" stroke="#7a6040" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="26" y1="27" x2="31" y2="24" stroke="#7a6040" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="22" cy="16" r="8" fill="#d06870" opacity=".8" />
                <circle cx="17" cy="14" r="5.5" fill="#e07880" opacity=".8" />
                <circle cx="27" cy="14" r="5.5" fill="#e07880" opacity=".8" />
                <circle cx="22" cy="11" r="5.5" fill="#e88890" opacity=".9" />
                <circle cx="22" cy="16" r="4" fill="#f09098" />
                <circle cx="22" cy="16" r="2" fill="#c85868" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Briar</div>
              <div className="ac-role">SEL &amp; Emotional Safety</div>
            </div>
            <div className="ac-phase ph-2">Phase 2</div>
          </div>
          <div className="ac-desc">
            CASEL mapping, dark pattern detection, trauma-aware design review. Monthly dark pattern scan even at Phase 0.
          </div>
          <div className="ac-footer">
            <span className="ac-model">sonnet-4-6</span>
            <span className="ac-model">↑ opus-4-8</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--sand-dark)" }} />
              <div className="ac-status-label">Dormant</div>
            </div>
          </div>
        </div>

        {/* THISTLE */}
        <div className="agent-card dormant">
          <div className="ac-top">
            <div className="ac-mini" style={{ animation: "mfloat 9s ease-in-out infinite", animationDelay: "1.5s" }}>
              <svg viewBox="0 0 44 44">
                <rect width="44" height="44" rx="22" fill="#d8d0e8" />
                <line x1="22" y1="40" x2="22" y2="22" stroke="#6a7a40" strokeWidth="2" strokeLinecap="round" />
                <ellipse cx="15" cy="31" rx="5.5" ry="2.5" fill="#7a9048" transform="rotate(-30 15 31)" opacity=".7" />
                <ellipse cx="29" cy="31" rx="5.5" ry="2.5" fill="#7a9048" transform="rotate(30 29 31)" opacity=".7" />
                <circle cx="22" cy="16" r="9" fill="#9080b8" opacity=".3" />
                <circle cx="22" cy="16" r="7" fill="#a890c8" opacity=".5" />
                <line x1="22" y1="7" x2="22" y2="12" stroke="#8070a8" strokeWidth="2" strokeLinecap="round" />
                <line x1="29" y1="9" x2="26" y2="13" stroke="#8070a8" strokeWidth="2" strokeLinecap="round" />
                <line x1="32" y1="16" x2="27" y2="16" stroke="#8070a8" strokeWidth="2" strokeLinecap="round" />
                <line x1="15" y1="9" x2="18" y2="13" stroke="#8070a8" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="16" x2="17" y2="16" stroke="#8070a8" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="16" r="5" fill="#b8a0d8" />
              </svg>
            </div>
            <div className="ac-info">
              <div className="ac-name">Thistle</div>
              <div className="ac-role">Bilingual &amp; Cultural</div>
            </div>
            <div className="ac-phase ph-2">Phase 2</div>
          </div>
          <div className="ac-desc">
            Language and cultural validity across English, Spanish, Tagalog, Portuguese, French. Monthly bilingual signal
            scan at Phase 0.
          </div>
          <div className="ac-footer">
            <span className="ac-model">haiku-4-5</span>
            <span className="ac-model">↑ sonnet-4-6</span>
            <div className="ac-status-row">
              <div className="ac-dot" style={{ background: "var(--sand-dark)" }} />
              <div className="ac-status-label">Dormant</div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
