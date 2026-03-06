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
  {
    icon: "✦",
    title: "Strategic Guidance",
    desc: "Seasoned consultants who map out clear, actionable roadmaps tailored to your market position.",
  },
  {
    icon: "◈",
    title: "Expert Industry Insights",
    desc: "Deep sector knowledge that turns complex market data into decisive competitive advantages.",
  },
  {
    icon: "◆",
    title: "Growth-Focused Solutions",
    desc: "Every recommendation is engineered around measurable outcomes and long-term scalability.",
  },
];

export default function BusinessConsultingSection() {
  const [sectionRef, inView] = useInView(0.05);
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isDesktop = width >= 1024;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,500&family=Montserrat:wght@300;400;500;600;700;800&display=swap');

        .bc-wrap {
          font-family: 'Cormorant Garamond', Georgia, serif;
          background: #111;
          display: flex;
          align-items: stretch;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* animations */
        .au  { opacity:0; transform:translateY(30px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .au.s{ opacity:1; transform:translateY(0); }
        .au.d1{transition-delay:.1s}  .au.d2{transition-delay:.22s}
        .au.d3{transition-delay:.34s} .au.d4{transition-delay:.46s}
        .au.d5{transition-delay:.58s}

        .ai { opacity:0; transform:scale(1.06); transition:opacity 1.3s cubic-bezier(.16,1,.3,1),transform 1.3s cubic-bezier(.16,1,.3,1); }
        .ai.s{ opacity:1; transform:scale(1); }

        /* image column */
        .bc-img {
          width: 45%;
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }
        .bc-img img {
          width:100%; height:100%;
          object-fit:cover; object-position:center;
          display:block;
        }
        .bc-img-overlay {
          position:absolute; inset:0;
          background:
            linear-gradient(to right, transparent 55%, rgba(17,17,17,.9) 100%),
            linear-gradient(to bottom, rgba(17,17,17,.12) 0%, transparent 20%, transparent 80%, rgba(17,17,17,.28) 100%);
        }

        /* badge */
        .bc-badge {
          position:absolute; bottom:2rem; left:2rem;
          background:rgba(17,17,17,.84);
          backdrop-filter:blur(12px);
          border:1px solid rgba(201,168,76,.3);
          padding:.85rem 1.3rem;
          display:flex; align-items:center; gap:.75rem;
        }

        /* floating stat card */
        .bc-stat {
          position:absolute; top:2rem; right:2rem;
          background:rgba(17,17,17,.82);
          backdrop-filter:blur(12px);
          border:1px solid rgba(201,168,76,.22);
          padding:1rem 1.5rem;
          display:flex; flex-direction:column; gap:.85rem;
        }

        /* content column */
        .bc-content {
          flex:1;
          display:flex; flex-direction:column; justify-content:center;
          padding:5rem 4rem;
          position:relative; z-index:2;
        }

        /* ghost bg text */
        .ghost {
          position:absolute; top:1.5rem; left:2rem;
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
        .feat:last-child{ border-bottom:none; }
        .feat:hover{ border-color:rgba(201,168,76,.4); }
        .feat:hover .ficon{ background:rgba(201,168,76,.1); border-color:#c9a84c; }

        .ficon {
          width:40px; height:40px; flex-shrink:0;
          border:1px solid #3a3020;
          display:flex; align-items:center; justify-content:center;
          color:#c9a84c; font-size:.95rem;
          background:rgba(201,168,76,.04);
          transition:background .3s,border-color .3s;
        }

        .gbar{ display:inline-block; height:2px; background:linear-gradient(90deg,#c9a84c,#e8d5a3,#c9a84c); }

        .btn-p{ font-family:'Montserrat',sans-serif; font-size:.68rem; letter-spacing:.2em; text-transform:uppercase; background:#c9a84c; border:1px solid #c9a84c; color:#111; padding:.9rem 2rem; cursor:pointer; font-weight:600; transition:all .3s; white-space:nowrap; }
        .btn-p:hover{ background:#e8d5a3; border-color:#e8d5a3; }

        .btn-s{ font-family:'Montserrat',sans-serif; font-size:.68rem; letter-spacing:.2em; text-transform:uppercase; background:transparent; border:1px solid #3a3020; color:#9a8a6a; padding:.9rem 2rem; cursor:pointer; font-weight:500; transition:all .3s; white-space:nowrap; }
        .btn-s:hover{ border-color:#c9a84c; color:#c9a84c; }

        /* diagonal accent */
        .diag{ position:absolute; bottom:20%; right:-5%; width:32%; height:1px; background:rgba(201,168,76,.06); transform:rotate(-18deg); pointer-events:none; }

        /* responsive */
        @media(max-width:1023px){
          .bc-wrap{ flex-direction:column; min-height:auto; }
          .bc-img{ width:100%; height:58vw; min-height:280px; max-height:480px; }
          .bc-img-overlay{ background:linear-gradient(to bottom,transparent 45%,rgba(17,17,17,.92) 100%); }
          .bc-stat{ top:auto; bottom:1rem; right:1rem; flex-direction:row; gap:1.5rem; }
          .bc-content{ padding:3rem 2.5rem; }
          .ghost{ font-size:3.5rem; }
          .diag{ display:none; }
        }
        @media(max-width:639px){
          .bc-img{ height:74vw; min-height:240px; }
          .bc-content{ padding:2.5rem 1.25rem; }
          .bc-badge{ bottom:1rem; left:1rem; padding:.65rem 1rem; }
          .bc-stat{ display:none; }
          .ghost{ display:none; }
        }
      `}</style>

      <section ref={sectionRef} className="bc-wrap">

        {/* ══ LEFT: Full-height image ══ */}
        <div className="bc-img">
          <img
            className={`ai ${inView ? "s" : ""}`}
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop"
            alt="Business consulting professionals"
          />
          <div className="bc-img-overlay" />

          {/* bottom-left badge */}
          <div className={`bc-badge au ${inView ? "s" : ""}`}>
            <div style={{ width:34,height:34,borderRadius:"50%",background:"linear-gradient(135deg,#c9a84c,#e8d5a3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0 }}>♛</div>
            <div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".58rem",letterSpacing:".2em",color:"#c9a84c",textTransform:"uppercase" }}>Crownix BPO</div>
              <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".7rem",color:"#e8d5a3",fontWeight:500,marginTop:".1rem" }}>Consulting</div>
            </div>
          </div>

          {/* top-right stat card */}
          <div className={`bc-stat au d2 ${inView ? "s" : ""}`}>
            {[["200+","Clients Advised"],["15+","Industries"],["92%","Success Rate"]].map(([v,l]) => (
              <div key={l} style={{ display:"flex",alignItems:"center",gap:".9rem" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.5rem",fontWeight:300,color:"#c9a84c",lineHeight:1,minWidth:"3rem" }}>{v}</div>
                <div style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".58rem",letterSpacing:".14em",color:"#5a5040",textTransform:"uppercase",lineHeight:1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT: Content ══ */}
        <div className="bc-content">
          <div className="ghost">STRATEGIZE</div>
          <div className="diag" />

          {/* section label */}
          <div className={`au ${inView ? "s" : ""}`} style={{ display:"flex",alignItems:"center",gap:".85rem",marginBottom:"1.5rem" }}>
            <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".6rem",color:"#4a4030",letterSpacing:".15em" }}>06</span>
            <span className="gbar" style={{ width:"24px" }} />
            <span style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".62rem",letterSpacing:".26em",textTransform:"uppercase",color:"#c9a84c",fontWeight:500 }}>Our Services</span>
          </div>

          {/* headline */}
          <div className={`au d1 ${inView ? "s" : ""}`}>
            <h2 style={{ fontSize:"clamp(2.4rem,5.5vw,4.4rem)",fontWeight:300,color:"#e8d5a3",lineHeight:1.06,letterSpacing:"-.01em" }}>
              Business
            </h2>
            <h2 style={{ fontSize:"clamp(2.4rem,5.5vw,4.4rem)",fontWeight:400,lineHeight:1.06 }}>
              <em style={{ fontStyle:"italic",color:"#c9a84c",textDecoration:"underline",textDecorationColor:"rgba(201,168,76,.35)",textUnderlineOffset:"7px",textDecorationThickness:"2px" }}>Consulting</em>
            </h2>
          </div>

          {/* divider */}
          <div className={`au d2 ${inView ? "s" : ""}`} style={{ margin:"1.5rem 0" }}>
            <span className="gbar" style={{ width:"48px" }} />
          </div>

          {/* body */}
          <p className={`au d2 ${inView ? "s" : ""}`} style={{ fontFamily:"'Montserrat',sans-serif",fontSize:".875rem",lineHeight:1.9,color:"#7a6a4a",fontWeight:300,maxWidth:"500px",marginBottom:"2rem" }}>
            In the ever-evolving landscape of business, challenges and opportunities constantly arise. At Crownix BPO, we offer consulting services to help organizations navigate these complexities. Our seasoned consultants provide expert industry insights and strategic guidance to drive your business forward.
          </p>

          {/* features */}
          <div className={`au d3 ${inView ? "s" : ""}`} style={{ marginBottom:"2.5rem",maxWidth:"500px" }}>
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
          <div className={`au d4 ${inView ? "s" : ""}`} style={{ display:"flex",gap:".85rem",flexWrap:"wrap" }}>
            <button className="btn-p">Book a Consultation</button>
            <button className="btn-s">Learn More</button>
          </div>
        </div>

      </section>
    </>
  );
}