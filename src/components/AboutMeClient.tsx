"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";
import { TechStack } from "./TechStack";

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
        className="text-4xl md:text-5xl font-bold font-display text-center mb-16 tracking-tight"
      >
        The Code / The Vibe
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-8">
           <Card className="p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="prose prose-invert prose-lg max-w-none text-text-primary/90">
              <ReactMarkdown
                components={{
                  h3: (props) => (
                    <h3
                      {...props}
                      className="font-display text-2xl font-semibold mb-4 text-neon-blue tracking-wide"
                    />
                  ),
                  a: (props) => (
                    <a
                      {...props}
                      className="text-soft-purple-start hover:text-white transition-colors underline underline-offset-4 decoration-1"
                    />
                  ),
                  p: (props) => (
                    <p {...props} className="mb-6 leading-relaxed text-lg font-light text-text-secondary" />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </Card>
        </div>

        {/* Image Placeholder Column */}
        <div className="lg:col-span-5 w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-surface/30 group"
           >
              {/* Glass Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
              
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-text-secondary/50 group-hover:text-white/80 transition-colors bg-grid-white/[0.02]">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-current flex items-center justify-center">
                     <span className="text-4xl">+</span>
                  </div>
                  <span className="font-mono text-sm uppercase tracking-widest">Add Image</span>
              </div>
           </motion.div>
        </div>
      </div>
      
      {/* Full-width Tech Stack Banner */}
      <div className="w-full mt-16">
        <h3 className="font-display text-3xl font-bold text-white tracking-tight text-center mb-8">
          Tech Stack
        </h3>
        <TechStack />
      </div>
    </>
  );
};
