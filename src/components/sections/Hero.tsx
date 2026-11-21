"use client";

import React, { useState } from "react";
import { ArrowRight, FileText, Mail, Sparkles, Copy, Check } from "lucide-react";
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
        staggerChildren: 0.12,
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

  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden flex items-center justify-center">
      {/* Top Cosmic Black Hole & Accretion Disk Graphic */}
      <BlackHole />

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Sparkle Pill Badge with Promoted Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#7042f8]/60 bg-[#030014]/60 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.3)]">
                <Sparkles className="w-3.5 h-3.5 text-[#c084fc] animate-pulse" />
                <span className="text-xs font-medium text-[#e9d5ff]">
                  Assistant Lead – Python Developer &amp; Backend Automation
                </span>
              </div>
            </motion.div>

            {/* Headline with vibrant purple-to-cyan gradient on "the best" */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Providing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#c084fc] to-[#06b6d4] drop-shadow-[0_0_25px_rgba(112,66,248,0.4)]">
                the best
              </span>{" "}
              project experience
            </motion.h1>

            {/* Sub-headline description tailored to resume */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#9494ad] max-w-xl leading-relaxed mb-8"
            >
              I&apos;m <span className="text-white font-semibold">{profileData.name}</span>, an Assistant Lead and Python Developer with 3+ years of experience engineering 
              scalable automation scripts, backend microservices, and REST API frameworks across{" "}
              <span className="text-violet-300 font-mono text-sm">Python (FastAPI / Django)</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">Golang</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">GitLab CI/CD</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">PostgreSQL</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">Oracle</span>, and{" "}
              <span className="text-violet-300 font-mono text-sm">Redis</span>.
            </motion.p>

            {/* Radiant Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7042f8] to-[#581c87] border border-[#a855f7]/50 shadow-[0_0_25px_rgba(112,66,248,0.5)] hover:shadow-[0_0_35px_rgba(112,66,248,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Learn More!</span>
                <ArrowRight className="w-4 h-4 text-violet-200" />
              </a>

              <a
                href="/resume/resume.pdf"
                download="Rajahariharan_K_Resume.pdf"
                className="px-5 py-3 rounded-xl text-sm font-medium text-[#c4b5fd] bg-[#0c0828]/70 border border-[#7042f8]/40 hover:border-violet-400 hover:text-white backdrop-blur-md transition-all flex items-center gap-2"
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

            {/* Direct Email with copy helper */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-xs text-[#9E9EB4] pt-2"
            >
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 hover:text-white bg-[#0a0624]/80 border border-[#7042f8]/30 px-3.5 py-1.5 rounded-full transition-all cursor-pointer backdrop-blur-md hover:border-violet-400"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span className="font-mono text-xs text-violet-200">{profileData.contact.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-violet-400" />
                )}
              </button>
              <span className="text-[#6B6B80] hidden sm:inline">•</span>
              <span className="text-[#8e8ea6] hidden sm:inline">{profileData.location}</span>
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
