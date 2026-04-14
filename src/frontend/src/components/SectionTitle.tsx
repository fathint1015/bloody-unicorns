import AnimatedSection from "@/components/AnimatedSection";
import type { ReactNode } from "react";

interface SectionTitleProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {label && (
        <AnimatedSection animation="fade-up" delay={0}>
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-accent">
            <span className="w-6 h-px bg-accent" />
            {label}
            <span className="w-6 h-px bg-accent" />
          </span>
        </AnimatedSection>
      )}

      <AnimatedSection animation="fade-up" delay={0.1}>
        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight text-foreground uppercase">
          {title}
        </h2>
      </AnimatedSection>

      {/* Red accent line */}
      <AnimatedSection animation="scale-in" delay={0.2}>
        <div
          className={`h-1 w-16 bg-gradient-to-r from-primary to-secondary ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          }`}
        />
      </AnimatedSection>

      {subtitle && (
        <AnimatedSection animation="fade-up" delay={0.25}>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
