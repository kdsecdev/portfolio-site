"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";

interface AboutMeClientProps {
  content: string;
}

export const AboutMeClient: React.FC<AboutMeClientProps> = ({ content }) => {
  return (
    <>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        The Code / The Vibe
      </motion.h2>

      <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-red-500">
        <div className="prose prose-invert prose-lg max-w-none text-text-primary">
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1
                  {...props}
                  className="font-display text-3xl mb-4 gradient-text"
                />
              ),
              h2: (props) => (
                <h2 {...props} className="font-display text-2xl mb-4 text-white" />
              ),
              h3: (props) => (
                <h3 {...props} className="font-display text-xl mb-3 text-neon-blue" />
              ),
              a: (props) => (
                <a {...props} className="text-soft-purple-start hover:underline" />
              ),
              ul: (props) => (
                <ul {...props} className="list-disc list-inside ml-4" />
              ),
              li: (props) => <li {...props} className="mb-2 text-text-primary" />,
              p: (props) => <p {...props} className="mb-4 leading-relaxed text-text-primary" />,
              strong: (props) => <strong {...props} className="font-bold text-white" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </Card>
    </>
  );
};
