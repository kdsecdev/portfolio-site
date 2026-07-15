'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { motion } from "framer-motion";

const achievements = [
  {
    iconSrc: "https://img.icons8.com/fluency/96/lightning-bolt.png",
    iconAlt: "Hackathon",
    accentColor: "#00F0FF",
    title: "BridgeLabs Ghana AI Hackathon (2025)",
    role: "Fullstack Developer",
    desc: "Designed an AI-powered public transport route optimizer using FastAPI and GTFS data.",
  },
  {
    iconSrc: "https://img.icons8.com/fluency/96/prize.png",
    iconAlt: "Trophy",
    accentColor: "#FF0055",
    title: "2x Zindi & Yango Hackathon (2024)",
    role: "Full Stack Developer",
    desc: "Built a machine learning model that determines the average speed along major roads in Accra.",
  },
  {
    iconSrc: "https://img.icons8.com/fluency/96/certificate.png",
    iconAlt: "Certificate",
    accentColor: "#00FF85",
    title: "Google Career & FreeCodeCamp Certs",
    role: "Certified Developer",
    desc: "Certified in Flutter Development, Git & Version Control, and Java Development.",
  },
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-8 sm:mb-12">
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
      >
        {achievements.map((achievement, index) => (
          <Card key={index} className="flex flex-col gap-4 hover:border-white/20 transition-colors">
            <div
              className="p-3 w-fit rounded-2xl border"
              style={{
                backgroundColor: `${achievement.accentColor}10`,
                borderColor: `${achievement.accentColor}25`,
              }}
            >
              <img
                src={achievement.iconSrc}
                alt={achievement.iconAlt}
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
              <span className="text-xs font-mono" style={{ color: achievement.accentColor }}>
                {achievement.role}
              </span>
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
