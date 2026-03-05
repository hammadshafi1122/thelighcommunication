import { useEffect, useRef, useState } from "react";

const THEME_GOLD = "#b8832c";
const THEME_GOLD_FILL = "rgba(184, 131, 44, 0.2)";

const campaigns = [
  {
    id: 1,
    label: "Medicare",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-med"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <rect x="14" y="14" width="36" height="36" rx="8" filter="url(#neon-med)" />
        <path d="M32 22v20M22 32h20" strokeWidth="3.5" strokeLinecap="round" filter="url(#neon-med)" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Insurance",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-ins"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <path d="M32 10L14 18v14c0 11 8 20 18 22 10-2 18-11 18-22V18L32 10z" filter="url(#neon-ins)" />
        <path d="M24 32l6 6 12-12" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-ins)" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Energy",
    row: "top",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-ener"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <circle cx="32" cy="32" r="20" filter="url(#neon-ener)" />
        <path d="M36 14L26 32h8l-8 18 14-18h-8L36 14z" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-ener)" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "MVA",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-mva"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <rect x="8" y="24" width="48" height="22" rx="6" filter="url(#neon-mva)" />
        <path d="M16 24l6-10h20l6 10" strokeLinecap="round" filter="url(#neon-mva)" />
        <circle cx="20" cy="48" r="4" strokeWidth="2" filter="url(#neon-mva)" />
        <circle cx="44" cy="48" r="4" strokeWidth="2" filter="url(#neon-mva)" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "ACA",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-aca"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <path d="M32 14c-8 0-14 6-14 13 0 9 14 24 14 24s14-15 14-24c0-7-6-13-14-13z" filter="url(#neon-aca)" />
        <path d="M20 32h5l3-6 5 12 3-6h6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-aca)" />
      </svg>
    ),
  },
  {
    id: 6,
    label: "Home Services",
    row: "bottom",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-20 h-20 md:w-24 md:h-24" stroke={THEME_GOLD} strokeWidth={2.5} fill={THEME_GOLD_FILL}>
        <defs><filter id="neon-home"><feGaussianBlur stdDeviation="1.5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <path d="M12 30L32 12l20 18v24H12V30z" filter="url(#neon-home)" />
        <path d="M26 50V36h12v14" strokeLinecap="round" strokeLinejoin="round" filter="url(#neon-home)" />
      </svg>
    ),
  },
];

const CampaignCard = ({ campaign, opacity }) => (
  <div
    style={{
      opacity,
      transition: "opacity 0.2s ease-out, box-shadow 0.25s ease, border-color 0.25s ease",
      background: "rgba(33, 33, 33, 0.9)",
      border: "1px solid rgba(184, 131, 44, 0.2)",
      borderRadius: "20px",
      padding: "40px 24px 36px",
      minHeight: "220px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      cursor: "default",
      boxShadow: "0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "rgba(184, 131, 44, 0.5)";
      e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(184, 131, 44, 0.2), 0 0 0 1px rgba(255,255,255,0.06) inset";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "rgba(184, 131, 44, 0.2)";
      e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04) inset";
    }}
  >
    {/* Icon glow spill */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "80%",
        height: "60%",
        transform: "translate(-50%, -55%)",
        background: "radial-gradient(ellipse at center, rgba(184, 131, 44, 0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }}
    />
    {/* Frosted edge highlight */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: 20,
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    />

    <div style={{ position: "relative", zIndex: 1, marginBottom: 24, filter: "drop-shadow(0 0 12px rgba(184, 131, 44, 0.3))" }}>
      {campaign.icon}
    </div>

    <h3
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
        color: "#f5f0e8",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 1,
        lineHeight: 1.2,
        textAlign: "center",
      }}
    >
      {campaign.label}
    </h3>
  </div>
);

const ROW_OFFSET_PX = 140; // max padding (px) at start/end

export default function CampaignSection() {
  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 = section entering, 0.5 = center, 1 = center passed
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const sectionH = ref.current.offsetHeight;
      // progress 0 when section top at viewport bottom, 0.5 when section center at viewport center, 1 when section bottom at viewport top
      const progress = (winH - rect.top) / (winH + sectionH);
      const clamped = Math.max(0, Math.min(1, progress));
      setScrollProgress(clamped);
      setOpacity(clamped < 0.15 ? clamped / 0.15 : 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Row 1: progress 0 = shifted right, 0.5 = center, 1 = shifted left (cards keep width; overflow clipped)
  const row1TranslateX = ROW_OFFSET_PX * (1 - 2 * scrollProgress);
  // Row 2: progress 0 = shifted left, 0.5 = center, 1 = shifted right
  const row2TranslateX = ROW_OFFSET_PX * (2 * scrollProgress - 1);

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

      <div className="relative z-10 overflow-hidden mb-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{
            transform: `translateX(${row1TranslateX}px)`,
            transition: "transform 0.25s ease-out",
            minWidth: "100%",
          }}
        >
          {campaigns.slice(0, 3).map((c) => (
            <CampaignCard key={c.id} campaign={c} opacity={opacity} />
          ))}
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{
            transform: `translateX(${row2TranslateX}px)`,
            transition: "transform 0.25s ease-out",
            minWidth: "100%",
          }}
        >
          {campaigns.slice(3, 6).map((c) => (
            <CampaignCard key={c.id} campaign={c} opacity={opacity} />
          ))}
        </div>
      </div>

      <div
        className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.25), transparent)" }}
      />
    </section>
  );
}
