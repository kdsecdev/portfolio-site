'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { Trophy, Zap, Award, CheckCircle2 } from "lucide-react";

const achievements = [
  {
    code: "HACK_01",
    tag: "1ST PLACE · 2025",
    icon: Trophy,
    accentColor: "#FF6B00",
    title: "BridgeLabs Ghana AI Hackathon",
    role: "Lead Full-Stack Developer",
    desc: "Designed an AI-powered public transport route optimizer using FastAPI and GTFS data feeds, integrated with a Flutter client for real-time GPS and analytics.",
    badges: ["FastAPI", "GTFS", "Flutter", "1st Place"],
  },
  {
    code: "HACK_02",
    tag: "2X FINALIST · 2024",
    icon: Zap,
    accentColor: "#FFA043",
    title: "2x Zindi & Yango Hackathons",
    role: "Full Stack & ML Developer",
    desc: "Mined and parsed complex spatial-temporal datasets to build a machine learning model estimating average vehicle speeds on major Accra corridors.",
    badges: ["Python", "Machine Learning", "Spatial Data", "Zindi"],
  },
  {
    code: "CERT_01",
    tag: "VERIFIED · 2024",
    icon: Award,
    accentColor: "#FF8C00",
    title: "ATHE Level 3 IT & Google Cert",
    role: "Systems & Version Control",
    desc: "Earned ATHE Level 3 IT accreditation (2024) alongside Google Career Certificate in Git & Version Control Pipelines and branch architecture.",
    badges: ["ATHE Level 3 IT", "Google Git & CI/CD"],
  },
  {
    code: "CERT_02",
    tag: "VERIFIED · 2025",
    icon: CheckCircle2,
    accentColor: "#FF5500",
    title: "Flutter & Java Specializations",
    role: "Mobile & OOP Engineering",
    desc: "Completed FreeCodeCamp Flutter Development Bootcamp (2025) building cross-platform apps, and Udemy Java Software Development for robust object-oriented design.",
    badges: ["Flutter Bootcamp", "Udemy Java OOP"],
  },
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3">
          Hackathons &amp; Wins
        </h2>
        <p className="text-white/60 max-w-lg mx-auto text-base sm:text-lg font-sans">
          Competitive hackathons, verified engineering certs, and systems that shipped.
        </p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {achievements.map((achievement, index) => {
          const IconComp = achievement.icon;
          return (
            <Card
              key={index}
              className="p-6 flex flex-col gap-4 bg-[#111111]/90 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] h-full"
            >
              {/* Top row with clean vector icon & LCD badge */}
              <div className="flex items-center justify-between">
                <div
                  className="p-3 w-fit rounded-xl border"
                  style={{
                    backgroundColor: `${achievement.accentColor}15`,
                    borderColor: `${achievement.accentColor}35`,
                  }}
                >
                  <IconComp size={22} style={{ color: achievement.accentColor }} />
                </div>
                <span className="font-lcd text-[11px] px-2.5 py-1 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FFA043] font-bold">
                  {achievement.tag}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold font-display text-white mb-1.5">{achievement.title}</h3>
                <p className="font-lcd text-xs tracking-wide mb-2" style={{ color: achievement.accentColor }}>
                  ROLE: {achievement.role}
                </p>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  {achievement.desc}
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6 mt-auto">
                {achievement.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-0.5 text-xs rounded-full bg-white/5 border border-white/8 text-white/60 font-mono"
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
