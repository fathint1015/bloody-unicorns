import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Squad", href: "#squad" },
  { label: "Stats", href: "#stats" },
  { label: "Media", href: "#media" },
  { label: "Sponsors", href: "#sponsors" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur bg-background/80 border-b border-border shadow-glow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
            data-ocid="nav-logo"
          >
            <img
              src="/assets/images/logo.png"
              alt="Bloody Unicorns"
              className="h-10 w-10 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_oklch(0.54_0.28_22)]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span className="font-display font-bold text-sm tracking-widest uppercase text-foreground group-hover:text-gradient-red transition-all duration-300">
              Bloody Unicorns
            </span>
          </button>

          {/* Desktop links */}
          <ul
            className="hidden md:flex items-center gap-8"
            data-ocid="nav-links"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            type="button"
            onClick={() => handleNavClick("#squad")}
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-accent/60 text-accent font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:bg-accent hover:text-background hover:shadow-glow-sm clip-corner"
            data-ocid="nav-cta"
          >
            Join Squad
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="nav-hamburger"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 nav-blur bg-background/95 border-b border-border md:hidden"
            data-ocid="nav-mobile-menu"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-200 border-b border-border/40 last:border-0"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
