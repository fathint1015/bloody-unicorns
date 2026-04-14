import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden bg-background"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-accent">
                <span className="w-6 h-px bg-accent" />
                About Us
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-foreground">
                Built to{" "}
                <span className="text-gradient-red block">Break Records</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary" />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">
                  Bloody Unicorns
                </span>{" "}
                is a high-performance, content-driven team competing in{" "}
                <span className="text-accent font-semibold">Invictus</span>, a
                multi-category league by IVB, Chennai.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                We don't just show up — we arrive to conquer. Every match, every
                moment, every kill is a statement. We are the myth they warned
                you about.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.5}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Multi-Sport",
                  "Invictus League",
                  "IVB Chennai",
                  "Competitive Elite",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-accent/30 text-accent/80 font-mono text-xs tracking-widest uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Visual element */}
          <AnimatedSection
            animation="slide-left"
            delay={0.2}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-accent/20"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, oklch(0.54 0.28 22 / 0.1) 25%, transparent 50%, oklch(0.35 0.21 22 / 0.1) 75%, transparent 100%)",
                }}
              />
              {/* Inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-8 rounded-full border border-accent/10"
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      textShadow: [
                        "0 0 20px oklch(0.54 0.28 22 / 0.5)",
                        "0 0 40px oklch(0.54 0.28 22 / 0.8)",
                        "0 0 20px oklch(0.54 0.28 22 / 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="font-display font-black text-8xl text-accent leading-none"
                  >
                    BU
                  </motion.div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">
                    Fear The Myth
                  </p>
                </div>
              </div>

              {/* Decorative dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-accent/40"
                  style={{
                    top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 47}% - 4px)`,
                    left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 47}% - 4px)`,
                  }}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
