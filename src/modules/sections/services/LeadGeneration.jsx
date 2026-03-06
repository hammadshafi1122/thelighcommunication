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

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

const features = [
  { icon: "✦", title: "Targeted Outreach", desc: "Precision-crafted campaigns that reach your ideal prospects at exactly the right moment." },
  { icon: "◈", title: "Qualified Leads, Real Results", desc: "We don't just generate volume — every lead is vetted, scored, and primed for conversion." },
  { icon: "◆", title: "Data-Driven Strategy", desc: "Analytics-backed methodologies that continuously refine and optimize your pipeline." },
];

export default function LeadGenSection() {
  const [sectionRef, inView] = useInView(0.05);
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,500&family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .lg-root {
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: #111;
          display: flex;
          align-items: stretch;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* ── animations ── */
        .au { opacity:0; transform:translateY(30px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .au.show { opacity:1; transform:translateY(0); }
        .au.d1{transition-delay:.1s} .au.d2{transition-delay:.22s}
        .au.d3{transition-delay:.34s} .au.d4{transition-delay:.46s}
        .au.d5{transition-delay:.58s}

        .ai { opacity:0; transform:scale(1.06); transition:opacity 1.3s cubic-bezier(.16,1,.3,1),transform 1.3s cubic-bezier(.16,1,.3,1); }
        .ai.show { opacity:1; transform:scale(1); }

        /* ── image col ── */
        .lg-img-col {
          width: 45%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .lg-img-col img {
          width:100%; height:100%;
          object-fit:cover; object-position:center top;
          display:block;
        }
        .lg-img-overlay {
          position:absolute; inset:0;
          background: linear-gradient(
            to right,
            transparent 55%,
            rgba(17,17,17,.88) 100%
          ),
          linear-gradient(
            to bottom,
            rgba(17,17,17,.12) 0%,
            transparent 20%,
            transparent 80%,
            rgba(17,17,17,.28) 100%
          );
        }

        /* badge */
        .lg-badge {
          position:absolute; bottom:2rem; left:2rem;
          background:rgba(17,17,17,.84);
          backdrop-filter:blur(12px);
          border:1px solid rgba(201,168,76,.3);
          padding:.85rem 1.3rem;
          display:flex; align-items:center; gap:.7rem;
        }

        /* stat strip on image */
        .lg-stat-strip {
          position:absolute; top:2rem; right:-1px;
          background:rgba(17,17,17,.84);
          backdrop-filter:blur(10px);
          border:1px solid rgba(201,168,76,.22);
          border-right:none;
          padding:.8rem 1.4rem .8rem 1.2rem;
          display:flex; flex-direction:column; gap:.9rem;
        }

        /* ── content col ── */
        .lg-content {
          flex:1;
          display:flex; flex-direction:column; justify-content:center;
          padding: 5rem 4rem;
          position:relative; z-index:2;
        }

        /* ghost bg text */
        .ghost {
          position:absolute; top:1.5rem; right:2rem;
          font-family:'Montserrat',sans-serif;
          font-size:clamp(3.5rem,8vw,7.5rem);
          font-weight:800; color:rgba(201,168,76,.04);
          letter-spacing:.08em; text-transform:uppercase;
          user-select:none; line-height:1; white-space:nowrap; pointer-events:none;
        }

        /* feature rows */
        .feat {
          display:flex; align-items:flex-start; gap:1.2rem;
          padding:1.2rem 0;
          border-bottom:1px solid rgba(58,48,32,.45);
          transition:border-color .3s; cursor:default;
        }
        .feat:last-child { border-bottom:none; }
        .feat:hover { border-color:rgba(201,168,76,.4); }
        .feat:hover .ficon { background:rgba(201,168,76,.1); border-color:#c9a84c; }

        .ficon {
          width:40px; height:40px; flex-shrink:0;
          border:1px solid #3a3020;
          display:flex; align-items:center; justify-content:center;
          color:#c9a84c; font-size:.95rem;
          background:rgba(201,168,76,.04);
          transition:background .3s,border-color .3s;
        }

        .gbar {
          display:inline-block; height:2px;
          background:linear-gradient(90deg,#c9a84c,#e8d5a3,#c9a84c);
        }

        .btn-p {
          font-family:'Montserrat',sans-serif; font-size:.68rem;
          letter-spacing:.2em; text-transform:uppercase;
          background:#c9a84c; border:1px solid #c9a84c; color:#111;
          padding:.9rem 2rem; cursor:pointer; font-weight:600;
          transition:all .3s; white-space:nowrap;
        }
        .btn-p:hover { background:#e8d5a3; border-color:#e8d5a3; }

        .btn-s {
          font-family:'Montserrat',sans-serif; font-size:.68rem;
          letter-spacing:.2em; text-transform:uppercase;
          background:transparent; border:1px solid #3a3020; color:#9a8a6a;
          padding:.9rem 2rem; cursor:pointer; font-weight:500;
          transition:all .3s; white-space:nowrap;
        }
        .btn-s:hover { border-color:#c9a84c; color:#c9a84c; }

        /* ── RESPONSIVE ── */
        @media (max-width:1023px) {
          .lg-root { flex-direction:column; min-height:auto; }
          .lg-img-col { width:100%; height:58vw; min-height:280px; max-height:480px; }
          .lg-img-overlay {
            background:linear-gradient(to bottom,transparent 45%,rgba(17,17,17,.92) 100%);
          }
          .lg-stat-strip { top:auto; right:auto; bottom:1rem; left:50%; transform:translateX(-50%); flex-direction:row; gap:1.5rem; border:1px solid rgba(201,168,76,.22); border-right:1px solid rgba(201,168,76,.22); }
          .lg-content { padding:3rem 2.5rem; }
          .ghost { font-size:3.5rem; }
        }
        @media (max-width:639px) {
          .lg-img-col { height:74vw; min-height:240px; }
          .lg-content { padding:2.5rem 1.25rem; }
          .lg-badge { bottom:1rem; left:1rem; padding:.65rem 1rem; }
          .ghost { display:none; }
          .lg-stat-strip { display:none; }
        }
      `}</style>

      <section ref={sectionRef} className="lg-root">

        {/* ══ LEFT: Full-height image ══ */}
        <div className="lg-img-col">
          <img
            className={`ai ${inView ? "show" : ""}`}
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900&q=80&auto=format&fit=crop"
            alt="Lead generation professional"
          />
          <div className="lg-img-overlay" />

          {/* bottom-left badge */}
          <div className={`lg-badge au ${inView ? "show" : ""}`}>
            <div style={{ width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#c9a84c,#e8d5a3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0 }}>♛</div>
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".58rem",letterSpacing:".2em",color:"#c9a84c",textTransform:"uppercase" }}>Crownix BPO</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".7rem",color:"#e8d5a3",fontWeight:500,marginTop:".1rem" }}>Lead Generation</div>
            </div>
          </div>

          {/* right-side stat strip */}
          <div className={`lg-stat-strip au d2 ${inView ? "show" : ""}`}>
            {[["3×","ROI Avg"],["85%","Conversion Lift"],["48hr","Lead Delivery"]].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.35rem",fontWeight:300,color:"#c9a84c",lineHeight:1 }}>{v}</div>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".52rem",letterSpacing:".14em",color:"#5a5040",textTransform:"uppercase",marginTop:".2rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT: Content ══ */}
        <div className="lg-content">
          <div className="ghost">CONVERT</div>

          {/* label row */}
          <div className={`au ${inView ? "show" : ""}`} style={{ display:"flex",alignItems:"center",gap:".85rem",marginBottom:"1.5rem" }}>
            <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".6rem",color:"#4a4030",letterSpacing:".15em" }}>05</span>
            <span className="gbar" style={{ width:"24px" }} />
            <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".62rem",letterSpacing:".26em",textTransform:"uppercase",color:"#c9a84c",fontWeight:500 }}>Our Services</span>
          </div>

          {/* headline */}
          <div className={`au d1 ${inView ? "show" : ""}`}>
            <h2 style={{ fontSize:"clamp(2.4rem,5.5vw,4.4rem)",fontWeight:300,color:"#e8d5a3",lineHeight:1.06,letterSpacing:"-.01em" }}>
              Lead Generation
            </h2>
            <h2 style={{ fontSize:"clamp(2.4rem,5.5vw,4.4rem)",fontWeight:400,lineHeight:1.06 }}>
              <em style={{ fontStyle:"italic",color:"#c9a84c",textDecoration:"underline",textDecorationColor:"rgba(201,168,76,.35)",textUnderlineOffset:"7px",textDecorationThickness:"2px" }}>Service</em>
            </h2>
          </div>

          {/* gold divider */}
          <div className={`au d2 ${inView ? "show" : ""}`} style={{ margin:"1.5rem 0" }}>
            <span className="gbar" style={{ width:"48px" }} />
          </div>

          {/* body text */}
          <p className={`au d2 ${inView ? "show" : ""}`} style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".875rem",lineHeight:1.9,color:"#7a6a4a",fontWeight:300,maxWidth:"500px",marginBottom:"2rem" }}>
            Lead generation is the lifeblood of any business seeking growth and success. At Crownix BPO, we understand the crucial role that generating high-quality leads plays in your strategy. Our services are designed to identify, nurture, and convert potential prospects into loyal customers.
          </p>

          {/* features */}
          <div className={`au d3 ${inView ? "show" : ""}`} style={{ marginBottom:"2.5rem",maxWidth:"500px" }}>
            {features.map(f => (
              <div key={f.title} className="feat">
                <div className="ficon">{f.icon}</div>
                <div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".84rem",fontWeight:600,color:"#e8d5a3",letterSpacing:".04em",marginBottom:".28rem" }}>{f.title}</div>
                  <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".77rem",color:"#6a5a3a",lineHeight:1.65,fontWeight:300 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`au d4 ${inView ? "show" : ""}`} style={{ display:"flex",gap:".85rem",flexWrap:"wrap" }}>
            <button className="btn-p">Start Generating</button>
            <button className="btn-s">Learn More</button>
          </div>
        </div>

      </section>
    </>
  );
}