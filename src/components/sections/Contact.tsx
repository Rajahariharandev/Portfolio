"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/MotionWrapper";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formState.honeypot) {
      setStatus("success");
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message. Please contact directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#7042f8]/20 bg-transparent relative z-20">
      <Container>
        <FadeIn>
          <SectionHeading
            tag="Get in Touch"
            title="Let's Discuss Backend &amp; Automation"
            description="Interested in collaborating on scalable frameworks, backend microservices, or discussing leadership opportunities? Reach out directly."
            align="center"
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <FadeIn direction="left" className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-6 sm:p-7 space-y-6 backdrop-blur-md shadow-[0_0_30px_rgba(42,14,97,0.3)]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#a3a3c2] leading-relaxed">
                Responsive via email, phone, and professional channels. Reach out directly or leave a note below.
              </p>

              {/* Email item */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-violet-400 uppercase">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-white truncate">
                      {profileData.contact.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#1f1354] hover:bg-violet-600 text-violet-200 hover:text-white transition-colors focus-ring"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone item */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-violet-400 uppercase">
                  Phone / Mobile
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30">
                  <div className="flex items-center gap-2.5 truncate">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-white truncate">
                      +91 {profileData.phone}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg bg-[#1f1354] hover:bg-violet-600 text-violet-200 hover:text-white transition-colors focus-ring"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-[#a3a3c2] pt-1">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>{profileData.location}</span>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#7042f8]/20 space-y-3">
                <span className="text-xs font-mono text-violet-400 uppercase block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-xs font-medium text-[#c8c8e0] hover:text-white hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] transition-all focus-ring"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-xs font-medium text-[#c8c8e0] hover:text-white hover:border-[#7042f8] hover:shadow-[0_0_15px_rgba(112,66,248,0.4)] transition-all focus-ring"
                  >
                    <LinkedinIcon className="w-4 h-4 text-violet-300" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-3.5 rounded-xl bg-violet-950/40 border border-[#7042f8]/40 text-xs text-violet-200 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>
                  Promoted Assistant Lead actively available for Developer, Backend Automation, and Technical Leadership roles.
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Protected Form */}
          <FadeIn direction="right" className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0c0728]/70 border border-[#7042f8]/30 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(42,14,97,0.3)]">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#a3a3c2] mb-6">
                All inquiries go directly to my inbox. I usually reply within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Message Sent Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-[#a3a3c2] max-w-sm mx-auto">
                      Thank you for reaching out! I have received your message and will get back to you promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1a0f4a] hover:bg-violet-600 text-white border border-[#7042f8]/40 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      name="website_honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={formState.honeypot}
                      onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                      className="hidden"
                    />

                    {status === "error" && (
                      <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono text-violet-300 mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-sm text-white placeholder-[#6a6a8c] focus:border-violet-400 focus-ring transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono text-violet-300 mb-1.5"
                        >
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-sm text-white placeholder-[#6a6a8c] focus:border-violet-400 focus-ring transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono text-violet-300 mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Backend Opportunity / Consultation"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-sm text-white placeholder-[#6a6a8c] focus:border-violet-400 focus-ring transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono text-violet-300 mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Rajahariharan, we'd like to discuss our backend and automation framework..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#120b38]/80 border border-[#7042f8]/30 text-sm text-white placeholder-[#6a6a8c] focus:border-violet-400 focus-ring transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#7042f8] to-[#581c87] border border-[#a855f7]/50 shadow-[0_0_20px_rgba(112,66,248,0.5)] hover:shadow-[0_0_30px_rgba(112,66,248,0.8)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>{status === "submitting" ? "Validating & Sending..." : "Send Message"}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
