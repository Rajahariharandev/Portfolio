"use client";

import React from "react";
import { motion } from "motion/react";
import { Database, Server, Terminal } from "lucide-react";

interface TechNode {
  name: string;
  icon?: React.ReactNode;
  text?: string;
  top: string;
  left: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
  color?: string;
}

export function OrbitalRadar() {
  const nodes: TechNode[] = [
    { name: "Go", text: "GO", top: "18%", left: "50%", size: "lg", color: "#00ADD8", delay: 0 },
    { name: "JavaScript", text: "JS", top: "26%", left: "76%", size: "md", color: "#F7DF1E", delay: 0.2 },
    { name: "TypeScript", text: "TS", top: "62%", left: "68%", size: "md", color: "#3178C6", delay: 0.4 },
    { name: "Next.js", text: "▲", top: "44%", left: "78%", size: "lg", color: "#FFFFFF", delay: 0.1 },
    { name: "Oracle DB", icon: <Database className="w-5 h-5 text-rose-400" />, top: "42%", left: "20%", size: "lg", delay: 0.3 },
    { name: "PostgreSQL", text: "PG", top: "35%", left: "44%", size: "md", color: "#336791", delay: 0.5 },
    { name: "Redis", text: "RD", top: "54%", left: "38%", size: "md", color: "#DC382D", delay: 0.2 },
    { name: "AWS", text: "aws", top: "58%", left: "86%", size: "sm", color: "#FF9900", delay: 0.6 },
    { name: "Docker", icon: <Server className="w-4 h-4 text-sky-400" />, top: "72%", left: "52%", size: "md", delay: 0.3 },
    { name: "GitHub", text: "GH", top: "75%", left: "70%", size: "md", color: "#E6EDF3", delay: 0.4 },
    { name: "Linux", icon: <Terminal className="w-4 h-4 text-amber-300" />, top: "86%", left: "48%", size: "sm", delay: 0.5 },
    { name: "React", text: "⚛", top: "14%", left: "40%", size: "md", color: "#61DAFB", delay: 0.1 },
  ];

  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background Ambient Purple Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7042f8]/20 via-[#2A0E61]/35 to-transparent blur-3xl pointer-events-none" />

      {/* Outer Orbit Circle */}
      <div className="absolute w-[94%] h-[94%] rounded-full border border-violet-500/20" />

      {/* Middle Orbit Circle */}
      <div className="absolute w-[72%] h-[72%] rounded-full border border-violet-500/25 border-dashed" />

      {/* Inner Orbit Circle */}
      <div className="absolute w-[48%] h-[48%] rounded-full border border-violet-500/35" />

      {/* Core Center Pulse Circle */}
      <div className="absolute w-[24%] h-[24%] rounded-full border border-violet-400/40 bg-violet-950/20 flex items-center justify-center shadow-[0_0_30px_rgba(112,66,248,0.35)]">
        <div className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_#a855f7] animate-pulse" />
      </div>

      {/* Crosshair Axes (Radar grid lines) */}
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute w-[90%] h-[1px] rotate-45 bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />
      <div className="absolute w-[90%] h-[1px] -rotate-45 bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />

      {/* Floating Tech Badges on Orbital Paths */}
      {nodes.map((node) => {
        const sizeClasses = {
          sm: "w-9 h-9 text-xs",
          md: "w-12 h-12 text-sm",
          lg: "w-14 h-14 text-base",
        }[node.size || "md"];

        return (
          <motion.div
            key={node.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: node.top, left: node.left }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + (node.delay || 0) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay || 0,
            }}
          >
            <div
              className={`${sizeClasses} rounded-2xl bg-[#0c0728]/85 border border-[#7042f8]/40 backdrop-blur-md flex items-center justify-center font-mono font-bold shadow-lg shadow-[#030014] group-hover:border-[#00f0ff] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-all duration-300`}
              style={{ color: node.color || "#ffffff" }}
              title={node.name}
            >
              {node.icon || node.text}
            </div>

            {/* Hover tooltip label */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-0.5 rounded bg-[#030014]/90 border border-violet-500/40 text-[10px] font-sans text-violet-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-md">
              {node.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
