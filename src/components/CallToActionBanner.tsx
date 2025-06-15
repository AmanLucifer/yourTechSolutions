
import React from "react";

interface CallToActionBannerProps {
  onConsultationOpen?: () => void;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onConsultationOpen }) => (
  <section className="bg-brand-teal py-12">
    <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
      <h2 className="text-2xl font-bold text-white mb-2 md:mb-0 text-center md:text-left">
        Ready to revolutionize your business?
      </h2>
      <button
        type="button"
        onClick={onConsultationOpen}
        className="bg-white text-brand-teal font-semibold px-8 py-3 rounded-lg shadow hover:bg-brand-blue hover:text-white transition-colors"
        style={{ outline: "none", border: "none", cursor: "pointer" }}
      >
        Schedule Your Free Consultation
      </button>
    </div>
  </section>
);

export default CallToActionBanner;
