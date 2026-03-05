import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar";
import BackgroundSlider from "../elements/BackgroundSlider";

const slides = [
  {
    tag: "YOU SHOULD BE WITH",
    headingLine1: { white: "CROWNIX ", gold: "BPO" },
    sub: "SCALING YOUR BUSINESS",
  },
  {
    tag: "YOU SHOULD BE WITH",
    headingLine1: { white: "CROWNIX ", gold: "BPO" },
    sub: "SCALING YOUR BUSINESS",
  },
  {
    tag: "YOU SHOULD BE WITH",
    headingLine1: { white: "CROWNIX ", gold: "BPO" },
    sub: "SCALING YOUR BUSINESS",
  },
];

const LINE_STAGGER = 350;
const LINES = 5;
const HOLD = 2000;
const FADE_OUT = 800;

function Header() {
  const [slide, setSlide] = useState(0);
  const [phase, setPhase] = useState("in");
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let timers = [];

    setPhase("in");
    setVisibleLines(0);

    for (let i = 1; i <= LINES; i++) {
      timers.push(setTimeout(() => setVisibleLines(i), i * LINE_STAGGER));
    }

    const holdStart = LINES * LINE_STAGGER;
    timers.push(setTimeout(() => setPhase("hold"), holdStart));

    const fadeStart = holdStart + HOLD;
    timers.push(setTimeout(() => setPhase("out"), fadeStart));

    timers.push(
      setTimeout(() => {
        setSlide((p) => (p + 1) % slides.length);
      }, fadeStart + FADE_OUT + 200)
    );

    return () => timers.forEach(clearTimeout);
  }, [slide]);

  const s = slides[slide];

  const lineStyle = (lineIndex) => {
    const isVisible = visibleLines >= lineIndex;
    const isFadingOut = phase === "out";
    return {
      opacity: isFadingOut ? 0 : isVisible ? 1 : 0,
      transform: isFadingOut
        ? "translateY(-10px)"
        : isVisible
        ? "translateY(0px)"
        : "translateY(24px)",
      transition: isFadingOut
        ? `opacity ${FADE_OUT}ms cubic-bezier(0.4,0,0.2,1), transform ${FADE_OUT}ms cubic-bezier(0.4,0,0.2,1)`
        : "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
    };
  };

  return (
    <header className="relative min-h-[100dvh] w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 h-full w-full -z-20">
        <BackgroundSlider />
      </div>

      <Navbar />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="relative h-full grid md:mt-44 mt-20 md:py-0 py-10 flex justify-center align-middle">
        <div className="max-w-7xl mx-6 px-6 md:mx-16 text-white">

          {/* Line 1 — Tag (unchanged, left-aligned) */}
          <div style={lineStyle(1)}>
            <p className="text-gold-500 font-semibold tracking-widest mb-4 md:mx-80">
              {s.tag}
            </p>
          </div>

          {/* Line 2 — Headline CROWNIX BPO — CENTERED */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center">
            <div style={lineStyle(2)}>
              {s.headingLine1.white}
              <span className="text-gold-500">{s.headingLine1.gold}</span>
            </div>

            {/* Line 3 — SCALING (centered) */}
            <div style={lineStyle(3)}>
              
            </div>
          </h1>

          {/* Line 4 — Sub (SCALING YOUR BUSINESS) — CENTERED */}
          <div style={lineStyle(4)}>
            <p className="mt-6 text-gray-300 text-center text-xl md:text-2xl font-semibold tracking-widest">
              {s.sub}
            </p>
          </div>

          {/* Line 5 — Buttons (unchanged) */}
          <div style={lineStyle(5)} className="mt-8 flex flex-col sm:flex-row gap-4 md:ml-64">
            <button className="bg-gold-500 hover:bg-gold-800 text-gold-100 font-semibold px-8 py-3 rounded-full transition duration-300">
              Apply Now
            </button>
            <button className="border-2 border-gold-600 text-gold-100 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-3 rounded-full transition duration-300">
              Services
            </button>
          </div>

        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-2xl hover:scale-110 transition duration-300">
        <FaWhatsapp />
      </div>

    </header>
  );
}

export default Header;
