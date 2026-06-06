"use client";

import { PlatformProvider } from "@/components/platform-provider";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import RightPanel from "@/components/right-panel";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlatformProvider>
      <div className="platform-shell">
        <Sidebar />
        <div className="main-area">
          <Topbar />
          <div className="view-container">{children}</div>
        </div>
        <RightPanel />
      </div>
    </PlatformProvider>
  );
}
