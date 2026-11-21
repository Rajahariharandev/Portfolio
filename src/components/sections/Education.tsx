import React from "react";
import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { educationData, certificationsData } from "@/data/experience";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#0A0A10]/50">
      <Container>
        <SectionHeading
          tag="Credentials"
          title="Education &amp; Certifications"
          description="Formal academic foundations in computer science paired with verified technical certifications in database engineering and systems architecture."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F7]">Education</h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#11111A] border border-[#222236] p-6 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-base font-semibold text-[#F4F4F7]">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-violet-400 font-medium">
                    {edu.period}
                  </span>
                </div>
                <div className="text-sm text-violet-300 font-medium">
                  {edu.institution}
                </div>
                <div className="text-xs text-[#6B6B80]">
                  {edu.location}
                </div>

                <div className="pt-3 border-t border-[#1C1C2C] space-y-2">
                  {edu.details.map((detail, dIdx) => (
                    <p key={dIdx} className="text-xs text-[#9E9EB4] leading-relaxed">
                      • {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F7]">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#11111A] border border-[#222236] p-5 flex items-start justify-between gap-4 hover:border-violet-500/40 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h4 className="text-sm font-semibold text-[#F4F4F7]">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-violet-300 pl-6">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="text-[11px] font-mono text-[#6B6B80] pl-6">
                        Track: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#9E9EB4] px-2 py-1 rounded bg-[#161624] border border-[#222236] shrink-0">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
