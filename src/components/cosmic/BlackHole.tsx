"use client";

import React from "react";
import { motion } from "motion/react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-0 right-0 w-full h-[360px] pointer-events-none overflow-visible z-10 flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Atmospheric Nebula Bloom (Full-width, zero-clipping ambient glow) */}
      <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[1200px] h-[360px] bg-gradient-to-b from-[#7042f8]/40 via-[#4c1d95]/20 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[700px] h-[240px] bg-gradient-to-b from-[#c084fc]/30 via-[#3b0764]/20 to-transparent blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[460px] h-[140px] bg-cyan-400/15 blur-[75px] rounded-full pointer-events-none" />

      {/* 2. Soft Celestial Crown Light (Illuminating the navbar from behind, NOT cutting through it) */}
      <div className="absolute top-[15px] left-1/2 -translate-x-1/2 w-[680px] h-[75px] bg-gradient-to-r from-transparent via-[#a855f7]/40 to-transparent blur-[35px] pointer-events-none" />
      <div className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[480px] h-[40px] bg-gradient-to-r from-transparent via-[#00f0ff]/25 to-transparent blur-[25px] pointer-events-none" />

      {/* 3. New Elegant Celestial Singularity Arc (Wide, Majestic, Flowing Horizon) */}
      <div className="relative top-0 w-full max-w-[1100px] h-[220px] flex items-center justify-center overflow-visible">
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1000 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outermost Celestial Corona Ribbon */}
          <path
            d="M 50 0 C 180 160, 340 205, 500 205 C 660 205, 820 160, 950 0"
            stroke="url(#celestial-corona-grad)"
            strokeWidth="38"
            strokeLinecap="round"
            className="opacity-50 blur-xl"
          />

          {/* Middle Radiant Violet Relativistic Arc */}
          <path
            d="M 120 0 C 230 145, 360 185, 500 185 C 640 185, 770 145, 880 0"
            stroke="url(#celestial-arc-violet)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="url(#crown-glow-soft)"
          />

          {/* Ethereal Magenta Horizon Ring */}
          <path
            d="M 180 0 C 280 135, 385 168, 500 168 C 615 168, 720 135, 820 0"
            stroke="url(#celestial-arc-magenta)"
            strokeWidth="7"
            strokeLinecap="round"
            filter="url(#crown-glow-core)"
          />

          {/* Diamond-White Core Photon Beam */}
          <path
            d="M 220 0 C 310 125, 400 155, 500 155 C 600 155, 690 125, 780 0"
            stroke="url(#celestial-white-filament)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#crown-glow-sharp)"
          />

          {/* Razor-thin Pure Light Filament */}
          <path
            d="M 250 0 C 330 120, 410 148, 500 148 C 590 148, 670 120, 750 0"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-95"
          />

          <defs>
            <linearGradient id="celestial-corona-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7042f8" stopOpacity="0" />
              <stop offset="25%" stopColor="#7042f8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="75%" stopColor="#7042f8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7042f8" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="celestial-arc-violet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7042f8" stopOpacity="0" />
              <stop offset="20%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="1" />
              <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7042f8" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="celestial-arc-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="25%" stopColor="#d946ef" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#f0abfc" stopOpacity="1" />
              <stop offset="75%" stopColor="#d946ef" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="celestial-white-filament" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="20%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="crown-glow-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="crown-glow-core" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <filter id="crown-glow-sharp" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
          </defs>
        </svg>

        {/* Ambient Pulsing Singularity Halo */}
        <motion.div
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.98, 1.02, 0.98] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 w-[520px] h-[190px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, rgba(0,240,255,0.06) 60%, transparent 100%)",
            filter: "blur(26px)",
          }}
        />
      </div>

      {/* 4. Downward Volumetric God Rays into Hero text */}
      <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-300/30 via-purple-900/10 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}
