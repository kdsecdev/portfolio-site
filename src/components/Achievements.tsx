'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { motion } from "framer-motion";
import { Trophy, Zap, Award } from "lucide-react";

const achievements = [
  {
    code: "AWARD_01",
    tag: "1ST PLACE // 2025",
    icon: Trophy,
    accentColor: "#FF6B00",
    title: "BridgeLabs Ghana AI Hackathon (2025)",
    role: "Lead Full-Stack Developer",
    desc: "Designed an AI-powered public transport route optimizer using FastAPI, GTFS real-time feeds, and Flutter client.",
  },
  {
    code: "AWARD_02",
    tag: "2X FINALIST // 2024",
    icon: Zap,
    accentColor: "#FFA043",
    title: "2x Zindi & Yango Hackathon (2024)",
    role: "Machine Learning & Full Stack",
    desc: "Built an intelligent speed estimation model along major Accra corridors to optimize ride-hailing arrival predictions.",
  },
  {
    code: "AWARD_03",
    tag: "VERIFIED // CERT",
    icon: Award,
    accentColor: "#FF8C00",
    title: "Google Career & FreeCodeCamp Certs",
    role: "Certified Systems Developer",
    desc: "Certified in Flutter App Development, Git & Version Control Workflows, and Java Software Engineering.",
  },
];

export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-10 sm:mb-14">
        <p className="font-lcd text-xs text-[#FFA043] tracking-widest uppercase mb-3">
          // SECTION: 04 // MILESTONES &amp; RECOGNITION
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3">
          Hackathons &amp; Wins
        </h2>
        <p className="text-white/60 max-w-lg mx-auto text-base sm:text-lg font-sans">
          Proven problem-solving skills recognized in regional competitive hackathons and engineering certs.
        </p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {achievements.map((achievement, index) => {
          const IconComp = achievement.icon;
          return (
            <Card
              key={index}
              className="flex flex-col gap-4 bg-[#111111]/90 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]"
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

              <div>
                <h3 className="text-xl font-bold font-display text-white mb-1.5">{achievement.title}</h3>
                <p className="font-lcd text-xs tracking-wide" style={{ color: achievement.accentColor }}>
                  ROLE: {achievement.role}
                </p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                {achievement.desc}
              </p>
            </Card>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
};
