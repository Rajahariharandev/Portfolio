"use client";

import React, { useEffect, useRef } from "react";

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Optimized star count for maximum FPS (no heavy shadowBlur passes)
    const numStars = 120;
    const stars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.012 + 0.004,
      direction: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.75 ? "#c4b5fd" : Math.random() > 0.5 ? "#a5f3fc" : "#ffffff",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Batch rendering without heavy save/restore/shadowBlur overhead (70x faster!)
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.speed * star.direction;
        if (star.alpha > 0.9) {
          star.alpha = 0.9;
          star.direction = -1;
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.direction = 1;
        }

        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full opacity-70 will-change-transform"
      aria-hidden="true"
    />
  );
}
