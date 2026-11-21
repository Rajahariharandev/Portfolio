"use client";

import React from "react";
import { motion } from "motion/react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[580px] pointer-events-none overflow-hidden z-10 flex items-start justify-center select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Celestial Nebula Atmospheric Glows */}
      <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 w-[1200px] h-[450px] bg-gradient-to-b from-[#7042f8]/50 via-[#8b5cf6]/25 to-transparent blur-[140px] rounded-full" />
      <div className="absolute -top-[60px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#c084fc]/45 via-[#4c1d95]/35 to-transparent blur-[90px] rounded-full" />
      <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[450px] h-[180px] bg-cyan-400/20 blur-[75px] rounded-full" />

      {/* 2. Downward Volumetric God Rays into Hero text */}
      <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[950px] h-[420px] opacity-45 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400/35 via-purple-900/15 to-transparent blur-2xl" />

      {/* 3. Blinding Full-Width Horizontal Lens Flare Beams (Matches Reference Design) */}
      <div className="absolute top-[82px] left-1/2 -translate-x-1/2 w-[140%] h-[2.5px] bg-gradient-to-r from-transparent via-[#f5f3ff] to-transparent shadow-[0_0_15px_#ffffff,0_0_30px_#c084fc,0_0_50px_#7042f8]" />
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[95%] h-[10px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent blur-[4px]" />
      <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[75%] h-[28px] bg-gradient-to-r from-transparent via-[#7042f8]/75 to-transparent blur-[16px]" />
      <div className="absolute top-[68px] left-1/2 -translate-x-1/2 w-[48%] h-[60px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent blur-[30px]" />

      {/* 4. The Accretion Disk & Event Horizon Assembly */}
      <div className="relative -top-[90px] w-[640px] h-[370px] flex items-center justify-center">
        {/* Outer Plasma Corona Haze */}
        <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-[#7042f8] via-[#a855f7] to-[#1e0847] blur-[42px] opacity-95 animate-pulse" />

        {/* Radiant Violet Energy Rim */}
        <div className="absolute w-[530px] h-[280px] rounded-[50%] border-[18px] border-[#a855f7] blur-[15px] opacity-95 shadow-[0_0_85px_#7042f8]" />

        {/* Shimmering Secondary Ring */}
        <div className="absolute w-[480px] h-[245px] rounded-[50%] border-[11px] border-[#c084fc] blur-[7px] opacity-90 shadow-[0_0_55px_#a855f7]" />

        {/* Ultra-Bright White-Hot Relativistic Beaming Edge */}
        <div className="absolute w-[446px] h-[224px] rounded-[50%] border-[8px] border-white blur-[2.5px] shadow-[0_0_40px_#ffffff,0_0_75px_#9333ea,0_0_120px_#7042f8]" />
        <div className="absolute w-[438px] h-[216px] rounded-[50%] border-[3px] border-[#fdf4ff] blur-[0.5px] opacity-100" />

        {/* The Event Horizon (Dark Cosmic Singularity Void) */}
        <div className="absolute w-[384px] h-[186px] rounded-[50%] bg-[#030014] shadow-[inset_0_0_70px_#000000,0_0_35px_#030014]" />

        {/* Lower Accretion Light Arc (Gravitationally curved light beaming below the black hole) */}
        <svg
          className="absolute w-[580px] h-[320px] -bottom-[24px]"
          viewBox="0 0 580 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 35 90 Q 290 310 545 90"
            stroke="url(#accretion-gradient)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#glow-blur)"
          />
          <path
            d="M 55 95 Q 290 295 525 95"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#core-glow)"
          />
          <defs>
            <linearGradient id="accretion-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7042f8" stopOpacity="0" />
              <stop offset="18%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="82%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7042f8" stopOpacity="0" />
            </linearGradient>
            <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
          </defs>
        </svg>

        {/* Central Singularity Pulse Center */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[446px] h-[224px] rounded-[50%] pointer-events-none"
          style={{
            boxShadow: "0 0 50px rgba(255, 255, 255, 0.45), inset 0 0 35px rgba(112, 66, 248, 0.65)",
          }}
        />
      </div>
    </div>
  );
}
