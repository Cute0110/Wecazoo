import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroCard from "@/components/HeroCard";
import BetCard from "@/components/BetCard";
import GamesSection from "@/components/GamesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-8">
        <Hero />

        <section className="container mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full mb-4 sm:mb-0">
            <HeroCard
              title="Casino"
              description="Dive in to our wide range of in-house games, live casino and slots to experience a thrilling casino adventure."
              buttonText="Casino"
              buttonTextSecondary="Live Casino"
              imageSrc="/images/hero-card-bg-1.png"
              iconType="casino"
            />
            <HeroCard
              title="Sport"
              description="Explore our sports, live betting, and virtual games for an exciting sports adventure."
              buttonText="Sport"
              buttonTextSecondary="Live Sport"
              imageSrc="/images/hero-card-bg-2.png"
              iconType="sports"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <BetCard
              league="Premier League"
              date="Feb 2"
              time="00:00"
              homeTeam="Chelsea"
              awayTeam="Liverpool"
              homeTeamLogo="/images/teams/CHE.png"
              awayTeamLogo="/images/teams/ARS.png"
              odds={{ home: 2.5, draw: 3.2, away: 2.8 }}
            />
            <BetCard
              league="Premier League"
              date="Feb 2"
              time="00:00"
              homeTeam="West Ham"
              awayTeam="Arsenal"
              homeTeamLogo="/images/teams/WHU.png"
              awayTeamLogo="/images/teams/ARS.png"
              odds={{ home: 2.5, draw: 3.2, away: 2.8 }}
            />
            <BetCard
              league="Premier League"
              date="Feb 2"
              time="00:00"
              homeTeam="Chelsea"
              awayTeam="Liverpool"
              homeTeamLogo="/images/teams/CHE.png"
              awayTeamLogo="/images/teams/ARS.png"
              odds={{ home: 2.5, draw: 3.2, away: 2.8 }}
            />
            <BetCard
              league="Premier League"
              date="Feb 2"
              time="00:00"
              homeTeam="West Ham"
              awayTeam="Arsenal"
              homeTeamLogo="/images/teams/ARS.png"
              awayTeamLogo="/images/teams/WHU.png"
              odds={{ home: 2.5, draw: 3.2, away: 2.8 }}
            />
          </div>
        </section>

        <GamesSection />
      </main>

      <Footer />
    </div>
  );
}
