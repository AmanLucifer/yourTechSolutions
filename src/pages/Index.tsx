
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-sans bg-white min-h-screen w-full">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CallToActionBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
