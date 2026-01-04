"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";
import { Cpu, Code, Smartphone, BrainCircuit, Atom, Globe, Zap } from "lucide-react";

interface AboutMeClientProps {
  content: string;
}

const skills = [
  { name: "C++", icon: <Cpu size={24} /> },
  { name: "Flutter", icon: <Smartphone size={24} /> },
  { name: "Python", icon: <Code size={24} /> },
  { name: "Unreal Engine", icon: <BrainCircuit size={24} /> },
  { name: "React", icon: <Atom size={24} /> },
  { name: "Next.js", icon: <Globe size={24} /> },
  { name: "Node.js", icon: <Zap size={24} /> },
];

export const AboutMeClient: React.FC<AboutMeClientProps> = ({ content }) => {
  return (
    <>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        The Code / The Vibe
      </motion.h2>

      <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="prose prose-invert prose-lg max-w-none text-text-primary">
          <ReactMarkdown
            components={{
              h3: (props) => (
                <h3
                  {...props}
                  className="font-display text-2xl mb-4 text-neon-blue"
                />
              ),
              a: (props) => (
                <a
                  {...props}
                  className="text-soft-purple-start hover:underline underline-offset-4 decoration-wavy"
                />
              ),
              p: (props) => (
                <p {...props} className="mb-6 leading-relaxed text-lg" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-2xl mb-6 text-neon-blue">
            Core Toolkit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 border border-white/10"
              >
                <div className="text-neon-blue">{skill.icon}</div>
                <span className="font-semibold text-white">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
};
