import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060B14]">
      <Navbar />
      {/* Full-bleed sections — no container wrapper so each section controls its own max-width */}
      <HeroSection />
      <AchievementsSection />
      <AboutSection />
      <ProjectsSection />
      {/* <EmailSection /> */}
      <Footer />
    </main>
  );
}