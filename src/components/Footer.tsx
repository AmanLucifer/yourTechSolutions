import React from "react";
import { Youtube, Settings } from "lucide-react";

const socialLinks = [
  {
    icon: <Youtube size={22} />,
    href: "https://youtube.com",
    label: "YouTube"
  },
  {
    icon: <Settings size={22} />,
    href: "#",
    label: "Technical Blog"
  }
];

const footerLinks = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Case Studies", href: "#cases" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Privacy Policy", href: "#" },
  { text: "Terms", href: "#" }
];

const Footer: React.FC = () => (
  <footer id="footer" className="bg-gray-900 text-gray-100 py-12">
    <div className="container grid md:grid-cols-3 gap-10">
      {/* Links */}
      <div>
        <span className="font-bold text-lg text-brand-orange">YourTech-Solutions</span>
        <ul className="mt-4 space-y-2">
          {footerLinks.map(link => (
            <li key={link.text}>
              <a href={link.href} className="hover:text-brand-orange transition-colors">{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact */}
      <div>
        <span className="font-bold text-lg text-brand-orange">Contact Us</span>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>Email: <a href="mailto:hello@yourtechsolutions.in" className="hover:text-brand-orange">hello@yourtechsolutions.in</a></li>
          <li>Phone: <a href="tel:+91 9905442618" className="hover:text-brand-orange">+91 9905442618</a></li>
          <li>Address: Patna-Bihar</li>
        </ul>
      </div>
      {/* Socials */}
      <div>
        <span className="font-bold text-lg text-brand-orange">Connect</span>
        <div className="flex gap-5 mt-4">
          {socialLinks.map(soc => (
            <a key={soc.label} href={soc.href} className="hover:text-brand-orange transition-colors" aria-label={soc.label} target="_blank" rel="noopener noreferrer">
              {soc.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center text-gray-400 mt-10 text-sm">
      &copy; {new Date().getFullYear()} YourTech Solutions. All rights reserved.
    </div>
  </footer>
);

export default Footer;
