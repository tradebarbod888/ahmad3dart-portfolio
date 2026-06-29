import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWorksSection from "@/components/sections/SelectedWorksSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative bg-void overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SelectedWorksSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
