"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-3.5 px-4 sm:px-8 ${
        scrolled ? "bg-[#030014]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Celestial Atom Logo + Theme-Aligned Developer Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-tight text-[#F4F4F7] hover:text-white transition-colors focus-ring rounded-full px-2 py-1 group"
        >
          {/* Glowing Cosmic Atom Icon matching reference */}
          <div className="relative w-8 h-8 rounded-full bg-[#0a0524] border border-violet-500/40 p-1 flex items-center justify-center shadow-[0_0_18px_rgba(112,66,248,0.5)] group-hover:shadow-[0_0_26px_rgba(0,240,255,0.7)] group-hover:border-cyan-400/60 transition-all">
            <svg
              className="w-5 h-5 text-cyan-400 animate-[spin_10s_linear_infinite]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="12" r="2.5" fill="#00f0ff" className="shadow-[0_0_8px_#00f0ff]" />
              <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(30 12 12)" stroke="url(#nav-logo-grad1)" />
              <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-30 12 12)" stroke="url(#nav-logo-grad2)" />
              <defs>
                <linearGradient id="nav-logo-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="nav-logo-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Rajahariharan K
            </span>
            <span className="text-[11px] font-mono font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 px-2 py-0.5 rounded-full bg-violet-950/50 border border-violet-500/30 shadow-[0_0_10px_rgba(112,66,248,0.25)]">
              .dev
            </span>
          </div>
        </Link>

        {/* Center: Frosted Glass Floating Pill Nav (Embraced inside Black Hole U-Arc) */}
        <nav className="hidden md:flex items-center gap-0.5 bg-[#07031e]/70 border border-white/[0.09] rounded-full px-5 py-1.5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1 text-xs font-medium text-[#c4b5fd]/85 hover:text-white hover:bg-white/[0.08] rounded-full transition-all focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Social Icons + Resume CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#080320]/75 border border-white/[0.08] flex items-center justify-center text-[#c4b5fd] hover:text-white hover:border-violet-500/60 hover:shadow-[0_0_15px_rgba(112,66,248,0.35)] backdrop-blur-md transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-[#080320]/75 border border-white/[0.08] flex items-center justify-center text-[#c4b5fd] hover:text-white hover:border-violet-500/60 hover:shadow-[0_0_15px_rgba(112,66,248,0.35)] backdrop-blur-md transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="/resume/resume.pdf"
            download="Raja_Hariharan_Resume.pdf"
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(112,66,248,0.5),inset_0_1px_0_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_28px_rgba(112,66,248,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all ml-1"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#9E9EB4] hover:text-[#F4F4F7] bg-[#030014]/80 rounded-full border border-white/[0.08] backdrop-blur-md focus-ring"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-4 rounded-2xl bg-[#07031e]/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-[#c4b5fd] hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.05] text-violet-300"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.05] text-violet-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
              <a
                href="/resume/resume.pdf"
                download="Raja_Hariharan_Resume.pdf"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-violet-600 text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
