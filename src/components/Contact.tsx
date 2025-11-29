"use client";
import { motion } from "framer-motion";
import { AnimatedInput } from "./AnimatedInput";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { useState } from "react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate success or failure
    if (Math.random() > 0.1) { // 90% success rate
      setSuccess(true);
      window.location.reload(); // Refresh the page on success
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <SectionWrapper id="contact">
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        Get In Touch
      </motion.h2>
      <Card className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <AnimatedInput label="Your Name" type="text" required />
          <AnimatedInput label="Your Email" type="email" required />
          <AnimatedInput label="Your Message" isTextarea required />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
          )}
        </form>

        <p className="text-center text-text-primary mt-8">
          Prefer direct email? Reach me at{" "}
          <a
            href="mailto:devkd843@gmail.com"
            className="text-accent-primary hover:underline"
          >
            devkd843@gmail.com
          </a>
        </p>
      </Card>
    </SectionWrapper>
  );
};
