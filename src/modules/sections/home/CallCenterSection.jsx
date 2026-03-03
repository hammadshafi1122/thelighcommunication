import { useState, useEffect } from "react";

const features = [
  { id: "01", title: "Daily, Weekly & Monthly Bonuses", icon: "💰" },
  { id: "02", title: "Skill Development Initiatives", icon: "📈" },
  { id: "03", title: "Collaborative Culture", icon: "🤝" },
  { id: "04", title: "Performance-Based Promotion", icon: "🏆" },
  { id: "05", title: "Dynamic Work Environment", icon: "⚡" },
  { id: "06", title: "Inclusive Environment", icon: "🌐" },
];

export default function CallCenterSection() {
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
        fontFamily: "'Georgia', serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Gold corner accents */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 80, height: 80, borderTop: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C", opacity: 0.5 }} />
      <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, borderTop: "2px solid #C9A84C", borderRight: "2px solid #C9A84C", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 80, height: 80, borderBottom: "2px solid #C9A84C", borderLeft: "2px solid #C9A84C", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: 0, right: 0, width: 80, height: 80, borderBottom: "2px solid #C9A84C", borderRight: "2px solid #C9A84C", opacity: 0.5 }} />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, width: "100%" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Overline */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "1rem" }}>
            <div style={{ height: 1, width: 60, background: "linear-gradient(to right, transparent, #C9A84C)" }} />
            <span style={{ color: "#C9A84C", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "'Arial', sans-serif" }}>
              Islamabad's Premier
            </span>
            <div style={{ height: 1, width: 60, background: "linear-gradient(to left, transparent, #C9A84C)" }} />
          </div>

          <h1
            style={{
              color: "#F5E6C8",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              textShadow: "0 0 60px rgba(201,168,76,0.2)",
              letterSpacing: "-0.01em",
            }}
          >
            The Best Call Center
          </h1>
          <h1
            style={{
              color: "#C9A84C",
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.2,
              margin: "0 0 1.2rem",
              textDecoration: "underline",
              textDecorationColor: "rgba(201,168,76,0.4)",
              textUnderlineOffset: "6px",
            }}
          >
            For A Reason!
          </h1>
          <p style={{ color: "#8a7a5a", fontSize: "1rem", margin: 0, fontFamily: "'Arial', sans-serif", letterSpacing: "0.05em" }}>
            Where excellence meets opportunity
          </p>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features.slice(0, 3).map((f, i) => (
              <FeatureCard
                key={f.id}
                feature={f}
                delay={i * 120}
                visible={visible}
                isHovered={hoveredId === f.id}
                onHover={setHoveredId}
                align="right"
              />
            ))}
          </div>

          {/* Center visual */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 0.4s",
            }}
          >
            {/* Badge */}
            <div
              style={{
                background: "linear-gradient(135deg, #C9A84C, #8B6914)",
                borderRadius: "50%",
                width: 160,
                height: 160,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 50px rgba(201,168,76,0.3), 0 0 100px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                border: "1px solid rgba(201,168,76,0.5)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "1px dashed rgba(201,168,76,0.15)",
                }}
              />
              <span style={{ fontSize: "2.5rem" }}>🎧</span>
              <span
                style={{
                  color: "#1a1a1a",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  fontFamily: "'Arial', sans-serif",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                THE BEST
              </span>
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom, #C9A84C, transparent)",
                opacity: 0.4,
              }}
            />

            <div
              style={{
                color: "#C9A84C",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontFamily: "'Arial', sans-serif",
                opacity: 0.7,
              }}
            >
              6 Pillars
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {features.slice(3, 6).map((f, i) => (
              <FeatureCard
                key={f.id}
                feature={f}
                delay={(i + 3) * 120}
                visible={visible}
                isHovered={hoveredId === f.id}
                onHover={setHoveredId}
                align="left"
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.9s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: "1.5rem" }}>
            <div style={{ height: 1, flex: 1, maxWidth: 200, background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3))" }} />
            <div style={{ width: 6, height: 6, background: "#C9A84C", transform: "rotate(45deg)", opacity: 0.6 }} />
            <div style={{ height: 1, flex: 1, maxWidth: 200, background: "linear-gradient(to left, transparent, rgba(201,168,76,0.3))" }} />
          </div>
          <button
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)",
              color: "#1a1a1a",
              border: "none",
              padding: "0.9rem 2.8rem",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "'Arial', sans-serif",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              boxShadow: "0 4px 24px rgba(201,168,76,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => {
              e.target.style.boxShadow = "0 6px 36px rgba(201,168,76,0.5)";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              e.target.style.boxShadow = "0 4px 24px rgba(201,168,76,0.3)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Join Our Team Today
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function FeatureCard({ feature, delay, visible, isHovered, onHover, align }) {
  return (
    <div
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        display: "flex",
        flexDirection: align === "right" ? "row-reverse" : "row",
        alignItems: "center",
        gap: "1rem",
        background: isHovered
          ? "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${isHovered ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.12)"}`,
        padding: "1rem 1.2rem",
        cursor: "default",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateX(0)"
          : align === "right"
          ? "translateX(-30px)"
          : "translateX(30px)",
        transitionDelay: `${delay}ms`,
        backdropFilter: "blur(4px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hover shimmer */}
      {isHovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.06) 50%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Number badge */}
      <div
        style={{
          minWidth: 44,
          height: 44,
          background: isHovered
            ? "linear-gradient(135deg, #C9A84C, #8B6914)"
            : "rgba(201,168,76,0.08)",
          border: `1px solid ${isHovered ? "transparent" : "rgba(201,168,76,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: isHovered ? "#1a1a1a" : "#C9A84C",
          fontFamily: "'Arial', sans-serif",
          letterSpacing: "0.05em",
          transition: "all 0.3s ease",
          flexShrink: 0,
        }}
      >
        {feature.id}
      </div>

      {/* Text */}
      <div style={{ flex: 1, textAlign: align === "right" ? "right" : "left" }}>
        <p
          style={{
            color: isHovered ? "#F5E6C8" : "#a8997a",
            margin: 0,
            fontSize: "0.88rem",
            fontWeight: 600,
            lineHeight: 1.3,
            fontFamily: "'Arial', sans-serif",
            transition: "color 0.3s ease",
            letterSpacing: "0.01em",
          }}
        >
          {feature.title}
        </p>
      </div>
    </div>
  );
}
