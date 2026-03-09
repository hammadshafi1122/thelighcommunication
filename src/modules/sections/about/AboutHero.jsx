import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "6+", label: "Years of Excellence" },
  { value: "100+", label: "Global Clients" },
  { value: "99%", label: "Client Retention" },
  { value: "200+", label: "Professionals" },
];

const values = [
  { icon: "◆", title: "Precision", desc: "Every process engineered to deliver flawless, measurable outcomes for your business." },
  { icon: "◈", title: "Integrity", desc: "Transparency and accountability form the cornerstone of every client partnership." },
  { icon: "◇", title: "Innovation", desc: "Continuously evolving our methodologies to stay ahead of industry disruption." },
  { icon: "◉", title: "Excellence", desc: "We hold ourselves to the highest standards — because your business deserves nothing less." },
];

function useWindowWidth() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return width;
}

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

function AnimatedCounter({ target, inView }) {
  const [count, setCount] = useState(0);
  const suffix = target.replace(/[0-9]/g, "");
  const num = parseInt(target);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(num / (1800 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, num]);
  return <span>{count}{suffix}</span>;
}

export default function AboutHero() {
  const w = useWindowWidth();
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;
  const isDesktop = w >= 1024;
  const px = isMobile ? "1.25rem" : isTablet ? "2.5rem" : "4rem";

  const [heroRef, heroInView] = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.1);
  const [storyRef, storyInView] = useInView(0.05);
  const [valuesRef, valuesInView] = useInView(0.05);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#1a1a1a", color: "#e8d5a3", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fade-up {
          opacity: 0; transform: translateY(36px);
          transition: opacity 0.85s cubic-bezier(.16,1,.3,1), transform 0.85s cubic-bezier(.16,1,.3,1);
        }
        .fade-up.vis { opacity: 1; transform: translateY(0); }
        .fade-up.d1 { transition-delay: 0.08s; }
        .fade-up.d2 { transition-delay: 0.2s; }
        .fade-up.d3 { transition-delay: 0.32s; }
        .fade-up.d4 { transition-delay: 0.44s; }

        .fade-left {
          opacity: 0; transform: translateX(-40px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1);
        }
        .fade-left.vis { opacity: 1; transform: translateX(0); }

        .fade-right {
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.9s cubic-bezier(.16,1,.3,1) 0.15s, transform 0.9s cubic-bezier(.16,1,.3,1) 0.15s;
        }
        .fade-right.vis { opacity: 1; transform: translateX(0); }

        .value-card {
          border: 1px solid #3a3020; background: #222;
          transition: border-color 0.35s, background 0.35s, transform 0.35s;
        }
        .value-card:hover { border-color: #c9a84c; background: #2a2518; transform: translateY(-5px); }

        .stat-item {
          border-left: 2px solid #3a3020;
          transition: border-color 0.35s;
          padding-left: 1.25rem;
        }
        .stat-item:hover { border-color: #c9a84c; }

        .gold-divider {
          display: inline-block; width: 48px; height: 2px;
          background: linear-gradient(90deg, #c9a84c, #e8d5a3, #c9a84c);
          flex-shrink: 0;
        }

        .label-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.62rem; letter-spacing: 0.26em;
          text-transform: uppercase; color: #c9a84c; font-weight: 500;
        }

        .body-p { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; line-height: 1.9; color: #9a8a6a; font-weight: 300; }

        .btn-gold {
          font-family: 'Montserrat', sans-serif; font-size: 0.68rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: #c9a84c; border: 1px solid #c9a84c; color: #1a1a1a;
          padding: 0.9rem 2rem; cursor: pointer; font-weight: 600;
          transition: background 0.3s, border-color 0.3s; white-space: nowrap;
        }
        .btn-gold:hover { background: #e8d5a3; border-color: #e8d5a3; }

        .btn-outline {
          font-family: 'Montserrat', sans-serif; font-size: 0.68rem;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: transparent; border: 1px solid #3a3020; color: #9a8a6a;
          padding: 0.9rem 2rem; cursor: pointer; font-weight: 500;
          transition: border-color 0.3s, color 0.3s; white-space: nowrap;
        }
        .btn-outline:hover { border-color: #c9a84c; color: #c9a84c; }

        .noise {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.35;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        }
        .corner { position: absolute; width: 16px; height: 16px; border-color: #c9a84c; border-style: solid; }
        .bg-lines {
          background-image: repeating-linear-gradient(45deg, transparent, transparent 38px, rgba(201,168,76,0.016) 38px, rgba(201,168,76,0.016) 39px);
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        ref={heroRef}
        className="bg-lines"
        style={{ position: "relative", padding: `${isMobile ? "4rem 1.25rem" : isTablet ? "5rem 2.5rem" : "6rem 4rem"}`, display: "flex", alignItems: "center" }}
      >
        <div className="noise" />
        {isDesktop && <>
          <div style={{ position: "absolute", top: "10%", right: "6%", width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)" }} />
          <div style={{ position: "absolute", top: "14%", right: "10%", width: "100px", height: "100px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.05)" }} />
        </>}

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "4rem" : "3rem",
            alignItems: "center",
          }}>

            {/* Copy */}
            <div>
              <div className={`fade-up ${heroInView ? "vis" : ""}`} style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", color: "#4a4030", letterSpacing: "0.15em" }}>01</span>
                <span className="gold-divider" style={{ width: "24px" }} />
                <span className="label-tag">About Us</span>
              </div>

              <div className={`fade-up d1 ${heroInView ? "vis" : ""}`}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.4rem", color: "#c9a84c", filter: "drop-shadow(0 0 6px rgba(201,168,76,0.4))" }}>♛</span>
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.68rem", letterSpacing: "0.3em", color: "#c9a84c", fontWeight: 600 }}>CROWNIX BPO</span>
                </div>
                <h1 style={{ fontSize: "clamp(2.4rem, 8vw, 4.8rem)", fontWeight: 300, lineHeight: 1.06, color: "#e8d5a3" }}>
                  We Don't Just<br />
                  <em style={{ fontStyle: "italic", color: "#c9a84c" }}>Outsource.</em><br />
                  We Elevate.
                </h1>
              </div>

              <div className={`fade-up d2 ${heroInView ? "vis" : ""}`} style={{ marginTop: "1.75rem" }}>
                <span className="gold-divider" />
              </div>

              <p className={`body-p fade-up d3 ${heroInView ? "vis" : ""}`} style={{ marginTop: "1.25rem", maxWidth: "480px" }}>
                Crownix BPO is a premium business process outsourcing partner built for organizations that refuse to compromise. From customer experience to back-office intelligence, we deliver operations that perform at the highest level.
              </p>

              <div className={`fade-up d4 ${heroInView ? "vis" : ""}`} style={{ marginTop: "2rem", display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
                <button className="btn-gold">Explore Our Story</button>
                <button className="btn-outline">Our Services</button>
              </div>
            </div>

            {/* Mission card */}
            <div className={`${isDesktop ? "fade-right" : "fade-up d2"} ${heroInView ? "vis" : ""}`} style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(135deg, #2a2518 0%, #1e1e1e 60%, #232320 100%)",
                border: "1px solid #3a3020",
                padding: isMobile ? "1.75rem 1.25rem" : "2.5rem",
                position: "relative",
              }}>
                <div className="corner" style={{ top: 9, left: 9, borderWidth: "1px 0 0 1px" }} />
                <div className="corner" style={{ top: 9, right: 9, borderWidth: "1px 1px 0 0" }} />
                <div className="corner" style={{ bottom: 9, left: 9, borderWidth: "0 0 1px 1px" }} />
                <div className="corner" style={{ bottom: 9, right: 9, borderWidth: "0 1px 1px 0" }} />

                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: "linear-gradient(135deg, #c9a84c, #e8d5a3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", fontSize: "1.7rem" }}>♛</div>
                  <p className="label-tag" style={{ marginBottom: "0.6rem" }}>Our Mission</p>
                  <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#e8d5a3", fontWeight: 300, lineHeight: 1.55, fontStyle: "italic" }}>
                    "To crown every business process with precision, care, and world-class expertise."
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #3a3020", paddingTop: "1.4rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  {["Customer Experience", "Finance & Accounting", "IT & Tech Support", "HR Process Management"].map(s => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <div style={{ width: "5px", height: "5px", background: "#c9a84c", transform: "rotate(45deg)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", color: "#9a8a6a", letterSpacing: "0.04em" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
              {!isMobile && <div style={{ position: "absolute", bottom: "-9px", right: "-9px", width: "100%", height: "100%", border: "1px solid #2a2520", zIndex: -1 }} />}
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section ref={statsRef} style={{ padding: `2.5rem ${px}`, background: "#151515", borderTop: "1px solid #252525", borderBottom: "1px solid #252525" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "2rem 1.5rem" : "2rem",
          }}>
            {stats.map((s, i) => (
              <div key={s.label} className={`stat-item fade-up d${i + 1} ${statsInView ? "vis" : ""}`}>
                <div style={{ fontSize: "clamp(1.7rem, 5vw, 2.7rem)", fontWeight: 300, color: "#c9a84c", lineHeight: 1 }}>
                  <AnimatedCounter target={s.value} inView={statsInView} />
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", letterSpacing: "0.14em", color: "#5a5040", marginTop: "0.4rem", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section ref={storyRef} style={{ padding: `${isMobile ? "4rem 1.25rem" : isTablet ? "5rem 2.5rem" : "6rem 4rem"}`, position: "relative" }}>
        <div className="noise" />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 2fr" : "1fr",
            gap: isDesktop ? "5rem" : "2.5rem",
            alignItems: "start",
          }}>

            <div className={`${isDesktop ? "fade-left" : "fade-up"} ${storyInView ? "vis" : ""}`}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "1.75rem" }}>
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.6rem", color: "#4a4030", letterSpacing: "0.15em" }}>02</span>
                <span className="gold-divider" style={{ width: "24px" }} />
                <span className="label-tag">Our Story</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.85rem, 5vw, 3rem)", fontWeight: 300, color: "#e8d5a3", lineHeight: 1.15 }}>
                Born from a<br />
                <em style={{ color: "#c9a84c" }}>Vision of<br />Excellence</em>
              </h2>
              <div style={{ marginTop: "1.75rem", width: "36px", height: "1px", background: "#c9a84c" }} />
            </div>

            <div className={`${isDesktop ? "fade-right" : "fade-up d1"} ${storyInView ? "vis" : ""}`}>
              <p className="body-p" style={{ marginBottom: "1.4rem" }}>
                Crownix BPO was founded on a singular conviction: that outsourcing should never mean settling. In a landscape crowded with cost-cutting promises, we chose a different path — one defined by quality, ownership, and a relentless commitment to the success of our partners.
              </p>
              <p className="body-p" style={{ marginBottom: "1.4rem" }}>
                From our earliest days, we attracted clients who shared our belief that the right processes, driven by the right people, could become a genuine competitive advantage. Today, that philosophy has grown into a global operation spanning industries and continents.
              </p>
              <p className="body-p">
                Every team member at Crownix is selected not just for skill, but for character. We invest deeply in training, culture, and leadership — because the quality of your partner's team directly reflects on your brand.
              </p>

              {/* <div style={{ marginTop: "2.5rem", display: "flex", gap: isMobile ? "1.75rem" : "3rem", flexWrap: "wrap" }}>
                {[["2012", "Founded"], ["Manila", "Headquarters"], ["ISO", "Certified"]].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontSize: "1.3rem", fontWeight: 300, color: "#c9a84c" }}>{val}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", color: "#5a5040", textTransform: "uppercase", marginTop: "0.25rem" }}>{lbl}</div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section ref={valuesRef} style={{ padding: `${isMobile ? "4rem 1.25rem" : isTablet ? "5rem 2.5rem" : "6rem 4rem"}`, background: "#161616" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "2.5rem" : "3.5rem" }}>
            <div className={`fade-up ${valuesInView ? "vis" : ""}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <span className="gold-divider" />
              <span className="label-tag">Our Values</span>
              <span className="gold-divider" />
            </div>
            <h2 className={`fade-up d1 ${valuesInView ? "vis" : ""}`} style={{ fontSize: "clamp(1.65rem, 4vw, 2.7rem)", fontWeight: 300, color: "#e8d5a3" }}>
              The Principles That <em style={{ color: "#c9a84c" }}>Crown</em> Our Work
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: "1.2rem",
          }}>
            {values.map((v, i) => (
              <div key={v.title} className={`value-card fade-up d${i + 1} ${valuesInView ? "vis" : ""}`} style={{ padding: isMobile ? "1.75rem 1.4rem" : "2.25rem 1.75rem" }}>
                <div style={{ fontSize: "1.6rem", color: "#c9a84c", marginBottom: "1rem", opacity: 0.8 }}>{v.icon}</div>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 400, color: "#e8d5a3", marginBottom: "0.7rem", letterSpacing: "0.02em" }}>{v.title}</h3>
                <p className="body-p" style={{ fontSize: "0.81rem" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: `${isMobile ? "4rem 1.25rem" : "5.5rem 4rem"}`, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.045) 0%, transparent 65%)", pointerEvents: "none" }} />
        <span className="label-tag" style={{ display: "block", marginBottom: "1.25rem" }}>Ready to Partner with the Best?</span>
        <h2 style={{ fontSize: "clamp(1.65rem, 5vw, 2.9rem)", fontWeight: 300, color: "#e8d5a3", marginBottom: "2rem", lineHeight: 1.2 }}>
          Let's Build Something <em style={{ color: "#c9a84c" }}>Exceptional</em>
        </h2>
        <div style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-gold">Get In Touch</button>
          <button className="btn-outline">View Services</button>
        </div>
      </section>
    </div>
  );
}
