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

const MODES: { id: CursorMode; name: string; icon: React.ComponentType<{ className?: string }>; desc: string; color: string }[] = [
  { id: "plasma", name: "Plasma", icon: Zap, desc: "Pulsing energy core with bio-luminescent embers", color: "#a855f7" },
  { id: "stardust", name: "Stardust", icon: Sparkles, desc: "Twinkling constellation crystals & celestial dust", color: "#facc15" },
  { id: "magnetic", name: "Magnetic", icon: Magnet, desc: "Gravitational attraction to interactive elements", color: "#00f0ff" },
  { id: "orbit", name: "Orbit", icon: Orbit, desc: "Continuously revolving gyroscopic quantum rings", color: "#38bdf8" },
  { id: "glitch", name: "Glitch", icon: Activity, desc: "RGB channel separation with digital matrix jitter", color: "#ff0055" },
  { id: "comet", name: "Comet", icon: Flame, desc: "Burning celestial meteorite with aerodynamic trail", color: "#38bdf8" },
];

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>("plasma");
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Mouse & Physics state kept in refs for 60fps/120fps zero-render loop
  const mouseRef = useRef({ x: -100, y: -100, targetX: -100, targetY: -100, vx: 0, vy: 0, visible: false });
  const magneticTargetRef = useRef<{ x: number; y: number; width: number; height: number; active: boolean }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    active: false,
  });

  const modeRef = useRef<CursorMode>(cursorMode);

  const particlesRef = useRef<Particle[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const animFrameRef = useRef<number>(0);
  const orbitAnglesRef = useRef({ r1: 0, r2: 0, r3: 0 });
  const glitchJitterRef = useRef({ x: 0, y: 0, frame: 0 });

  // Switch mode callback
  const selectMode = useCallback((newMode: CursorMode) => {
    setCursorMode(newMode);
    modeRef.current = newMode;
    particlesRef.current = [];
  }, []);

  useEffect(() => {
    // 1. Device and Motion Checks
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    // Set enabled safely without React cascading render warnings
    const enableTimer = setTimeout(() => {
      setEnabled(true);
      document.documentElement.classList.add("has-custom-cursor");
    }, 0);

    const canvas = canvasRef.current;
    if (!canvas) return () => clearTimeout(enableTimer);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return () => clearTimeout(enableTimer);

    // Canvas Sizing
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track Mouse
    let prevX = -100;
    let prevY = -100;
    let prevTime = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.visible = true;
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;

      const now = performance.now();
      const dt = Math.max(1, now - prevTime);
      mouseRef.current.vx = (e.clientX - prevX) / dt;
      mouseRef.current.vy = (e.clientY - prevY) / dt;
      prevX = e.clientX;
      prevY = e.clientY;
      prevTime = now;

      // Check for magnetic attraction to nearby buttons/links
      if (modeRef.current === "magnetic") {
        const interactiveElements = document.querySelectorAll(
          "button, a, input, textarea, select, [role='button']"
        );
        let closestDist = 95;
        let foundTarget = false;

        interactiveElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

          if (dist < closestDist) {
            closestDist = dist;
            magneticTargetRef.current = {
              x: centerX,
              y: centerY,
              width: rect.width,
              height: rect.height,
              active: true,
            };
            foundTarget = true;
          }
        });

        if (!foundTarget) {
          magneticTargetRef.current.active = false;
        }
      } else {
        magneticTargetRef.current.active = false;
      }

      // Check hovering for other modes
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
      // Spawn ripple shockwave
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 65,
        opacity: 0.85,
        color:
          modeRef.current === "plasma"
            ? "#a855f7"
            : modeRef.current === "stardust"
            ? "#facc15"
            : modeRef.current === "orbit"
            ? "#00f0ff"
            : modeRef.current === "glitch"
            ? "#ff0055"
            : modeRef.current === "comet"
            ? "#38bdf8"
            : "#00f0ff",
      });

      // Extra burst for Plasma and Comet
      if (modeRef.current === "plasma" || modeRef.current === "comet") {
        for (let i = 0; i < 18; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = Math.random() * 4 + 2;
          particlesRef.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            life: 1,
            maxLife: 1,
            size: Math.random() * 4 + 2,
            color: modeRef.current === "plasma" ? "#c084fc" : "#00f0ff",
          });
        }
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.visible = false;
      document.documentElement.classList.remove("has-custom-cursor");
    };

    const onMouseEnter = () => {
      mouseRef.current.visible = true;
      document.documentElement.classList.add("has-custom-cursor");
    };

    // Keyboard shortcut: Press 'C' to cycle cursor modes
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === "c") {
        const currentIndex = MODES.findIndex((m) => m.id === modeRef.current);
        const nextMode = MODES[(currentIndex + 1) % MODES.length].id;
        selectMode(nextMode);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("keydown", onKeyDown);

    // ==========================================
    // 2. High-Performance Animation Render Loop
    // ==========================================
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const m = mouseRef.current;
      const mode = modeRef.current;

      // Smooth lag / interpolation
      if (mode === "magnetic" && magneticTargetRef.current.active) {
        // Magnetic snap towards target center
        m.x += (magneticTargetRef.current.x - m.x) * 0.28;
        m.y += (magneticTargetRef.current.y - m.y) * 0.28;
      } else {
        // Normal cursor spring follow
        const followSpeed = mode === "plasma" ? 0.32 : mode === "comet" ? 0.38 : 0.45;
        m.x += (m.targetX - m.x) * followSpeed;
        m.y += (m.targetY - m.y) * followSpeed;
      }

      // Update and draw ripples
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.radius += 2.2;
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

      // ------------------------------------------------
      // MODE 1: PLASMA (Pulsing orb & floating embers)
      // ------------------------------------------------
      if (mode === "plasma" && m.visible) {
        // Emit floating plasma sparks
        if (Math.hypot(m.vx, m.vy) > 0.05 || Math.random() < 0.3) {
          particlesRef.current.push({
            x: m.x + (Math.random() * 8 - 4),
            y: m.y + (Math.random() * 8 - 4),
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5 - 0.6,
            life: 1,
            maxLife: Math.random() * 25 + 20,
            size: Math.random() * 3.5 + 1.5,
            color: Math.random() > 0.4 ? "#a855f7" : "#00f0ff",
          });
        }

        // Draw outer energy aura
        const pulse = Math.sin(performance.now() * 0.006) * 4;
        const outerRadius = 18 + pulse;

        const grad = ctx.createRadialGradient(m.x, m.y, 2, m.x, m.y, outerRadius);
        grad.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        grad.addColorStop(0.3, "rgba(0, 240, 255, 0.75)");
        grad.addColorStop(0.7, "rgba(168, 85, 247, 0.35)");
        grad.addColorStop(1, "rgba(112, 66, 248, 0)");

        ctx.save();
        ctx.beginPath();
        ctx.arc(m.x, m.y, outerRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#a855f7";
        ctx.fill();

        // Inner white-hot nucleus
        ctx.beginPath();
        ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00f0ff";
        ctx.fill();
        ctx.restore();
      }

      // ------------------------------------------------
      // MODE 2: STARDUST (Twinkling constellation crystals)
      // ------------------------------------------------
      if (mode === "stardust" && m.visible) {
        // Emit twinkling crystal stars
        if (Math.hypot(m.vx, m.vy) > 0.08 || Math.random() < 0.35) {
          const colors = ["#facc15", "#ffffff", "#f472b6", "#c084fc", "#38bdf8"];
          particlesRef.current.push({
            x: m.x + (Math.random() * 12 - 6),
            y: m.y + (Math.random() * 12 - 6),
            vx: (Math.random() - 0.5) * 1.8,
            vy: (Math.random() - 0.5) * 1.8 + 0.4,
            life: 1,
            maxLife: Math.random() * 32 + 25,
            size: Math.random() * 5 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            angle: Math.random() * Math.PI,
            rotSpeed: (Math.random() - 0.5) * 0.12,
          });
        }

        // Draw crystal center
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(performance.now() * 0.002);

        // 4-point star core
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * 9, Math.sin((i * Math.PI) / 2) * 9);
          ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * 2.8, Math.sin((i * Math.PI) / 2 + Math.PI / 4) * 2.8);
        }
        ctx.closePath();
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#facc15";
        ctx.fill();

        ctx.restore();
      }

      // ------------------------------------------------
      // MODE 3: MAGNETIC (Attraction & Bounding Lock)
      // ------------------------------------------------
      if (mode === "magnetic" && m.visible) {
        ctx.save();
        const target = magneticTargetRef.current;

        if (target.active) {
          // Locked onto element: draw holographic target brackets
          const padding = 8;
          const boxX = target.x - target.width / 2 - padding;
          const boxY = target.y - target.height / 2 - padding;
          const boxW = target.width + padding * 2;
          const boxH = target.height + padding * 2;
          const cornerLen = 12;

          ctx.strokeStyle = "#00f0ff";
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 16;
          ctx.shadowColor = "#00f0ff";

          // Top-Left
          ctx.beginPath();
          ctx.moveTo(boxX, boxY + cornerLen);
          ctx.lineTo(boxX, boxY);
          ctx.lineTo(boxX + cornerLen, boxY);
          ctx.stroke();

          // Top-Right
          ctx.beginPath();
          ctx.moveTo(boxX + boxW - cornerLen, boxY);
          ctx.lineTo(boxX + boxW, boxY);
          ctx.lineTo(boxX + boxW, boxY + cornerLen);
          ctx.stroke();

          // Bottom-Left
          ctx.beginPath();
          ctx.moveTo(boxX, boxY + boxH - cornerLen);
          ctx.lineTo(boxX, boxY + boxH);
          ctx.lineTo(boxX + cornerLen, boxY + boxH);
          ctx.stroke();

          // Bottom-Right
          ctx.beginPath();
          ctx.moveTo(boxX + boxW - cornerLen, boxY + boxH);
          ctx.lineTo(boxX + boxW, boxY + boxH);
          ctx.lineTo(boxX + boxW, boxY + boxH - cornerLen);
          ctx.stroke();

          // Magnetic field line to true mouse position
          ctx.beginPath();
          ctx.moveTo(m.targetX, m.targetY);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);
        } else {
          // Idle magnetic reticle
          ctx.beginPath();
          ctx.arc(m.x, m.y, 16, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(0, 240, 255, 0.75)";
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 12;
          ctx.shadowColor = "#00f0ff";
          ctx.stroke();

          // Reticle ticks
          ctx.beginPath();
          ctx.moveTo(m.x - 22, m.y);
          ctx.lineTo(m.x - 17, m.y);
          ctx.moveTo(m.x + 17, m.y);
          ctx.lineTo(m.x + 22, m.y);
          ctx.moveTo(m.x, m.y - 22);
          ctx.lineTo(m.x, m.y - 17);
          ctx.moveTo(m.x, m.y + 17);
          ctx.lineTo(m.x, m.y + 22);
          ctx.stroke();

          // Center magnet core
          ctx.beginPath();
          ctx.arc(m.x, m.y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
        ctx.restore();
      }

      // ------------------------------------------------
      // MODE 4: ORBIT (Continuously rotating 3D rings)
      // ------------------------------------------------
      if (mode === "orbit" && m.visible) {
        ctx.save();
        const speedMultiplier = 1 + Math.hypot(m.vx, m.vy) * 0.8;
        orbitAnglesRef.current.r1 += 0.04 * speedMultiplier;
        orbitAnglesRef.current.r2 -= 0.032 * speedMultiplier;
        orbitAnglesRef.current.r3 += 0.025 * speedMultiplier;

        const { r1, r2, r3 } = orbitAnglesRef.current;

        // Core Quantum Dot
        ctx.beginPath();
        ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 14;
        ctx.shadowColor = "#38bdf8";
        ctx.fill();

        // Ring 1 (Tilted 40 deg, cyan)
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(0.7);
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 7, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.7)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Electron 1
        const e1X = Math.cos(r1) * 20;
        const e1Y = Math.sin(r1) * 7;
        ctx.beginPath();
        ctx.arc(e1X, e1Y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00f0ff";
        ctx.fill();
        ctx.restore();

        // Ring 2 (Tilted -40 deg, violet)
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(-0.7);
        ctx.beginPath();
        ctx.ellipse(0, 0, 20, 7, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(168, 85, 247, 0.7)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Electron 2
        const e2X = Math.cos(r2) * 20;
        const e2Y = Math.sin(r2) * 7;
        ctx.beginPath();
        ctx.arc(e2X, e2Y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#c084fc";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#c084fc";
        ctx.fill();
        ctx.restore();

        // Ring 3 (Equatorial horizontal ring)
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.beginPath();
        ctx.ellipse(0, 0, 23, 8, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Electron 3
        const e3X = Math.cos(r3) * 23;
        const e3Y = Math.sin(r3) * 8;
        ctx.beginPath();
        ctx.arc(e3X, e3Y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();

        ctx.restore();
      }

      // ------------------------------------------------
      // MODE 5: GLITCH (RGB separation & Matrix noise)
      // ------------------------------------------------
      if (mode === "glitch" && m.visible) {
        ctx.save();
        glitchJitterRef.current.frame++;
        const jitterIntensity = Math.hypot(m.vx, m.vy) * 2 + 3;
        const jx = (Math.random() - 0.5) * jitterIntensity;
        const jy = (Math.random() - 0.5) * jitterIntensity;

        // Cyan separated channel
        ctx.save();
        ctx.beginPath();
        ctx.rect(m.x - 9 - jx, m.y - 9 - jy, 18, 18);
        ctx.strokeStyle = "#00f0ff";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Magenta/Red separated channel
        ctx.save();
        ctx.beginPath();
        ctx.rect(m.x - 9 + jx, m.y - 9 + jy, 18, 18);
        ctx.strokeStyle = "#ff0055";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Digital horizontal scanline slices
        if (Math.random() < 0.4) {
          ctx.fillStyle = "rgba(0, 240, 255, 0.7)";
          ctx.fillRect(m.x - 16, m.y + (Math.random() * 20 - 10), 32, 1.5);
        }

        // Center white digital cross
        ctx.beginPath();
        ctx.moveTo(m.x - 4, m.y);
        ctx.lineTo(m.x + 4, m.y);
        ctx.moveTo(m.x, m.y - 4);
        ctx.lineTo(m.x, m.y + 4);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.restore();
      }

      // ------------------------------------------------
      // MODE 6: COMET (High-speed burning meteor trail)
      // ------------------------------------------------
      if (mode === "comet" && m.visible) {
        // Emit aerodynamic comet embers opposite to movement direction
        const spd = Math.hypot(m.vx, m.vy);
        const emitCount = spd > 0.1 ? 4 : 1;

        for (let i = 0; i < emitCount; i++) {
          const revAngle = Math.atan2(m.vy, m.vx) + Math.PI + (Math.random() - 0.5) * 0.45;
          const emberSpd = Math.random() * (spd * 0.5 + 2);
          particlesRef.current.push({
            x: m.x,
            y: m.y,
            vx: Math.cos(revAngle) * emberSpd,
            vy: Math.sin(revAngle) * emberSpd,
            life: 1,
            maxLife: Math.random() * 28 + 20,
            size: Math.random() * 4.5 + 2,
            color: Math.random() > 0.3 ? "#00f0ff" : "#60a5fa",
          });
        }

        // Draw blinding comet head
        ctx.save();
        const headGrad = ctx.createRadialGradient(m.x, m.y, 1, m.x, m.y, 14);
        headGrad.addColorStop(0, "#ffffff");
        headGrad.addColorStop(0.3, "#00f0ff");
        headGrad.addColorStop(0.7, "rgba(59, 130, 246, 0.4)");
        headGrad.addColorStop(1, "rgba(59, 130, 246, 0)");

        ctx.beginPath();
        ctx.arc(m.x, m.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = headGrad;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#00f0ff";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      }

      // ------------------------------------------------
      // Render and update all active particles
      // ------------------------------------------------
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.life;

        if (mode === "stardust" && p.angle !== undefined) {
          // Draw rotated 4-point star crystal
          p.angle += p.rotSpeed || 0.05;
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.beginPath();
          const sz = p.size * p.life;
          ctx.moveTo(0, -sz);
          ctx.lineTo(sz * 0.3, -sz * 0.3);
          ctx.lineTo(sz, 0);
          ctx.lineTo(sz * 0.3, sz * 0.3);
          ctx.lineTo(0, sz);
          ctx.lineTo(-sz * 0.3, sz * 0.3);
          ctx.lineTo(-sz, 0);
          ctx.lineTo(-sz * 0.3, -sz * 0.3);
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
        } else {
          // Circular ember / particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.5, p.size * p.life), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        ctx.restore();
      }

      // Direct DOM update for top-most indicator
      if (cursorRef.current && m.visible) {
        cursorRef.current.style.transform = `translate3d(${m.x}px, ${m.y}px, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      clearTimeout(enableTimer);
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [selectMode]);

  if (!enabled) return null;

  const currentModeInfo = MODES.find((m) => m.id === cursorMode) || MODES[0];

  return (
    <>
      {/* 1. Fullscreen Canvas Particle & Animation Layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998] w-full h-full select-none"
      />

      {/* 2. Direct DOM Cursor Marker Layer (Zero latency) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] select-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        {/* Subtle hover pulse ring */}
        {isHovered && (
          <div
            className="w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70 animate-ping opacity-60 pointer-events-none"
            style={{ position: "absolute", left: "50%", top: "50%" }}
          />
        )}
      </div>

      {/* 3. Floating 6-Mode Switcher HUD (Bottom-Right) */}
      <aside
        aria-label="Cursor animation style switcher"
        className="fixed bottom-5 right-5 z-[9990] flex items-center gap-1.5 p-1.5 rounded-full bg-[#07031e]/90 border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] select-none transition-all"
      >
        <span className="text-[11px] font-mono text-slate-300 font-semibold px-2 hidden sm:inline flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentModeInfo.color }} />
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
              className={`p-2 rounded-full transition-all flex items-center justify-center cursor-pointer relative group ${
                isActive
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
