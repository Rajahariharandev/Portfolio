"use client";

import React from "react";

export function BlackHole() {
  return (
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[480px] pointer-events-none overflow-hidden z-10 flex items-start justify-center"
      aria-hidden="true"
    >
      {/* Deep Violet Nebula Ambient Glow */}
      <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-b from-[#7042f8]/40 via-[#8b5cf6]/25 to-transparent blur-[110px] rounded-full" />
      
      {/* Horizontal Light Flare Streaks extending left and right across the header */}
      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[120%] h-[3px] bg-gradient-to-r from-transparent via-[#a855f7]/70 to-transparent blur-[1px]" />
      <div className="absolute top-[81px] left-1/2 -translate-x-1/2 w-[85%] h-[12px] bg-gradient-to-r from-transparent via-[#c084fc]/60 to-transparent blur-[6px]" />
      <div className="absolute top-[82px] left-1/2 -translate-x-1/2 w-[60%] h-[35px] bg-gradient-to-r from-transparent via-[#e9d5ff]/50 to-transparent blur-[16px]" />
      <div className="absolute top-[83px] left-1/2 -translate-x-1/2 w-[40%] h-[60px] bg-gradient-to-r from-transparent via-[#7042f8]/70 to-transparent blur-[32px]" />

      {/* SVG Accretion Ring & Gravitational Lens */}
      <div className="relative -top-[70px] w-[540px] h-[320px] flex items-center justify-center">
        {/* Outer Radiant Purple Corona */}
        <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-[#7042f8] via-[#a855f7] to-[#3b0764] blur-[38px] opacity-85" />
        
        {/* Intense Middle Light Ring */}
        <div className="absolute w-[440px] h-[240px] rounded-[50%] border-[14px] border-[#c084fc] blur-[14px] opacity-95 shadow-[0_0_60px_#a855f7]" />
        
        {/* Ultra-Bright Inner Accretion Edge */}
        <div className="absolute w-[420px] h-[220px] rounded-[50%] border-[8px] border-white blur-[4px] shadow-[0_0_40px_#ffffff,0_0_80px_#9333ea]" />
        <div className="absolute w-[410px] h-[210px] rounded-[50%] border-[3px] border-[#f5f3ff] blur-[1px] opacity-100" />

        {/* Central Black Hole Core Void */}
        <div className="absolute w-[360px] h-[180px] rounded-[50%] bg-[#030014] shadow-[inset_0_0_50px_#000000,0_0_20px_#030014]" />

        {/* Lower Accretion Light Arc (curves downward beneath the event horizon) */}
        <svg
          className="absolute w-[480px] h-[260px] -bottom-[10px]"
          viewBox="0 0 480 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 80 Q 240 250 430 80"
            stroke="url(#purple-light-gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow-blur)"
          />
          <path
            d="M 65 85 Q 240 240 415 85"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#core-glow)"
          />
          <defs>
            <linearGradient id="purple-light-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7042f8" stopOpacity="0" />
              <stop offset="25%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="75%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7042f8" stopOpacity="0" />
            </linearGradient>
            <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
            <filter id="core-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
