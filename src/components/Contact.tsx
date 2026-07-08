"use client";
import { motion } from "framer-motion";
import { AnimatedInput } from "./AnimatedInput";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { useState } from "react";
import { Send, CheckCircle, XCircle, Mail, Github, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Email", href: "mailto:devkd843@gmail.com", icon: <Mail size={16} /> },
  { label: "GitHub", href: "https://github.com/kdsecdev", icon: <Github size={16} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/caleb-botchway-3b5aa7265", icon: <Linkedin size={16} /> },
  { label: "Twitter / X", href: "https://x.com/devkd999", icon: <Twitter size={16} /> },
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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-center mb-3 sm:mb-4 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-center text-text-secondary mb-10 sm:mb-16 text-base sm:text-lg">
          Got a project in mind? Let&apos;s build something great together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">
                Let&apos;s connect
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                I&apos;m open to freelance work, collaborations, and interesting
                projects. Don&apos;t be shy — even just a &quot;hello&quot; is welcome.
              </p>
            </div>

            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:border-accent-primary/50 hover:bg-accent-primary/5 transition-all group"
                >
                  <span className="text-accent-primary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-accent-primary/5 border border-accent-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="text-xs font-mono text-accent-primary uppercase tracking-widest">
                  Status
                </span>
              </div>
              <p className="text-white font-semibold text-sm">
                Available for new projects
              </p>
              <p className="text-text-secondary text-xs mt-1">
                Typical response time: 24-48 hours
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <Card className="lg:col-span-3">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <CheckCircle size={48} className="text-accent-primary" />
                <h3 className="text-2xl font-bold font-display text-white">
                  Message Sent!
                </h3>
                <p className="text-text-secondary max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 24-48 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
                  label="Your Message"
                  isTextarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                  >
                    <XCircle size={16} />
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
