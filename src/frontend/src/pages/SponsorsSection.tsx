import AnimatedSection, {
  StaggerContainer,
  StaggerChild,
} from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const SPONSORS = [
  { name: "APEX GEAR", category: "Official Kit Partner" },
  { name: "NEXUS ENERGY", category: "Energy Drink Partner" },
  { name: "REDLINE TECH", category: "Technology Partner" },
  { name: "IRONCLAD", category: "Training Partner" },
  { name: "PHANTOM OPS", category: "Gaming Partner" },
  { name: "VOID SYSTEMS", category: "Media Partner" },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px section-divider" />
        <div className="absolute inset-x-0 bottom-0 h-px section-divider" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionTitle
            label="Partners"
            title={
              <>
                Our <span className="text-gradient-red">Partners</span>
              </>
            }
            subtitle="Backed by brands that believe in dominance."
            align="center"
          />
        </div>

        <StaggerContainer
          stagger={0.08}
          delayChildren={0.1}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {SPONSORS.map((sponsor, i) => (
            <StaggerChild key={sponsor.name} direction="scale">
              <div
                className="group relative card-dark rounded border border-border hover:border-accent/40 hover:shadow-glow-sm transition-all duration-400 p-8 flex flex-col items-center justify-center text-center gap-3 aspect-video cursor-pointer"
                data-ocid={`sponsor-card-${i}`}
              >
                {/* Placeholder logo */}
                <div className="w-12 h-12 rounded border border-accent/30 bg-accent/5 flex items-center justify-center group-hover:border-accent/60 transition-colors duration-300">
                  <span className="font-display font-black text-lg text-accent/70 group-hover:text-accent transition-colors duration-300">
                    {sponsor.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-display font-black text-base uppercase text-foreground tracking-wider group-hover:text-accent transition-colors duration-300">
                    {sponsor.name}
                  </p>
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    {sponsor.category}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        <AnimatedSection
          animation="fade-up"
          delay={0.4}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground/50">
            Interested in partnering with Bloody Unicorns?
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 font-mono text-sm text-accent hover:text-secondary tracking-widest uppercase transition-colors duration-300 underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
            data-ocid="sponsors-contact-link"
          >
            Get in touch →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
