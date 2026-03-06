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
  }, []);
  return [ref, inView];
}

const features = [
  { icon: "✦", title: "Certified IT Professionals", desc: "Our team holds industry-leading certifications, ready to tackle your most complex technical challenges." },
  { icon: "◈", title: "24/7 Tech Support", desc: "Round-the-clock assistance ensuring your infrastructure is always running at peak performance." },
  { icon: "◆", title: "Secure & Scalable Systems", desc: "Enterprise-grade security frameworks built to grow alongside your business without compromise." },
];

export default function ITSection() {
  const [sectionRef, inView] = useInView(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,500&family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .it-root {
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: #111;
          display: flex;
          align-items: stretch;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ── animations ── */
        .anim-up {
          opacity: 0; transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(.16,1,.3,1), transform 0.8s cubic-bezier(.16,1,.3,1);
        }
        .anim-up.show { opacity: 1; transform: translateY(0); }
        .anim-up.d1 { transition-delay: 0.1s; }
        .anim-up.d2 { transition-delay: 0.22s; }
        .anim-up.d3 { transition-delay: 0.34s; }
        .anim-up.d4 { transition-delay: 0.46s; }
        .anim-up.d5 { transition-delay: 0.58s; }

        .anim-img {
          opacity: 0; transform: scale(1.05);
          transition: opacity 1.3s cubic-bezier(.16,1,.3,1), transform 1.3s cubic-bezier(.16,1,.3,1);
        }
        .anim-img.show { opacity: 1; transform: scale(1); }

        /* ── content side ── */
        .it-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem 4rem 5rem 4rem;
          position: relative;
          z-index: 2;
        }

        /* ── image side ── */
        .it-img-col {
          width: 45%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .it-img-col img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .it-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to left,
            transparent 55%,
            rgba(17,17,17,0.9) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(17,17,17,0.15) 0%,
            transparent 20%,
            transparent 80%,
            rgba(17,17,17,0.25) 100%
          );
        }

        /* badge on image */
        .it-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: rgba(17,17,17,0.82);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 0.85rem 1.3rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        /* bg ghost text */
        .ghost-text {
          position: absolute;
          top: 1.5rem;
          left: 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(3.5rem, 8vw, 7.5rem);
          font-weight: 800;
          color: rgba(201,168,76,0.045);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          user-select: none;
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
        }

        /* feature rows */
        .feat-row {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid rgba(58,48,32,0.45);
          transition: border-color 0.3s;
          cursor: default;
        }
        .feat-row:last-child { border-bottom: none; }
        .feat-row:hover { border-color: rgba(201,168,76,0.4); }
        .feat-row:hover .feat-icon { background: rgba(201,168,76,0.1); border-color: #c9a84c; }

        .feat-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          border: 1px solid #3a3020;
          display: flex; align-items: center; justify-content: center;
          color: #c9a84c; font-size: 0.95rem;
          background: rgba(201,168,76,0.04);
          transition: background 0.3s, border-color 0.3s;
        }

        .gold-bar {
          display: inline-block; height: 2px;
          background: linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c);
        }

        .btn-primary {
          font-family: 'Montserrat', sans-serif; font-size: 0.68rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: #c9a84c; border: 1px solid #c9a84c; color: #111;
          padding: 0.9rem 2rem; cursor: pointer; font-weight: 600;
          transition: all 0.3s; white-space: nowrap;
        }
        .btn-primary:hover { background: #e8d5a3; border-color: #e8d5a3; }

        .btn-secondary {
          font-family: 'Montserrat', sans-serif; font-size: 0.68rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: transparent; border: 1px solid #3a3020; color: #9a8a6a;
          padding: 0.9rem 2rem; cursor: pointer; font-weight: 500;
          transition: all 0.3s; white-space: nowrap;
        }
        .btn-secondary:hover { border-color: #c9a84c; color: #c9a84c; }

        /* diagonal accent line */
        .diag-line {
          position: absolute;
          bottom: 15%;
          left: -5%;
          width: 35%;
          height: 1px;
          background: rgba(201,168,76,0.07);
          transform: rotate(-18deg);
          pointer-events: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .it-root { flex-direction: column; min-height: auto; }
          .it-img-col {
            width: 100%;
            height: 58vw;
            min-height: 280px;
            max-height: 480px;
            order: -1;
          }
          .it-img-overlay {
            background: linear-gradient(
              to bottom,
              transparent 45%,
              rgba(17,17,17,0.92) 100%
            );
          }
          .it-content { padding: 3rem 2.5rem; }
          .ghost-text { font-size: 3.5rem; }
        }

        @media (max-width: 639px) {
          .it-img-col { height: 74vw; min-height: 240px; }
          .it-content { padding: 2.5rem 1.25rem; }
          .it-badge { top: 1rem; right: 1rem; padding: 0.65rem 1rem; }
          .ghost-text { display: none; }
          .diag-line { display: none; }
        }
      `}</style>

      <section ref={sectionRef} className="it-root">

        {/* ══ LEFT: Content ══ */}
        <div className="it-content">
          <div className="ghost-text">INNOVATE</div>
          <div className="diag-line" />

          {/* label */}
          <div className={`anim-up ${inView ? "show" : ""}`} style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.6rem", color: "#4a4030", letterSpacing: "0.15em" }}>04</span>
            <span className="gold-bar" style={{ width: "24px" }} />
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.62rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "#c9a84c", fontWeight: 500 }}>Our Services</span>
          </div>

          {/* headline */}
          <div className={`anim-up d1 ${inView ? "show" : ""}`} style={{ marginBottom: "0.25rem" }}>
            <h2 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 300, color: "#e8d5a3", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Information
            </h2>
            <h2 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 400, lineHeight: 1.05 }}>
              <em style={{
                fontStyle: "italic",
                color: "#c9a84c",
                textDecoration: "underline",
                textDecorationColor: "rgba(201,168,76,0.35)",
                textUnderlineOffset: "7px",
                textDecorationThickness: "2px",
              }}>Technology</em>
            </h2>
          </div>

          {/* divider */}
          <div className={`anim-up d2 ${inView ? "show" : ""}`} style={{ margin: "1.5rem 0" }}>
            <span className="gold-bar" style={{ width: "48px" }} />
          </div>

          {/* body */}
          <p className={`anim-up d2 ${inView ? "show" : ""}`} style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.875rem", lineHeight: 1.9, color: "#7a6a4a", fontWeight: 300, maxWidth: "500px", marginBottom: "2rem" }}>
            At Crownix BPO, our IT services are designed to keep your technology infrastructure running smoothly and securely, so you can focus on your core business operations. In today's fast-paced digital landscape, a robust IT framework is essential for your success.
          </p>

          {/* features */}
          <div className={`anim-up d3 ${inView ? "show" : ""}`} style={{ marginBottom: "2.5rem", maxWidth: "500px" }}>
            {features.map((f) => (
              <div key={f.title} className="feat-row">
                <div className="feat-icon">{f.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.84rem", fontWeight: 600, color: "#e8d5a3", letterSpacing: "0.04em", marginBottom: "0.28rem" }}>{f.title}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.77rem", color: "#6a5a3a", lineHeight: 1.65, fontWeight: 300 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`anim-up d4 ${inView ? "show" : ""}`} style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* ══ RIGHT: Full-height image ══ */}
        <div className="it-img-col">
          <img
            className={`anim-img ${inView ? "show" : ""}`}
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80&auto=format&fit=crop"
            alt="IT professionals at work"
          />
          <div className="it-img-overlay" />

          {/* floating badge */}
          <div className={`it-badge anim-up d1 ${inView ? "show" : ""}`}>
            <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#c9a84c,#e8d5a3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>♛</div>
            <div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase" }}>Crownix BPO</div>
              <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.7rem", color: "#e8d5a3", fontWeight: 500, marginTop: "0.1rem" }}>IT Division</div>
            </div>
          </div>

          {/* bottom stat pill */}
          <div className={`anim-up d3 ${inView ? "show" : ""}`} style={{
            position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
            background: "rgba(17,17,17,0.85)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(201,168,76,0.25)",
            padding: "0.85rem 1.75rem",
            display: "flex", alignItems: "center", gap: "1.5rem",
            whiteSpace: "nowrap",
          }}>
            {[["99.9%", "Uptime SLA"], ["<1hr", "Response Time"]].map(([val, lbl]) => (
              <div key={lbl} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.4rem", fontWeight: 300, color: "#c9a84c", lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "#5a5040", textTransform: "uppercase", marginTop: "0.2rem" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}
