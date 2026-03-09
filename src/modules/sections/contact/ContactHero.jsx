import { useState, useEffect } from "react";
import { Mail, Send, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const OWNER_EMAIL_1 = "hr@crownixbpo.com";
const OWNER_EMAIL_2 = "Info@crownixbpo.com";

const inputBase =
  "w-full bg-white/5 border border-[#D4AF37]/20 rounded-xl text-[#F5ECD7] placeholder-[#6B6B6B] px-4 py-3 text-sm font-light outline-none transition-all duration-300 focus:border-[#D4AF37]/60 resize-none";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Jost:wght@300;400;500&display=swap');
        .contact-section * { font-family: 'Jost', sans-serif; }
        .contact-heading { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shimmer { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
        .fade-up-1 { animation: fadeUp 0.7s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity:0; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s ease forwards; opacity:0; }
        .email-card:hover .email-arrow { transform: translateX(4px); }
        .email-card:hover { border-color: rgba(212,175,55,0.5) !important; background: rgba(212,175,55,0.07) !important; }
        .submit-btn:hover:not(:disabled) { box-shadow: 0 8px 32px rgba(212,175,55,0.35); transform: translateY(-1px); }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .gold-orb { animation: shimmer 4s ease-in-out infinite; }
      `}</style>

      <section
        className="contact-section relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #141414 0%, #1E1E1E 40%, #191919 70%, #141414 100%)",
          padding: "100px 24px 120px",
        }}
      >
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="gold-orb absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)" }} />
          <div className="gold-orb absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)", animationDelay: "2s" }} />
          <div className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(rgba(212,175,55,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* HEADER */}
          <div className={`text-center mb-20 ${visible ? "fade-up-1" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #D4AF37)" }} />
              <Sparkles size={14} style={{ color: "#D4AF37" }} />
              <span className="text-xs tracking-[0.35em] uppercase" style={{ color: "#D4AF37" }}>Contact</span>
              <Sparkles size={14} style={{ color: "#D4AF37" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #D4AF37, transparent)" }} />
            </div>
            <h2 className="contact-heading text-5xl md:text-6xl font-normal leading-tight mb-5" style={{ color: "#F5ECD7" }}>
              Let's <em style={{ color: "#D4AF37" }}>Talk</em>
            </h2>
            <p className="text-base font-light max-w-md mx-auto leading-relaxed" style={{ color: "#888" }}>
              Choose how you'd like to reach us — click an email to open your inbox, or send a message directly from here.
            </p>
          </div>

          {/* EMAIL CARDS */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto ${visible ? "fade-up-2" : "opacity-0"}`}>
            {[
              { label: "General Enquiries", email: OWNER_EMAIL_1, subject: "General Enquiry", desc: "For project discussions & partnerships" },
              { label: "Support & Help", email: OWNER_EMAIL_2, subject: "Support Request", desc: "For technical help & after-sales" },
            ].map(({ label, email, subject, desc }) => (
              <a  
                key={email}
                href="mailto:owner@example.com"
                className="email-card group relative block rounded-2xl p-6 transition-all duration-300 cursor-pointer no-underline"
                style={{
                  background: "rgba(212,175,55,0.04)",
                  border: "1px solid rgba(212,175,55,0.18)",
                  textDecoration: "none",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.25)" }}>
                    <Mail size={18} style={{ color: "#D4AF37" }} />
                  </div>
                  <ArrowRight
                    size={16}
                    className="email-arrow transition-transform duration-300 mt-1"
                    style={{ color: "#D4AF37" }}
                  />
                </div>
                <p className="text-xs tracking-[0.2em] uppercase mb-1 font-medium" style={{ color: "#D4AF37" }}>{label}</p>
                <p className="text-base font-light mb-2 break-all" style={{ color: "#F5ECD7" }}>{email}</p>
                <p className="text-xs font-light" style={{ color: "#666" }}>{desc}</p>
                <p className="text-xs mt-3" style={{ color: "rgba(212,175,55,0.6)" }}>↗ Opens your email client</p>
              </a>
            ))}
          </div>

          {/* DIVIDER */}
          <div className={`flex items-center gap-4 max-w-2xl mx-auto mb-16 ${visible ? "fade-up-2" : "opacity-0"}`}>
            <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.12)" }} />
            <span className="text-xs tracking-[0.25em] uppercase px-2" style={{ color: "#555" }}>or send a message</span>
            <div className="flex-1 h-px" style={{ background: "rgba(212,175,55,0.12)" }} />
          </div>

          {/* CONTACT FORM */}
          <div className={`max-w-2xl mx-auto ${visible ? "fade-up-3" : "opacity-0"}`}>
            <div
              className="rounded-3xl p-8 md:p-12"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}>
                    <CheckCircle size={36} style={{ color: "#D4AF37" }} />
                  </div>
                  <h3 className="contact-heading text-3xl font-normal mb-3" style={{ color: "#F5ECD7" }}>
                    Message Received
                  </h3>
                  <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "#888" }}>
                    Thank you for reaching out. We'll respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                    style={{ color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)", background: "transparent", cursor: "pointer" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="contact-heading text-2xl font-normal mb-1" style={{ color: "#F5ECD7" }}>
                      Send a Message
                    </h3>
                    <p className="text-sm font-light" style={{ color: "#666" }}>
                      No email app needed — we'll receive it directly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#888" }}>
                          Full Name <span style={{ color: "#D4AF37" }}>*</span>
                        </label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Noman Chaudhary" required className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#888" }}>
                          Your Email <span style={{ color: "#D4AF37" }}>*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="nomanchaudhary902@email.com" required className={inputBase}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#888" }}>
                        Subject
                      </label>
                      <input
                        type="text" name="subject" value={form.subject} onChange={handleChange}
                        placeholder="What's this about?" className={inputBase}
                      />
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "#888" }}>
                        Message <span style={{ color: "#D4AF37" }}>*</span>
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..." required rows={5}
                        className={inputBase}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                      <button
                        type="submit" disabled={sending}
                        className="submit-btn flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-sm tracking-[0.12em] uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          background: sending ? "rgba(212,175,55,0.3)" : "linear-gradient(135deg, #D4AF37 0%, #C9A227 50%, #B8962E 100%)",
                          color: "#141414",
                          boxShadow: sending ? "none" : "0 4px 20px rgba(212,175,55,0.2)",
                          cursor: sending ? "not-allowed" : "pointer",
                          border: "none",
                        }}
                      >
                        {sending ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#141414]/30 border-t-[#141414] rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-xs font-light" style={{ color: "#555" }}>
                        We typically reply within 24–48 hrs
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}