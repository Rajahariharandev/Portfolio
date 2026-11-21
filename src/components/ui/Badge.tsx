import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "violet" | "outline" | "success";
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-[#181826] text-[#9E9EB4] border border-[#222236]",
    violet: "bg-violet-950/40 text-violet-300 border border-violet-800/50",
    outline: "bg-transparent text-[#9E9EB4] border border-[#222236]",
    success: "bg-emerald-950/40 text-emerald-300 border border-emerald-800/50",
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 rounded-full font-mono font-medium",
    md: "text-xs px-2.5 py-1 rounded-full font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
