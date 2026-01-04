'use client';

import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { Trophy, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";


export const Achievements = () => {
  return (
    <SectionWrapper id="achievements">
      <h2 className="text-4xl font-bold font-display text-center mb-12">
        My Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* No achievements to display */}
      </div>
    </SectionWrapper>
  );
};
