import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Contact Center",
    description: "Efficient, reliable contact center services. Every call handled with care and precision.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.05 11.05 0 005 5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2H17C8.163 21 3 15.837 3 7V5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "IT Services",
    description: "Smart, scalable IT services. Powering your business with tech that works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M9 8l2 2-2 2M13 12h2" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Lead Generation",
    description: "Targeted, effective lead generation. Driving growth with quality prospects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Business Consulting",
    description: "Expert business consulting. Strategic insights for smarter decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#333333",
        borderColor: hovered ? "rgba(184,131,44,0.55)" : "rgba(184,131,44,0.18)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(184,131,44,0.15)" : "none",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      className="rounded-2xl border p-7 relative overflow-hidden cursor-default"
    >
      {/* Corner gradient */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl pointer-events-none"
        style={{ background: "linear-gradient(225deg, rgba(184,131,44,0.22) 0%, transparent 65%)" }}
      />

      {/* Top-left gradient on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(184,131,44,0.08) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
        style={{ backgroundColor: "rgba(184,131,44,0.12)", color: "#b8832c" }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-base mb-2 relative z-10 tracking-wide"
        style={{ color: "#f5efe6", fontFamily: "'Barlow', sans-serif" }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed relative z-10"
        style={{ color: "rgba(245,239,230,0.58)", fontWeight: 300 }}
      >
        {service.description}
      </p>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      {/* Decorative top & bottom lines */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          top: "72px",
          background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.28), transparent)",
        }}
      />
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          bottom: "72px",
          background: "linear-gradient(90deg, transparent, rgba(184,131,44,0.28), transparent)",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{
          fontSize: "clamp(80px, 14vw, 160px)",
          fontWeight: 900,
          fontFamily: "Georgia, serif",
          color: "transparent",
          WebkitTextStroke: "1px rgba(184,131,44,0.1)",
          letterSpacing: "0.15em",
          whiteSpace: "nowrap",
        }}
      >
        SERVICES
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#f5efe6", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Elevating Excellence
          </h2>
          <div
            className="mx-auto mt-4 rounded-full"
            style={{
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, #b8832c, #e8c980)",
            }}
          />
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom row — 1 card + image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Business Consulting card */}
          <div className="md:col-span-1">
            <ServiceCard service={services[3]} />
          </div>

          {/* Office image */}
          <div
            className="md:col-span-2 md:h-16 rounded-2xl overflow-hidden relative"
            style={{
              minHeight: "220px",
              border: "1px solid rgba(184,131,44,0.18)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
              alt="Modern office"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.72) sepia(0.18)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(184,131,44,0.22) 0%, rgba(30,30,30,0.25) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
