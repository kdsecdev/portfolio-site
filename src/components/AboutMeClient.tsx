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

        {/* Profile Image Column */}
        <div className="lg:col-span-5 w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111]/80 group"
           >
              {/* Gradient mesh background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/8 via-transparent to-[#00F0FF]/8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#00FF85]/10 animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#00F0FF]/8 animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />

              {/* Center monogram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-white/5 border-2 border-[#00FF85]/30 flex items-center justify-center backdrop-blur-sm">
                    <span className="font-display font-black text-5xl text-white/90">KD</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#00FF85]/10 blur-xl -z-10" />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-white text-lg">Caleb Botchway</p>
                  <p className="font-mono text-xs text-[#00FF85] mt-1">@iamdevkd</p>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse" />
                  <span className="font-mono text-xs text-[#00FF85] uppercase tracking-widest">
                    Full-Stack Developer · Ghana 🇬🇭
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm">
                <span className="font-mono text-[10px] text-white/60 uppercase tracking-widest">EST. 2022</span>
              </div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent pointer-events-none group-hover:from-white/5 transition-all duration-500" />
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
