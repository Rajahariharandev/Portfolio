"use client";

import React, { useState } from "react";
import { ArrowRight, FileText, Mail, CheckCircle2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="mb-6">
              <Badge variant="success" size="md" className="py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {profileData.availability.status}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F4F7] leading-[1.1] mb-6">
              Engineering resilient backends &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
                high-throughput systems.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#9E9EB4] max-w-2xl leading-relaxed mb-8">
              Hi, I&apos;m <span className="text-[#F4F4F7] font-semibold">{profileData.name}</span>. 
              A Backend &amp; Software Engineer focused on designing low-latency REST APIs, 
              tuning relational database execution plans, and deploying containerized microservices 
              with <span className="text-violet-300 font-mono text-sm">Go</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">Node.js</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">Oracle DB</span>,{" "}
              <span className="text-violet-300 font-mono text-sm">PostgreSQL</span>, and{" "}
              <span className="text-violet-300 font-mono text-sm">Redis</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Projects
              </Button>
              <Button
                href="/resume/resume.pdf"
                download="Raja_Hariharan_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={<FileText className="w-4 h-4" />}
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                size="lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Contact & Socials */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#9E9EB4] pt-4 border-t border-[#1C1C2C] w-full">
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 hover:text-[#F4F4F7] bg-[#11111A] border border-[#222236] px-3 py-1.5 rounded-lg transition-colors focus-ring cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span className="font-mono text-xs">{profileData.contact.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#6B6B80]" />
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#11111A] border border-[#222236] text-[#9E9EB4] hover:text-[#F4F4F7] hover:border-violet-500/50 transition-colors"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#11111A] border border-[#222236] text-[#9E9EB4] hover:text-[#F4F4F7] hover:border-violet-500/50 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Backend Architecture Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl border border-[#222236] bg-[#0E0E17]/95 shadow-2xl shadow-violet-950/20 overflow-hidden font-mono text-xs">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#141420] border-b border-[#222236]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[#9E9EB4] text-[11px] font-sans">rajahariharan-server :: telemetry</span>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  HEALTHY
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3.5 text-[#E4E4EB] leading-relaxed">
                <div>
                  <span className="text-violet-400 font-semibold">$</span>{" "}
                  <span className="text-zinc-400">systemctl status go-oracle-service</span>
                </div>
                <div className="text-[#9E9EB4] pl-2 border-l border-violet-500/30 space-y-1 text-[11px]">
                  <p>● go-oracle-service.service - High-Throughput REST Gateway</p>
                  <p className="text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" /> Active: running (uptime: 99.98%)
                  </p>
                  <p>  Memory: 48.2 MB / CPU: 4.8% / Goroutines: 124</p>
                </div>

                <div className="pt-1">
                  <span className="text-violet-400 font-semibold">$</span>{" "}
                  <span className="text-zinc-400">telemetry --metrics --live</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="bg-[#141420] p-2.5 rounded border border-[#222236]">
                    <span className="text-[#6B6B80] block text-[10px] uppercase">P99 Query Latency</span>
                    <span className="text-emerald-400 text-sm font-bold">42 ms</span>
                    <span className="text-[#6B6B80] block text-[9px]">baseline: 850ms</span>
                  </div>
                  <div className="bg-[#141420] p-2.5 rounded border border-[#222236]">
                    <span className="text-[#6B6B80] block text-[10px] uppercase">Redis Cache Hit</span>
                    <span className="text-violet-300 text-sm font-bold">99.2 %</span>
                    <span className="text-[#6B6B80] block text-[9px]">singleflight active</span>
                  </div>
                  <div className="bg-[#141420] p-2.5 rounded border border-[#222236]">
                    <span className="text-[#6B6B80] block text-[10px] uppercase">Oracle Connection Pool</span>
                    <span className="text-sky-400 text-sm font-bold">18 / 20</span>
                    <span className="text-[#6B6B80] block text-[9px]">zero starvation</span>
                  </div>
                  <div className="bg-[#141420] p-2.5 rounded border border-[#222236]">
                    <span className="text-[#6B6B80] block text-[10px] uppercase">Daily Events Stream</span>
                    <span className="text-amber-300 text-sm font-bold">2,140,580</span>
                    <span className="text-[#6B6B80] block text-[9px]">0 unhandled drops</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-violet-400 font-semibold">$</span>{" "}
                  <span className="text-zinc-400">tail -n 2 /var/log/audit.json</span>
                </div>
                <div className="bg-[#0A0A10] p-2 rounded border border-[#1C1C2C] text-[10px] text-zinc-400 overflow-x-auto">
                  <code>{`{"event":"MUTATION","status":200,"duration_ms":3.2,"trace":"tr-88f1"}`}</code>
                  <br />
                  <code>{`{"event":"CACHE_READ","status":304,"duration_ms":0.8,"cache":"HIT"}`}</code>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[#6B6B80] text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
                  <span>Daemon listening on 0.0.0.0:8080 (HTTP/2 + TLS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
