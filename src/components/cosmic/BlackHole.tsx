"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface AuroraEmber {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const AURORA_COLORS = ["#00f0ff", "#c084fc", "#a855f7", "#38bdf8", "#f4f4f5"];

const AURORA_EMBERS: AuroraEmber[] = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 5.5 + 3) % 94 + 3,
  y: (i * 7 + 10) % 75 + 10,
  size: (i % 3) * 1.2 + 2,
  duration: (i % 4) * 1.5 + 4,
  delay: (i % 5) * 0.8,
  color: AURORA_COLORS[i % AURORA_COLORS.length],
}));

export function BlackHole() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1700px] h-[480px] pointer-events-none overflow-hidden z-10 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* 1. Primary Volumetric Atmospheric Nebula (Smooth, seamless aurora horizon without vector hoops) */}
      <div
        className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1100px] h-[380px] rounded-full blur-[110px] opacity-75 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(112, 66, 248, 0.55) 0%, rgba(76, 29, 149, 0.35) 50%, transparent 75%)",
        }}
      />

      {/* 2. Secondary Celestial Amethyst & Magenta Glow Curtain */}
      <div
        className="absolute -top-[110px] left-1/2 -translate-x-1/2 w-[780px] h-[280px] rounded-full blur-[85px] opacity-70 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(192, 132, 252, 0.4) 0%, rgba(147, 51, 234, 0.25) 55%, transparent 75%)",
        }}
      />

      {/* 3. Electric Cyan Orbit Accent Halo (Subtle cosmic frequency) */}
      <div
        className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[520px] h-[190px] rounded-full blur-[70px] opacity-45 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.3) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 75%)",
        }}
      />

      {/* 4. Silky Atmospheric Horizon Beam (Soft Gaussian glow across the top, no harsh cutoffs) */}
      <div
        className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1300px] h-[45px] blur-[24px] opacity-40 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(168, 85, 247, 0.6) 30%, rgba(255, 255, 255, 0.75) 50%, rgba(0, 240, 255, 0.6) 70%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-[52px] left-1/2 -translate-x-1/2 w-[70%] max-w-[950px] h-[2px] opacity-60 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(192, 132, 252, 0.4) 25%, rgba(255, 255, 255, 0.95) 50%, rgba(56, 189, 248, 0.4) 75%, transparent 100%)",
          boxShadow: "0 0 20px rgba(192, 132, 252, 0.6), 0 0 40px rgba(112, 66, 248, 0.4)",
        }}
      />

      {/* 5. Downward Volumetric Light Shaft (Gently bathing the hero typography in cosmic twilight) */}
      <div
        className="absolute top-[60px] left-1/2 -translate-x-1/2 w-[850px] h-[340px] opacity-25 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(168, 85, 247, 0.35) 0%, rgba(30, 8, 71, 0.15) 60%, transparent 80%)",
        }}
      />

      {/* 6. Subtle Breathing Aurora Pulse */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            opacity: [0.65, 0.9, 0.65],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[90px] left-1/2 -translate-x-1/2 w-[680px] h-[240px] rounded-full blur-[90px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(112, 66, 248, 0.35) 0%, rgba(0, 240, 255, 0.12) 50%, transparent 75%)",
          }}
        />
      )}

      {/* 7. Floating Celestial Aurora Embers (Gently drifting through the upper atmosphere) */}
      {!shouldReduceMotion &&
        AURORA_EMBERS.map((ember) => (
          <motion.div
            key={ember.id}
            animate={{
              y: ["0px", "-18px", "0px"],
              opacity: [0.2, 0.85, 0.2],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: ember.duration,
              repeat: Infinity,
              delay: ember.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${ember.x}%`,
              top: `${ember.y}px`,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              backgroundColor: ember.color,
              boxShadow: `0 0 8px ${ember.color}, 0 0 16px ${ember.color}`,
            }}
          />
        ))}
    </div>
  );
}
