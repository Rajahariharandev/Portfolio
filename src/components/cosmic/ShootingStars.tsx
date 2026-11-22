"use client";

import React from "react";

export function ShootingStars() {
  const meteors = [
    { top: "12%", left: "20%", delay: "0s", duration: "3s" },
    { top: "25%", left: "65%", delay: "4s", duration: "2.8s" },
    { top: "8%", left: "80%", delay: "7s", duration: "3.2s" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden select-none">
      {meteors.map((m, i) => (
        <div
          key={i}
          style={{
            top: m.top,
            left: m.left,
            animation: `shootingStar ${m.duration} cubic-bezier(0.25, 1, 0.5, 1) infinite`,
            animationDelay: m.delay,
          }}
          className="absolute w-[140px] h-[1.5px] -rotate-45 bg-gradient-to-r from-transparent via-[#c084fc] to-[#00f0ff] opacity-0 will-change-transform pointer-events-none"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_15px_#00f0ff]" />
        </div>
      ))}

      <style jsx>{`
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) scale(0.6);
          }
          10% {
            opacity: 1;
          }
          35% {
            opacity: 1;
            transform: translate3d(240px, 240px, 0) scale(1);
          }
          45%,
          100% {
            opacity: 0;
            transform: translate3d(320px, 320px, 0) scale(0.3);
          }
        }
      `}</style>
    </div>
  );
}
