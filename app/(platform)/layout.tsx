"use client";

import { PlatformProvider } from "@/components/platform-provider";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import RightPanel from "@/components/right-panel";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlatformProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="platform-shell">
        <Sidebar />
        <main className="main-area" id="main-content">
          <Topbar />
          <div className="view-container">{children}</div>
        </main>
        <RightPanel />
      </div>
    </PlatformProvider>
  );
}
