"use client";

import React from "react";

interface TechNode {
  name: string;
  badge: React.ReactNode;
  top: string;
  left: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  glowColor: string;
}

export function OrbitalRadar() {
  const nodes: TechNode[] = [
    {
      name: "Python",
      badge: (
        <span className="font-extrabold text-[#38bdf8] drop-shadow-[0_0_8px_#38bdf8]">
          Py<span className="text-[#facc15]">.</span>
        </span>
      ),
      top: "16%",
      left: "50%",
      size: "lg",
      glowColor: "rgba(56, 189, 248, 0.5)",
      delay: 0,
    },
    {
      name: "FastAPI",
      badge: (
        <span className="font-extrabold text-[#2dd4bf] flex items-center gap-0.5">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L4 14h6v8l8-12h-6z" />
          </svg>
          <span className="text-[11px] font-sans">API</span>
        </span>
      ),
      top: "25%",
      left: "78%",
      size: "md",
      glowColor: "rgba(45, 212, 191, 0.5)",
      delay: 0.2,
    },

    {
      name: "PM2",
      badge: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/pm2/pm2-original.svg" alt="PM2" width="40" height="40" />
      ),
      top: "44%",
      left: "18%",
      size: "lg",
      glowColor: "rgba(74, 222, 128, 0.5)",
      delay: 0.3,
    },
    {
      name: "Next",
      badge: (
        <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/nextdotjs/default.svg" alt="Next.js" width="24" height="24" />
      ),
      top: "60%",
      left: "18%",
      size: "md",
      glowColor: "rgba(1, 7, 3, 0.5)",
      delay: 0.3,
    },
    {
      name: "Golang (Go)",
      badge: (
        <span className="font-extrabold text-[#00ADD8] tracking-wider text-xs">
          GO
        </span>
      ),
      top: "62%",
      left: "70%",
      size: "md",
      glowColor: "rgba(0, 173, 216, 0.5)",
      delay: 0.4,
    },
    {
      name: "Node",
      badge: (
        <svg xmlns="http://w3.org" viewBox="0 0 256 289" width="30" height="60">
          <path fill="#339933" d="M128 0L0 73.9v147.8L128 295.6l128-73.9V73.9L128 0zm49.3 185.6c-15.6 9-36.9 9.5-53.5 1.3-4.6-2.3-7.6-5.4-7.6-10.4 0-3.1 2.5-5.6 5.6-5.6 2.2 0 4.1 1.2 5.1 3.1 2.4 4.1 7.6 6.8 14.8 7.5 11.4 1.1 23.4-1.8 25.1-9.8 1.5-7.3-5.2-10.7-21.6-14.2-17.8-3.8-33.5-8.9-33.5-26.5 0-16.8 14.3-27.7 35.8-27.7 19.3 0 32.3 7.5 35.1 21.6.6 3.1-1.7 6-4.9 6-2.5 0-4.7-1.7-5.3-4.1-2.1-8.2-10.5-12.5-24.9-12.5-14.6 0-24.3 6.2-24.3 16.2 0 9.1 7.6 12.1 24.1 15.6 19.2 4.1 31.6 10.1 31.6 26.2 0 10.6-5.2 18.6-13.6 23.3zM99.8 164.4c0 16.5-12.1 25.7-29.4 25.7-11.1 0-21.3-3.9-27.9-10.2-2.2-2.1-2.3-5.6-.2-7.8 2.1-2.2 5.6-2.3 7.8-.2 4.7 4.5 12.2 7.2 20.3 7.2 11.2 0 18.3-5.1 18.3-14.7V109c0-3.1 2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6v55.4z" />
        </svg>
      ),
      top: "42%",
      left: "82%",
      size: "lg",
      glowColor: "rgba(74, 222, 128, 0.5)",
      delay: 0.3,
    },

    {
      name: "PostgreSQL",
      badge: (
        <span className="font-bold text-[#60a5fa] text-xs font-mono">
          PG
        </span>
      ),
      top: "33%",
      left: "44%",
      size: "md",
      glowColor: "rgba(96, 165, 250, 0.5)",
      delay: 0.5,
    },
    {
      name: "Oracle DB",
      badge: (
        <span className="font-extrabold text-[#f87171] text-xs">
          ORA
        </span>
      ),
      top: "55%",
      left: "38%",
      size: "md",
      glowColor: "rgba(248, 113, 113, 0.5)",
      delay: 0.2,
    },
    {
      name: "Redis",
      badge: (
        <span className="font-extrabold text-[#ef4444] text-xs font-mono">
          RD
        </span>
      ),
      top: "25%",
      left: "25%",
      size: "md",
      glowColor: "rgba(239, 68, 68, 0.5)",
      delay: 0.15,
    },
    {
      name: "GitLab CI/CD",
      badge: (
        <span className="font-extrabold text-[#fb923c] text-xs flex items-center justify-center">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 5.48 2h.06a.43.43 0 0 1 .41.31l2.4 7.37h7.3l2.4-7.37a.43.43 0 0 1 .41-.31h.06a.42.42 0 0 1 .41.26l2.44 7.51 1.22 3.78a.84.84 0 0 1-.3.94z" />
          </svg>
        </span>
      ),
      top: "72%",
      left: "52%",
      size: "md",
      glowColor: "rgba(251, 146, 60, 0.5)",
      delay: 0.35,
    },
    {
      name: "Go / Goroutines",
      badge: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/go/go-original.svg" alt="Goroutines" width="40" height="40" />
      ),
      top: "87%",
      left: "30%",
      size: "md",
      glowColor: "rgba(241, 12, 70, 0.5)",
      delay: 0.35,
    },

    {
      name: "Singleflight",
      badge: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 L24 24 M10 24 L24 24 M10 38 L24 24" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 24 L38 24" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="10" cy="10" r="5" fill="#F59E0B" />
          <circle cx="10" cy="24" r="5" fill="#EC4899" />
          <circle cx="10" cy="38" r="5" fill="#8B5CF6" />
          <circle cx="24" cy="24" r="6" fill="#6366F1" />
          <circle cx="38" cy="24" r="7" fill="#10B981" />
        </svg>
      ),
      top: "88%",
      left: "55%",
      size: "md",
      glowColor: "rgba(241, 12, 70, 0.5)",
      delay: 0.35,
    },
    {
      name: "Docker",
      badge: (
        <span className="font-extrabold text-[#38bdf8] text-xs flex items-center justify-center">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M13.98 11.08h1.83V9.26h-1.83v1.82zm-2.28 0h1.82V9.26H11.7v1.82zm-2.28 0h1.82V9.26H9.42v1.82zm-2.28 0h1.82V9.26H7.14v1.82zm6.84-2.27h1.83V6.99h-1.83v1.82zm-2.28 0h1.82V6.99H11.7v1.82zm-2.28 0h1.82V6.99H9.42v1.82zm6.84-2.28h1.83V4.71h-1.83v1.82zM21.9 11.2c-.3-.21-.76-.32-1.28-.32-.23 0-.46.02-.69.07-.35-.74-1-1.29-1.87-1.48l-.4-.09-.25.32c-.44.57-.65 1.27-.65 2.06 0 .34.05.67.14.98-.37.19-.89.28-1.55.28H2.52C2.23 13.02 2 13.25 2 13.54c0 3.32 2.01 6.13 5.4 6.78.89.17 1.8.26 2.7.26 4.3 0 8.07-1.74 9.94-4.85.16-.27.87-1.73.91-2.94.02-.45-.16-.94-.55-1.21z" />
          </svg>
        </span>
      ),
      top: "76%",
      left: "72%",
      size: "md",
      glowColor: "rgba(56, 189, 248, 0.5)",
      delay: 0.45,
    },
    {
      name: "Git",
      badge: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/git/git-original.svg" alt="Git" width="40" height="40" />
      ),
      top: "62%",
      left: "89%",
      size: "md",
      glowColor: "rgba(56, 189, 248, 0.5)",
      delay: 0.45,
    },

    {
      name: "AWS",
      badge: (
        <span className="font-extrabold text-[#f59e0b] text-[10px] font-mono">
          aws
        </span>
      ),
      top: "50%",
      left: "58%",
      size: "sm",
      glowColor: "rgba(245, 158, 11, 0.5)",
      delay: 0.25,
    },
    {
      name: "Linux / Bash",
      badge: (
        <span className="font-mono font-bold text-violet-300 text-xs">
          &gt;_
        </span>
      ),
      top: "68%",
      left: "32%",
      size: "sm",
      glowColor: "rgba(168, 85, 247, 0.5)",
      delay: 0.1,
    },
  ];

  return (
    <div
      className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] flex items-center justify-center select-none"
      aria-label="Interactive Orbital Technology Radar"
    >
      {/* 1. Deep Celestial Nebula Glow Behind Radar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7042f8]/25 via-[#2A0E61]/35 to-[#00f0ff]/10 blur-2xl pointer-events-none" />

      {/* 2. Expanding Sonar Ping Wave Animation (Pure CSS GPU keyframes) */}
      <div className="absolute w-full h-full rounded-full border border-cyan-400/40 pointer-events-none animate-ping opacity-25" />

      {/* 3. Rotating Conical Radar Beam (Pure CSS compositor thread) */}
      <div
        className="absolute w-[94%] h-[94%] rounded-full pointer-events-none animate-[spin_10s_linear_infinite] will-change-transform"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0, 240, 255, 0.2) 0deg, rgba(112, 66, 248, 0.1) 35deg, transparent 70deg, transparent 360deg)",
        }}
      />

      {/* 4. Concentric Orbital Rings */}
      {/* Outer Orbit */}
      <div className="absolute w-[94%] h-[94%] rounded-full border border-violet-500/25 shadow-[0_0_15px_rgba(112,66,248,0.15)]" />

      {/* Middle Orbit (Slow Counter-rotating dashed ring) */}
      <div className="absolute w-[72%] h-[72%] rounded-full border border-violet-400/35 border-dashed animate-[spin_60s_linear_infinite_reverse] will-change-transform" />

      {/* Inner Orbit */}
      <div className="absolute w-[48%] h-[48%] rounded-full border border-violet-400/40 shadow-[inset_0_0_15px_rgba(112,66,248,0.2)]" />

      {/* Center Core Radar Hub */}
      <div className="absolute w-[20%] h-[20%] rounded-full border border-cyan-400/50 bg-[#0e0730]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.4),inset_0_0_15px_rgba(112,66,248,0.4)]">
        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f0ff] animate-ping" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
      </div>

      {/* Crosshair Radar Axes with Glowing Center Gradients */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

      {/* 5. Floating Orbital Tech Cards (GPU-accelerated pure CSS hover & float) */}
      {nodes.map((node, idx) => {
        const sizeClasses = {
          sm: "w-9 h-9",
          md: "w-12 h-12",
          lg: "w-14 h-14",
        }[node.size || "md"];

        return (
          <div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group will-change-transform transition-transform duration-200 hover:scale-125 hover:z-50"
            style={{
              top: node.top,
              left: node.left,
              animation: `gentleFloat 3.5s ease-in-out infinite`,
              animationDelay: `${idx * 0.25}s`,
            }}
          >
            <div
              className={`${sizeClasses} rounded-2xl bg-[#09051f]/90 border border-[#7042f8]/50 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-200 group-hover:border-cyan-400`}
              style={{
                boxShadow: `0 0 14px ${node.glowColor}, inset 0 0 6px rgba(255,255,255,0.05)`,
              }}
            >
              {node.badge}
            </div>

            {/* Tooltip Card on Hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-0.5 rounded-full bg-[#030014]/95 border border-cyan-400/60 text-[10px] font-sans font-semibold text-cyan-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-md">
              {node.name}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes gentleFloat {
          0%,
          100% {
            transform: translate3d(-50%, -50%, 0) translateY(0);
          }
          50% {
            transform: translate3d(-50%, -50%, 0) translateY(-6px);
          }
        }
      `}</style>
    </div>
  );
}
