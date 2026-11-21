"use client";

import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7042f8] via-[#c084fc] to-[#00f0ff] origin-left z-[100] shadow-[0_0_15px_#00f0ff,0_0_8px_#7042f8]"
      style={{ scaleX }}
    />
  );
}
