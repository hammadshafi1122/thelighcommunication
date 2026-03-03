import { useState } from "react";

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
      </svg>
    ),
    title: "Contact Center",
    description: "Efficient, reliable contact center services. Every call handled with care and precision.",
    span: "col-span-1",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    title: "IT Services",
    description: "Smart, scalable IT services. Powering your business with tech that works.",
    span: "col-span-1",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Lead Generation",
    description: "Targeted, effective lead generation. Driving growth with quality prospects.",
    span: "col-span-1",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Business Consulting",
    description: "Expert business consulting. Strategic insights for smarter decisions.",
    span: "col-span-1",
    wide: true,
  },
];

const ServiceCard = ({ service, wide }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300"
      style={{
        background: hovered
          ? "linear-gradient(135deg, rgba(30,40,70,0.95) 0%, rgba(15,20,45,0.98) 100%)"
          : "linear-gradient(135deg, rgba(15,22,50,0.9) 0%, rgba(8,12,30,0.95) 100%)",
        border: hovered
          ? "1px solid rgba(80, 130, 255, 0.5)"
          : "1px solid rgba(50, 80, 180, 0.25)",
        boxShadow: hovered
          ? "0 0 30px rgba(60, 100, 255, 0.15), inset 0 0 20px rgba(60, 100, 255, 0.03)"
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Glow corner accent */}
      <div
        className="absolute top-0 left-0 w-20 h-20 rounded-tl-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at top left, rgba(60,100,255,0.12), transparent 70%)",
          opacity: hovered ? 1 : 0.5,
        }}
      />

      <div
        className="mb-4 transition-colors duration-300"
        style={{ color: hovered ? "#5b8fff" : "#3a65d8" }}
      >
        {service.icon}
      </div>

      <h3 className="font-bold text-white text-lg mb-2 tracking-wide">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#8a9bc0" }}>
        {service.description}
      </p>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background:  "radial-gradient(ellipse at 80% 50%, rgba(184,131,44,0.06) 0%, transparent 60%), radial-gradient(ellipse at 10% 30%, rgba(68,68,68,0.3) 0%, transparent 50%), #0f0f0f",
        fontFamily: "'Rajdhani', 'Exo 2', sans-serif",
      }}
    >
      {/* Import fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Exo+2:wght@300;400;600&display=swap');

        @keyframes floatBlob {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .service-card-anim {
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0;
        }
        .service-card-anim:nth-child(1) { animation-delay: 0.1s; }
        .service-card-anim:nth-child(2) { animation-delay: 0.2s; }
        .service-card-anim:nth-child(3) { animation-delay: 0.3s; }
        .service-card-anim:nth-child(4) { animation-delay: 0.4s; }
        .service-card-anim:nth-child(5) { animation-delay: 0.5s; }
      `}</style>

      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(40,80,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(40,80,200,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating blob top-left */}
      <div
        className="absolute top-6 left-16 w-10 h-10 rounded-full"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(184,131,44,0.06) 0%, transparent 60%), radial-gradient(ellipse at 10% 30%, rgba(68,68,68,0.3) 0%, transparent 50%), #0f0f0f",
          animation: "floatBlob 4s ease-in-out infinite",
          boxShadow: "0 0 20px rgba(184,131,44,0.06) ",
        }}
      />

      {/* SERVICES watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{
          fontSize: "clamp(60px, 12vw, 160px)",
          fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "1px rgba(50,90,200,0.12)",
          letterSpacing: "0.15em",
          fontFamily: "'Rajdhani', sans-serif",
          userSelect: "none",
        }}
      >
        SERVICES
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12" style={{ animation: "fadeSlideUp 0.5s ease forwards" }}>
        <h2
          className="text-4xl md:text-5xl font-bold text-white relative inline-block"
          style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: "0.02em" }}
        >
          Elevating Excellence
          <span
            className="absolute -bottom-1 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.06) , transparent)" }}
          />
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top row: 3 equal cards */}
        {services.slice(0, 3).map((service) => (
          <div key={service.id} className="service-card-anim">
            <ServiceCard service={service} />
          </div>
        ))}

        {/* Bottom row: Business Consulting (wide) + Office image */}
        <div className="service-card-anim md:col-span-2">
          <ServiceCard service={services[3]} wide />
        </div>

        <div
          className="service-card-anim rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(50, 80, 180, 0.25)",
            minHeight: "180px",
          }}
        >
          {/* Office placeholder image */}
          <div
            className="w-full h-full min-h-44 relative"
            style={{
              background: "linear-gradient(135deg, rgba(184,131,44,0.06) , rgba(184,131,44,0.06) )",
            }}
          >
            {/* Decorative office-like visual */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <svg viewBox="0 0 200 120" className="w-full h-full" fill="none">
                {/* Desk rows */}
                {[20, 50, 80].map((y, i) => (
                  <g key={i}>
                    <rect x="10" y={y} width="180" height="8" rx="2" fill="rgba(184,131,44,0.06) " opacity="0.6" />
                    {[20, 50, 80, 110, 140].map((x, j) => (
                      <rect key={j} x={x} y={y - 12} width="18" height="10" rx="1" fill="rgba(184,131,44,0.06) " />
                    ))}
                  </g>
                ))}
                {/* Ceiling lights */}
                {[40, 80, 120, 160].map((x, i) => (
                  <rect key={i} x={x} y="0" width="20" height="4" rx="1" fill="#4a80d0" opacity="0.5" />
                ))}
              </svg>
            </div>
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(5,10,30,0.2), rgba(5,10,30,0.6))",
              }}
            />
            <div className="absolute bottom-3 left-4 text-xs font-semibold tracking-widest uppercase" style={{ color: "#5b8fff", opacity: 0.8 }}>
              Our Operations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
