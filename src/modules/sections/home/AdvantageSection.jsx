import { useEffect, useRef, useState } from "react";

const advantages = [
  "End-to-end services and robust platforms to support outsourced services.",
  "Cut down your operations cost by as much as 50%.",
  "Access to expert talent pool.",
  "Scalability and agility to meet your business needs.",
  "Turn your fixed overhead costs to operational costs.",
];

export default function AdvantageSection() {
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

        .a-left  { opacity: 0; }
        .a-left.go  { animation: fadeLeft  0.85s cubic-bezier(.16,1,.3,1) forwards; }
        .a-right { opacity: 0; }
        .a-right.go { animation: fadeRight 0.85s cubic-bezier(.16,1,.3,1) forwards; }
        .a-up    { opacity: 0; }
        .a-up.go    { animation: fadeUp   0.7s cubic-bezier(.16,1,.3,1) forwards; }

        .gold-shimmer {
          background: linear-gradient(90deg,#b8832c 0%,#f0c84a 40%,#b8832c 65%,#8a5e1a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .adv-item {
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .adv-item:hover {
          transform: translateX(7px);
          background: rgba(184,131,44,0.1) !important;
          border-color: rgba(184,131,44,0.45) !important;
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

      {/* ── MOBILE / TABLET: stacked layout ── */}
      <div className="lg:hidden flex flex-col">

        {/* Mobile Hero Image */}
        <div className={`a-up ${visible ? "go" : ""} relative w-full`} style={{ height: "280px", animationDelay: "0.05s" }}>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
            alt="Customer service professional"
            className="w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.55) saturate(0.75)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #111111 0%, transparent 50%)" }}
          />

          {/* Badge over mobile image */}
          <div className="absolute top-4 right-4">
            <div
              className="w-16 h-16 rounded-full flex flex-col items-center justify-center"
              style={{
                background: "rgba(184,131,44,0.18)",
                border: "1px solid rgba(184,131,44,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-black leading-none" style={{ color: "#b8832c", fontSize: "1.1rem", fontFamily: "'Barlow Condensed', sans-serif" }}>50%</span>
              <span className="text-center leading-tight" style={{ color: "#888", fontSize: "0.5rem", letterSpacing: "0.08em" }}>COST<br/>SAVED</span>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="flex flex-col px-5 pt-8 pb-12 sm:px-8">
          {/* Eyebrow */}
          <div className={`a-up ${visible ? "go" : ""} flex items-center gap-3 mb-4`} style={{ animationDelay: "0.1s" }}>
            <div className="h-px w-6" style={{ background: "#b8832c" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#b8832c" }}>Why Choose Us</span>
          </div>

          {/* Headline */}
          <h2
            className={`a-right ${visible ? "go" : ""} font-black uppercase leading-[0.94] mb-4`}
            style={{ animationDelay: "0.15s", fontSize: "clamp(1.8rem, 7vw, 2.8rem)", letterSpacing: "-0.01em" }}
          >
            <span className="gold-shimmer">ADVANTAGES </span>
            <span style={{ color: "#ffffff" }}>CROWNIX BOX OFFERS</span>
          </h2>

          {/* Gold rule */}
          <div
            className={`a-up ${visible ? "go" : ""} h-0.5 rounded-full mb-6`}
            style={{ animationDelay: "0.2s", width: "56px", background: "linear-gradient(90deg,#b8832c,transparent)" }}
          />

          {/* Advantages list */}
          <div className={`a-up ${visible ? "go" : ""} flex flex-col gap-3 mb-8`} style={{ animationDelay: "0.25s" }}>
            {advantages.map((item, i) => (
              <div
                key={i}
                className="adv-item flex items-start gap-3 px-4 py-3 rounded-xl"
                style={{ background: "rgba(184,131,44,0.06)", border: "1px solid rgba(184,131,44,0.18)" }}
              >
                <div className="flex-shrink-0 mt-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#b8832c", boxShadow: "0 0 6px rgba(184,131,44,0.6)" }} />
                </div>
                <p style={{ color: "#d0d0d0", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.6 }}>
                  {item.split(/(\d+%|\d+\+)/).map((part, j) =>
                    /(\d+%|\d+\+)/.test(part)
                      ? <strong key={j} style={{ color: "#e0a83c", fontWeight: 600 }}>{part}</strong>
                      : part
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile stat tag */}
          <div
            className={`a-up ${visible ? "go" : ""} rounded-2xl p-4 mb-8 relative`}
            style={{
              animationDelay: "0.4s",
              background: "rgba(14,10,3,0.85)",
              border: "1px solid rgba(184,131,44,0.38)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(184,131,44,0.14)",
            }}
          >
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full" style={{ background: "linear-gradient(180deg,#b8832c,rgba(184,131,44,0.08))" }} />
            <div className="pl-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1" style={{ color: "#b8832c" }}>Expert Talent</p>
              <p style={{ color: "#afafaf", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.6 }}>
                Access to a <strong style={{ color: "#fff" }}>200+</strong> strong team across <strong style={{ color: "#fff" }}>2+</strong> nationwide branches.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={`a-up ${visible ? "go" : ""}`} style={{ animationDelay: "0.5s" }}>
            <button
              className="cta-btn w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase text-sm"
              style={{ background: "#b8832c", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.13em", border: "none", cursor: "pointer" }}
            >
              <span className="cta-label">Learn More About Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: side-by-side layout ── */}
      <div className="hidden lg:flex min-h-screen relative">

        {/* LEFT — Full-height Image Panel */}
        <div
          className={`a-left ${visible ? "go" : ""} absolute top-0 left-0 bottom-0`}
          style={{ animationDelay: "0.1s", width: "48%" }}
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
            alt="Customer service professional with headphones"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.6) saturate(0.8)" }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, #111111 0%, rgba(17,17,17,0.15) 18%, transparent 45%), " +
                "linear-gradient(to top, #111111 0%, rgba(17,17,17,0) 40%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 35% 40%, rgba(184,131,44,0.07) 0%, transparent 60%)" }}
          />

          {/* Diagonal cut */}
          <div
            className="absolute top-0 right-0 bottom-0 z-20 pointer-events-none"
            style={{ width: "80px", background: "#111111", clipPath: "polygon(65px 0, 100% 0, 100% 100%, 45px 100%)" }}
          />

          {/* Top-left badge */}
          <div className={`a-up ${visible ? "go" : ""} absolute top-8 left-8`} style={{ animationDelay: "0.65s" }}>
            <div
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
              style={{ background: "rgba(184,131,44,0.13)", border: "1px solid rgba(184,131,44,0.42)", backdropFilter: "blur(8px)" }}
            >
              <span className="font-black leading-none" style={{ color: "#b8832c", fontSize: "1.4rem", fontFamily: "'Barlow Condensed', sans-serif" }}>50%</span>
              <span className="text-xs font-semibold uppercase mt-0.5 text-center leading-tight" style={{ color: "#888", letterSpacing: "0.08em", fontSize: "0.6rem" }}>Cost<br/>Saved</span>
            </div>
          </div>

          {/* Bottom stat tag */}
          <div
            className={`a-up ${visible ? "go" : ""} absolute bottom-8 left-6 rounded-2xl p-4`}
            style={{
              animationDelay: "0.55s",
              background: "rgba(14,10,3,0.80)",
              border: "1px solid rgba(184,131,44,0.38)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(184,131,44,0.14)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              maxWidth: "260px",
            }}
          >
            <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full" style={{ background: "linear-gradient(180deg,#b8832c,rgba(184,131,44,0.08))" }} />
            <div className="pl-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-1" style={{ color: "#b8832c" }}>Expert Talent</p>
              <p style={{ color: "#afafaf", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.82rem", lineHeight: 1.6 }}>
                Access to a <strong style={{ color: "#fff" }}>2,00+</strong> strong team across <strong style={{ color: "#fff" }}>2+</strong> nationwide branches.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Content Panel */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[55%] lg:ml-auto px-10 xl:px-20 py-20">

          {/* Eyebrow */}
          <div className={`a-up ${visible ? "go" : ""} flex items-center gap-3 mb-5`} style={{ animationDelay: "0.05s" }}>
            <div className="h-px w-8" style={{ background: "#b8832c" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#b8832c" }}>Why Choose Us</span>
          </div>

          {/* Headline */}
          <h2
            className={`a-right ${visible ? "go" : ""} font-black uppercase leading-[0.92] mb-5`}
            style={{ animationDelay: "0.12s", fontSize: "clamp(2.2rem, 4vw, 4rem)", letterSpacing: "-0.01em" }}
          >
            <span className="gold-shimmer">ADVANTAGES </span>
            <span style={{ color: "#ffffff" }}>CROWNIX BOX OFFERS</span>
          </h2>

          {/* Gold rule */}
          <div
            className={`a-up ${visible ? "go" : ""} h-0.5 rounded-full mb-7`}
            style={{ animationDelay: "0.18s", width: visible ? "72px" : "0px", background: "linear-gradient(90deg,#b8832c,transparent)", transition: "width 1s ease 0.35s" }}
          />

          {/* Advantages List */}
          <div className={`a-up ${visible ? "go" : ""} flex flex-col gap-3 mb-10`} style={{ animationDelay: "0.28s", maxWidth: "520px" }}>
            {advantages.map((item, i) => (
              <div
                key={i}
                className="adv-item flex items-start gap-4 px-4 py-3 rounded-xl"
                style={{ background: "rgba(184,131,44,0.06)", border: "1px solid rgba(184,131,44,0.18)" }}
              >
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ background: "#b8832c", boxShadow: "0 0 6px rgba(184,131,44,0.6)" }} />
                </div>
                <p style={{ color: "#d0d0d0", fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {item.split(/(\d+%|\d+\+)/).map((part, j) =>
                    /(\d+%|\d+\+)/.test(part)
                      ? <strong key={j} style={{ color: "#e0a83c", fontWeight: 600 }}>{part}</strong>
                      : part
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`a-up ${visible ? "go" : ""}`} style={{ animationDelay: "0.55s" }}>
            <button
              className="cta-btn px-9 py-4 rounded-full font-bold uppercase text-sm"
              style={{ background: "#b8832c", color: "#111111", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.13em", border: "none", cursor: "pointer" }}
            >
              <span className="cta-label">Learn More About Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
