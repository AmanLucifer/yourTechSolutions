
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    biz: "Cafe Delight",
    quote: "YourTech Solutions transformed our online orders—sales grew by 45% in three months.",
    photo: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Ravi Patel",
    biz: "Bright Electronics",
    quote: "Their team helped us triple our social engagement and reach new customers with ease.",
    photo: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    name: "Aanya Singh",
    biz: "Slice Pizza",
    quote: "Quick launch, tailored app, and stellar support – couldn't ask for better partners.",
    photo: "https://randomuser.me/api/portraits/women/65.jpg"
  },
];

const TestimonialsSection: React.FC = () => {
  const [idx, setIdx] = useState(0);

  // Auto-cycle every 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIdx((idx + 1) % testimonials.length), 6000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <section id="testimonials" className="bg-brand-blue py-20 text-white relative overflow-x-hidden">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Testimonials</h2>
        <div className="flex flex-col items-center gap-8 animate-fade-in">
          <div className="relative min-h-[220px] max-w-xl mx-auto rounded-2xl bg-white/10 p-10 shadow-lg overflow-hidden">
            <p className="text-lg italic mb-8 text-white">{`"${testimonials[idx].quote}"`}</p>
            <div className="flex items-center gap-4 justify-center">
              <img src={testimonials[idx].photo} alt={testimonials[idx].name} className="w-14 h-14 rounded-full ring-4 ring-brand-orange object-cover" />
              <div className="text-left">
                <p className="font-bold text-lg text-white">{testimonials[idx].name}</p>
                <span className="text-brand-orange">{testimonials[idx].biz}</span>
              </div>
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                aria-label="Previous testimonial"
                onClick={() => setIdx((idx + testimonials.length - 1) % testimonials.length)}
                className="bg-white/20 hover:bg-brand-orange/70 rounded-full p-2 transition"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                aria-label="Next testimonial"
                onClick={() => setIdx((idx + 1) % testimonials.length)}
                className="bg-white/20 hover:bg-brand-orange/70 rounded-full p-2 transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === idx ? "bg-brand-orange" : "bg-white/60"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
