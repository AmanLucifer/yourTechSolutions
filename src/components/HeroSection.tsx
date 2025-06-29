
import React from "react";

interface HeroSectionProps {
  onConsultationOpen?: () => void;
}

const heroImage = "./image/Hero-Img.jpeg";
const HeroSection: React.FC<HeroSectionProps> = ({ onConsultationOpen }) => {
  return (
    <section
      id="home"
      className="relative min-h-[540px] flex items-center justify-center overflow-hidden"
      style={{ minHeight: "540px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Small business owner using technology and growing"
          className="w-full h-full object-cover opacity-80"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/70 via-brand-teal/50 to-transparent" />
      </div>
      <div className="container relative z-10 py-32 flex flex-col items-center text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-md animate-fade-in mb-4">
          Empowering Small & Medium Businesses with Smart Tech Solutions
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 animate-fade-in">
          From custom software to social media management, we’ve got all your digital needs covered.
        </p>
        <div className="flex gap-5 justify-center animate-fade-in">
          <a
            href="#services"
            className="bg-brand-orange text-brand-blue font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-orange transition-colors"
          >
            Explore Our Services
          </a>
          <button
            type="button"
            onClick={onConsultationOpen}
            className="bg-white/90 text-brand-blue font-semibold px-6 py-3 rounded-lg shadow hover:bg-brand-orange hover:text-white transition-colors"
            style={{ outline: "none", border: "none", cursor: "pointer" }}
          >
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
