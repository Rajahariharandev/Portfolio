"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/Button";
import { profileData } from "@/data/profile";

const navLinks = [
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080D]/85 backdrop-blur-md border-b border-[#222236]/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[#F4F4F7] hover:text-violet-400 transition-colors focus-ring rounded-lg px-2 py-1"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-950/70 border border-violet-800/60 text-violet-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono">raja<span className="text-violet-400">.dev</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11111A]/80 border border-[#222236] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[#9E9EB4] hover:text-[#F4F4F7] hover:bg-[#181826] rounded-full transition-all focus-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/resume/resume.pdf"
              download="Raja_Hariharan_Resume.pdf"
              variant="secondary"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              Resume
            </Button>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#9E9EB4] hover:text-[#F4F4F7] hover:bg-[#181826] rounded-lg border border-[#222236] focus-ring"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer with Motion & AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 top-[57px] bg-[#08080D]/95 backdrop-blur-xl border-t border-[#222236] z-40 md:hidden flex flex-col justify-between p-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-2 pt-4">
              <div className="pb-3 mb-2 border-b border-[#222236]/60">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B80]">
                  Navigation
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium text-[#E4E4EB] hover:text-violet-400 border-b border-[#181826] transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#6B6B80]">#</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-[#222236]">
              <Button
                href="/resume/resume.pdf"
                download="Raja_Hariharan_Resume.pdf"
                variant="secondary"
                size="lg"
                className="w-full justify-center"
                icon={<FileText className="w-4 h-4" />}
              >
                Download Resume
              </Button>
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Contact Me
              </Button>
              <div className="text-center pt-2">
                <span className="text-xs text-[#9E9EB4]">
                  {profileData.availability.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
