import GlowButton from "@/components/GlowButton";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSquad = () => {
    document.querySelector("#squad")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-40"
          aria-hidden="true"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        {/* Red radial glow */}
        <div className="absolute inset-0 hero-bg-radial" />
      </div>

      {/* Animated scan line */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "120vh"] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 6,
            ease: "linear",
          }}
          className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={loaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/assets/images/logo.png"
            alt="Bloody Unicorns"
            animate={{
              filter: [
                "drop-shadow(0 0 20px oklch(0.54 0.28 22 / 0.5))",
                "drop-shadow(0 0 40px oklch(0.54 0.28 22 / 0.8))",
                "drop-shadow(0 0 20px oklch(0.54 0.28 22 / 0.5))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="h-36 w-36 md:h-48 md:w-48 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </motion.div>

        {/* Team name label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-accent/80">
            — Bloody Unicorns FC —
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl xl:text-9xl uppercase leading-none tracking-tight text-foreground mb-6"
        >
          We Don't <span className="text-gradient-red">Compete.</span>
          <br />
          We <span className="text-gradient-red">Dominate.</span>
        </motion.h1>

        {/* Secondary tagline */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={loaded ? { opacity: 1, letterSpacing: "0.3em" } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-mono text-sm md:text-base uppercase text-muted-foreground mb-12 tracking-[0.3em]"
        >
          #FEAR THE MYTH
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GlowButton
            variant="primary"
            size="lg"
            onClick={scrollToSquad}
            data-ocid="hero-cta-squad"
          >
            Explore Squad
          </GlowButton>
          <GlowButton
            variant="secondary"
            size="lg"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero-cta-highlights"
          >
            Watch Highlights
          </GlowButton>
        </motion.div>

        {/* League badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="w-12 h-px section-divider" />
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground/60">
            Invictus by IVB · Chennai
          </span>
          <div className="w-12 h-px section-divider" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 1,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-foreground hover:text-accent transition-colors duration-300"
        data-ocid="hero-scroll-cta"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </motion.button>

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/30 z-20" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent/30 z-20" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent/30 z-20" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/30 z-20" />
    </section>
  );
}
