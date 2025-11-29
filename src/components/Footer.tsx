import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer-contact" className="py-12 px-4 md:px-12 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl font-bold font-display mb-6"
        >
          Ready to build something secure and scalable?
        </h2>
        <p
          className="text-lg text-text-primary mb-8"
        >
          I am open to collaborations on{" "}
          <span className="text-neon-blue font-bold">C++ Systems</span>,{" "}
          <span className="text-neon-blue font-bold">Flutter Apps</span>, and{" "}
          <span className="text-neon-blue font-bold">Python Automation</span>.
        </p>
        <p
          className="text-lg text-white font-bold mb-4"
        >
          Email:{" "}
          <a href="mailto:cbotch5000@gmail.com" className="text-neon-blue hover:underline">
            cbotch5000@gmail.com
          </a>
        </p>
        <p className="text-text-primary text-center text-xs mt-12">
          &copy; {new Date().getFullYear()} Caleb (DEV:KD). All rights reserved.
        </p>
      </div>
    </footer>
  );
};