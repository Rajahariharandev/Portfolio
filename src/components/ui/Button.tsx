import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    download?: string | boolean;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-md shadow-violet-900/20 active:translate-y-0.5",
    secondary:
      "bg-[#181826] hover:bg-[#202033] text-[#F4F4F7] border border-[#26263B] font-medium active:translate-y-0.5",
    outline:
      "bg-transparent hover:bg-violet-950/20 text-violet-300 border border-violet-800/60 hover:border-violet-600 font-medium",
    ghost:
      "bg-transparent hover:bg-[#181826] text-[#9E9EB4] hover:text-[#F4F4F7] font-medium",
  };

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5",
    md: "text-sm px-4 py-2.5 rounded-lg gap-2",
    lg: "text-base px-5 py-3 rounded-xl gap-2.5",
  };

  const combinedClasses = cn(
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer focus-ring select-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, ...linkProps } = props as ButtonAsLink;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("/resume");

    if (isExternal || download) {
      return (
        <a
          href={href}
          download={download}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          className={combinedClasses}
          {...linkProps}
        >
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
