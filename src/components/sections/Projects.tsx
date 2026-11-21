"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Network
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { projectsData } from "@/data/projects";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(projectsData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#0A0A10]/60">
      <Container>
        <SectionHeading
          tag="Case Studies"
          title="Featured Engineering Projects"
          description="In-depth case studies illustrating real-world architectural design, concurrency optimizations, database tuning, and measurable business outcomes."
          align="center"
        />

        <div className="space-y-8">
          {projectsData.map((project, index) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#11111A] border border-[#222236] transition-all hover:border-violet-500/40 overflow-hidden"
              >
                {/* Project Card Summary Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-violet-400 font-semibold">
                        0{index + 1} {"//"}
                      </span>
                      <Badge variant="violet" size="sm">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-[#6B6B80] font-mono">
                        {project.role}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#9E9EB4]">
                      {project.period}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F4F7] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#9E9EB4] max-w-3xl mb-6 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-[#141420] border border-[#222236] rounded-xl p-3"
                      >
                        <span className="text-[10px] text-[#6B6B80] uppercase tracking-wider block font-mono">
                          {m.label}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-violet-300 font-mono">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#181826] border border-[#26263B] text-[#D8D8E6]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1C1C2C]">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors focus-ring rounded py-1 cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Hide Full Architectural Breakdown" : "View Full Architectural Breakdown"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#9E9EB4] hover:text-[#F4F4F7] transition-colors focus-ring"
                        >
                          <span>Repository</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Case Study Deep Dive */}
                {isExpanded && (
                  <div className="border-t border-[#1C1C2C] bg-[#0C0C14] p-6 sm:p-8 space-y-8 animate-in fade-in duration-200">
                    {/* Problem Statement */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2">
                        <AlertCircle className="w-4 h-4" />
                        The Problem &amp; Baseline Bottleneck
                      </div>
                      <p className="text-sm text-[#B4B4C8] leading-relaxed pl-6 border-l-2 border-rose-500/40">
                        {project.problem}
                      </p>
                    </div>

                    {/* Architecture Flow */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-2">
                        <Network className="w-4 h-4" />
                        System Architecture &amp; Execution Pipeline
                      </div>
                      <p className="text-sm text-[#9E9EB4] mb-4">
                        {project.architecture.description}
                      </p>

                      {project.architecture.diagramSnippet && (
                        <div className="bg-[#141422] border border-violet-900/30 rounded-lg p-3.5 mb-4 text-xs font-mono text-violet-200 overflow-x-auto">
                          <code>{project.architecture.diagramSnippet}</code>
                        </div>
                      )}

                      <div className="space-y-2">
                        {project.architecture.flow.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-start gap-3 text-xs text-[#C8C8D8]"
                          >
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-violet-950/80 border border-violet-800/60 text-violet-400 font-mono text-[10px] shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Engineering Decisions */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold mb-3">
                        <Cpu className="w-4 h-4" />
                        Key Engineering Decisions &amp; Trade-offs
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.keyDecisions.map((kd, kIdx) => (
                          <div
                            key={kIdx}
                            className="bg-[#11111A] border border-[#222236] p-4 rounded-xl space-y-1.5"
                          >
                            <div className="text-xs font-semibold text-[#F4F4F7]">
                              {kd.decision}
                            </div>
                            <p className="text-xs text-[#9E9EB4] leading-relaxed">
                              <span className="text-[#6B6B80] font-mono">Why:</span> {kd.rationale}
                            </p>
                            <div className="text-xs text-emerald-400 font-medium">
                              <span className="text-[#6B6B80] font-mono">Impact:</span> {kd.impact}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Security & Reliability Safeguards */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                        <ShieldCheck className="w-4 h-4" />
                        Security, Reliability &amp; Fault Tolerance
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9E9EB4]">
                        {project.securityAndReliability.map((sec, secIdx) => (
                          <li
                            key={secIdx}
                            className="flex items-start gap-2 bg-[#11111A]/60 p-2.5 rounded-lg border border-[#222236]"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{sec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Production Outcomes */}
                    <div className="pt-4 border-t border-[#1C1C2C]">
                      <div className="text-xs font-mono uppercase tracking-wider text-violet-300 font-semibold mb-2">
                        Verified Production Outcomes
                      </div>
                      <ul className="space-y-1.5">
                        {project.outcomes.map((outcome, oIdx) => (
                          <li
                            key={oIdx}
                            className="flex items-center gap-2 text-xs text-[#E4E4EB]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
