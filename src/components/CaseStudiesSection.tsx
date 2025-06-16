
import React, { useState } from "react";

const cases = [
  {
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Cafe Delight – Online Orders",
    outcome: "+45% sales in 3 months",
    problem: "Low online engagement, slow ordering process.",
    solution: "Developed an integrated online order platform with push notifications.",
    results: "+45% sales in 3 months, +2k new customers.",
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Bright Electronics – Insta Growth",
    outcome: "+20k followers",
    problem: "Social accounts plateaued, weak campaign performance.",
    solution: "Custom content calendar, influencer partnerships, and lead magnets.",
    results: "+20K followers, 3x engagement rate.",
  },
  {
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Slice Pizza – App Launch",
    outcome: "Launched in 4 weeks",
    problem: "Manual order intake, no branded app.",
    solution: "Built iOS/Android branded app for seamless ordering + reviews.",
    results: "1000+ downloads, 4.9-star reviews.",
  },
];

<<<<<<< HEAD
=======

>>>>>>> cadd483 (first commit)
const CaseStudiesSection: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="cases" className="container py-20">
      <h2 className="text-3xl font-bold text-brand-blue mb-2 text-center">Case Studies</h2>
      <p className="text-lg text-gray-700 text-center mb-12">Real-world results from partnering businesses.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((p, idx) => (
          <div
            key={p.title}
            className="rounded-xl shadow-lg overflow-hidden bg-white group cursor-pointer hover:shadow-2xl transition"
            onClick={() => setSelected(idx)}
            tabIndex={0}
          >
            <img src={p.img} alt={p.title} className="h-52 w-full object-cover object-center" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand-blue mb-2">{p.title}</h3>
              <p className="text-brand-teal text-lg font-semibold mb-1">{p.outcome}</p>
              <button className="text-sm text-brand-blue underline hover:text-brand-orange transition">View Details</button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-xl p-8 shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-brand-blue"
              onClick={() => setSelected(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <img src={cases[selected].img} className="w-full h-44 object-cover rounded-lg mb-4" alt={cases[selected].title} />
            <h4 className="text-2xl font-bold text-brand-blue mb-2">{cases[selected].title}</h4>
            <p className="mb-1"><span className="font-bold text-brand-teal">Outcome:</span> {cases[selected].outcome}</p>
            <p className="mb-1"><span className="font-bold">Problem:</span> {cases[selected].problem}</p>
            <p className="mb-1"><span className="font-bold">Solution:</span> {cases[selected].solution}</p>
            <p className="mb-1"><span className="font-bold">Results:</span> {cases[selected].results}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudiesSection;
