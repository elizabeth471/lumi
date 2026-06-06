"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const petal = (rot: number): React.CSSProperties => ({
  position: "absolute",
  width: 7,
  height: 11,
  background: "#e8607a",
  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
  top: "50%",
  left: "50%",
  transformOrigin: "bottom center",
  transform: `translate(-50%,-100%) rotate(${rot}deg)`,
});

export default function Login() {
  const router = useRouter();

  // If already signed in, skip the login screen.
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("lumi_user")) {
      router.replace("/today");
    }
  }, [router]);

  const loginAs = (role: "founder" | "cofounder") => {
    localStorage.setItem("lumi_user", role);
    router.push("/today");
  };

  return (
    <div id="login-screen">
      <div className="login-logo">Lumi</div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ width: 80, height: 96, position: "relative", animation: "bob 3s ease-in-out infinite" }}>
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 26, height: 18, background: "#c4714a", borderRadius: "2px 2px 6px 6px" }} />
          <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", width: 22, height: 38, background: "#5a8a50", borderRadius: "11px 11px 5px 5px" }} />
          <div style={{ position: "absolute", bottom: 34, left: 8, width: 13, height: 20, background: "#5a8a50", borderRadius: 6, transformOrigin: "bottom right", transform: "rotate(-28deg)", animation: "waveL 4s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: 34, right: 8, width: 13, height: 20, background: "#5a8a50", borderRadius: 6, transformOrigin: "bottom left", transform: "rotate(28deg)" }} />
          <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
            <div style={{ width: 4, height: 4, background: "#1a1208", borderRadius: "50%", animation: "blink 4s infinite" }} />
            <div style={{ width: 4, height: 4, background: "#1a1208", borderRadius: "50%", animation: "blink 4s infinite" }} />
          </div>
          <div style={{ position: "absolute", top: 2, left: "50%", transform: "translateX(-50%)", width: 26, height: 26, animation: "spinSlow 12s linear infinite" }}>
            {[0, 51, 102, 153, 204, 255, 306].map((r) => (
              <div key={r} style={petal(r)} />
            ))}
            <div style={{ position: "absolute", width: 10, height: 10, background: "#f5d060", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 2 }} />
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#9a7a4a", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Helvetica Neue',sans-serif" }}>
          Blossom OS
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div className="login-title">Who&apos;s there?</div>
        <div className="login-sub">Select your profile to continue</div>
      </div>

      <div className="login-cards">
        <div className="login-card" onClick={() => loginAs("founder")}>
          <div className="login-card-avatar" style={{ background: "#3a2a18" }}>🌱</div>
          <div className="login-card-name">Founder</div>
          <div className="login-card-role">Lumi · Phase 0</div>
          <div className="login-card-badge badge-founder">Owner</div>
        </div>

        <div className="login-card" onClick={() => loginAs("cofounder")}>
          <div className="login-card-avatar" style={{ background: "#1a2830" }}>⚡</div>
          <div className="login-card-name">Tech Co-Founder</div>
          <div className="login-card-role">Technical Lead</div>
          <div className="login-card-badge badge-new">First Login</div>
        </div>
      </div>

      <div className="login-footer">for every bloom.</div>
    </div>
  );
}
