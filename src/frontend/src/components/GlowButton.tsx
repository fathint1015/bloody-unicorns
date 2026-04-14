import { motion } from "motion/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  "data-ocid"?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs gap-1.5",
  md: "px-6 py-2.5 text-sm gap-2",
  lg: "px-8 py-3 text-base gap-2.5",
  xl: "px-10 py-4 text-lg gap-3",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-background border border-accent font-bold hover:bg-secondary hover:border-secondary hover:shadow-glow-md",
  secondary:
    "bg-transparent text-accent border border-accent/70 font-bold hover:bg-accent/10 hover:border-accent hover:shadow-glow-sm",
  outline:
    "bg-transparent text-foreground border border-border font-semibold hover:border-accent hover:text-accent hover:shadow-glow-sm",
  ghost:
    "bg-transparent text-muted-foreground border border-transparent font-semibold hover:text-accent hover:border-accent/40",
};

export default function GlowButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  rel,
  "data-ocid": dataOcid,
  ...props
}: GlowButtonProps) {
  const baseClasses = [
    "inline-flex items-center justify-center",
    "font-display tracking-widest uppercase",
    "transition-all duration-300 ease-out",
    "clip-corner",
    "cursor-pointer select-none",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={baseClasses}
        data-ocid={dataOcid}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={baseClasses}
      data-ocid={dataOcid}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </motion.button>
  );
}
