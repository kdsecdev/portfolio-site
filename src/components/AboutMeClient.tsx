"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";

interface AboutMeClientProps {
  content: string;
}

export const AboutMeClient: React.FC<AboutMeClientProps> = ({ content }) => {
  // The first line if it's a heading will be rendered as a custom H1 within the markdown,
  // so no need to remove it here.
  return (
    <Card className="max-w-4xl mx-auto md:grid md:grid-cols-2 md:gap-8 p-8 md:p-12">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { delay: 0.2 } },
        }}
        className="text-lg text-text-primary"
      >
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1
                  {...props}
                  className="font-display text-3xl mb-4 gradient-text"
                />
              ),
              h2: (props) => (
                <h2 {...props} className="font-display text-2xl mb-4" />
              ),
              a: (props) => (
                <a {...props} className="text-accent-primary hover:underline" />
              ),
              ul: (props) => (
                <ul {...props} className="list-disc list-inside" />
              ),
              li: (props) => <li {...props} className="mb-2" />,
              p: (props) => <p {...props} className="text-text-primary" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { delay: 0.3 } },
        }}
        className="text-lg text-text-primary mt-8 md:mt-0 md:pl-8 md:border-l border-white/10"
      >
        <p className="mb-2">
          <span className="font-bold text-white">Current Status:</span>{" "}
          <span className="text-green-500">🟢 Online & Compiling</span>
        </p>
        <p className="mb-2">
          <span className="font-bold text-white">Pronouns:</span> He/Him
        </p>
        <p className="mb-2">
          <span className="font-bold text-white">Personality:</span> 90% Hard
          work, 10% Humor, 0% Stress.
        </p>
      </motion.div>
    </Card>
  );
};
