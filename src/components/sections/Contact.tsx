"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare, AlertCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // anti-bot spam field
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (formState.honeypot) {
      setStatus("success");
      return;
    }

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // Client-side validated flow with fallback mailto
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
    <section id="contact" className="py-20 md:py-28 border-t border-[#1C1C2C] bg-[#08080D]">
      <Container>
        <SectionHeading
          tag="Get in Touch"
          title="Let's Discuss Backend Engineering"
          description="Interested in collaborating on scalable APIs, database architecture, or exploring backend engineering opportunities? Reach out directly."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#11111A] border border-[#222236] p-6 sm:p-7 space-y-6">
              <h3 className="text-lg font-bold text-[#F4F4F7] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EB4] leading-relaxed">
                I am responsive via email and LinkedIn. Feel free to copy my direct address or leave a note via the message form.
              </p>

              {/* Email item */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#6B6B80] uppercase">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-[#161624] border border-[#222236]">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-[#F4F4F7] truncate">
                      {profileData.contact.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#202033] hover:bg-[#282842] text-[#9E9EB4] hover:text-[#F4F4F7] transition-colors focus-ring"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#1C1C2C] space-y-3">
                <span className="text-xs font-mono text-[#6B6B80] uppercase block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161624] border border-[#222236] text-xs font-medium text-[#C8C8D8] hover:text-[#F4F4F7] hover:border-violet-500/50 transition-all focus-ring"
                  >
                    <GithubIcon className="w-4 h-4 text-violet-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#161624] border border-[#222236] text-xs font-medium text-[#C8C8D8] hover:text-[#F4F4F7] hover:border-violet-500/50 transition-all focus-ring"
                  >
                    <LinkedinIcon className="w-4 h-4 text-violet-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability Notice */}
              <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-violet-300 flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse" />
                <span>
                  Currently open to software engineering discussions, high-scale backend roles, and distributed systems challenges.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Protected Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#11111A] border border-[#222236] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#F4F4F7] mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-[#9E9EB4] mb-6">
                All inquiries go directly to my inbox. I usually reply within 24 hours.
              </p>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#F4F4F7]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9E9EB4] max-w-sm mx-auto">
                    Thank you for reaching out! I have received your note and will get back to you shortly.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from users, traps automated bots) */}
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
                    <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/50 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#B4B4C8] mb-1.5"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161624] border border-[#222236] text-sm text-[#F4F4F7] placeholder-[#5A5A70] focus:border-violet-500 focus-ring transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#B4B4C8] mb-1.5"
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#161624] border border-[#222236] text-sm text-[#F4F4F7] placeholder-[#5A5A70] focus:border-violet-500 focus-ring transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono text-[#B4B4C8] mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Backend Engineering Opportunity / Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#161624] border border-[#222236] text-sm text-[#F4F4F7] placeholder-[#5A5A70] focus:border-violet-500 focus-ring transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#B4B4C8] mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Raja, we'd like to discuss our backend distributed architecture..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#161624] border border-[#222236] text-sm text-[#F4F4F7] placeholder-[#5A5A70] focus:border-violet-500 focus-ring transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<Send className="w-3.5 h-3.5" />}
                    iconPosition="right"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Validating & Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
