"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { skillCategories } from "@/data/skills";
import { CheckCircle2, Sparkles } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#7042f8]/20 bg-transparent relative z-20">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Technical Stack"
            title="Skills &amp; Architectural Capabilities"
            description="A transparent breakdown of production technologies, systems programming experience, and infrastructure tooling. No arbitrary percentage bars."
            align="center"
          />
        </FadeIn>

        {/* Filter Pills */}
        <FadeIn delay={0.1} className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all focus-ring cursor-pointer backdrop-blur-md ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(112,66,248,0.5)] border border-violet-400/50 scale-105"
                  : "bg-[#0b0626]/70 text-[#a3a3c2] border border-[#7042f8]/30 hover:text-white hover:border-violet-500/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        {/* Category Cards Grid with Motion layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-6 hover:border-[#7042f8]/70 hover:shadow-[0_0_25px_rgba(112,66,248,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#a3a3c2] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs transition-colors ${
                          skill.highlight
                            ? "bg-violet-950/40 border-violet-700/50 text-white shadow-[0_0_10px_rgba(112,66,248,0.15)]"
                            : "bg-[#0e0730]/60 border-[#7042f8]/20 text-[#c8c8e0]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {skill.highlight ? (
                            <Sparkles className="w-3.5 h-3.5 text-[#c084fc] shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6B6B80] shrink-0" />
                          )}
                          <span className="font-medium font-mono">{skill.name}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                            skill.level === "Core"
                              ? "bg-violet-900/60 text-violet-200 border border-violet-700/50"
                              : skill.level === "Advanced"
                              ? "bg-[#1f1545]/80 text-violet-300 border border-violet-800/40"
                              : "bg-[#140e30] text-zinc-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#7042f8]/20 flex items-center justify-between text-[11px] text-[#8e8ea8] font-mono">
                  <span>Production Tested</span>
                  <span className="text-violet-400">Active Stack</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
