
import React from "react";
import { Settings, Youtube, Gift, Store } from "lucide-react";

const services = [
  {
    title: "Custom Software & Apps",
    desc: "Build branded applications to attract customers and process orders online.",
    icon: <Settings size={36} className="text-brand-blue" />,
  },
  {
    title: "Social Media Management",
    desc: "Grow your audience on YouTube, Instagram & more with expert content planning.",
    icon: <Youtube size={36} className="text-brand-orange" />,
  },
  {
    title: "Promotions & User Acquisition",
    desc: "Design offers and referral schemes that convert visitors into loyal users.",
    icon: <Gift size={36} className="text-brand-teal" />,
  },
  {
    title: "Industry-Specific Solutions",
    desc: "Tailored tools for restaurants, electronics shops, and all your specialty needs.",
    icon: <Store size={36} className="text-brand-blue" />,
  },
<<<<<<< HEAD
=======
  
>>>>>>> cadd483 (first commit)
];

const ServicesSection: React.FC = () => (
  <section id="services" className="bg-gray-50 py-20">
    <div className="container">
      <h2 className="text-3xl font-bold text-brand-blue mb-2 text-center">Our Services</h2>
      <p className="text-lg text-gray-700 text-center mb-12">Our end-to-end services cover every step of your digital journey.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((srv) => (
          <div key={srv.title} className="bg-white rounded-xl shadow-lg p-7 flex flex-col gap-4 items-center group hover:shadow-xl transition-all duration-200">
            <div className="bg-brand-blue/10 rounded-full h-16 w-16 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-blue/20 transition">
              {srv.icon}
            </div>
            <h3 className="text-xl font-semibold text-brand-blue text-center">{srv.title}</h3>
            <p className="text-md text-gray-700 text-center">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
