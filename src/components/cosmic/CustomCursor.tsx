"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the outer trailing halo
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable if pointer device is fine (mouse/trackpad, not touch)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const enableTimer = setTimeout(() => {
      setEnabled(true);
    }, 0);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("button") ||
          target.closest("a") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("[role='button']") ||
          target.tagName === "BUTTON" ||
          target.tagName === "A"
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      clearTimeout(enableTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!enabled || !isVisible) return null;

  return (
    <>
      {/* Outer Cosmic Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7042f8] backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          width: isPointer ? 56 : 34,
          height: isPointer ? 56 : 34,
          borderColor: isPointer ? "#00f0ff" : "#a855f7",
          backgroundColor: isPointer ? "rgba(0, 240, 255, 0.08)" : "rgba(112, 66, 248, 0.12)",
          boxShadow: isPointer
            ? "0 0 25px rgba(0, 240, 255, 0.5), inset 0 0 15px rgba(0, 240, 255, 0.2)"
            : "0 0 20px rgba(112, 66, 248, 0.4)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* Inner Pinpoint Core Light */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_#ffffff]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 8 : 5,
          height: isPointer ? 8 : 5,
          backgroundColor: isPointer ? "#00f0ff" : "#ffffff",
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
