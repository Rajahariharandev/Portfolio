"use client";

import React from "react";
import { MapPin, CheckCircle2, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { experiencesData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#7042f8]/20 bg-transparent relative z-20">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Career Track"
            title="Professional Experience"
            description="3+ years of progressive backend engineering, automation framework development, and team leadership."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="relative border-l border-[#7042f8]/30 ml-3 sm:ml-6 md:ml-32 space-y-12">
          {experiencesData.map((item) => (
            <StaggerItem key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#030014] border-2 border-violet-500 shadow-[0_0_12px_#8b5cf6] group-hover:scale-125 transition-transform" />

              {/* Date pill positioned for desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-cyan-300 font-semibold mb-2 md:mb-0">
                {item.period}
              </div>

              <div className="rounded-2xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-6 sm:p-7 hover:border-[#7042f8]/70 hover:shadow-[0_0_25px_rgba(112,66,248,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      {item.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                          <TrendingUp className="w-3 h-3" />
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-violet-300">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#a3a3c2] font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-violet-400" />
                      {item.location}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#130b3d] border border-[#7042f8]/30 text-violet-200">
                      {item.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#a3a3c2] mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d8d8f0]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#7042f8]/20">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#130b3d]/80 text-[#d8d8f0] border border-[#7042f8]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
