import { useEffect, useRef, useState } from "react";

const campaigns = [
  {
    id: 1,
    label: "Medicare",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <rect x="8" y="8" width="48" height="48" rx="10" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M32 20v24M20 32h24" stroke="#b8832c" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="8" y="8" width="48" height="48" rx="10" stroke="#e8c980" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Insurance",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <path d="M32 8L12 17v15c0 12 9 22 20 24 11-2 20-12 20-24V17L32 8z" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M22 32l7 7 13-13" stroke="#e8c980" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 8L12 17v15c0 12 9 22 20 24 11-2 20-12 20-24V17L32 8z" stroke="#e8c980" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Energy",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <circle cx="32" cy="32" r="22" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M36 12l-10 20h10l-10 20" stroke="#e8c980" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="22" stroke="#e8c980" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "MVA",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <rect x="6" y="22" width="52" height="24" rx="8" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M14 22l6-12h24l6 12" stroke="#b8832c" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="46" r="5" stroke="#e8c980" strokeWidth="2" fill="rgba(184,131,44,0.12)" />
        <circle cx="46" cy="46" r="5" stroke="#e8c980" strokeWidth="2" fill="rgba(184,131,44,0.12)" />
        <path d="M10 34h44" stroke="#e8c980" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "ACA",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <path d="M32 12c-9 0-16 7-16 15 0 10 16 26 16 26S48 37 48 27c0-8-7-15-16-15z" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M18 32h6l4-8 6 14 4-8h8" stroke="#e8c980" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Home Services",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 md:w-20 md:h-20">
        <path d="M10 28L32 10l22 18v26H10V28z" stroke="#b8832c" strokeWidth="2.5" fill="rgba(184,131,44,0.08)" />
        <path d="M24 54V38h16v16" stroke="#e8c980" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 28L32 10l22 18" stroke="#e8c980" strokeWidth="0.5" opacity="0.4" />
      </svg>
    ),
  },
];

const CampaignCard = ({ campaign, offset, opacity }) => (
  <div
    style={{
      transform: `translateX(${offset}px)`,
      opacity,
      transition: "transform 0.1s linear, opacity 0.1s linear",
      background: "#1e1e1e",
      border: "1px solid rgba(184,131,44,0.2)",
      borderRadius: "16px",
      padding: "28px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
      cursor: "default",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(184,131,44,0.55)";
      e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(184,131,44,0.12)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(184,131,44,0.2)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    {/* Corner accent */}
    <div
      style={{
        position: "absolute", top: 0, right: 0, width: 56, height: 56,
        background: "linear-gradient(225deg, rgba(184,131,44,0.15) 0%, transparent 65%)",
        borderTopRightRadius: 16,
        pointerEvents: "none",
      }}
    />
    {/* Subtle inner glow */}
    <div
      style={{
        position: "absolute", inset: 0, borderRadius: 16,
        background: "linear-gradient(135deg, rgba(184,131,44,0.05) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    />

    <h3
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
        color: "#f5efe6",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 1,
        lineHeight: 1.1,
      }}
    >
      {campaign.label}
    </h3>

    <div style={{ position: "relative", zIndex: 1, flexShrink: 0, marginLeft: 12 }}>
      {campaign.icon}
    </div>
  </div>
);

export default function CampaignSection() {
  const ref = useRef(null);
  const [topOffset, setTopOffset] = useState(80);
  const [bottomOffset, setBottomOffset] = useState(-80);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const sectionH = ref.current.offsetHeight;

      const progress = 1 - (rect.bottom / (winH + sectionH));
      const clamped = Math.max(0, Math.min(1, progress));

      let slideProgress;
      if (clamped < 0.25) {
        slideProgress = clamped / 0.25; // 0→1
      } else if (clamped < 0.75) {
        slideProgress = 1;
      } else {
        slideProgress = 1 - (clamped - 0.75) / 0.25; // 1→0
      }

      const maxShift = 90;
     
      if (clamped < 0.5) {
        setTopOffset(maxShift * (1 - slideProgress));
        setBottomOffset(-maxShift * (1 - slideProgress));
      } else {
        // exiting: top goes further left, bottom goes further right
        setTopOffset(-maxShift * (1 - slideProgress));
        setBottomOffset(maxShift * (1 - slideProgress));
      }
      setOpacity(Math.min(1, slideProgress * 2));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden py-16 md:py-24 px-5 sm:px-8 md:px-12 xl:px-20"
      style={{ background: "#111111", fontFamily: "'Barlow Condensed', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .gold-shimmer {
          background: linear-gradient(90deg,#b8832c 0%,#f0c84a 40%,#b8832c 65%,#8a5e1a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontSize: "clamp(60px, 12vw, 140px)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(184,131,44,0.07)",
          letterSpacing: "0.15em",
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        CAMPAIGNS
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.25), transparent)" }}
      />

      <div className="relative z-10 mb-10 md:mb-14">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-px w-8" style={{ background: "#b8832c" }} />
          <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#b8832c" }}>
            What We Run
          </span>
        </div>
        <h2
          className="font-black uppercase leading-[0.92] mb-3"
          style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", letterSpacing: "-0.01em" }}
        >
          <span className="gold-shimmer">Our </span>
          <span style={{ color: "#ffffff" }}>Campaigns</span>
        </h2>
        <div
          className="h-0.5 rounded-full mb-4"
          style={{ width: "60px", background: "linear-gradient(90deg,#b8832c,transparent)" }}
        />
        <p
          style={{
            color: "#888",
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: "0.9rem",
            maxWidth: "520px",
            lineHeight: 1.65,
          }}
        >
          We specialize in running targeted campaigns tailored to meet the specific
          needs of businesses across a wide range of industries.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {campaigns.slice(0, 3).map((c) => (
          <CampaignCard key={c.id} campaign={c} offset={topOffset} opacity={opacity} />
        ))}
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.slice(3, 6).map((c) => (
          <CampaignCard key={c.id} campaign={c} offset={bottomOffset} opacity={opacity} />
        ))}
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.25), transparent)" }}
      />
    </section>
  );
}
