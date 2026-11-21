"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { Sparkles, Crosshair, Droplets } from "lucide-react";

export type CursorMode = "plasma" | "cyber" | "stardust";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface ClickRipple {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<CursorMode>("plasma");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });

  const sparkleIdRef = useRef(0);
  const rippleIdRef = useRef(0);
  const prevMouseRef = useRef({ x: 0, y: 0, time: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Responsive spring physics
  const springX = useSpring(mouseX, { damping: 24, stiffness: 350, mass: 0.3 });
  const springY = useSpring(mouseY, { damping: 24, stiffness: 350, mass: 0.3 });

  // Fluid trailing spring for the plasma fluid blob
  const fluidX = useSpring(mouseX, { damping: 18, stiffness: 220, mass: 0.5 });
  const fluidY = useSpring(mouseY, { damping: 18, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Only activate for mouse/pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const timer = setTimeout(() => {
      setEnabled(true);
    }, 0);

    let lastSparkleTime = 0;
    const colors = ["#00f0ff", "#a855f7", "#c084fc", "#38bdf8", "#f4f4f5"];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!cursorVisible) setCursorVisible(true);

      const now = performance.now();
      const dt = prevMouseRef.current.time === 0 ? 16 : Math.max(1, now - prevMouseRef.current.time);
      const vx = (e.clientX - prevMouseRef.current.x) / dt;
      const vy = (e.clientY - prevMouseRef.current.y) / dt;
      setVelocity({ vx, vy });
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      prevMouseRef.current = { x: e.clientX, y: e.clientY, time: now };

      // Add particle trail when moving in stardust or plasma mode
      if (now - lastSparkleTime > 40) {
        lastSparkleTime = now;
        const newSparkle: Sparkle = {
          id: sparkleIdRef.current++,
          x: e.clientX + (Math.random() * 12 - 6),
          y: e.clientY + (Math.random() * 12 - 6),
          size: Math.random() * 3.5 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setSparkles((prev) => [...prev.slice(-18), newSparkle]);
      }

      // Check if hovering over clickable elements
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

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple: ClickRipple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setCursorVisible(false);
    const handleMouseEnter = () => setCursorVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const cleanupInterval = setInterval(() => {
      setSparkles((prev) => (prev.length > 0 ? prev.slice(1) : prev));
      setRipples((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 70);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(cleanupInterval);
    };
  }, [mouseX, mouseY, cursorVisible]);

  if (!enabled) return null;

  // Calculate speed stretch for fluid plasma mode
  const speed = Math.min(2.2, 1 + Math.hypot(velocity.vx, velocity.vy) * 0.4);
  const angle = Math.atan2(velocity.vy, velocity.vx) * (180 / Math.PI);

  return (
    <>
      {/* 1. Main Cursor Visual Elements */}
      {cursorVisible && (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
          {/* Gravitational Wave Click Ripples */}
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              initial={{ opacity: 0.85, scale: 0.2 }}
              animate={{ opacity: 0, scale: 2.4 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: 75,
                height: 75,
                border: cursorMode === "cyber" ? "1.5px solid #00f0ff" : "1.5px solid #c084fc",
                boxShadow: "0 0 25px rgba(0,240,255,0.7), inset 0 0 15px rgba(168,85,247,0.5)",
              }}
            />
          ))}

          {/* Stardust Trail for stardust and plasma modes */}
          {(cursorMode === "stardust" || cursorMode === "plasma") &&
            sparkles.map((sparkle) => (
              <motion.div
                key={sparkle.id}
                initial={{ opacity: 0.95, scale: 1 }}
                animate={{ opacity: 0, scale: 0.15, y: "+=10" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: sparkle.x,
                  top: sparkle.y,
                  width: sparkle.size,
                  height: sparkle.size,
                  backgroundColor: sparkle.color,
                  borderRadius: "50%",
                  boxShadow: `0 0 10px ${sparkle.color}, 0 0 20px ${sparkle.color}`,
                }}
              />
            ))}

          {/* MODE 1: FLUID PLASMA LIQUID ORB */}
          {cursorMode === "plasma" && (
            <>
              {/* Deformable Fluid Outer Halo */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: fluidX,
                  y: fluidY,
                  width: isHovered ? 56 : 38,
                  height: isHovered ? 56 : 38,
                  background: isHovered
                    ? "radial-gradient(circle, rgba(0,240,255,0.25) 0%, rgba(147,51,234,0.1) 70%, transparent 100%)"
                    : "radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(0,240,255,0.05) 70%, transparent 100%)",
                  border: isHovered ? "1.5px solid #00f0ff" : "1px solid rgba(192,132,252,0.55)",
                  boxShadow: isHovered
                    ? "0 0 30px rgba(0,240,255,0.65), inset 0 0 15px rgba(168,85,247,0.4)"
                    : "0 0 18px rgba(168,85,247,0.3)",
                  transform: `scaleX(${speed}) rotate(${angle}deg)`,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              />

              {/* Central Glowing Bioluminescent Core */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: mouseX,
                  y: mouseY,
                  width: isHovered ? 10 : 6,
                  height: isHovered ? 10 : 6,
                  backgroundColor: isHovered ? "#00f0ff" : "#ffffff",
                  boxShadow: isHovered
                    ? "0 0 15px #00f0ff, 0 0 25px #00f0ff"
                    : "0 0 10px #ffffff, 0 0 20px #c084fc",
                }}
              />
            </>
          )}

          {/* MODE 2: CYBERNETIC TACTICAL HUD RETICLE */}
          {cursorMode === "cyber" && (
            <>
              {/* Tactical Rotating Scope */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: springX,
                  y: springY,
                  width: isHovered ? 52 : 36,
                  height: isHovered ? 52 : 36,
                  border: "1.5px dashed #00f0ff",
                  boxShadow: "0 0 20px rgba(0,240,255,0.5), inset 0 0 10px rgba(0,240,255,0.2)",
                  scale: isClicking ? 0.8 : 1,
                }}
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Crosshair tics */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-[2px] h-2 bg-[#00f0ff]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-[2px] h-2 bg-[#00f0ff]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 h-[2px] w-2 bg-[#00f0ff]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 h-[2px] w-2 bg-[#00f0ff]" />
              </motion.div>

              {/* Digital HUD Coordinates Badge */}
              <motion.div
                className="fixed top-0 left-0 pointer-events-none font-mono text-[9px] text-cyan-300 bg-[#07031e]/90 px-1.5 py-0.5 rounded border border-cyan-500/40 shadow-sm"
                style={{
                  x: mouseX,
                  y: mouseY,
                  translateX: 18,
                  translateY: 18,
                }}
              >
                X:{coords.x} Y:{coords.y}
              </motion.div>

              {/* Center Lock Dot */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: mouseX,
                  y: mouseY,
                  width: 4,
                  height: 4,
                  backgroundColor: "#00f0ff",
                  boxShadow: "0 0 8px #00f0ff",
                }}
              />
            </>
          )}

          {/* MODE 3: CELESTIAL STARDUST COMET */}
          {cursorMode === "stardust" && (
            <>
              {/* Outer Ethereal Shimmer Ring */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: springX,
                  y: springY,
                  width: isHovered ? 48 : 28,
                  height: isHovered ? 48 : 28,
                  border: "1.5px solid rgba(234, 179, 8, 0.7)",
                  backgroundColor: "rgba(234, 179, 8, 0.08)",
                  boxShadow: "0 0 22px rgba(234, 179, 8, 0.4)",
                  scale: isClicking ? 0.85 : 1,
                }}
              />

              {/* Blinding Golden Star Core */}
              <motion.div
                className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                  x: mouseX,
                  y: mouseY,
                  width: 7,
                  height: 7,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 0 12px #ffffff, 0 0 25px #facc15",
                }}
              />
            </>
          )}
        </div>
      )}

      {/* 2. Interactive Floating Cursor Style Switcher (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-1.5 p-1 rounded-full bg-[#0a0524]/90 border border-[#7042f8]/40 backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.35)] select-none">
        <span className="text-[10px] text-violet-300 font-mono px-2 hidden sm:inline">Cursor:</span>
        <button
          type="button"
          onClick={() => setCursorMode("plasma")}
          className={`p-1.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            cursorMode === "plasma"
              ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(0,240,255,0.5)]"
              : "text-violet-400 hover:text-white"
          }`}
          title="Fluid Plasma Cursor"
        >
          <Droplets className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setCursorMode("cyber")}
          className={`p-1.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            cursorMode === "cyber"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_12px_rgba(0,240,255,0.5)]"
              : "text-violet-400 hover:text-white"
          }`}
          title="Cyber Tactical Crosshair Cursor"
        >
          <Crosshair className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => setCursorMode("stardust")}
          className={`p-1.5 rounded-full transition-all flex items-center justify-center cursor-pointer ${
            cursorMode === "stardust"
              ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              : "text-violet-400 hover:text-white"
          }`}
          title="Celestial Stardust Cursor"
        >
          <Sparkles className="w-3.5 h-3.5" />
        </button>
      </div>
    </>
  );
}
