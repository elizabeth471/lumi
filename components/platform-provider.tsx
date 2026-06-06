"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import Toaster from "@/components/toaster";
import CommandPalette from "@/components/command-palette";
import OnboardingOverlay from "@/components/onboarding-overlay";

export type Role = "eli" | "ian";
export interface User {
  name: string;
  avatar: string;
  role: Role;
}

// The two members of the Lumi team — equal partners, no hierarchy.
export const USERS: Record<Role, User> = {
  eli: { name: "Eli", avatar: "🌱", role: "eli" },
  ian: { name: "Ian", avatar: "⚡", role: "ian" },
};

export interface ToastItem {
  id: number;
  title: string;
  msg?: string;
  icon: string;
  exiting?: boolean;
}

interface Consulting {
  visible: boolean;
  text: string;
}

interface Ctx {
  user: User | null;
  toasts: ToastItem[];
  toast: (title: string, msg?: string, icon?: string, duration?: number) => void;
  dismissToast: (id: number) => void;
  thinking: boolean;
  setThinking: (v: boolean) => void;
  consulting: Consulting;
  setConsulting: (c: Consulting) => void;
  consultAgent: (name: string, msg: string) => void;
  cmdOpen: boolean;
  openCmd: () => void;
  closeCmd: () => void;
  onboardingOpen: boolean;
  setOnboardingOpen: (v: boolean) => void;
  logout: () => void;
}

const PlatformCtx = createContext<Ctx | null>(null);

export function usePlatform(): Ctx {
  const c = useContext(PlatformCtx);
  if (!c) throw new Error("usePlatform must be used inside PlatformProvider");
  return c;
}

const NAV_ORDER = ["today", "threads", "decisions", "agents", "files"];

export function PlatformProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [thinking, setThinking] = useState(false);
  const [consulting, setConsulting] = useState<Consulting>({ visible: false, text: "" });
  const [cmdOpen, setCmdOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const toastId = useRef(0);

  // Auth gate — read the selected profile, bounce to /login if missing.
  useEffect(() => {
    const role = (typeof window !== "undefined" &&
      localStorage.getItem("lumi_user")) as Role | null;
    if (role && USERS[role]) {
      setUser(USERS[role]);
      if (role === "ian" && localStorage.getItem("lumi_onboarded") !== "1") {
        setTimeout(() => setOnboardingOpen(true), 500);
      }
    } else {
      router.replace("/login");
    }
    setReady(true);
  }, [router]);

  const dismissToast = useCallback((id: number) => {
    setToasts((ts) => ts.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
    setTimeout(() => setToasts((ts) => ts.filter((t) => t.id !== id)), 250);
  }, []);

  const toast = useCallback(
    (title: string, msg?: string, icon = "🌵", duration = 4000) => {
      const id = ++toastId.current;
      setToasts((ts) => [...ts, { id, title, msg, icon }]);
      if (duration > 0) setTimeout(() => dismissToast(id), duration);
    },
    [dismissToast]
  );

  const openCmd = useCallback(() => setCmdOpen(true), []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);

  const consultAgent = useCallback(
    (name: string, msg: string) => {
      router.push("/today");
      setConsulting({ visible: true, text: `Consulting ${name} — ${msg}` });
      setThinking(true);
      setTimeout(() => {
        setConsulting({ visible: false, text: "" });
        setThinking(false);
        const icon = name === "Sage" ? "🌿" : name === "Reed" ? "🌾" : "🪨";
        toast(`${name} responded`, "Response queued in chat.", icon);
      }, 3000);
    },
    [router, toast]
  );

  const logout = useCallback(() => {
    if (!window.confirm("Sign out?")) return;
    localStorage.removeItem("lumi_user");
    setUser(null);
    router.replace("/login");
  }, [router]);

  // Personal sky-blue theme for Ian (a preference, not a rank), via `body.cf-mode`.
  useEffect(() => {
    if (user?.role === "ian") document.body.classList.add("cf-mode");
    else document.body.classList.remove("cf-mode");
    return () => document.body.classList.remove("cf-mode");
  }, [user]);

  // Global keyboard shortcuts: ⌘K palette, 1–5 nav, Esc to close.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || "").toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (e.key === "Escape") {
          (document.activeElement as HTMLElement).blur();
          setCmdOpen(false);
        }
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen(true);
        return;
      }
      const navMap: Record<string, string> = {
        "1": "today",
        "2": "threads",
        "3": "decisions",
        "4": "agents",
        "5": "files",
      };
      if (navMap[e.key]) {
        router.push("/" + navMap[e.key]);
        return;
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [router]);

  const value: Ctx = {
    user,
    toasts,
    toast,
    dismissToast,
    thinking,
    setThinking,
    consulting,
    setConsulting,
    consultAgent,
    cmdOpen,
    openCmd,
    closeCmd,
    onboardingOpen,
    setOnboardingOpen,
    logout,
  };

  // Don't render the shell until the auth check has resolved.
  if (!ready || !user) return null;

  return (
    <PlatformCtx.Provider value={value}>
      {children}
      <CommandPalette />
      <OnboardingOverlay />
      <Toaster />
    </PlatformCtx.Provider>
  );
}

export { NAV_ORDER };
