import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ClientsStrip from "./components/ClientsStrip";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <Navbar />
      {/* Full-bleed sections; no container wrapper so each section controls its own max-width */}
      <HeroSection />
      <ClientsStrip />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
