import { SectionWrapper } from "./SectionWrapper";
import { AboutMeClient } from "./AboutMeClient";

interface AboutMeProps {
  content: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({ content }) => {
  // Create a short excerpt from the first two paragraphs
  const excerpt = content.split('\n\n').slice(0, 2).join('\n\n');

  return (
    <SectionWrapper id="about">
      <AboutMeClient content={excerpt} />
    </SectionWrapper>
  );
};
