import AnimatedSection, {
  StaggerContainer,
  StaggerChild,
} from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { ExternalLink, Instagram, Play } from "lucide-react";
import { motion } from "motion/react";

const MEDIA_CARDS = [
  {
    id: 1,
    title: "Season Opener Highlights",
    category: "Match Recap",
    duration: "4:32",
    views: "12.4K",
  },
  {
    id: 2,
    title: "Behind The Scenes — Training Day",
    category: "Team Content",
    duration: "6:15",
    views: "8.7K",
  },
  {
    id: 3,
    title: "Championship Qualifier — Full Match",
    category: "Full Match",
    duration: "38:20",
    views: "21.1K",
  },
  {
    id: 4,
    title: "Player Spotlight: PHANTOM",
    category: "Player Feature",
    duration: "3:48",
    views: "15.2K",
  },
  {
    id: 5,
    title: "Rivalry Week: Best Plays",
    category: "Compilation",
    duration: "7:02",
    views: "19.8K",
  },
  {
    id: 6,
    title: "Team Announcement — New Season",
    category: "Announcement",
    duration: "1:55",
    views: "31.5K",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Match Recap": "text-accent border-accent/40",
  "Team Content": "text-muted-foreground border-border",
  "Full Match": "text-accent border-accent/40",
  "Player Feature": "text-muted-foreground border-border",
  Compilation: "text-accent border-accent/40",
  Announcement: "text-accent border-accent/70",
};

function MediaCard({
  card,
  index,
}: { card: (typeof MEDIA_CARDS)[0]; index: number }) {
  const gradients = [
    "from-accent/20 to-background",
    "from-primary/20 to-background",
    "from-accent/10 via-card to-background",
    "from-primary/15 to-background",
    "from-accent/25 to-background",
    "from-primary/20 via-card to-background",
  ];

  return (
    <StaggerChild direction="up">
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative card-dark rounded border border-border hover:border-accent/50 hover:shadow-glow-sm transition-all duration-400 overflow-hidden"
        data-ocid={`media-card-${index}`}
      >
        {/* Thumbnail area */}
        <div
          className={`relative aspect-video bg-gradient-to-br ${gradients[index % 6]} overflow-hidden`}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.54 0.28 22 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.54 0.28 22 / 0.3) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Card number */}
          <div className="absolute top-3 left-3 font-mono text-xs text-accent/50 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Duration badge */}
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-background/70 border border-border font-mono text-xs text-muted-foreground">
            {card.duration}
          </div>

          {/* Play button */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group/play"
            aria-label={`Watch ${card.title} on Instagram`}
            data-ocid={`media-play-${index}`}
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-14 h-14 rounded-full border-2 border-accent/60 bg-background/60 backdrop-blur-sm flex items-center justify-center group-hover/play:border-accent group-hover/play:bg-accent/20 group-hover/play:shadow-glow-sm transition-all duration-300"
            >
              <Play size={20} className="text-accent fill-accent ml-1" />
            </motion.div>
          </a>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Card info */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <span
              className={`font-mono text-xs tracking-widest uppercase border px-2 py-0.5 ${CATEGORY_COLORS[card.category] ?? "text-muted-foreground border-border"}`}
            >
              {card.category}
            </span>
            <span className="font-mono text-xs text-muted-foreground/60">
              {card.views} views
            </span>
          </div>
          <h3 className="font-display font-bold text-sm uppercase text-foreground leading-tight group-hover:text-accent transition-colors duration-300">
            {card.title}
          </h3>
        </div>
      </motion.div>
    </StaggerChild>
  );
}

export default function MediaSection() {
  return (
    <section
      id="media"
      className="section-pad relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionTitle
            label="Content Hub"
            title={
              <>
                <span className="text-gradient-red">Media</span> &amp;
                Highlights
              </>
            }
            subtitle="Relive the moments. Feel the dominance."
            align="center"
          />
        </div>

        <StaggerContainer
          stagger={0.08}
          delayChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {MEDIA_CARDS.map((card, i) => (
            <MediaCard key={card.id} card={card} index={i} />
          ))}
        </StaggerContainer>

        {/* Instagram CTA */}
        <AnimatedSection
          animation="fade-up"
          delay={0.3}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 border border-accent/30 rounded card-dark">
            <div className="text-left">
              <p className="font-display font-bold text-base uppercase text-foreground">
                More content on Instagram
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Follow for daily highlights, BTS, and drops
              </p>
            </div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-accent text-background font-display font-bold text-sm tracking-widest uppercase hover:bg-secondary transition-all duration-300 hover:shadow-glow-sm clip-corner whitespace-nowrap"
              data-ocid="media-instagram-cta"
            >
              <Instagram size={16} />
              Follow Us
              <ExternalLink size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
