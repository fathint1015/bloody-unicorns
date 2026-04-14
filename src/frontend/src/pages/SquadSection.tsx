import AnimatedSection, {
  StaggerContainer,
  StaggerChild,
} from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "motion/react";

const PLAYERS = [
  {
    name: "PHANTOM",
    role: "Captain / Fragger",
    number: "01",
    trait: "Unmatched aggression",
  },
  {
    name: "BLAZE",
    role: "Entry Fragger",
    number: "02",
    trait: "First blood specialist",
  },
  {
    name: "WRAITH",
    role: "Support / IGL",
    number: "03",
    trait: "Strategic mastermind",
  },
  {
    name: "STORM",
    role: "Sniper / Scout",
    number: "04",
    trait: "Long-range precision",
  },
  {
    name: "VENOM",
    role: "Anchor / Lurker",
    number: "05",
    trait: "Clutch performer",
  },
  {
    name: "AEGIS",
    role: "Shield / Utility",
    number: "06",
    trait: "Unbreakable defense",
  },
  {
    name: "NOVA",
    role: "Flanker / Scout",
    number: "07",
    trait: "Speed & surprise",
  },
  {
    name: "CIPHER",
    role: "Tech / Recon",
    number: "08",
    trait: "Intel dominance",
  },
];

function PlayerCard({
  player,
  index,
}: { player: (typeof PLAYERS)[0]; index: number }) {
  return (
    <StaggerChild direction="scale">
      <motion.div
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative card-dark rounded border border-border hover:border-accent/60 hover:shadow-glow-md transition-all duration-400 overflow-hidden"
        data-ocid={`player-card-${index}`}
      >
        {/* Image placeholder */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/80" />
          {/* Silhouette placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Large number background */}
              <span className="font-display font-black text-8xl text-accent/10 select-none leading-none">
                {player.number}
              </span>
              {/* Player icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-accent/40 bg-card flex items-center justify-center">
                  <span className="font-display font-black text-2xl text-accent">
                    {player.name[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Corner number */}
          <div className="absolute top-3 left-3">
            <span className="font-mono text-xs text-accent/60 tracking-widest">
              {player.number}
            </span>
          </div>

          {/* Hover glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Scan line on hover */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100"
            animate={{ y: ["-100%", "400%"] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        {/* Info */}
        <div className="p-4 relative">
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <h3 className="font-display font-black text-xl uppercase text-foreground tracking-wider mb-1 group-hover:text-accent transition-colors duration-300">
            {player.name}
          </h3>
          <p className="font-mono text-xs tracking-widest uppercase text-accent/80 mb-2">
            {player.role}
          </p>
          <p className="font-body text-xs text-muted-foreground">
            {player.trait}
          </p>
        </div>
      </motion.div>
    </StaggerChild>
  );
}

export default function SquadSection() {
  return (
    <section
      id="squad"
      className="section-pad relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionTitle
            label="The Roster"
            title={
              <>
                Meet The <span className="text-gradient-red">Squad</span>
              </>
            }
            subtitle="15 players. One vision. Zero mercy."
            align="center"
          />
        </div>

        <StaggerContainer
          stagger={0.08}
          delayChildren={0.1}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
        >
          {PLAYERS.map((player, i) => (
            <PlayerCard key={player.name} player={player} index={i} />
          ))}
        </StaggerContainer>

        <AnimatedSection
          animation="fade-up"
          delay={0.3}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground/60 mb-4">
            Full roster · 15 members
          </p>
          <div className="flex justify-center gap-2">
            {Array.from({ length: 15 }, (_, i) => `dot-${i}`).map((key, i) => (
              <div
                key={key}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i < PLAYERS.length ? "w-4 bg-accent" : "w-1.5 bg-muted"
                }`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
