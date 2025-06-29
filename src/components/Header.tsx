
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionBanner from "./CallToActionBanner";
import Footer from "./Footer";

const navLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Case Studies", href: "#cases" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#footer" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Handler to be passed down as a prop
  const openConsultationModal = () => setModalOpen(true);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <nav className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center font-bold text-2xl text-white tracking-tight">
              <img src="https://www.boom-online.co.uk/wp-content/uploads/2020/07/link-logo-draft.jpg" alt="" />
            </div>
            <span className="font-bold text-xl tracking-tight text-brand-blue">YourTech Solutions</span>
          </div>
          <ul className="hidden md:flex gap-8 items-center font-semibold">
            {navLinks.map(link => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="hover:text-brand-teal transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={openConsultationModal}
                className="ml-4 bg-brand-teal text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-brand-blue transition-colors"
                style={{ outline: "none", border: "none", cursor: "pointer" }}
              >
                Get a Free Consultation
              </button>
            </li>
          </ul>
          {/* Mobile menu */}
          <button
            className="md:hidden flex items-center p-2"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow absolute left-0 right-0 top-20 animate-fade-in z-30">
            <ul className="px-8 py-3 flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="block py-2 text-brand-blue hover:text-brand-teal transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
              <li className="py-2">
                <button
                  type="button"
                  onClick={() => {
                    openConsultationModal();
                    setMobileOpen(false);
                  }}
                  className="w-full block bg-brand-teal text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-brand-blue transition-colors"
                  style={{ outline: "none", border: "none", cursor: "pointer" }}
                >
                  Get a Free Consultation
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
      {/* Modal for Consultation */}
      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;

