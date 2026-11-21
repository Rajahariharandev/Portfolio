"use client";

import React from "react";
import { motion } from "motion/react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[340px] pointer-events-none overflow-hidden z-10 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Celestial Nebula Atmospheric Glows (Behind Navbar & Arc) */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[900px] h-[280px] bg-gradient-to-b from-[#7042f8]/60 via-[#8b5cf6]/30 to-transparent blur-[100px] rounded-full" />
      <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[550px] h-[200px] bg-gradient-to-b from-[#c084fc]/50 via-[#6b21a8]/35 to-transparent blur-[70px] rounded-full" />
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[350px] h-[120px] bg-cyan-400/20 blur-[60px] rounded-full" />

      {/* 2. Downward Volumetric God-Rays illuminating hero space */}
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[850px] h-[320px] opacity-35 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400/35 via-purple-900/10 to-transparent blur-2xl" />

      {/* 3. Blinding Full-Width Horizontal Lens Flare Beams (Matches Exact Reference) */}
      <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-[160%] h-[2.5px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-[0_0_18px_#ffffff,0_0_35px_#c084fc,0_0_70px_#7042f8]" />
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[110%] h-[8px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent blur-[3px]" />
      <div className="absolute top-[36px] left-1/2 -translate-x-1/2 w-[85%] h-[24px] bg-gradient-to-r from-transparent via-[#7042f8]/75 to-transparent blur-[14px]" />
      <div className="absolute top-[28px] left-1/2 -translate-x-1/2 w-[55%] h-[50px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent blur-[25px]" />

      {/* 4. Gravitational Lensing U-Arc (Pure SVG: Top-anchored crescent wrapping below navbar) */}
      <div className="relative top-0 w-[520px] h-[220px] flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 520 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Deep Purple Corona */}
          <path
            d="M 60 0 C 75 145, 170 195, 260 195 C 350 195, 445 145, 460 0"
            stroke="#7042f8"
            strokeWidth="38"
            strokeLinecap="round"
            className="opacity-75 blur-md"
          />

          {/* Radiant Violet Energy Rim */}
          <path
            d="M 85 0 C 100 130, 180 175, 260 175 C 340 175, 420 130, 435 0"
            stroke="#a855f7"
            strokeWidth="20"
            strokeLinecap="round"
            filter="url(#violet-rim-glow)"
          />

          {/* Shimmering Secondary Ring */}
          <path
            d="M 105 0 C 120 118, 190 156, 260 156 C 330 156, 400 118, 415 0"
            stroke="#c084fc"
            strokeWidth="11"
            strokeLinecap="round"
            filter="url(#magenta-glow)"
          />

          {/* White-Hot Relativistic Beaming Core (Exact glowing curve from reference) */}
          <path
            d="M 120 0 C 132 108, 195 142, 260 142 C 325 142, 388 108, 400 0"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            filter="url(#white-core-beam)"
          />

          {/* Razor-sharp innermost white hairline */}
          <path
            d="M 128 0 C 140 102, 198 135, 260 135 C 322 135, 380 102, 392 0"
            stroke="#f5f3ff"
            strokeWidth="2"
            strokeLinecap="round"
            className="opacity-95"
          />

          <defs>
            <filter id="violet-rim-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="magenta-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <filter id="white-core-beam" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
        </svg>

        {/* Dynamic Accretion Energy Pulse (Subtle breathing glow) */}
        <motion.div
          animate={{ opacity: [0.75, 1, 0.75], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 w-[420px] h-[180px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(112,66,248,0.08) 60%, transparent 100%)",
            filter: "blur(20px)",
          }}
        />
      </div>
    </div>
  );
}
