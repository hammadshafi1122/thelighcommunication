import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Branches Nationwide", value: 2, suffix: "+", prefix: "" },
  { label: "Employees", value: 150, suffix: "+", prefix: "" },
  { label: "Years of Experience", value: 6, suffix: "Y+", prefix: "" },
  { label: "Client Satisfaction", value: 99, suffix: "%", prefix: "" },
];

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

const COL_OFFSET_PX = 48; // vertical offset for column animation (above/below)

function StatCard({ label, value, suffix, prefix, started, index }) {
  const count = useCountUp(value, 1800 + index * 200, started);

  const formatted =
    value >= 1000
      ? count.toLocaleString()
      : count;

  return (
    <div
      className="relative rounded-2xl p-8 flex flex-col justify-between overflow-hidden group transition-all duration-300"
      style={{
        background: "linear-gradient(145deg, #2a2a2a 0%, #1c1c1c 60%, #111111 100%)",
        border: "1px solid rgba(184,131,44,0.25)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(184,131,44,0.1)",
        minHeight: "200px",
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(184,131,44,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Gold corner accent line */}
      <div
        className="absolute top-0 left-0 w-12 h-0.5 rounded-full"
        style={{ background: "linear-gradient(90deg, #b8832c, transparent)" }}
      />
      <div
        className="absolute top-0 left-0 w-0.5 h-12 rounded-full"
        style={{ background: "linear-gradient(180deg, #b8832c, transparent)" }}
      />

      {/* Label */}
      <p
        className="text-base font-semibold tracking-widest uppercase"
        style={{
          color: "#b8832c",
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </p>

      {/* Number */}
      <div className="mt-4">
        <span
          className="font-black leading-none transition-all duration-300"
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(2.75rem, 5.5vw, 4rem)",
            color: "#ffffff",
            textShadow: "0 0 30px rgba(184,131,44,0.3)",
          }}
        >
          {prefix}{formatted}{suffix}
        </span>
      </div>

      {/* Bottom gold shimmer bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.4), transparent)",
        }}
      />
    </div>
  );
}

export default function ImpactNumbers() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      const sectionH = sectionRef.current.offsetHeight;
      const progress = (winH - rect.top) / (winH + sectionH);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cards 0,2 start above; 1,3 start below. From progress 0→0.5 they align to center; 0.5→1 stay centered.
  const offsetAmount = scrollProgress <= 0.5 ? (1 - 2 * scrollProgress) * COL_OFFSET_PX : 0;
  const getTranslateY = (i) => (i % 2 === 0 ? -offsetAmount : offsetAmount);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 80% 50%, rgba(184,131,44,0.06) 0%, transparent 60%), radial-gradient(ellipse at 10% 30%, rgba(68,68,68,0.3) 0%, transparent 50%), #0f0f0f",
        fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700;900&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .stat-anim {
          opacity: 0;
        }
        .stat-anim.visible {
          animation: fadeUp 0.6s ease forwards;
        }
        .stat-anim:nth-child(1) { animation-delay: 0.1s; }
        .stat-anim:nth-child(2) { animation-delay: 0.2s; }
        .stat-anim:nth-child(3) { animation-delay: 0.3s; }
        .stat-anim:nth-child(4) { animation-delay: 0.4s; }

        .gold-shimmer {
          background: linear-gradient(90deg, #b8832c 0%, #e8c060 40%, #b8832c 60%, #8a5e1a 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(184,131,44,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,131,44,0.04) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* NUMBER watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(184,131,44,0.1)",
          letterSpacing: "0.1em",
          fontFamily: "'Rajdhani', sans-serif",
          marginTop: "-40px",
        }}
      >
        NUMBER
      </div>

      {/* Header */}
      <div
        className="relative z-10 text-center mb-12"
        style={{
          opacity: visible ? 1 : 0,
          animation: visible ? "fadeUp 0.5s ease forwards" : "none",
        }}
      >
        <p
          className="text-lg font-semibold mb-1"
          style={{ color: "#b8832c", letterSpacing: "0.08em" }}
        >
          Lets Discover
        </p>
        <h2
          className="text-4xl md:text-5xl font-black relative inline-block"
          style={{ color: "#ffffff", fontFamily: "'Rajdhani', sans-serif" }}
        >
          Our Impact In{" "}
          <span className="gold-shimmer">Numbers</span>

          {/* Underline accent */}
          <span
            className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #b8832c 30%, #e8c060 50%, #b8832c 70%, transparent)",
            }}
          />
          {/* Glow under underline */}
          <span
            className="absolute -bottom-3 left-1/4 right-1/4 h-1 rounded-full blur-sm"
            style={{ background: "rgba(184,131,44,0.4)" }}
          />
        </h2>
      </div>

      {/* Stats Grid - full width, column scroll animation */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              transform: `translateY(${getTranslateY(i)}px)`,
              transition: "transform 0.35s ease-out",
            }}
          >
            <div className={`stat-anim ${visible ? "visible" : ""}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <StatCard {...stat} index={i} started={started} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative line */}
      <div
        className="relative z-10 mx-auto mt-12 h-px max-w-2xl"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.3), transparent)",
        }}
      />
    </section>
  );
}
