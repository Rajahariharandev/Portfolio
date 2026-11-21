"use client";

import React from "react";
import { motion } from "motion/react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[340px] pointer-events-none overflow-hidden z-10 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* 1. Ethereal Aurora Atmospheric Glows (Silky smooth amethyst & deep indigo) */}
      <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-[980px] h-[300px] bg-gradient-to-b from-[#7042f8]/45 via-[#4c1d95]/25 to-transparent blur-[110px] rounded-full" />
      <div className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[620px] h-[220px] bg-gradient-to-b from-[#c084fc]/35 via-[#581c87]/20 to-transparent blur-[80px] rounded-full" />
      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[380px] h-[130px] bg-cyan-400/15 blur-[65px] rounded-full" />

      {/* 2. Soft Volumetric God-Rays (Gentle downward illumination into the hero text) */}
      <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[860px] h-[300px] opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-300/30 via-purple-900/10 to-transparent blur-3xl" />

      {/* 3. Razor-Thin Elegant Horizontal Photon Flare (Cinema-grade lens flare) */}
      <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-[160%] h-[1.5px] bg-gradient-to-r from-transparent via-[#ffffff] to-transparent shadow-[0_0_12px_#ffffff,0_0_24px_#c084fc,0_0_48px_#7042f8]" />
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[110%] h-[6px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent blur-[2.5px] opacity-80" />
      <div className="absolute top-[37px] left-1/2 -translate-x-1/2 w-[85%] h-[18px] bg-gradient-to-r from-transparent via-[#7042f8]/60 to-transparent blur-[10px]" />
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[50%] h-[40px] bg-gradient-to-r from-transparent via-[#38bdf8]/20 to-transparent blur-[20px]" />

      {/* 4. Gravitational Lensing U-Arc (Silky smooth SVG curvature wrapping below navbar) */}
      <div className="relative top-0 w-[500px] h-[210px] flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Soft Amethyst Halo */}
          <path
            d="M 65 0 C 80 138, 168 185, 250 185 C 332 185, 420 138, 435 0"
            stroke="#7042f8"
            strokeWidth="32"
            strokeLinecap="round"
            className="opacity-60 blur-md"
          />

          {/* Radiant Violet Lensing Ribbon */}
          <path
            d="M 85 0 C 98 124, 175 166, 250 166 C 325 166, 402 124, 415 0"
            stroke="#a855f7"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#elegant-violet-glow)"
          />

          {/* Shimmering Ethereal Magenta Ring */}
          <path
            d="M 102 0 C 114 112, 182 148, 250 148 C 318 148, 386 112, 398 0"
            stroke="#c084fc"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#elegant-magenta-glow)"
          />

          {/* Diamond-White Relativistic Photon Beam */}
          <path
            d="M 115 0 C 126 102, 188 135, 250 135 C 312 135, 374 102, 385 0"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#elegant-white-beam)"
          />

          {/* Whisper-thin Pure Light Filament */}
          <path
            d="M 122 0 C 132 96, 190 128, 250 128 C 310 128, 368 96, 378 0"
            stroke="#f8fafc"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-95"
          />

          <defs>
            <filter id="elegant-violet-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
            <filter id="elegant-magenta-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="elegant-white-beam" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
        </svg>

        {/* Breathing Celestial Accretion Glow */}
        <motion.div
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 w-[380px] h-[160px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(112,66,248,0.06) 60%, transparent 100%)",
            filter: "blur(22px)",
          }}
        />
      </div>
    </div>
  );
}
