"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  FileText,
  Mail,
  Sparkles,
  Copy,
  Check,
  Terminal as TerminalIcon,
  Zap,
  ShieldCheck,
  Database,
  Radio,
  Cpu,
  ChevronDown,
  Clock,
} from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants, AnimatePresence } from "motion/react";
import { BlackHole } from "@/components/cosmic/BlackHole";
import { OrbitalRadar } from "@/components/cosmic/OrbitalRadar";
import { InteractiveTerminal } from "@/components/cosmic/InteractiveTerminal";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

export type HeroDesignStyle = "cosmic" | "terminal" | "quantum";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [designStyle, setDesignStyle] = useState<HeroDesignStyle>("cosmic");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll animations ("curolling animations")
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yBlackHole = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const roles = [
    "Assistant Lead – Python Developer & Backend Automation",
    "Enterprise Automation & CI/CD Pipeline Architect",
    "FastAPI, Django & Golang Microservices Specialist",
    "High-Performance Database & Caching Engineer",
  ];

  // Cycling dynamic roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3800);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Live India Standard Time (Trichy, Tamil Nadu)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    return () => clearInterval(clockInterval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const stats = [
    {
      value: "5x",
      label: "Throughput Boost",
      sub: "FastAPI & Redis Caching",
      icon: Zap,
      color: "text-amber-400",
      borderColor: "border-amber-500/30",
    },
    {
      value: "-70%",
      label: "Provisioning Time",
      sub: "GitLab CI/CD Pipelines",
      icon: TerminalIcon,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/30",
    },
    {
      value: "~6 hrs",
      label: "Saved / Week",
      sub: "Python Automation",
      icon: ShieldCheck,
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
    },
    {
      value: "2M+",
      label: "Daily Events",
      sub: "Oracle & PostgreSQL",
      icon: Database,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale: shouldReduceMotion ? 1 : scaleHero }}
      className="relative min-h-[96vh] pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* 1. Top Cosmic Accretion Flare (Parallax linked to scroll, framing the navbar) */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : yBlackHole }}
        className="absolute inset-0 pointer-events-none"
      >
        <BlackHole />
      </motion.div>

      <Container className="relative z-20">
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : yContent, opacity: shouldReduceMotion ? 1 : opacityContent }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Headlines, Dynamic Roles, Bio & Metrics */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Live Clock & Promoted Status Pill */}
            <motion.div variants={itemVariants} className="mb-5 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-[#7042f8]/60 bg-[#030014]/80 backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.35)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc] animate-pulse" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeRoleIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-semibold text-[#e9d5ff] tracking-wide"
                  >
                    {roles[activeRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {currentTime && (
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-violet-500/20 bg-[#07031e]/70 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>Trichy: {currentTime} IST</span>
                </div>
              )}
            </motion.div>

            {/* Primary Headline with Radiant Cosmic Gradient matching Reference */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.08] mb-4"
            >
              Providing{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#00f0ff] drop-shadow-[0_0_35px_rgba(112,66,248,0.6)]">
                  the best
                </span>
              </span>{" "}
              project experience
            </motion.h1>

            {/* Subtitle Statement */}
            <motion.div variants={itemVariants} className="mb-5">
              <h2 className="text-base sm:text-lg font-medium text-violet-200/90 tracking-wide flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                Architecting High-Throughput Microservices &amp; Autonomous Automation Frameworks
              </h2>
            </motion.div>

            {/* Professional Summary tailored strictly to resume */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#9E9EB4] max-w-xl leading-relaxed mb-6"
            >
              I&apos;m <span className="text-white font-semibold">{profileData.name}</span>, an Assistant Lead and Python Developer with 3+ years of experience engineering 
              resilient automation scripts, distributed microservices, and high-performance REST APIs across{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">Python (FastAPI / Django)</span>,{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">Golang</span>,{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">GitLab CI/CD</span>,{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">PostgreSQL</span>,{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">Oracle</span>, and{" "}
              <span className="text-violet-300 font-mono text-xs sm:text-sm font-semibold">Redis</span>.
            </motion.p>

            {/* Resume Impact Metrics Strip */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl mb-7"
            >
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className={`relative p-2.5 rounded-xl bg-[#09051d]/75 border ${stat.borderColor} backdrop-blur-md hover:bg-[#120a36]/90 transition-all group`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <IconComponent className={`w-3.5 h-3.5 ${stat.color}`} />
                      <span className={`text-base font-extrabold tracking-tight ${stat.color}`}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-white/90 leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-[#717188] truncate mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7042f8] via-[#8b5cf6] to-[#581c87] border border-[#a855f7]/60 shadow-[0_0_25px_rgba(112,66,248,0.55)] hover:shadow-[0_0_35px_rgba(112,66,248,0.85)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Learn More!</span>
                <ArrowRight className="w-4 h-4 text-violet-200 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume/resume.pdf"
                download="Rajahariharan_K_Resume.pdf"
                className="px-5 py-3 rounded-xl text-sm font-medium text-[#c4b5fd] bg-[#0c0828]/80 border border-[#7042f8]/40 hover:border-violet-400 hover:text-white backdrop-blur-md transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Resume</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-sm font-medium text-[#9E9EB4] hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.div>

            {/* Quick Email Copy & Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 text-xs text-[#9E9EB4]"
            >
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 hover:text-white bg-[#0a0624]/85 border border-[#7042f8]/35 px-3.5 py-1.5 rounded-full transition-all cursor-pointer backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-mono text-xs text-violet-200">{profileData.contact.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-violet-400" />
                )}
              </button>
              <span className="text-[#6B6B80] hidden sm:inline">•</span>
              <span className="text-[#8e8ea6] hidden sm:inline">📍 {profileData.location}</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Showcase with Sleek View Switcher Tab */}
          <motion.div
            className="lg:col-span-5 w-full flex flex-col items-center justify-center min-h-[460px]"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Integrated View/Design Mode Tabs right above the display */}
            <div className="mb-4 flex items-center gap-1.5 p-1 rounded-full bg-[#0a0524]/90 border border-[#7042f8]/40 backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.3)]">
              <button
                type="button"
                onClick={() => setDesignStyle("cosmic")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  designStyle === "cosmic"
                    ? "bg-gradient-to-r from-violet-600 to-[#7042f8] text-white shadow-[0_0_12px_rgba(112,66,248,0.7)]"
                    : "text-[#9E9EB4] hover:text-white"
                }`}
              >
                <Radio className="w-3 h-3 text-cyan-300" />
                <span>Cosmic Radar</span>
              </button>

              <button
                type="button"
                onClick={() => setDesignStyle("terminal")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  designStyle === "terminal"
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_12px_rgba(6,182,212,0.7)]"
                    : "text-[#9E9EB4] hover:text-white"
                }`}
              >
                <TerminalIcon className="w-3 h-3 text-cyan-300" />
                <span>CLI Terminal</span>
              </button>

              <button
                type="button"
                onClick={() => setDesignStyle("quantum")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  designStyle === "quantum"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_12px_rgba(217,70,239,0.7)]"
                    : "text-[#9E9EB4] hover:text-white"
                }`}
              >
                <Cpu className="w-3 h-3 text-pink-300" />
                <span>Metrics</span>
              </button>
            </div>

            {/* Active Display Component */}
            <div className="w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {designStyle === "cosmic" && (
                  <motion.div
                    key="cosmic"
                    initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 6, scale: 0.9 }}
                    transition={{ duration: 0.45 }}
                    className="w-full flex items-center justify-center"
                  >
                    <OrbitalRadar />
                  </motion.div>
                )}

                {designStyle === "terminal" && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, y: 20, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.92 }}
                    transition={{ duration: 0.45 }}
                    className="w-full flex items-center justify-center"
                  >
                    <InteractiveTerminal />
                  </motion.div>
                )}

                {designStyle === "quantum" && (
                  <motion.div
                    key="quantum"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.88 }}
                    transition={{ duration: 0.45 }}
                    className="w-full flex flex-col items-center justify-center gap-3.5 p-6 rounded-3xl bg-gradient-to-b from-[#160b3d]/85 via-[#0d0726]/85 to-[#050212]/90 border border-violet-500/40 backdrop-blur-xl shadow-[0_0_40px_rgba(112,66,248,0.3)] text-left"
                  >
                    <div className="w-full flex items-center justify-between pb-3 border-b border-violet-500/20">
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        Quantum Enterprise Matrix
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30">
                        LEAD STATUS
                      </span>
                    </div>

                    <div className="space-y-2.5 w-full text-xs">
                      <div className="p-3 rounded-xl bg-[#090422] border border-violet-500/20 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">Current Organization</div>
                          <div className="text-[11px] text-[#9E9EB4]">The SCM Silk Private Limited</div>
                        </div>
                        <span className="text-violet-300 font-mono text-[11px]">Feb 2026 – Present</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#090422] border border-violet-500/20 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">Key Architecture</div>
                          <div className="text-[11px] text-[#9E9EB4]">SOAP to REST Migration &amp; RBAC</div>
                        </div>
                        <span className="text-emerald-400 font-mono text-[11px] font-bold">5x Faster</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#090422] border border-violet-500/20 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">CI/CD &amp; Infrastructure</div>
                          <div className="text-[11px] text-[#9E9EB4]">GitLab CI/CD &amp; Automated Builds</div>
                        </div>
                        <span className="text-cyan-400 font-mono text-[11px] font-bold">-70% Time</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#090422] border border-violet-500/20 flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">Database Scale</div>
                          <div className="text-[11px] text-[#9E9EB4]">Oracle Database &amp; PostgreSQL</div>
                        </div>
                        <span className="text-amber-400 font-mono text-[11px] font-bold">2M+ Events</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* 3. Bouncing Scroll Indicator ("curolling animations") */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-violet-400/70 hover:text-cyan-300 transition-colors cursor-pointer group"
      >
        <span className="tracking-widest uppercase text-[10px] group-hover:tracking-wider transition-all">
          Scroll To Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-violet-500/40 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]"
          />
        </motion.div>
        <ChevronDown className="w-3.5 h-3.5 -mt-0.5 text-violet-400/50 group-hover:text-cyan-300" />
      </motion.a>
    </motion.section>
  );
}
