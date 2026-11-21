"use client";

import React from "react";

export function ConstellationMesh() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Cosmic Radial Nebula Spotlights */}
      <div className="absolute top-[20%] left-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-[#7042f8]/12 via-[#4c1d95]/8 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[38%] right-[5%] w-[650px] h-[650px] bg-gradient-to-bl from-[#00f0ff]/8 via-[#2a0e61]/18 to-transparent blur-[150px] rounded-full" />
      <div className="absolute bottom-[8%] left-[25%] w-[550px] h-[550px] bg-gradient-to-r from-[#9333ea]/12 to-transparent blur-[130px] rounded-full" />

      {/* 2. Geometric Constellation Grid Lines */}
      <svg
        className="w-full h-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="cosmic-mesh-pattern"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 90 0 L 0 0 0 90"
              fill="none"
              stroke="rgba(192, 132, 252, 0.35)"
              strokeWidth="0.75"
            />
            <circle cx="0" cy="0" r="1.5" fill="rgba(0, 240, 255, 0.75)" />
            <circle cx="90" cy="90" r="1.2" fill="rgba(168, 85, 247, 0.65)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cosmic-mesh-pattern)" />
      </svg>
    </div>
  );
}
