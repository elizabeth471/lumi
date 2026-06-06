"use client";

import { useEffect, useRef } from "react";
import { usePlatform } from "@/components/platform-provider";

const GREETS = [
  "Morning. Everything is logged and ready.",
  "Still here. What do you need?",
  "All systems nominal. Jelex is still the top name.",
  "You tapped me. Was that intentional?",
  "Formation sequence on standby. Waiting on your call.",
];

export default function BlossomCharacter() {
  const { thinking, setThinking, toast } = usePlatform();
  const stageRef = useRef<HTMLDivElement>(null);
  const eyeL = useRef<HTMLDivElement>(null);
  const eyeR = useRef<HTMLDivElement>(null);
  const tapIdx = useRef(0);

  // Eyes follow the cursor.
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!stageRef.current || !eyeL.current || !eyeR.current) return;
      const r = stageRef.current.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.38;
      const mx = Math.max(-1.5, Math.min(1.5, ((e.clientX - cx) / window.innerWidth) * 4));
      const my = Math.max(-1, Math.min(1, ((e.clientY - cy) / window.innerHeight) * 3));
      const tf = `translate(${mx}px,${my}px)`;
      eyeL.current.style.transform = tf;
      eyeR.current.style.transform = tf;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  const tap = () => {
    setThinking(true);
    setTimeout(() => setThinking(false), 800);
    toast("Blossom", GREETS[tapIdx.current % GREETS.length], "🌵", 3000);
    tapIdx.current++;
  };

  return (
    <div className={`blossom-stage${thinking ? " thinking" : ""}`} ref={stageRef} onClick={tap}>
      <div className="blossom-body-group">
        <div className="b-bloom">
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-petal" />
          <div className="b-bloom-center" />
        </div>
        <div className="b-arm b-arm-l">
          <div className="asp asp1" />
          <div className="asp asp2" />
        </div>
        <div className="b-arm b-arm-r">
          <div className="asp asp3" />
          <div className="asp asp4" />
        </div>
        <div className="b-trunk">
          <div className="sp sp1" />
          <div className="sp sp2" />
          <div className="sp sp3" />
          <div className="sp sp4" />
          <div className="sp sp5" />
          <div className="sp sp6" />
          <div className="b-face">
            <div className="b-eyes">
              <div className="b-eye" ref={eyeL} />
              <div className="b-eye" ref={eyeR} />
            </div>
            <div className="b-blush-wrap">
              <div className="b-blush" />
              <div className="b-blush" />
            </div>
          </div>
        </div>
        <div className="b-pot" />
      </div>
    </div>
  );
}
