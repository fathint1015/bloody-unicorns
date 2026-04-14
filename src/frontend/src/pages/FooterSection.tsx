import { motion } from "motion/react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: SiYoutube, label: "YouTube", href: "https://www.youtube.com/" },
  { icon: SiX, label: "X (Twitter)", href: "https://twitter.com/" },
];

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Squad", href: "#squad" },
  { label: "Stats", href: "#stats" },
  { label: "Media", href: "#media" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-card border-t border-border">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="Bloody Unicorns"
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <span className="font-display font-black text-sm tracking-widest uppercase text-foreground">
                Bloody Unicorns
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              High-performance sports team competing in Invictus by IVB,
              Chennai. We don't compete. We dominate.
            </p>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent/70">
              #FEAR THE MYTH
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-accent mb-4">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-xs tracking-widest uppercase text-accent mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-border hover:border-accent/60 bg-background flex items-center justify-center text-muted-foreground hover:text-accent hover:shadow-glow-sm transition-all duration-300"
                  data-ocid={`footer-social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-body text-xs text-muted-foreground/60">
            © {year}. Bloody Unicorns. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground/40">
            #FEAR THE MYTH{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors duration-200 underline underline-offset-2"
            >
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
