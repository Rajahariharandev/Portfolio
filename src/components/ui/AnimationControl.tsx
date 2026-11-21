"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export function AnimationControl() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let paused = false;
    try {
      const saved = localStorage.getItem("rh_animations_active");
      if (saved === "false") {
        paused = true;
        document.documentElement.classList.add("animations-paused");
      }
    } catch {
      // localStorage may be disabled
    }

    const timer = setTimeout(() => {
      setMounted(true);
      if (paused) setIsPlaying(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const toggleAnimation = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      document.documentElement.classList.remove("animations-paused");
      try {
        localStorage.setItem("rh_animations_active", "true");
      } catch {}
    } else {
      document.documentElement.classList.add("animations-paused");
      try {
        localStorage.setItem("rh_animations_active", "false");
      } catch {}
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 select-none">
      <button
        type="button"
        onClick={toggleAnimation}
        className={`px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono font-medium transition-all flex items-center gap-1.5 shadow-lg cursor-pointer ${
          isPlaying
            ? "bg-[#07031e]/85 border-white/[0.12] text-slate-300 hover:text-white hover:border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
            : "bg-amber-950/40 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
        }`}
        title={isPlaying ? "Click to Pause Background Animations" : "Click to Play Background Animations"}
        aria-label={isPlaying ? "Pause animations" : "Play animations"}
      >
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center ${
            isPlaying ? "bg-cyan-500/20 text-cyan-300" : "bg-amber-500/20 text-amber-300"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-2.5 h-2.5" />
          ) : (
            <Play className="w-2.5 h-2.5 ml-0.5" />
          )}
        </div>
        <span className="hidden sm:inline">
          {isPlaying ? "Animation: On" : "Animation: Paused"}
        </span>
      </button>
    </div>
  );
}
