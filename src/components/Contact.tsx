"use client";
import { motion } from "framer-motion";
import { AnimatedInput } from "./AnimatedInput";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { useState } from "react";
import { Send, CheckCircle, XCircle, Mail, Phone, FileDown } from "lucide-react";

const quickLinks = [
  {
    label: "Email (cbotch5000@gmail.com)",
    href: "mailto:cbotch5000@gmail.com",
    icon: <Mail size={17} className="text-[#FFA043]" />,
  },
  {
    label: "WhatsApp / Call (+233 593 787 291)",
    href: "https://wa.me/233593787291",
    icon: <Phone size={17} className="text-[#FFA043]" />,
  },
  {
    label: "Download Official CV (PDF)",
    href: "/Caleb_Botchway_CV.pdf",
    download: true,
    icon: <FileDown size={17} className="text-[#FF6B00]" />,
  },
  {
    label: "GitHub Profile",
    href: "https://github.com/kdsecdev",
    icon: (
      <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current text-[#FFA043]" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn Network",
    href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#FFA043]" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.81a1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45 1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45Z"/>
      </svg>
    ),
  },
];

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3">
            Get In Touch
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-md mx-auto font-sans">
            Got a project, role, or collab in mind? Let&#39;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">
          {/* Left: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">
                Direct Channels
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                Open for contract engineering, full-time positions, and technical consultations.
              </p>
            </div>

            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={"download" in link && link.download ? "Caleb_Botchway_CV.pdf" : undefined}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#121212] border border-white/10 text-white/70 hover:text-white hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/8 transition-all group shadow-md"
                >
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium font-sans">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Status box with LCD telemetry */}
            <div className="p-4 rounded-xl bg-[#111111] border border-[#FF6B00]/25 shadow-[0_0_15px_rgba(255,107,0,0.1)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse shadow-[0_0_6px_#FF6B00]" />
                  <span className="text-xs text-white/70 uppercase tracking-widest font-sans">
                    Status
                  </span>
                </div>
                <span className="font-lcd text-[10px] text-white/40">Accra, GH</span>
              </div>
              <p className="text-white font-semibold text-sm font-sans">
                Open to new projects
              </p>
              <p className="text-xs text-white/50 mt-1 font-sans">
                Typically responds within 24 hours
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="lg:col-span-3 bg-[#101010]/95 border border-white/10 hover:border-[#FF6B00]/30 transition-colors shadow-2xl p-6 sm:p-8">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <CheckCircle size={48} className="text-[#FF6B00]" />
                <h3 className="text-2xl font-bold font-display text-white">
                  Message sent!
                </h3>
                <p className="text-white/60 max-w-xs font-sans text-sm">
                  Thanks for reaching out. I&#39;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/40 text-[#FFA043] text-sm hover:bg-[#FF6B00] hover:text-black transition-colors font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                <AnimatedInput
                  label="Your Name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <AnimatedInput
                  label="Your Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <AnimatedInput
                  label="Project Details or Message"
                  isTextarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm font-sans"
                  >
                    <XCircle size={16} />
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FF6B00] text-black font-bold hover:bg-[#FF7A00] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_30px_rgba(255,107,0,0.55)] disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </Card>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};
