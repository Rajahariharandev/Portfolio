"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techStack = [
    {
      name: "Go (Golang)",
      color: "#00ADD8",
      icon: (
        <span className="font-extrabold text-xs tracking-wider font-mono text-[#00ADD8]">
          GO
        </span>
      ),
    },
    {
      name: "Node.js",
      color: "#22c55e",
      icon: (
        <svg className="w-5 h-5 fill-[#22c55e]" viewBox="0 0 24 24">
          <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.2l7.8 4.3-3.4 1.9-4.4-2.4v-3.8zm-1.1 0v3.8L6.5 10.4 3.1 8.5 10.9 4.2zM3 10.2l3.9 2.2-3.9 2.1v-4.3zm8 9.5l-7-3.9v-3.8l3.9 2.1v2.5l3.1 1.7v1.4zm2 0v-1.4l3.1-1.7v-2.5l3.9-2.1v3.8l-7 3.9zm8-5.2l-3.9-2.1 3.9-2.2v4.3z" />
        </svg>
      ),
    },
    {
      name: "Python 3.x",
      color: "#38bdf8",
      icon: (
        <span className="font-extrabold text-sm drop-shadow-[0_0_8px_#38bdf8] text-[#38bdf8]">
          Py<span className="text-[#facc15]">.</span>
        </span>
      ),
    },
    {
      name: "REST APIs & Microservices",
      color: "#c084fc",
      icon: (
        <span className="font-mono font-bold text-sm tracking-tighter text-[#c084fc]">
          &lt;/&gt;
        </span>
      ),
    },
    {
      name: "Oracle DB",
      color: "#f87171",
      icon: (
        <span className="font-bold text-xs tracking-tight text-[#f87171] font-mono">
          ORA
        </span>
      ),
    },
    {
      name: "Docker Containers",
      color: "#38bdf8",
      icon: (
        <svg className="w-5 h-5 fill-[#38bdf8]" viewBox="0 0 24 24">
          <path d="M13.98 11.08h1.83V9.26h-1.83v1.82zm-2.28 0h1.82V9.26H11.7v1.82zm-2.28 0h1.82V9.26H9.42v1.82zm-2.28 0h1.82V9.26H7.14v1.82zm6.84-2.27h1.83V6.99h-1.83v1.82zm-2.28 0h1.82V6.99H11.7v1.82zm-2.28 0h1.82V6.99H9.42v1.82zm6.84-2.28h1.83V4.71h-1.83v1.82zM21.9 11.2c-.3-.21-.76-.32-1.28-.32-.23 0-.46.02-.69.07-.35-.74-1-1.29-1.87-1.48l-.4-.09-.25.32c-.44.57-.65 1.27-.65 2.06 0 .34.05.67.14.98-.37.19-.89.28-1.55.28H2.52C2.23 13.02 2 13.25 2 13.54c0 3.32 2.01 6.13 5.4 6.78.89.17 1.8.26 2.7.26 4.3 0 8.07-1.74 9.94-4.85.16-.27.87-1.73.91-2.94.02-.45-.16-.94-.55-1.21z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-16 px-3 sm:px-6 lg:px-8 flex items-center justify-center select-none overflow-hidden">
      {/* Outer Glowing Neon Frame matching mockup */}
      <div className="relative w-full max-w-7xl min-h-[88vh] sm:min-h-[90vh] rounded-[28px] sm:rounded-[36px] border border-cyan-400/40 shadow-[0_0_50px_rgba(0,240,255,0.25),inset_0_0_35px_rgba(112,66,248,0.2)] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16">
        {/* Background Aurora Cosmic Landscape */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <Image
            src="/images/aurora-hero-bg.jpg"
            alt="Ethereal Aurora Horizon"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Deep dark vignette & gradient fades to ensure maximum typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030014]/90 via-[#030014]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/95 via-transparent to-[#030014]/40" />
        </div>

        {/* Content Container (Left-aligned matching mockup) */}
        <Container className="relative z-10 w-full my-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left flex flex-col items-start"
          >
            {/* "Hello, I'm" subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 font-medium tracking-wide mb-1"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Massive Name: "Rajahariharan K" */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-white leading-[1.08] mb-3"
            >
              Rajahariharan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_30px_rgba(0,240,255,0.6)]">
                K
              </span>
            </motion.h1>

            {/* Developer Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 tracking-tight mb-4"
            >
              Go &amp; Python Backend Developer
            </motion.h2>

            {/* Subtitle Bio description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed mb-8 font-normal"
            >
              Building scalable, high-performance web solutions and backend automation architectures with{" "}
              <span className="text-white font-medium">Go, Python, Node.js, GitLab CI/CD</span> and beyond.
            </motion.p>

            {/* Action Buttons: "View My Work →" & "Watch Demo" / "Resume" */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              {/* Primary Vibrant Purple-to-Cyan Pill Button */}
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7042f8] via-[#6366f1] to-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.45)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Frosted Pill Button */}
              <a
                href="/resume/resume.pdf"
                download="Rajahariharan_K_Resume.pdf"
                className="px-6 py-3.5 rounded-full text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.18] backdrop-blur-md hover:border-cyan-400/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </a>
            </motion.div>

            {/* Bottom Tech Stack Icon Row matching mockup */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 sm:gap-5 pt-2 flex-wrap"
            >
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  title={tech.name}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#030014]/70 border border-white/[0.1] hover:border-cyan-400/60 hover:bg-[#0c0828] backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-sm cursor-default"
                >
                  {tech.icon}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>

        {/* Bottom Right: Scroll Indicator matching mockup */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex flex-col items-center gap-1.5 pointer-events-none select-none">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-cyan-400/50 flex items-start justify-center p-1 shadow-[0_0_12px_rgba(0,240,255,0.3)]"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]"
            />
          </motion.div>
          <div className="flex flex-col items-center leading-none">
            <span className="text-[10px] font-mono text-slate-300 font-medium tracking-wider uppercase">
              Scroll
            </span>
            <span className="text-[9px] font-mono text-cyan-400/80 font-normal">
              Scroll Down
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
