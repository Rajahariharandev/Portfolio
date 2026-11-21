"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 sm:py-4 px-4 sm:px-10 ${
        scrolled ? "bg-[#030014]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Stylized Monogram Logo "RK" matching mockup */}
        <Link
          href="/"
          className="flex items-center gap-1 font-black tracking-tight text-white hover:text-cyan-300 transition-colors focus-ring rounded-lg px-2 py-1 group"
        >
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tighter text-white group-hover:text-cyan-300 transition-colors font-sans">
            R<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">K</span>
          </span>
        </Link>

        {/* Center: Minimalist text navigation links matching mockup */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300/90">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all focus-ring text-xs sm:text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: "Let's Talk →" Pill Button with Glowing Cyan Border matching mockup */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.04] border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-500/10 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] backdrop-blur-md transition-all flex items-center gap-1.5 group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
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
            className="md:hidden mt-3 p-5 rounded-2xl bg-[#07031e]/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl flex flex-col gap-2.5"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
