"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Meteor {
  id: number;
  top: number;
  left: number;
  length: number;
  duration: number;
  delay: number;
  repeatDelay: number;
}

export function ShootingStars() {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const createMeteors = () => {
      const list: Meteor[] = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: Math.random() * 45, // upper 45% of screen
        left: Math.random() * 80 + 10,
        length: Math.random() * 120 + 80,
        duration: Math.random() * 1.5 + 1.2,
        delay: Math.random() * 8,
        repeatDelay: 9 + Math.random() * 6,
      }));
      setMeteors(list);
    };

    createMeteors();
    const interval = setInterval(createMeteors, 14000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      <AnimatePresence>
        {meteors.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, 320],
              y: [0, 320],
              scale: [0.5, 1, 1, 0.2],
            }}
            transition={{
              duration: m.duration,
              delay: m.delay,
              repeat: Infinity,
              repeatDelay: m.repeatDelay,
              ease: "easeOut",
            }}
            style={{
              top: `${m.top}%`,
              left: `${m.left}%`,
              width: `${m.length}px`,
            }}
            className="absolute h-[1.5px] -rotate-45 bg-gradient-to-r from-transparent via-[#c084fc] to-[#00f0ff] shadow-[0_0_15px_#00f0ff]"
          >
            {/* Blinding core starhead */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_0_20px_#00f0ff]" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
