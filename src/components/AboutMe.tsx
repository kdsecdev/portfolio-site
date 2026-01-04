"use client";
import { SectionWrapper } from "./SectionWrapper";
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
