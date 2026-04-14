import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "motion/react";

export default function RivalrySection() {
  return (
    <section id="rivalry" className="relative overflow-hidden py-32 md:py-40">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/60 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px section-divider" />
        <div className="absolute inset-x-0 bottom-0 h-px section-divider" />
      </div>
      {/* Red dramatic diagonal slash */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 right-0 w-2/3 h-full opacity-5"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, oklch(0.54 0.28 22) 40%, oklch(0.54 0.28 22) 42%, transparent 42%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-2/3 h-full opacity-5"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.21 22) 0%, oklch(0.35 0.21 22) 2%, transparent 2%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <AnimatedSection
            animation="slide-right"
            delay={0}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* VS graphic */}
              <div className="flex items-center justify-center gap-8">
                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-center"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-accent/40 bg-card flex items-center justify-center glow-accent">
                    <span className="font-display font-black text-2xl text-accent">
                      BU
                    </span>
                  </div>
                  <p className="font-mono text-xs mt-2 tracking-widest uppercase text-accent">
                    Bloody Unicorns
                  </p>
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="font-display font-black text-5xl text-accent"
                  >
                    VS
                  </motion.div>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/50 to-transparent" />
                </div>

                <motion.div
                  animate={{ x: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="text-center opacity-50"
                >
                  <div className="w-24 h-24 rounded-full border-2 border-muted bg-card/50 flex items-center justify-center">
                    <span className="font-display font-black text-2xl text-muted-foreground">
                      ??
                    </span>
                  </div>
                  <p className="font-mono text-xs mt-2 tracking-widest uppercase text-muted-foreground">
                    The Fallen
                  </p>
                </motion.div>
              </div>

              {/* Score display */}
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="font-display font-black text-6xl text-accent">
                  W
                </span>
                <div className="w-px h-12 bg-border" />
                <span className="font-display font-black text-6xl text-muted-foreground/40">
                  L
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Right content */}
          <div className="flex flex-col gap-8">
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-accent">
                <span className="w-6 h-px bg-accent" />
                Rivalry
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-foreground">
                Some Teams <span className="text-gradient-red">Fly.</span>
                <br />
                We Bring <span className="text-gradient-red">Them Down.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary" />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Every team has a story. Every rival has a weakness. We study, we
                adapt, we execute. No remorse. No mercy. Just results.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Win Rate", value: "73%" },
                  { label: "Rival Takedowns", value: "28" },
                  { label: "Comeback Wins", value: "9" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="card-dark rounded p-4 border border-border text-center"
                  >
                    <div className="font-display font-black text-3xl text-accent">
                      {item.value}
                    </div>
                    <div className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
