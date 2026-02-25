import { useState } from "react";

export default function CrownixThemePreview() {
  const [active, setActive] = useState("Home");
  const nav = ["Home", "Services", "About", "Contact"];

  return (
    <div style={{ background: "#212121", color: "#f5f0e8", fontFamily: "Jost, sans-serif", minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .btn-primary {
          background: #c8953a; color: #1a1a1a;
          padding: 12px 32px; border-radius: 4px;
          font-family: Jost; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          font-size: 13px; cursor: pointer; border: none;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #d4a856; }

        .btn-outline {
          background: transparent; color: #c8953a;
          border: 1px solid #c8953a;
          padding: 12px 32px; border-radius: 4px;
          font-family: Jost; font-weight: 500;
          letter-spacing: 0.15em; text-transform: uppercase;
          font-size: 13px; cursor: pointer;
          transition: background 0.2s;
        }
        .btn-outline:hover { background: rgba(200,149,58,0.1); }

        .card {
          background: #2a2a2a;
          border: 1px solid rgba(200,149,58,0.2);
          border-radius: 12px; padding: 28px;
          transition: box-shadow 0.3s, border-color 0.3s;
        }
        .card:hover {
          border-color: #c8953a;
          box-shadow: 0 0 24px rgba(200,149,58,0.2);
        }

        .badge {
          background: rgba(200,149,58,0.12);
          color: #c8953a;
          border: 1px solid rgba(200,149,58,0.3);
          border-radius: 999px; padding: 4px 14px;
          font-size: 11px; letter-spacing: 0.18em;
          text-transform: uppercase; font-family: Jost;
          display: inline-block;
        }

        .input-field {
          background: #2a2a2a;
          border: 1px solid rgba(200,149,58,0.2);
          color: #f5f0e8; border-radius: 6px;
          padding: 12px 16px; font-family: Jost;
          width: 100%; outline: none; font-size: 14px;
          transition: border-color 0.2s;
        }
        .input-field:focus { border-color: #c8953a; }
        .input-field::placeholder { color: #665540; }

        .swatch {
          width: 64px; height: 64px;
          border-radius: 10px;
          border: 1px solid rgba(200,149,58,0.2);
          margin: 0 auto 8px;
        }
      `}</style>