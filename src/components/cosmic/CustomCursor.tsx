"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const [enabled, setEnabled] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const sparkleIdRef = useRef(0);
  const rippleIdRef = useRef(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring physics for the celestial targeting reticle
  const springX = useSpring(mouseX, { damping: 26, stiffness: 380, mass: 0.35 });
  const springY = useSpring(mouseY, { damping: 26, stiffness: 380, mass: 0.35 });

  useEffect(() => {
    // Only activate for mouse/pointer devices (desktop/laptop)
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

      // Add stardust particle trail when moving
      const now = performance.now();
      if (now - lastSparkleTime > 40) {
        lastSparkleTime = now;
        const newSparkle: Sparkle = {
          id: sparkleIdRef.current++,
          x: e.clientX + (Math.random() * 12 - 6),
          y: e.clientY + (Math.random() * 12 - 6),
          size: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        };

        setSparkles((prev) => [...prev.slice(-16), newSparkle]);
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
    }, 75);

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

  if (!enabled || !cursorVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* 1. Stardust Particle Trail */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0.95, scale: 1 }}
          animate={{ opacity: 0, scale: 0.15, y: "+=8" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            borderRadius: "50%",
            boxShadow: `0 0 10px ${sparkle.color}, 0 0 18px ${sparkle.color}`,
          }}
        />
      ))}

      {/* 2. Gravitational Wave Click Ripples */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ opacity: 0.8, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 70,
            height: 70,
            border: "1.5px solid #00f0ff",
            boxShadow: "0 0 25px #00f0ff, inset 0 0 15px #7042f8",
          }}
        />
      ))}

      {/* 3. Outer Celestial HUD Reticle (Spring-lagged) */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: springX,
          y: springY,
          width: isHovered ? 54 : 32,
          height: isHovered ? 54 : 32,
          border: isHovered
            ? "1.5px solid rgba(0, 240, 255, 0.85)"
            : "1.2px solid rgba(168, 85, 247, 0.65)",
          backgroundColor: isHovered
            ? "rgba(0, 240, 255, 0.08)"
            : "rgba(112, 66, 248, 0.05)",
          boxShadow: isHovered
            ? "0 0 25px rgba(0, 240, 255, 0.6), inset 0 0 12px rgba(0, 240, 255, 0.3)"
            : "0 0 16px rgba(168, 85, 247, 0.35)",
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
          rotate: isHovered ? 90 : 0,
        }}
        transition={{
          rotate: { duration: 0.4, ease: "easeOut" },
          scale: { type: "spring", stiffness: 450, damping: 20 },
        }}
      >
        {/* Holographic targeting corners when hovered */}
        {isHovered && (
          <>
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff]" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff]" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]" />
          </>
        )}
      </motion.div>

      {/* 4. Center Radiant Singularity Dot (Instantaneous track) */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          width: isHovered ? 6 : 5,
          height: isHovered ? 6 : 5,
          backgroundColor: isHovered ? "#00f0ff" : "#ffffff",
          boxShadow: isHovered
            ? "0 0 12px #00f0ff, 0 0 22px #00f0ff"
            : "0 0 10px #ffffff, 0 0 18px #c084fc",
        }}
      />
    </div>
  );
}
