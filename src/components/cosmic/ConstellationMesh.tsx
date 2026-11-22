"use client";

import React from "react";

export function ConstellationMesh() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none will-change-transform"
      aria-hidden="true"
    >
      {/* 1. Optimized Cosmic Radial Nebula Glows (Native radial gradients, zero GPU stall) */}
      <div
        className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(112, 66, 248, 0.12) 0%, rgba(76, 29, 149, 0.05) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[35%] right-[5%] w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(42, 14, 97, 0.1) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* 2. Geometric Constellation Grid Lines */}
      <svg
        className="w-full h-full opacity-[0.1]"
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
              stroke="rgba(192, 132, 252, 0.3)"
              strokeWidth="0.75"
            />
            <circle cx="0" cy="0" r="1.5" fill="rgba(0, 240, 255, 0.7)" />
            <circle cx="90" cy="90" r="1.2" fill="rgba(168, 85, 247, 0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cosmic-mesh-pattern)" />
      </svg>
    </div>
  );
}
