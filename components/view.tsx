"use client";

import { useEffect, useState } from "react";

/** Wraps a route's content in the mockup's `.view` container and triggers the
 *  fade-in transition on mount (mirrors the prototype's view switching). */
export default function View({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const r = requestAnimationFrame(() => setActive(true));
    return () => cancelAnimationFrame(r);
  }, []);
  return <div className={`view${active ? " active" : ""}`}>{children}</div>;
}
