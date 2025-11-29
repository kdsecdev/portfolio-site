"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { Code, Smartphone, FlaskConical } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="w-8 h-8 text-neon-blue" />,
    title: "01. Core Engineering",
    description:
      "High-performance systems, automation tooling, and security-first architecture. I build the engines that run the show.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-neon-blue" />,
    title: "02. Interactive & Mobile",
    description:
      "Seamless mobile applications and dynamic web interfaces. I make complex code look good on a screen.",
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-neon-blue" />,
    title: "03. The Lab (Current Focus)",
    description:
      "Currently expanding into Game Development. Merging C++ logic with immersive 3D environments.",
  },
];

export const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        My Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((skill, i) => (
          <Card key={i} className="flex flex-col items-center text-center p-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } },
              }}
              className="p-4 rounded-full bg-neon-blue/20 mb-4"
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-xl font-bold font-display text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-sm text-text-primary">{skill.description}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
