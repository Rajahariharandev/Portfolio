"use client";

import React from "react";
import { motion } from "motion/react";

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
      name: "Node",
      badge: (
        <span className="font-bold text-[#4ade80] font-serif text-sm tracking-tighter">
          Node
        </span>
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
        <span className="font-bold text-[#cccccc] font-serif text-sm tracking-tighter">
          Next
        </span>
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
      name: "Node.js",
      badge: (
        <span className="font-bold text-[#22c55e] text-xs">
          JS
        </span>
      ),
      top: "43%",
      left: "82%",
      size: "lg",
      glowColor: "rgba(34, 197, 94, 0.5)",
      delay: 0.1,
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
      top: "13%",
      left: "36%",
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
      name: "AWS Cloud",
      badge: (
        <span className="font-extrabold text-[#f59e0b] text-[10px] font-mono">
          aws
        </span>
      ),
      top: "58%",
      left: "88%",
      size: "sm",
      glowColor: "rgba(245, 158, 11, 0.5)",
      delay: 0.6,
    },
    {
      name: "Linux CLI",
      badge: (
        <span className="font-extrabold text-[#e2e8f0] text-xs font-mono">
          &gt;_
        </span>
      ),
      top: "86%",
      left: "48%",
      size: "sm",
      glowColor: "rgba(226, 232, 240, 0.4)",
      delay: 0.5,
    },
  ];

  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* 1. Deep Celestial Nebula Radial Glow Behind Radar */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7042f8]/30 via-[#2A0E61]/45 to-[#00f0ff]/10 blur-3xl pointer-events-none" />

      {/* 2. Expanding Sonar Ping Wave Animation */}
      <motion.div
        animate={{ scale: [0.3, 1.05], opacity: [0.7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full border border-cyan-400/40 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [0.2, 0.8], opacity: [0.8, 0] }}
        transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-full h-full rounded-full border border-violet-400/40 pointer-events-none"
      />

      {/* 3. Rotating Conical Radar Beam */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[94%] h-[94%] rounded-full pointer-events-none"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(0, 240, 255, 0.22) 0deg, rgba(112, 66, 248, 0.12) 35deg, transparent 70deg, transparent 360deg)",
        }}
      />

      {/* 4. Concentric Orbital Rings */}
      {/* Outer Orbit */}
      <div className="absolute w-[94%] h-[94%] rounded-full border border-violet-500/25 shadow-[0_0_20px_rgba(112,66,248,0.15)]" />

      {/* Middle Orbit (Slow Counter-rotating dashed ring) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute w-[72%] h-[72%] rounded-full border border-violet-400/35 border-dashed"
      />

      {/* Inner Orbit */}
      <div className="absolute w-[48%] h-[48%] rounded-full border border-violet-400/40 shadow-[inset_0_0_15px_rgba(112,66,248,0.2)]" />

      {/* Center Core Radar Hub */}
      <div className="absolute w-[22%] h-[22%] rounded-full border border-cyan-400/50 bg-[#0e0730]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_35px_rgba(0,240,255,0.4),inset_0_0_15px_rgba(112,66,248,0.4)]">
        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#00f0ff] animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
      </div>

      {/* Crosshair Radar Axes with Glowing Center Gradients */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
      <div className="absolute w-[90%] h-[1px] rotate-45 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute w-[90%] h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      {/* 5. Floating Orbital Tech Cards */}
      {nodes.map((node) => {
        const sizeClasses = {
          sm: "w-10 h-10",
          md: "w-13 h-13",
          lg: "w-15 h-15",
        }[node.size || "md"];

        return (
          <motion.div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: node.top, left: node.left }}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 3.2 + (node.delay || 0) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay || 0,
            }}
            whileHover={{ scale: 1.3, zIndex: 50 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`${sizeClasses} rounded-2xl bg-[#09051f]/90 border border-[#7042f8]/50 backdrop-blur-xl flex items-center justify-center shadow-xl transition-all duration-300 group-hover:border-cyan-400 group-hover:scale-105`}
              style={{
                boxShadow: `0 0 16px ${node.glowColor}, inset 0 0 8px rgba(255,255,255,0.05)`,
              }}
            >
              {node.badge}
            </div>

            {/* Glowing Tooltip Card on Hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full bg-[#030014]/95 border border-cyan-400/60 text-[11px] font-sans font-semibold text-cyan-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              {node.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
