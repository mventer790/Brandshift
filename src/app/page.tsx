import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SystemSection from "@/components/SystemSection";
import VideoTestimonials from "@/components/VideoTestimonials";
import ServicesSection from "@/components/ServicesSection";
import PsychSection from "@/components/PsychSection";
import GoogleTestimonials from "@/components/GoogleTestimonials";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SystemSection />
        <VideoTestimonials />
        <ServicesSection />
        <PsychSection />
        <GoogleTestimonials />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
