"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 ${
        scrolled ? "bg-[#030014]/70 backdrop-blur-md border-b border-[#7042f8]/20 shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand with glowing logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[#F4F4F7] hover:text-violet-300 transition-colors focus-ring rounded-full px-2 py-1"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 p-[1.5px] shadow-[0_0_15px_rgba(112,66,248,0.5)]">
            <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center text-violet-300">
              <Terminal className="w-4 h-4" />
            </div>
          </div>
          <span className="font-semibold tracking-wide">
            {profileData.name} <span className="text-violet-400 font-mono text-xs">.dev</span>
          </span>
        </Link>

        {/* Center: Frosted Glass Floating Pill Nav (Exact style from screenshot) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#030014]/60 border border-[#7042f8]/40 rounded-full px-6 py-2 backdrop-blur-md shadow-[0_0_25px_rgba(42,14,97,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1 text-sm font-medium text-[#c4b5fd] hover:text-white hover:bg-violet-600/20 rounded-full transition-all focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Social Icons + Resume CTA (Exact style from screenshot) */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#030014]/60 border border-[#7042f8]/30 flex items-center justify-center text-violet-300 hover:text-white hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] backdrop-blur-md transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#030014]/60 border border-[#7042f8]/30 flex items-center justify-center text-violet-300 hover:text-white hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] backdrop-blur-md transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="/resume/resume.pdf"
            download="Raja_Hariharan_Resume.pdf"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(112,66,248,0.4)] hover:shadow-[0_0_25px_rgba(112,66,248,0.6)] transition-all ml-1"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#9E9EB4] hover:text-[#F4F4F7] bg-[#030014]/80 rounded-full border border-[#7042f8]/40 backdrop-blur-md focus-ring"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-5 h-5 text-violet-300" /> : <Menu className="w-5 h-5 text-violet-300" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-[60px] bg-[#030014]/95 backdrop-blur-2xl border-t border-[#7042f8]/30 z-40 md:hidden flex flex-col justify-between p-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-2 pt-4">
              <div className="pb-3 mb-2 border-b border-[#7042f8]/20">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-400">
                  Navigation
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium text-[#E4E4EB] hover:text-violet-400 border-b border-[#140c34] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-violet-400">#</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#7042f8]/30">
              <a
                href="/resume/resume.pdf"
                download="Raja_Hariharan_Resume.pdf"
                className="w-full py-3 rounded-full text-center text-sm font-semibold bg-violet-950/70 text-violet-200 border border-[#7042f8]/40"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 rounded-full text-center text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_20px_rgba(112,66,248,0.5)]"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
