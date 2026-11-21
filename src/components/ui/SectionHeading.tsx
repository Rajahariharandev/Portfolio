import React from "react";
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
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-violet-950/40 text-violet-300 border border-violet-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F4F7]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#9E9EB4] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
