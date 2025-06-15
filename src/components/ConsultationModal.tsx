
import React, { useState, useRef } from "react";

const ConsultationModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    // Reset form/modal state when closed
    if (!open) {
      setTimeout(() => {
        setSubmitted(false);
        setError(null);
        setSubmitting(false);
        if (formRef.current) formRef.current.reset();
      }, 300);
    }
  }, [open]);

  // ESC close handler
  React.useEffect(() => {
    if (!open) return;
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/xrbkklva", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data?.error || "Submission failed.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;
  return (
    <div
      className="yt-modal-backdrop"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(24, 39, 51, 0.42)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        transition: "background 0.2s",
      }}
    >
      <div
        className="yt-modal-box"
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 0 30px #1112",
          padding: "2rem",
          width: "90vw",
          maxWidth: "370px",
          position: "relative",
          transition: "transform 0.2s",
        }}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="yt-modal-close"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "1.6rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#97A1A7",
            fontWeight: 700,
            lineHeight: 1,
            transition: "color 0.12s",
          }}
          tabIndex={0}
        >
          ×
        </button>
        {!submitted ? (
          <form ref={formRef} className="yt-modal-form" onSubmit={handleSubmit}>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "#215093",
                textAlign: "center",
                marginBottom: "1.2rem",
              }}
            >
              Free Consultation Request
            </h2>
            {error && (
              <div
                style={{
                  color: "#c13d3d",
                  background: "#fde4e4",
                  borderRadius: "0.3rem",
                  padding: "8px 12px",
                  marginBottom: "13px",
                  fontSize: "0.97rem",
                }}
              >
                {error}
              </div>
            )}
            <label className="yt-modal-label" style={{ fontWeight: 500, color: "#222", display: "block", marginBottom: 6 }}>
              Name <span style={{ color: "#c13d3d" }}>*</span>
              <input
                name="name"
                type="text"
                required
                className="yt-modal-input"
                style={{
                  marginTop: 2,
                  border: "1.3px solid #dae0ed",
                  borderRadius: "0.4rem",
                  fontSize: "1rem",
                  padding: "0.5rem 0.8rem",
                  outline: "none",
                  marginBottom: "1.1rem",
                  width: "100%",
                  transition: "border 0.15s",
                }}
              />
            </label>
            <label className="yt-modal-label" style={{ fontWeight: 500, color: "#222", display: "block", marginBottom: 6 }}>
              Email <span style={{ color: "#c13d3d" }}>*</span>
              <input
                name="email"
                type="email"
                required
                className="yt-modal-input"
                style={{
                  marginTop: 2,
                  border: "1.3px solid #dae0ed",
                  borderRadius: "0.4rem",
                  fontSize: "1rem",
                  padding: "0.5rem 0.8rem",
                  outline: "none",
                  marginBottom: "1.1rem",
                  width: "100%",
                  transition: "border 0.15s",
                }}
              />
            </label>
            <label className="yt-modal-label" style={{ fontWeight: 500, color: "#222", display: "block", marginBottom: 6 }}>
              Phone Number
              <input
                name="phone"
                type="tel"
                className="yt-modal-input"
                style={{
                  marginTop: 2,
                  border: "1.3px solid #dae0ed",
                  borderRadius: "0.4rem",
                  fontSize: "1rem",
                  padding: "0.5rem 0.8rem",
                  outline: "none",
                  marginBottom: "1.1rem",
                  width: "100%",
                  transition: "border 0.15s",
                }}
              />
            </label>
            <label className="yt-modal-label" style={{ fontWeight: 500, color: "#222", display: "block", marginBottom: 6 }}>
              Message
              <textarea
                name="message"
                rows={3}
                className="yt-modal-input"
                style={{
                  marginTop: 2,
                  border: "1.3px solid #dae0ed",
                  borderRadius: "0.4rem",
                  fontSize: "1rem",
                  padding: "0.5rem 0.8rem",
                  outline: "none",
                  marginBottom: "1.3rem",
                  width: "100%",
                  resize: "vertical",
                  minHeight: "70px",
                  transition: "border 0.15s",
                }}
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              style={{
                background: "#215093",
                color: "#fff",
                width: "100%",
                borderRadius: "0.45rem",
                border: "none",
                padding: "0.7rem",
                fontWeight: 700,
                fontSize: "1.05rem",
                boxShadow: "0 4px 18px rgba(33,80,147,0.08)",
                cursor: submitting ? "not-allowed" : "pointer",
                opacity: submitting ? 0.7 : 1,
                transition: "background 0.19s, opacity 0.12s",
              }}
            >
              {submitting ? "Submitting..." : "Send Request"}
            </button>
          </form>
        ) : (
          <div
            style={{
              padding: "1.8rem 0",
              textAlign: "center",
              fontWeight: 600,
              fontSize: "1.14rem",
              color: "#215093",
            }}
          >
            Thanks! We’ve received your request.
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
