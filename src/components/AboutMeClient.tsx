"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";

interface AboutMeClientProps {
  content: string;
}

export const AboutMeClient: React.FC<AboutMeClientProps> = ({ content }) => {
  // Removes the first line if it's a heading, as we have a dedicated title
  const cleanContent = content.replace(/^# .*\n/, '');

  return (
    <>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        About Me
      </motion.h2>

      <Card className="md:p-12 max-w-4xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: (props) => <h1 {...props} className="font-display text-3xl mb-4 gradient-text" />,
              h2: (props) => <h2 {...props} className="font-display text-2xl mb-4" />,
              a: (props) => <a {...props} className="text-accent-primary hover:underline" />,
              ul: (props) => <ul {...props} className="list-disc list-inside" />,
              li: (props) => <li {...props} className="mb-2" />,
              p: (props) => <p {...props} className="text-text-primary" />,
            }}
          >
            {cleanContent}
          </ReactMarkdown>
        </div>
        <motion.a
          href="https://github.com/kdsecdev"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold"
        >
          Read More on GitHub
        </motion.a>
      </Card>
    </>
  );
};
