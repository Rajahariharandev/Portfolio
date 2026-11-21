"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Zap, Sparkles, Magnet, Orbit, Activity, Flame } from "lucide-react";

export type CursorMode =
  | "plasma"
  | "stardust"
  | "magnetic"
  | "orbit"
  | "glitch"
  | "comet";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  angle?: number;
  rotSpeed?: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  color: string;
}

const MODES: {
  id: CursorMode;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  color: string;
}[] = [
    { id: "plasma", name: "Plasma", icon: Zap, desc: "Pulsing energy core with bio-luminescent embers", color: "#a855f7" },
    { id: "stardust", name: "Stardust", icon: Sparkles, desc: "Twinkling constellation crystals & celestial dust", color: "#facc15" },
    { id: "magnetic", name: "Magnetic", icon: Magnet, desc: "Gravitational attraction to interactive elements", color: "#00f0ff" },
    { id: "orbit", name: "Orbit", icon: Orbit, desc: "Continuously revolving gyroscopic quantum rings", color: "#38bdf8" },
    { id: "glitch", name: "Glitch", icon: Activity, desc: "RGB channel separation with digital matrix jitter", color: "#ff0055" },
    { id: "comet", name: "Comet", icon: Flame, desc: "Burning celestial meteorite with aerodynamic trail", color: "#38bdf8" },
  ];

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>("comet");
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Position & physics state in refs for 60fps/120fps direct rendering (zero React re-renders)
  const posRef = useRef({
    x: -100,
    y: -100,
    targetX: -100,
    targetY: -100,
    vx: 0,
    vy: 0,
    visible: false,
  });

  const magneticRef = useRef<{
    x: number;
    y: number;
    width: number;
    height: number;
    active: boolean;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    active: false,
  });

  const modeRef = useRef<CursorMode>("comet");
  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef<number>(0);

  const selectMode = useCallback((newMode: CursorMode) => {
    setCursorMode(newMode);
    modeRef.current = newMode;
    particlesRef.current = [];
  }, []);

  // Mount check
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isFinePointer && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setMounted(true);
        document.documentElement.classList.add("has-custom-cursor");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Main Canvas & Pointer Loop (Runs once mounted is true)
  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Handle high-DPI crisp canvas sizing
    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let lastX = -100;
    let lastY = -100;
    let lastTime = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      const p = posRef.current;
      p.visible = true;
      p.targetX = e.clientX;
      p.targetY = e.clientY;

      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      p.vx = (e.clientX - lastX) / dt;
      p.vy = (e.clientY - lastY) / dt;
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      // Magnetic mode: inspect interactive elements
      if (modeRef.current === "magnetic") {
        const interactiveElements = document.querySelectorAll(
          "button, a, input, textarea, select, [role='button']"
        );
        let closestDist = 95;
        let found = false;

        interactiveElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dist = Math.hypot(e.clientX - cx, e.clientY - cy);

          if (dist < closestDist) {
            closestDist = dist;
            magneticRef.current = {
              x: cx,
              y: cy,
              width: rect.width,
              height: rect.height,
              active: true,
            };
            found = true;
          }
        });

        if (!found) {
          magneticRef.current.active = false;
        }
      } else {
        magneticRef.current.active = false;
      }

      // Check hover on interactive items
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
        );
        setIsHovered(interactive);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const color =
        modeRef.current === "plasma"
          ? "#a855f7"
          : modeRef.current === "stardust"
            ? "#facc15"
            : modeRef.current === "magnetic"
              ? "#00f0ff"
              : modeRef.current === "orbit"
                ? "#38bdf8"
                : modeRef.current === "glitch"
                  ? "#ff0055"
                  : "#00f0ff";

      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 65,
        opacity: 0.9,
        color,
      });

      // Spawn click particles
      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 4 + 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          life: 1,
          maxLife: Math.random() * 20 + 15,
          size: Math.random() * 4 + 2,
          color,
        });
      }
    };

    const onMouseLeave = () => {
      posRef.current.visible = false;
      document.documentElement.classList.remove("has-custom-cursor");
    };

    const onMouseEnter = () => {
      posRef.current.visible = true;
      document.documentElement.classList.add("has-custom-cursor");
    };

    // Keyboard 'C' key to cycle mode
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "c") {
        const idx = MODES.findIndex((m) => m.id === modeRef.current);
        const next = MODES[(idx + 1) % MODES.length].id;
        selectMode(next);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("keydown", onKeyDown);

    // ==========================================
    // RequestAnimationFrame Animation Loop
    // ==========================================
    const render = () => {
      const p = posRef.current;
      const mode = modeRef.current;

      // Clear canvas using logical dimensions
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Smooth lag / interpolation
      if (mode === "magnetic" && magneticRef.current.active) {
        p.x += (magneticRef.current.x - p.x) * 0.32;
        p.y += (magneticRef.current.y - p.y) * 0.32;
      } else {
        const factor = mode === "plasma" ? 0.38 : mode === "comet" ? 0.42 : 0.48;
        p.x += (p.targetX - p.x) * factor;
        p.y += (p.targetY - p.y) * factor;
      }

      // 1. Direct DOM Cursor update (Always visible!)
      if (cursorRef.current) {
        if (p.visible && p.x > -50 && p.y > -50) {
          cursorRef.current.style.opacity = "1";
          cursorRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
        } else {
          cursorRef.current.style.opacity = "0";
        }
      }

      // 2. Render Ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += 2.5;
        r.opacity = Math.max(0, 1 - r.radius / r.maxRadius);

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = r.opacity;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = r.color;
        ctx.stroke();
        ctx.restore();

        if (r.radius >= r.maxRadius) {
          ripplesRef.current.splice(i, 1);
        }
      }

      // 3. Emit Mode-Specific Canvas Particles
      if (p.visible) {
        const spd = Math.hypot(p.vx, p.vy);

        if (mode === "plasma") {
          // Floating bio-luminescent embers
          if (spd > 0.05 || Math.random() < 0.35) {
            particlesRef.current.push({
              x: p.x + (Math.random() * 10 - 5),
              y: p.y + (Math.random() * 10 - 5),
              vx: (Math.random() - 0.5) * 1.6,
              vy: (Math.random() - 0.5) * 1.6 - 0.5,
              life: 1,
              maxLife: Math.random() * 25 + 18,
              size: Math.random() * 3.5 + 1.5,
              color: Math.random() > 0.4 ? "#a855f7" : "#00f0ff",
            });
          }
        } else if (mode === "stardust") {
          // Twinkling crystal stars
          if (spd > 0.08 || Math.random() < 0.4) {
            const colors = ["#facc15", "#ffffff", "#f472b6", "#c084fc", "#38bdf8"];
            particlesRef.current.push({
              x: p.x + (Math.random() * 14 - 7),
              y: p.y + (Math.random() * 14 - 7),
              vx: (Math.random() - 0.5) * 1.8,
              vy: (Math.random() - 0.5) * 1.8 + 0.3,
              life: 1,
              maxLife: Math.random() * 30 + 20,
              size: Math.random() * 5 + 2.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              angle: Math.random() * Math.PI,
              rotSpeed: (Math.random() - 0.5) * 0.1,
            });
          }
        } else if (mode === "comet") {
          // Dense aerodynamic meteor tail
          const emitCount = spd > 0.1 ? 4 : 1;
          for (let i = 0; i < emitCount; i++) {
            const revAngle = Math.atan2(p.vy, p.vx) + Math.PI + (Math.random() - 0.5) * 0.45;
            const emberSpd = Math.random() * (spd * 0.6 + 2);
            particlesRef.current.push({
              x: p.x,
              y: p.y,
              vx: Math.cos(revAngle) * emberSpd,
              vy: Math.sin(revAngle) * emberSpd,
              life: 1,
              maxLife: Math.random() * 26 + 18,
              size: Math.random() * 4.5 + 2,
              color: Math.random() > 0.3 ? "#00f0ff" : "#60a5fa",
            });
          }
        } else if (mode === "glitch") {
          // Digital scanline noise fragments
          if (Math.random() < 0.4) {
            ctx.save();
            ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
            ctx.fillRect(p.x - 16, p.y + (Math.random() * 24 - 12), 32, 1.5);
            ctx.fillStyle = "rgba(255, 0, 85, 0.5)";
            ctx.fillRect(p.x - 12, p.y + (Math.random() * 24 - 12), 24, 1.5);
            ctx.restore();
          }
        } else if (mode === "magnetic" && magneticRef.current.active) {
          // Dashed magnetic flux line between target and pointer
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p.targetX, p.targetY);
          ctx.lineTo(magneticRef.current.x, magneticRef.current.y);
          ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.restore();
        }
      }

      // 4. Update and Draw Active Particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const pt = particlesRef.current[i];
        pt.x += pt.vx;
        pt.y += pt.vy;
        pt.life -= 1 / pt.maxLife;

        if (pt.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, pt.life);

        if (mode === "stardust" && pt.angle !== undefined) {
          // Draw rotated 4-point crystal star
          pt.angle += pt.rotSpeed || 0.05;
          ctx.translate(pt.x, pt.y);
          ctx.rotate(pt.angle);
          ctx.beginPath();
          const sz = pt.size * pt.life;
          ctx.moveTo(0, -sz);
          ctx.lineTo(sz * 0.3, -sz * 0.3);
          ctx.lineTo(sz, 0);
          ctx.lineTo(sz * 0.3, sz * 0.3);
          ctx.lineTo(0, sz);
          ctx.lineTo(-sz * 0.3, sz * 0.3);
          ctx.lineTo(-sz, 0);
          ctx.lineTo(-sz * 0.3, -sz * 0.3);
          ctx.closePath();
          ctx.fillStyle = pt.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = pt.color;
          ctx.fill();
        } else {
          // Circular particle with glow
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, Math.max(0.5, pt.size * pt.life), 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = pt.color;
          ctx.fill();
        }

        ctx.restore();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [mounted, selectMode]);

  if (!mounted) return null;

  const currentModeInfo = MODES.find((m) => m.id === cursorMode) || MODES[0];

  return (
    <>
      {/* 1. Fullscreen Canvas for Smooth Particle Trails & Shockwaves */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998] select-none"
      />

      {/* 2. Direct DOM Cursor Marker (Rock-Solid, Always 100% Visible & Centered) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-150"
        style={{ opacity: 0 }}
      >
        {/* MODE 1: PLASMA */}
        {cursorMode === "plasma" && (
          <div className="relative flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-500/40 via-cyan-400/30 to-purple-600/40 blur-[5px] animate-pulse" />
            <div
              className={`absolute rounded-full border border-cyan-400/80 shadow-[0_0_15px_#00f0ff,inset_0_0_8px_#a855f7] transition-all duration-200 ${isHovered ? "w-8 h-8 scale-110" : "w-6 h-6"
                }`}
            />
            <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_16px_#00f0ff]" />
          </div>
        )}

        {/* MODE 2: STARDUST */}
        {cursorMode === "stardust" && (
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center animate-[spin_8s_linear_infinite]">
              <svg
                className={`text-amber-300 drop-shadow-[0_0_10px_#facc15] transition-all ${isHovered ? "w-8 h-8 scale-125" : "w-6 h-6"
                  }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
              </svg>
            </div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        )}

        {/* MODE 3: MAGNETIC */}
        {cursorMode === "magnetic" && (
          <div className="relative flex items-center justify-center">
            <div
              className={`rounded-full border border-cyan-400/90 shadow-[0_0_12px_#00f0ff] transition-all duration-200 ${isHovered ? "w-9 h-9 scale-110" : "w-7 h-7"
                }`}
            />
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-cyan-300" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-cyan-300" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-cyan-300" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-cyan-300" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
          </div>
        )}

        {/* MODE 4: ORBIT */}
        {cursorMode === "orbit" && (
          <div className="relative flex items-center justify-center">
            <div className="absolute w-9 h-3.5 rounded-full border border-cyan-400/80 rotate-45 animate-[spin_3s_linear_infinite] shadow-[0_0_8px_#00f0ff]" />
            <div className="absolute w-9 h-3.5 rounded-full border border-violet-400/80 -rotate-45 animate-[spin_4s_linear_infinite_reverse] shadow-[0_0_8px_#a855f7]" />
            <div
              className={`rounded-full bg-white shadow-[0_0_10px_#ffffff,0_0_18px_#38bdf8] transition-all ${isHovered ? "w-3 h-3 scale-125" : "w-2.5 h-2.5"
                }`}
            />
          </div>
        )}

        {/* MODE 5: GLITCH */}
        {cursorMode === "glitch" && (
          <div className="relative flex items-center justify-center">
            <div className="absolute w-6 h-6 border border-cyan-400 -translate-x-[2px] -translate-y-[1px] opacity-85 shadow-[0_0_8px_#00f0ff]" />
            <div className="absolute w-6 h-6 border border-rose-500 translate-x-[2px] translate-y-[1px] opacity-85 shadow-[0_0_8px_#ff0055]" />
            <div className="w-1.5 h-1.5 bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
        )}

        {/* MODE 6: COMET */}
        {cursorMode === "comet" && (
          <div className="relative flex items-center justify-center">
            <div
              className={`rounded-full bg-gradient-to-tr from-cyan-400 via-white to-blue-500 shadow-[0_0_16px_#00f0ff,0_0_28px_#3b82f6] transition-all ${isHovered ? "w-5 h-5 scale-110" : "w-4 h-4"
                }`}
            />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        )}
      </div>

      {/* 3. Floating 6-Mode Switcher HUD (Bottom-Right) */}
      <aside
        aria-label="Cursor animation style switcher"
        className="fixed bottom-5 right-5 z-[9990] flex items-center gap-1.5 p-1.5 rounded-full bg-[#07031e]/90 border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] select-none transition-all"
      >
        <span className="text-[11px] font-mono text-slate-300 font-semibold px-2 hidden sm:inline flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full inline-block shadow-sm"
            style={{ backgroundColor: currentModeInfo.color }}
          />
          <span>{currentModeInfo.name}</span>
        </span>

        {MODES.map((m) => {
          const Icon = m.icon;
          const isActive = cursorMode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => selectMode(m.id)}
              className={`p-2 rounded-full transition-all flex items-center justify-center cursor-pointer relative group ${isActive
                  ? "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-[0_0_16px_rgba(112,66,248,0.7),inset_0_1px_0_0_rgba(255,255,255,0.3)] scale-105"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              title={`${m.name}: ${m.desc} (Press 'C' to cycle)`}
              aria-label={`Select ${m.name} cursor mode`}
            >
              <Icon className="w-4 h-4" />

              {/* Hover Tooltip */}
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#060317] border border-white/[0.12] text-[10px] font-mono text-cyan-200 px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none shadow-xl">
                {m.name}
              </span>
            </button>
          );
        })}
      </aside>
    </>
  );
}
