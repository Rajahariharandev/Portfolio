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
    <section id="skills" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#08080D]">
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
        <FadeIn delay={0.1} className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all focus-ring cursor-pointer ${
                activeCategory === cat
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-900/30 scale-105"
                  : "bg-[#11111A] text-[#9E9EB4] border border-[#222236] hover:text-[#F4F4F7] hover:border-violet-700/50"
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
                className="rounded-xl bg-[#11111A] border border-[#222236] p-6 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-semibold text-[#F4F4F7] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#9E9EB4] mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-between p-2 rounded-lg border text-xs transition-colors ${
                          skill.highlight
                            ? "bg-violet-950/20 border-violet-800/40 text-[#F4F4F7]"
                            : "bg-[#141420]/70 border-[#222236] text-[#C8C8D6]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {skill.highlight ? (
                            <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6B6B80] shrink-0" />
                          )}
                          <span className="font-medium font-mono">{skill.name}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                            skill.level === "Core"
                              ? "bg-violet-950/80 text-violet-300 border border-violet-800/50"
                              : skill.level === "Advanced"
                              ? "bg-[#1F1F30] text-zinc-300 border border-[#2B2B42]"
                              : "bg-[#181824] text-zinc-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#1C1C2C] flex items-center justify-between text-[11px] text-[#6B6B80] font-mono">
                  <span>Production Tested</span>
                  <span>Active Stack</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
