"use client";

import React, { useState } from "react";
import { ArrowRight, FileText, Mail, Sparkles, Copy, Check, Terminal, Zap, ShieldCheck, Database } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { BlackHole } from "@/components/cosmic/BlackHole";
import { OrbitalRadar } from "@/components/cosmic/OrbitalRadar";
import { Container } from "@/components/ui/Container";
import { profileData } from "@/data/profile";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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
      transition: { duration: 0.55, ease: "easeOut" },
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
      icon: Terminal,
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
    <section className="relative min-h-[96vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center justify-center">
      {/* 1. Top Cosmic Black Hole & Accretion Disk Graphic */}
      <BlackHole />

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, Headlines & Impact Badges */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Sparkle Pill Badge with Promoted Title and Live Beacon */}
            <motion.div variants={itemVariants} className="mb-5">
              <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full border border-[#7042f8]/60 bg-[#030014]/70 backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.35)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc] animate-pulse" />
                <span className="text-xs font-semibold text-[#e9d5ff] tracking-wide">
                  Assistant Lead – Python Developer &amp; Backend Automation
                </span>
              </div>
            </motion.div>

            {/* Detailed Primary Headline matching Reference and Enhancing with Cosmic Gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.1] mb-4"
            >
              Providing{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#00f0ff] drop-shadow-[0_0_35px_rgba(112,66,248,0.55)]">
                  the best
                </span>
              </span>{" "}
              project experience
            </motion.h1>

            {/* Secondary High-Impact Headline Statement */}
            <motion.div variants={itemVariants} className="mb-5">
              <h2 className="text-base sm:text-lg font-medium text-violet-200/90 tracking-wide flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                Architecting High-Throughput Microservices &amp; Autonomous Automation Frameworks
              </h2>
            </motion.div>

            {/* Sub-headline description tailored strictly to verified resume */}
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

            {/* Resume-backed Impact Stat Chips Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl mb-7"
            >
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className={`relative p-2.5 rounded-xl bg-[#09051d]/70 border ${stat.borderColor} backdrop-blur-md hover:bg-[#120a36]/80 transition-all group`}
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

            {/* Radiant Action Buttons */}
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

            {/* Direct Email with copy helper & Location */}
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

          {/* Right Column: The Celestial Orbital Tech Radar */}
          <motion.div
            className="lg:col-span-5 w-full flex items-center justify-center"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <OrbitalRadar />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
