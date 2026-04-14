import AnimatedSection from "@/components/AnimatedSection";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 15, suffix: "", label: "Players", sublabel: "Elite Roster" },
  { value: 50, suffix: "+", label: "Matches", sublabel: "Played & Counting" },
  { value: 3, suffix: "+", label: "Sports", sublabel: "Multi-Category" },
  { value: 10, suffix: "K+", label: "Engagement", sublabel: "Combined Reach" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
        setCount(value);
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px section-divider" />
        <div className="absolute inset-x-0 bottom-0 h-px section-divider" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedSection animation="fade-up" delay={0}>
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-accent mb-6">
              <span className="w-6 h-px bg-accent" />
              Numbers That Matter
              <span className="w-6 h-px bg-accent" />
            </span>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-foreground">
              The <span className="text-gradient-red">Stats</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={0.2}>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto mt-4" />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.25}>
            <p className="mt-4 font-body text-muted-foreground text-base">
              Animated counters. Real dominance.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-up"
              delay={0.1 * i}
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative card-dark rounded-lg p-8 text-center border border-border hover:border-accent/50 hover:shadow-glow-sm transition-all duration-400"
                data-ocid={`stat-${stat.label.toLowerCase()}`}
              >
                {/* Glow top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-accent leading-none mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-display font-bold text-xl uppercase text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {stat.sublabel}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
