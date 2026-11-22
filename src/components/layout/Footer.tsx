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
    <footer className="border-t border-[#7042f8]/20 bg-[#02000e] py-12 text-[#9E9EB4] relative z-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-white mb-3"
            >
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-950/70 border border-[#7042f8]/50 text-violet-300 shadow-[0_0_12px_rgba(112,66,248,0.4)]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono">{profileData.name}</span>
            </Link>
            <p className="text-sm text-[#a3a3c2] max-w-md leading-relaxed mb-4">
              {profileData.role} specialized in concurrent architectures, database optimization, and high-performance API design with Go, Node.js, Python and relational databases.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c0728] border border-[#7042f8]/30 text-violet-300 hover:text-white hover:border-[#7042f8] flex items-center justify-center transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#0c0728] border border-[#7042f8]/30 text-violet-300 hover:text-white hover:border-[#7042f8] flex items-center justify-center transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-8 h-8 rounded-full bg-[#0c0728] border border-[#7042f8]/30 text-violet-300 hover:text-white hover:border-[#7042f8] flex items-center justify-center transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#a3a3c2]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-semibold mb-3">
              Core Tech
            </h3>
            <ul className="space-y-1.5 text-sm font-mono text-[#a3a3c2]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                Golang / node.js / Python
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                Oracle Database
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                PostgreSQL / Redis / Oracle
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                Next.js / Express.js
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00f0ff]" />
                Linux / Nginx / Docker
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#7042f8]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#6B6B80]">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-violet-300 hover:text-white transition-colors focus-ring rounded-full px-3 py-1 bg-[#0c0728] border border-[#7042f8]/30 cursor-pointer"
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
