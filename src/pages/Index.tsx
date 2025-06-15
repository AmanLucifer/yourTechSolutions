
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionBanner from "@/components/CallToActionBanner";
import Footer from "@/components/Footer";
import React, { useRef, useState } from "react";
import ConsultationModal from "@/components/ConsultationModal";

const Index = () => {
  // We'll manage the modal open state here and pass it down
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="font-sans bg-white min-h-screen w-full">
      <Header />
      {/* Top-level ConsultationModal for global use */}
      <ConsultationModal open={consultationOpen} onClose={() => setConsultationOpen(false)} />
      <main>
        <HeroSection onConsultationOpen={() => setConsultationOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CallToActionBanner onConsultationOpen={() => setConsultationOpen(true)} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
