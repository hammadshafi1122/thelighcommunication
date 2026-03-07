import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const features = [
  { icon: "✦", title: "Expert Team Work", desc: "Seasoned professionals trained to represent your brand with care and precision on every call." },
  { icon: "◈", title: "Innovative Approach", desc: "We leverage cutting-edge tools and proven methodologies to maximize every customer interaction." },
  { icon: "◆", title: "24/7 Availability", desc: "Round-the-clock coverage ensuring your customers are never left without support." },
];

export default function Servicescontactcenter() {
  const [sectionRef, inView] = useInView(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .cc-root {
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: #111;
          min-height: 100vh;
          display: flex;
          align-items: stretch;
        }

        /* ── animations ── */
        .anim-fade {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .anim-fade.show { opacity: 1; transform: translateY(0); }
        .anim-fade.d1 { transition-delay: 0.1s; }
        .anim-fade.d2 { transition-delay: 0.22s; }
        .anim-fade.d3 { transition-delay: 0.34s; }
        .anim-fade.d4 { transition-delay: 0.46s; }
        .anim-fade.d5 { transition-delay: 0.58s; }

        .anim-slide-right {
          opacity: 0; transform: translateX(50px);
          transition: opacity 1s cubic-bezier(.16,1,.3,1) 0.1s, transform 1s cubic-bezier(.16,1,.3,1) 0.1s;
        }
        .anim-slide-right.show { opacity: 1; transform: translateX(0); }

        .anim-img {
          opacity: 0; transform: scale(1.04);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1), transform 1.2s cubic-bezier(.16,1,.3,1);
        }
        .anim-img.show { opacity: 1; transform: scale(1); }

        /* ── image side ── */
        .img-col {
          position: relative;
          width: 45%;
          flex-shrink: 0;
          overflow: hidden;
        }
        .img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            transparent 60%,
            rgba(17,17,17,0.85) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(17,17,17,0.15) 0%,
            transparent 25%,
            transparent 75%,
            rgba(17,17,17,0.3) 100%
          );
        }
        .img-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(17,17,17,0.82);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 0.9rem 1.4rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        /* ── content side ── */
        .content-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem 4rem;
          position: relative;
        }

        /* ── feature rows ── */
        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(58,48,32,0.5);
          transition: border-color 0.3s;
          cursor: default;
        }
        .feature-row:last-child { border-bottom: none; }
        .feature-row:hover { border-color: rgba(201,168,76,0.4); }
        .feature-row:hover .feat-icon-wrap { background: rgba(201,168,76,0.12); border-color: #c9a84c; }

        .feat-icon-wrap {
          width: 42px; height: 42px; flex-shrink: 0;
          border: 1px solid #3a3020;
          display: flex; align-items: center; justify-content: center;
          color: #c9a84c; font-size: 1rem;
          transition: background 0.3s, border-color 0.3s;
          background: rgba(201,168,76,0.04);
        }

        .gold-bar {
          width: 48px; height: 2px;
          background: linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c);
          display: inline-block;
        }

        /* ── bg decoration ── */
        .bg-text {
          position: absolute;
          top: 2rem;
          right: 3rem;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(4rem, 9vw, 8rem);
          font-weight: 800;
          color: rgba(201,168,76,0.04);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          user-select: none;
          line-height: 1;
          white-space: nowrap;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .cc-root { flex-direction: column; min-height: auto; }
          .img-col { width: 100%; height: 56vw; min-height: 280px; max-height: 480px; }
          .img-overlay {
            background: linear-gradient(
              to bottom,
              transparent 50%,
              rgba(17,17,17,0.9) 100%
            );
          }
          .content-col { padding: 3rem 2rem; }
          .bg-text { font-size: 4rem; right: 1rem; top: 1rem; }
        }

        @media (max-width: 639px) {
          .img-col { height: 72vw; min-height: 240px; }
          .content-col { padding: 2.5rem 1.25rem; }
          .img-badge { bottom: 1rem; left: 1rem; padding: 0.7rem 1rem; }
          .bg-text { display: none; }
        }
      `}</style>

      <section ref={sectionRef} className="cc-root">

        {/* ══ LEFT: Full-height image ══ */}
        <div className="img-col">
          <img
            className={`anim-img ${inView ? "show" : ""}`}
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop"
            alt="Contact center professional"
          />
          <div className="img-overlay" />

          {/* badge */}
          <div className={`img-badge anim-fade ${inView ? "show" : ""}`}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#e8d5a3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>♛</div>
            <div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase" }}>Crownix BPO</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.72rem", color: "#e8d5a3", fontWeight: 500, marginTop: "0.1rem" }}>Contact Center</div>
            </div>
          </div>
        </div>

        {/* ══ RIGHT: Content ══ */}
        <div className="content-col">
          {/* bg ghost text */}
          <div className="bg-text">CONNECT</div>

          {/* label row */}
          <div className={`anim-fade ${inView ? "show" : ""}`} style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", color: "#4a4030", letterSpacing: "0.15em" }}>03</span>
            <span className="gold-bar" style={{ width: "24px" }} />
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Our Services</span>
          </div>

          {/* headline */}
          <div className={`anim-fade d1 ${inView ? "show" : ""}`} style={{ marginBottom: "0.4rem" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(2.6rem, 6vw, 5rem)", fontWeight: 800, color: "rgba(201,168,76,0.07)", letterSpacing: "0.08em", textTransform: "uppercase", userSelect: "none", lineHeight: 1, display: "block", position: "absolute", pointerEvents: "none" }}>
            </span>
            <h2 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 300, color: "#e8d5a3", lineHeight: 1.08, position: "relative" }}>
              Contact{" "}
              <em style={{ fontStyle: "italic", color: "#c9a84c", fontWeight: 400, textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.4)", textUnderlineOffset: "6px" }}>Center</em>
            </h2>
          </div>

          {/* divider */}
          <div className={`anim-fade d2 ${inView ? "show" : ""}`} style={{ margin: "1.4rem 0" }}>
            <span className="gold-bar" />
          </div>

          {/* description */}
          <p className={`anim-fade d2 ${inView ? "show" : ""}`} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.875rem", lineHeight: 1.9, color: "#7a6a4a", fontWeight: 300, maxWidth: "520px", marginBottom: "2rem" }}>
            At Crownix BPO, our Contact Center services are the cornerstone of our commitment to exceptional customer support. We understand that in today's competitive landscape, every customer interaction matters — so we specialize in delivering top-notch services that ensure every touchpoint is a positive one.
          </p>

          {/* features */}
          <div className={`anim-fade d3 ${inView ? "show" : ""}`} style={{ marginBottom: "2.5rem" }}>
            {features.map((f, i) => (
              <div key={f.title} className="feature-row">
                <div className="feat-icon-wrap">{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#e8d5a3", letterSpacing: "0.04em", marginBottom: "0.3rem" }}>{f.title}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.78rem", color: "#6a5a3a", lineHeight: 1.6, fontWeight: 300 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className={`anim-fade d4 ${inView ? "show" : ""}`} style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <button
              style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "#c9a84c", border: "1px solid #c9a84c", color: "#111", padding: "0.9rem 2rem", cursor: "pointer", fontWeight: 600, transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#e8d5a3"; e.currentTarget.style.borderColor = "#e8d5a3"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.borderColor = "#c9a84c"; }}
            >
              Get Started
            </button>
            <button
              style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", background: "transparent", border: "1px solid #3a3020", color: "#9a8a6a", padding: "0.9rem 2rem", cursor: "pointer", fontWeight: 500, transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#3a3020"; e.currentTarget.style.color = "#9a8a6a"; }}
            >
              Learn More
            </button>
          </div>
        </div>

      </section>
    </>
  );
}
