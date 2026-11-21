import React from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left max-w-3xl",
        className
      )}
    >
      {tag && (
        <div className="mb-3.5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-[#030014]/80 text-[#e9d5ff] border border-[#7042f8]/50 backdrop-blur-md shadow-[0_0_15px_rgba(112,66,248,0.25)]">
            <Sparkles className="w-3 h-3 text-[#c084fc] animate-pulse" />
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#a3a3c2] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
