import { useEffect, useRef, useState } from "react";

const features = [
  { label: "Lead Generation" },
  { label: "Life Insurance Sales" },
  { label: "Inbound Customer Services" },
  { label: "Outbound Customer Services" },
];

export default function TailoredSolutions() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "#111111", fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(184,131,44,0.5); }
          50%       { box-shadow: 0 0 0 12px rgba(184,131,44,0); }
        }

        .a-left.go  { animation: fadeLeft  0.8s cubic-bezier(.16,1,.3,1) forwards; }
        .a-right.go { animation: fadeRight 0.9s cubic-bezier(.16,1,.3,1) forwards; }
        .a-up.go    { animation: fadeUp   0.7s cubic-bezier(.16,1,.3,1) forwards; }
        .a-left, .a-right, .a-up { opacity: 0; }

        .gold-shimmer {
          background: linear-gradient(90deg,#b8832c 0%,#f0c84a 40%,#b8832c 65%,#8a5e1a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .feature-pill {
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .feature-pill:hover {
          transform: translateX(7px);
          background: rgba(184,131,44,0.16) !important;
          border-color: rgba(184,131,44,0.55) !important;
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: pulseGlow 3s ease-in-out infinite;
        }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,#b8832c,#f0c84a,#b8832c);
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 44px rgba(184,131,44,0.45); }
        .cta-btn:hover::after { opacity: 1; }
        .cta-label { position: relative; z-index: 1; }
      `}</style>

      {/* ══════════════════════════════
          MOBILE / TABLET  (< lg)
      ══════════════════════════════ */}
      <div className="lg:hidden flex flex-col">

        {/* Hero image at top */}
        <div className={`a-up ${visible ? "go" : ""} relative w-full`} style={{ height: "280px", animationDelay: "0.05s" }}>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
            alt="Professional team working"
            className="w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.55) saturate(0.7)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #111111 0%, transparent 55%)" }}
          />

          {/* 12+ Years badge over image */}
          <div className="absolute top-4 right-4">
            <div
              className="w-16 h-16 rounded-full flex flex-col items-center justify-center"
              style={{
                background: "rgba(184,131,44,0.18)",
                border: "1px solid rgba(184,131,44,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-black leading-none" style={{ color: "#b8832c", fontSize: "1.15rem", fontFamily: "'Barlow Condensed', sans-serif" }}>12+</span>
              <span className="uppercase text-center leading-tight" style={{ color: "#888", fontSize: "0.5rem", letterSpacing: "0.1em" }}>Years</span>
            </div>
          </div>

          {/* Stat card over image bottom */}
          <div
            className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
            style={{
              background: "rgba(14,10,3,0.88)",
              border: "1px solid rgba(184,131,44,0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#b8832c" }}>
              Operational Scale
            </p>
            <p style={{ color: "#afafaf", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.6 }}>
              Over <strong style={{ color: "#fff" }}>150+</strong> seats across multiple locations,
              generating <strong style={{ color: "#fff" }}>25,000+</strong> transfers/month.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col px-5 pt-8 pb-12 sm:px-8">

          {/* Eyebrow */}
          <div className={`a-up ${visible ? "go" : ""} flex items-center gap-3 mb-4`} style={{ animationDelay: "0.1s" }}>
            <div className="h-px w-6" style={{ background: "#b8832c" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#b8832c" }}>Crownix BPO</span>
          </div>

          {/* Headline */}
          <h1
            className={`a-left ${visible ? "go" : ""} font-black uppercase leading-[0.94] mb-4`}
            style={{ animationDelay: "0.15s", fontSize: "clamp(1.9rem, 7vw, 2.8rem)", letterSpacing: "-0.01em" }}
          >
            <span style={{ color: "#ffffff" }}>TAILORED </span>
            <span className="gold-shimmer">LIGHTNING-SPEED </span>
            <span style={{ color: "#ffffff" }}>SOLUTIONS FOR EVERY BUSINESS</span>
          </h1>

          {/* Gold rule */}
          <div
            className={`a-up ${visible ? "go" : ""} h-0.5 rounded-full mb-5`}
            style={{ animationDelay: "0.2s", width: "56px", background: "linear-gradient(90deg,#b8832c,transparent)" }}
          />

          {/* Body copy */}
          <p
            className={`a-up ${visible ? "go" : ""} leading-relaxed mb-7`}
            style={{ animationDelay: "0.22s", color: "#9a9a9a", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.9rem" }}
          >
            With a combined leadership experience of{" "}
            <strong style={{ color: "#d8d8d8", fontWeight: 600 }}>12 years</strong> within
            the industry, our team excels in managing large-scale businesses. At Crownix BPO,
            we have emerged as pioneers in the{" "}
            <strong style={{ color: "#e0a83c", fontWeight: 500 }}>Contact Center sector</strong>,
            specializing in supporting customer interactions across diverse channels.
          </p>

          {/* Feature pills */}
          <div className={`a-up ${visible ? "go" : ""} grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8`} style={{ animationDelay: "0.28s" }}>
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-pill flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(184,131,44,0.07)", border: "1px solid rgba(184,131,44,0.2)" }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#b8832c" }}>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#dedede", letterSpacing: "0.07em" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`a-up ${visible ? "go" : ""}`} style={{ animationDelay: "0.4s" }}>
            <button
              className="cta-btn w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase text-sm"
              style={{ background: "#b8832c", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.13em", border: "none", cursor: "pointer" }}
            >
              <span className="cta-label">Get Free Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          DESKTOP  (lg+)
      ══════════════════════════════ */}
      <div className="hidden lg:flex min-h-screen relative">

        {/* LEFT — Content Panel */}
        <div className="relative z-10 flex flex-col justify-center w-[55%] px-10 xl:px-20 py-20">

          {/* Eyebrow */}
          <div className={`a-up ${visible ? "go" : ""} flex items-center gap-3 mb-5`} style={{ animationDelay: "0.05s" }}>
            <div className="h-px w-8" style={{ background: "#b8832c" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#b8832c" }}>Crownix BPO</span>
          </div>

          {/* Headline */}
          <h1
            className={`a-left ${visible ? "go" : ""} font-black uppercase leading-[0.92] mb-5`}
            style={{ animationDelay: "0.12s", fontSize: "clamp(2.4rem, 4.5vw, 4.4rem)", letterSpacing: "-0.01em" }}
          >
            <span style={{ color: "#ffffff" }}>TAILORED </span>
            <span className="gold-shimmer">LIGHTNING-SPEED </span>
            <span style={{ color: "#ffffff" }}>SOLUTIONS FOR EVERY BUSINESS</span>
          </h1>

          {/* Gold rule */}
          <div
            className={`a-up ${visible ? "go" : ""} h-0.5 rounded-full mb-6`}
            style={{ animationDelay: "0.18s", width: visible ? "72px" : "0px", background: "linear-gradient(90deg,#b8832c,transparent)", transition: "width 1s ease 0.35s" }}
          />

          {/* Body copy */}
          <p
            className={`a-up ${visible ? "go" : ""} leading-relaxed mb-8`}
            style={{ animationDelay: "0.22s", color: "#9a9a9a", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.975rem", maxWidth: "500px" }}
          >
            With a combined leadership experience of{" "}
            <strong style={{ color: "#d8d8d8", fontWeight: 600 }}>6 years</strong> within
            the industry, our team excels in managing large-scale businesses, cultivating
            extensive teams, and fostering valuable relationships. At Light Communications,
            we have emerged as pioneers in the{" "}
            <strong style={{ color: "#e0a83c", fontWeight: 500 }}>Contact Center sector</strong>,
            specializing in supporting customer interactions across diverse channels such as
            Web collaboration, Web chat, and the rapidly evolving landscape of social media
            interactions, setting us apart from the competition.
          </p>

          {/* Feature pills */}
          <div
            className={`a-up ${visible ? "go" : ""} grid grid-cols-2 gap-3 mb-10`}
            style={{ animationDelay: "0.3s", maxWidth: "490px" }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="feature-pill flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(184,131,44,0.07)", border: "1px solid rgba(184,131,44,0.2)" }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#b8832c" }}>
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#dedede", letterSpacing: "0.07em" }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`a-up ${visible ? "go" : ""}`} style={{ animationDelay: "0.42s" }}>
            <button
              className="cta-btn px-9 py-4 rounded-full font-bold uppercase text-sm"
              style={{ background: "#b8832c", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.13em", border: "none", cursor: "pointer" }}
            >
              <span className="cta-label">Get Free Consultation</span>
            </button>
          </div>
        </div>

        {/* RIGHT — Full-height Image Panel */}
        <div
          className={`a-right ${visible ? "go" : ""} absolute top-0 right-0 bottom-0`}
          style={{ animationDelay: "0.1s", width: "48%" }}
        >
          {/* Diagonal cut on left edge */}
          <div
            className="absolute top-0 left-0 bottom-0 z-20 pointer-events-none"
            style={{ width: "80px", background: "#111111", clipPath: "polygon(0 0, 35px 0, 100% 100%, 0 100%)" }}
          />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80"
            alt="Professional team working"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.55) saturate(0.7)" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #111111 0%, rgba(17,17,17,0.15) 18%, transparent 45%), " +
                "linear-gradient(to top, #111111 0%, rgba(17,17,17,0.0) 40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 65% 35%, rgba(184,131,44,0.07) 0%, transparent 60%)" }}
          />

          {/* Years badge */}
          <div className={`a-up ${visible ? "go" : ""} absolute top-8 right-8`} style={{ animationDelay: "0.65s" }}>
            <div
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
              style={{ background: "rgba(184,131,44,0.13)", border: "1px solid rgba(184,131,44,0.42)", backdropFilter: "blur(8px)" }}
            >
              <span className="font-black leading-none" style={{ color: "#b8832c", fontSize: "1.5rem", fontFamily: "'Barlow Condensed', sans-serif" }}>12+</span>
              <span className="text-xs font-semibold uppercase mt-0.5" style={{ color: "#888", letterSpacing: "0.1em" }}>Years</span>
            </div>
          </div>

          {/* Stat card */}
          <div
            className={`a-up ${visible ? "go" : ""} absolute bottom-8 right-6 rounded-2xl p-5`}
            style={{
              animationDelay: "0.55s",
              background: "rgba(14,10,3,0.80)",
              border: "1px solid rgba(184,131,44,0.38)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(184,131,44,0.14)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              width: "320px",
              maxWidth: "calc(100% - 48px)",
            }}
          >
            <div className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full" style={{ background: "linear-gradient(180deg,#b8832c,rgba(184,131,44,0.08))" }} />
            <div className="flex items-start gap-3 pl-2">
              <div
                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5"
                style={{ background: "rgba(184,131,44,0.18)", border: "1px solid rgba(184,131,44,0.4)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#b8832c" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "#b8832c" }}>Operational Scale</p>
                <p style={{ color: "#afafaf", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.65 }}>
                  There are over <strong style={{ color: "#fff", fontWeight: 700 }}>200+</strong> seats presently operational across multiple locations, generating over <strong style={{ color: "#fff", fontWeight: 700 }}>25,000+</strong> transfers per month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
