"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer-contact" className="py-12 px-4 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-bold font-display mb-6"
        >
          Ready to build something secure and scalable?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-text-primary mb-8"
        >
          I am open to collaborations on{" "}
          <span className="text-neon-blue font-bold">C++ Systems</span>,{" "}
          <span className="text-neon-blue font-bold">Flutter Apps</span>, and{" "}
          <span className="text-neon-blue font-bold">Python Automation</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white font-bold mb-4"
        >
          Email:{" "}
          <a href="mailto:cbotch5000@gmail.com" className="text-neon-blue hover:underline">
            cbotch5000@gmail.com
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className="text-sm italic text-text-primary mt-8"
        >
          "Always looking for new challenges and opportunities to grow."
        </motion.p>
        <p className="text-text-primary text-center text-xs mt-12">
          &copy; {new Date().getFullYear()} Caleb (DEV:KD). All rights reserved.
        </p>
      </div>
    </footer>