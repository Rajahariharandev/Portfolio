"use client";

import React from "react";
import { Server, Database, ShieldCheck, Cpu } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { profileData } from "@/data/profile";

export function About() {
  const principleIcons = [
    <Cpu key="cpu" className="w-5 h-5 text-violet-400" />,
    <Database key="db" className="w-5 h-5 text-violet-400" />,
    <Server key="server" className="w-5 h-5 text-violet-400" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-violet-400" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#0A0A10]/50">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Engineering Story"
            title="Building Reliable Systems with Purpose"
            description="A pragmatic approach to backend architecture: solving concurrency bottlenecks, guaranteeing data integrity, and engineering software that performs under heavy enterprise load."
            align="center"
          />
        </FadeIn>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left: Bio narrative with Motion */}
          <FadeIn direction="left" className="lg:col-span-7 space-y-5 text-[#9E9EB4] text-base leading-relaxed">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="first-of-type:text-[#E4E4EB] first-of-type:font-medium">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-[#1C1C2C] flex flex-wrap gap-4 text-xs font-mono text-[#E4E4EB]">
              <div className="bg-[#11111A] border border-[#222236] px-3.5 py-2 rounded-lg">
                <span className="text-[#6B6B80] block text-[10px] uppercase">Specialization</span>
                Backend &amp; Distributed APIs
              </div>
              <div className="bg-[#11111A] border border-[#222236] px-3.5 py-2 rounded-lg">
                <span className="text-[#6B6B80] block text-[10px] uppercase">Primary Databases</span>
                Oracle, PostgreSQL, Redis
              </div>
              <div className="bg-[#11111A] border border-[#222236] px-3.5 py-2 rounded-lg">
                <span className="text-[#6B6B80] block text-[10px] uppercase">Environment</span>
                Linux, Docker, Nginx, CI/CD
              </div>
            </div>
          </FadeIn>

          {/* Right: Quantified Impact Cards with Staggered Motion */}
          <StaggerContainer className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileData.metrics.map((metric, idx) => (
              <StaggerItem key={idx}>
                <div className="p-5 rounded-xl bg-[#11111A] border border-[#222236] hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-indigo-300 font-mono mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-[#F4F4F7] mb-1.5">
                    {metric.label}
                  </div>
                  <p className="text-xs text-[#9E9EB4] leading-relaxed">
                    {metric.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Engineering Principles */}
        <div>
          <FadeIn className="mb-8 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F7]">
              Core Engineering Principles
            </h3>
            <p className="text-sm text-[#9E9EB4] mt-1">
              Guidelines that govern architectural decisions, code reviews, and production rollouts.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.principles.map((principle, index) => (
              <StaggerItem key={principle.title}>
                <div className="p-6 rounded-xl bg-[#11111A] border border-[#222236] hover:border-violet-500/30 transition-all flex items-start gap-4 h-full">
                  <div className="p-2.5 rounded-lg bg-violet-950/50 border border-violet-800/40 shrink-0">
                    {principleIcons[index % principleIcons.length]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#F4F4F7] mb-1.5">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-[#9E9EB4] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
