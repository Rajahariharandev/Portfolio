"use client";

import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { experiencesData } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#08080D]">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Career Track"
            title="Professional Experience"
            description="A track record of designing, scaling, and maintaining backend infrastructure and high-throughput transactional services."
            align="center"
          />
        </FadeIn>

        <StaggerContainer className="relative border-l border-[#222236] ml-3 sm:ml-6 md:ml-32 space-y-12">
          {experiencesData.map((item) => (
            <StaggerItem key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#11111A] border-2 border-violet-500 group-hover:scale-125 transition-transform" />

              {/* Date pill positioned for desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-violet-400 font-semibold mb-2 md:mb-0">
                {item.period}
              </div>

              <div className="rounded-2xl bg-[#11111A] border border-[#222236] p-6 sm:p-7 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F4F7]">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-violet-300">
                      {item.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#9E9EB4] font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#6B6B80]" />
                      {item.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#181826] border border-[#26263B]">
                      {item.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#9E9EB4] mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {item.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D8D8E6]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#1C1C2C]">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#161624] text-[#A6A6BC] border border-[#222236]"
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
