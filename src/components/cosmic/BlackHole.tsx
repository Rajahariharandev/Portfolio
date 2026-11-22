"use client";

import React from "react";
import { motion } from "motion/react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[340px] pointer-events-none overflow-hidden z-10 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Celestial Nebula Atmospheric Glows (Velvety violet & electric cyan) */}
      <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-[#7042f8]/50 via-[#4c1d95]/25 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[650px] h-[220px] bg-gradient-to-b from-[#c084fc]/40 via-[#581c87]/20 to-transparent blur-[85px] rounded-full pointer-events-none" />
      <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[420px] h-[130px] bg-cyan-400/18 blur-[65px] rounded-full pointer-events-none" />

      {/* 2. Soft Volumetric God-Rays illuminating hero typography */}
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[880px] h-[300px] opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-300/30 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      {/* 3. Ethereal Horizontal Photon Flare (Softened edges, bright radiant center) */}
      <div className="absolute top-[38px] left-1/2 -translate-x-1/2 w-[120%] h-[2px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent opacity-85 shadow-[0_0_15px_#ffffff,0_0_30px_#c084fc,0_0_60px_#7042f8] pointer-events-none" />
      <div className="absolute top-[36px] left-1/2 -translate-x-1/2 w-[90%] h-[7px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent blur-[3px] opacity-75 pointer-events-none" />
      <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-[70%] h-[20px] bg-gradient-to-r from-transparent via-[#7042f8]/70 to-transparent blur-[12px] pointer-events-none" />
      <div className="absolute top-[24px] left-1/2 -translate-x-1/2 w-[45%] h-[45px] bg-gradient-to-r from-transparent via-[#38bdf8]/25 to-transparent blur-[22px] pointer-events-none" />

      {/* 4. Majestic Gravitational Lensing U-Arc (640px cradle framing the navbar) */}
      <div className="relative top-0 w-[640px] h-[210px] flex items-center justify-center overflow-visible">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 640 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Soft Amethyst Halo */}
          <path
            d="M 60 0 C 80 148, 200 188, 320 188 C 440 188, 560 148, 580 0"
            stroke="#7042f8"
            strokeWidth="34"
            strokeLinecap="round"
            className="opacity-65 blur-md"
          />

          {/* Radiant Violet Lensing Ribbon */}
          <path
            d="M 85 0 C 105 134, 210 170, 320 170 C 430 170, 535 134, 555 0"
            stroke="#a855f7"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#wide-violet-glow)"
          />

          {/* Shimmering Ethereal Magenta Ring */}
          <path
            d="M 105 0 C 122 120, 218 152, 320 152 C 422 152, 518 120, 535 0"
            stroke="#c084fc"
            strokeWidth="9"
            strokeLinecap="round"
            filter="url(#wide-magenta-glow)"
          />

          {/* Diamond-White Relativistic Photon Beam */}
          <path
            d="M 120 0 C 135 110, 224 140, 320 140 C 416 140, 505 110, 520 0"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#wide-white-beam)"
          />

          {/* Pure Light Filament */}
          <path
            d="M 128 0 C 142 104, 226 133, 320 133 C 414 133, 498 104, 512 0"
            stroke="#f8fafc"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-95"
          />

          <defs>
            <filter id="wide-violet-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="wide-magenta-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <filter id="wide-white-beam" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
        </svg>

        {/* Breathing Celestial Accretion Glow */}
        <motion.div
          animate={{ opacity: [0.65, 0.95, 0.65], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 w-[440px] h-[170px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(112,66,248,0.06) 60%, transparent 100%)",
            filter: "blur(24px)",
          }}
        />
      </div>
    </div>
  );
}
