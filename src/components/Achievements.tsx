'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { Trophy, Zap, Award, CheckCircle2 } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    year: "2025",
    type: "Hackathon",
    title: "BridgeLabs Ghana AI Hackathon",
    role: "Lead Full-Stack Developer",
    desc: "Designed an AI-powered public transport route optimizer using FastAPI and GTFS data feeds, integrated with a Flutter client for real-time GPS and analytics.",
    badges: ["FastAPI", "GTFS", "Flutter"],
    accentColor: "#FF6B00",
  },
  {
    icon: Zap,
    year: "2024",
    type: "2× Finalist",
    title: "Zindi & Yango Hackathons",
    role: "Full Stack & ML Developer",
    desc: "Mined and parsed complex spatial-temporal datasets to build a machine learning model estimating average vehicle speeds on major Accra corridors.",
    badges: ["Python", "Machine Learning", "Spatial Data"],
    accentColor: "#FFA043",
  },
  {
    icon: Award,
    year: "2024",
    type: "Certification",
    title: "ATHE Level 3 IT & Google Cert",
    role: "Systems & Version Control",
    desc: "Earned ATHE Level 3 IT accreditation alongside Google Career Certificate in Git & Version Control Pipelines and branch architecture.",
    badges: ["ATHE Level 3 IT", "Google Git & CI/CD"],
    accentColor: "#FF8C00",
  },
  {
    icon: CheckCircle2,
    year: "2025",
    type: "Certification",
    title: "Flutter & Java Specializations",
    role: "Mobile & OOP Engineering",
    desc: "Completed FreeCodeCamp Flutter Development Bootcamp building cross-platform apps, and Udemy Java Software Development for robust object-oriented design.",
    badges: ["Flutter Bootcamp", "Udemy Java OOP"],
    accentColor: "#FF5500",
  },
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3">
          Hackathons & Wins
        </h2>
        <p className="text-white/60 max-w-lg mx-auto text-base sm:text-lg font-sans">
          Competitive hackathons, verified engineering certs, and systems that shipped.
        </p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {achievements.map((item, index) => {
          const IconComp = item.icon;
          return (
            <Card
              key={index}
              className="p-6 flex flex-col gap-4 bg-[#111111]/90 border border-white/8 hover:border-white/20 transition-all duration-200 shadow-xl h-full"
            >
              {/* Icon + year/type row */}
              <div className="flex items-start justify-between">
                <div
                  className="p-2.5 w-fit rounded-xl border"
                  style={{
                    backgroundColor: `${item.accentColor}12`,
                    borderColor: `${item.accentColor}28`,
                  }}
                >
                  <IconComp size={20} style={{ color: item.accentColor }} />
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-white/35 font-sans">{item.type}</p>
                  <p className="text-[11px] font-semibold text-white/50 font-sans">{item.year}</p>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold font-display text-white mb-1 leading-snug">{item.title}</h3>
                <p className="text-[11px] text-white/40 mb-3 font-sans">{item.role}</p>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Clean tech chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6 mt-auto">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/4 border border-white/8 text-white/45 font-sans"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
