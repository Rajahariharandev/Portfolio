"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { educationData, certificationsData } from "@/data/experience";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#7042f8]/20 bg-transparent relative z-20">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Credentials"
            title="Education &amp; Certifications"
            description="Formal academic foundations in computer science paired with verified technical certifications in database engineering and systems architecture."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Block */}
          <FadeIn direction="left" className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-violet-950/70 border border-violet-800/50 text-violet-300 shadow-[0_0_15px_rgba(112,66,248,0.3)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-6 space-y-3 backdrop-blur-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-cyan-300 font-medium">
                    {edu.period}
                  </span>
                </div>
                <div className="text-sm text-violet-300 font-medium">
                  {edu.institution}
                </div>
                <div className="text-xs text-[#8e8ea6]">
                  {edu.location}
                </div>

                <div className="pt-3 border-t border-[#7042f8]/20 space-y-2">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-xs text-[#a3a3c2] leading-relaxed">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </FadeIn>

          {/* Certifications Block */}
          <FadeIn direction="right" className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-violet-950/70 border border-violet-800/50 text-violet-300 shadow-[0_0_15px_rgba(112,66,248,0.3)]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-5 flex items-start justify-between gap-4 hover:border-[#7042f8]/70 hover:shadow-[0_0_20px_rgba(112,66,248,0.2)] transition-all backdrop-blur-md"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 shadow-[0_0_6px_#34d399]" />
                      <h4 className="text-sm font-semibold text-white">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-violet-300 pl-6">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-[#8e8ea6] pl-6">
                        Track: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-200 px-2.5 py-1 rounded-full bg-[#130b3d] border border-[#7042f8]/30 shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
