import Navigation from "@/components/Navigation";
import AboutSection from "@/pages/AboutSection";
import FooterSection from "@/pages/FooterSection";
import HeroSection from "@/pages/HeroSection";
import MediaSection from "@/pages/MediaSection";
import RivalrySection from "@/pages/RivalrySection";
import SponsorsSection from "@/pages/SponsorsSection";
import SquadSection from "@/pages/SquadSection";
import StatsSection from "@/pages/StatsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SquadSection />
        <RivalrySection />
        <MediaSection />
        <SponsorsSection />
      </main>
      <FooterSection />
    </div>
  );
}
