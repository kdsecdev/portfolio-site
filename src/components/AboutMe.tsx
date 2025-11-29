"use client";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Card } from "./Card";
import { AboutMeClient } from "./AboutMeClient";

interface AboutMeProps {
  content: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({ content }) => {
  return (
    <SectionWrapper id="about">
      <AboutMeClient content={content} />
    </SectionWrapper>
  );
};
