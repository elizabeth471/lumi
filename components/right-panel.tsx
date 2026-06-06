"use client";

export default function RightPanel() {
  return (
    <aside className="right-panel" aria-label="Phase progress, recent activity, and budget">
      <div className="rp-section">
        <h2 className="rp-label">Phase 0 Progress</h2>
        <div className="progress-row">
          <div className="pr-item">
            <div className="pr-top">
              <span className="pr-name">Validation</span>
              <span className="pr-pct">0 / 5 parents</span>
            </div>
            <div className="pr-bar"><div className="pr-fill rose" style={{ width: "0%" }} /></div>
          </div>
          <div className="pr-item">
            <div className="pr-top">
              <span className="pr-name">Entity Formation</span>
              <span className="pr-pct">Blocked</span>
            </div>
            <div className="pr-bar"><div className="pr-fill amber" style={{ width: "15%" }} /></div>
          </div>
          <div className="pr-item">
            <div className="pr-top">
              <span className="pr-name">Brand / Name</span>
              <span className="pr-pct">90%</span>
            </div>
            <div className="pr-bar"><div className="pr-fill animated" style={{ width: "90%" }} /></div>
          </div>
          <div className="pr-item">
            <div className="pr-top">
              <span className="pr-name">Agent Team</span>
              <span className="pr-pct">100%</span>
            </div>
            <div className="pr-bar"><div className="pr-fill sky" style={{ width: "100%" }} /></div>
          </div>
        </div>
      </div>

      <div className="rp-section">
        <h2 className="rp-label">Recent Activity</h2>
        <div className="activity-list">
          {[
            { icon: "🌵", text: "Blossom delivered Jelex trademark check — clean in Classes 9 & 41", time: "9:14 am today" },
            { icon: "🌿", text: "Sage completed James & Alexander advisory framework research", time: "9:15 am today" },
            { icon: "🌳", text: "Grove briefed on Blossom UI visual direction — desert palette approved", time: "Earlier today" },
            { icon: "🌵", text: "Conversation management protocol added to admin-assistant.md", time: "Earlier today" },
            { icon: "🌵", text: "Founder mindset context added — learning investment framing", time: "Earlier today" },
          ].map((a, i) => (
            <div className="act-item" key={i}>
              <div className="act-icon">{a.icon}</div>
              <div className="act-body">
                <div className="act-text">{a.text}</div>
                <div className="act-time">{a.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rp-section" style={{ borderBottom: "none" }}>
        <h2 className="rp-label">Monthly Agent Budget</h2>
        <div className="progress-row">
          <div className="pr-item">
            <div className="pr-top">
              <span className="pr-name">Used</span>
              <span className="pr-pct">~$2 / $10</span>
            </div>
            <div className="pr-bar"><div className="pr-fill" style={{ width: "20%" }} /></div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-lt)", marginTop: 8, lineHeight: 1.7 }}>
          Active: Sage daily scans<br />
          Inactive: All Phase 2 agents<br />
          Next reset: July 1
        </div>
      </div>
    </aside>
  );
}
