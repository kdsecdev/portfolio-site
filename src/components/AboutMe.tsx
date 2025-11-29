"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";

interface AboutMeProps {
  content?: string; // Content is now optional as it's static
}

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <SectionWrapper id="about">
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        The Code / The Vibe
      </motion.h2>

      <Card className="max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-8 p-8 md:p-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.2 } },
          }}
          className="text-lg text-text-primary"
        >
          <p className="mb-4">
            I don’t just write code; I build ecosystems. With a foundation in{" "}
            <span className="text-neon-blue font-bold">C++ and Python</span>, I
            specialize in creating software that is as secure as it is functional.
          </p>
          <p className="mb-4">
            But development isn't just about syntax—it's about adaptation. Whether
            I'm crafting cross-platform mobile apps in{" "}
            <span className="text-neon-blue font-bold">Flutter</span> or pushing
            web boundaries with{" "}
            <span className="text-neon-blue font-bold">Three.js</span>, I bring a
            hard-working yet "chill" energy to every sprint.
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.3 } },
          }}
          className="text-lg text-text-primary mt-8 md:mt-0 md:pl-8 md:border-l border-white/10"
        >
          <p className="mb-2">
            <span className="font-bold text-white">Current Status:</span>{" "}
            <span className="text-green-500">🟢 Online & Compiling</span>
          </p>
          <p className="mb-2">
            <span className="font-bold text-white">Pronouns:</span> He/Him
          </p>
          <p className="mb-2">
            <span className="font-bold text-white">Personality:</span> 90% Hard
            work, 10% Humor, 0% Stress.
          </p>
          {/* Placeholder for stylized photo or code-snippet graphic if needed */}
          {/* <div className="mt-8 bg-gray-700 h-48 rounded-lg flex items-center justify-center text-white">
            [Stylized Photo / Code Snippet Graphic]
          </div> */}
        </motion.div>
      </Card>
    </SectionWrapper>
  );
};
