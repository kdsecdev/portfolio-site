'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { Trophy, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";


export const Achievements = () => {
  const achievements = [
    {
      title: "BridgeLabs Ghana AI Hackathon (2025)",
      role: "Fullstack Developer",
      desc: "Designed an AI-powered public transport route optimizer using FastAPI and GTFS data.",
      icon: <Zap className="text-neon-blue" size={32} />,
    },
    {
      title: "2x Zindi & Yango Hackathon (2024)",
      role: "Full Stack Developer",
      desc: "Built a machine learning model that determines the average speed along major roads in Accra.",
      icon: <Trophy className="text-[#FF0055]" size={32} />,
    },
    {
      title: "Google Career & FreeCodeCamp Certs",
      role: "Certified Developer",
      desc: "Certified in Flutter Development, Git & Version Control, and Java Development.",
      icon: <Award className="text-[#00FF88]" size={32} />,
    },
  ];

  return (
    <SectionWrapper id="achievements">
      <h2 className="text-4xl font-bold font-display text-center mb-12">
        My Achievements
      </h2>
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {achievements.map((achievement, index) => (
          <Card key={index} className="flex flex-col gap-4 hover:border-white/20 transition-colors">
            <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10">
              {achievement.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
              <span className="text-xs font-mono text-neon-blue">{achievement.role}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {achievement.desc}
            </p>
          </Card>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};
