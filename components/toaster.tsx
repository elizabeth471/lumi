"use client";

import { usePlatform } from "@/components/platform-provider";

export default function Toaster() {
  const { toasts, dismissToast } = usePlatform();
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast${t.exiting ? " exiting" : ""}`}>
          <div className="toast-icon">{t.icon}</div>
          <div className="toast-body">
            <div className="toast-title">{t.title}</div>
            {t.msg ? <div className="toast-msg">{t.msg}</div> : null}
          </div>
          <button className="toast-dismiss" onClick={() => dismissToast(t.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
