
import React from "react";

const aboutTeamImg = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81";

const AboutSection: React.FC = () => (
  <section id="about" className="container py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="relative order-2 md:order-1">
      <img
        src={aboutTeamImg}
        alt="YourTech Solutions team collaborating"
        className="w-full h-80 object-cover rounded-2xl shadow-xl"
      />
      <div className="absolute inset-0 bg-brand-blue/60 rounded-2xl" />
    </div>
    <div className="order-1 md:order-2">
      <h2 className="text-3xl font-bold mb-4 text-brand-blue">About Us</h2>
      <p className="text-lg text-gray-700 mb-3 font-medium">
        We are <span className="text-brand-teal font-bold">YourTech Solutions</span>, dedicated to solving the unique challenges of small and mid-sized businesses.
      </p>
      <p className="text-md text-gray-700">
        With over <span className="font-semibold text-brand-blue">10 years of experience</span>, our mission is to streamline your operations, boost brand presence, and drive growth through tailored digital strategies.
      </p>
    </div>
  </section>
);

export default AboutSection;
