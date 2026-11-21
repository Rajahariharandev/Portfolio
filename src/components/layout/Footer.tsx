"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Mail, ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1C1C2C] bg-[#07070B] py-12 text-[#9E9EB4]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-[#F4F4F7] mb-3"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-950/70 border border-violet-800/60 text-violet-400">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono">{profileData.name}</span>
            </Link>
            <p className="text-sm text-[#9E9EB4] max-w-md leading-relaxed mb-4">
              {profileData.role} specialized in concurrent architectures, database optimization, and high-performance API design with Go, Node.js, and relational databases.
            </p>
            <div className="flex items-center gap-3">
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
              <a
                href={`mailto:${profileData.contact.email}`}
                className="p-2 rounded-lg bg-[#11111A] border border-[#222236] text-[#9E9EB4] hover:text-[#F4F4F7] hover:border-violet-500/50 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F7] font-semibold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#F4F4F7] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F4F4F7] transition-colors">
                  Skills & Tech
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F4F4F7] transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F4F4F7] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F4F4F7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F7] font-semibold mb-3">
              Core Tech
            </h3>
            <ul className="space-y-1.5 text-sm font-mono text-[#9E9EB4]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Go (Golang)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Oracle Database
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                PostgreSQL & Redis
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Node.js / TypeScript
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Docker & Linux
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1C1C2C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#6B6B80]">
            © {currentYear} {profileData.name}. All rights reserved. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#9E9EB4] hover:text-[#F4F4F7] transition-colors focus-ring rounded px-2 py-1 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
