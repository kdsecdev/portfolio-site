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
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center mb-10 sm:mb-16"
      >
        <p className="font-lcd text-xs text-[#FFA043] tracking-widest uppercase mb-3">
          // SECTION: 01 // ORIGIN &amp; STACK
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
          The Code &amp; The Vision
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start max-w-6xl mx-auto">
        
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-8">
           <Card className="p-6 md:p-8 lg:p-10 bg-[#101010]/85 border border-white/10 backdrop-blur-xl hover:border-[#FF6B00]/30 transition-colors">
            <div className="prose prose-invert prose-lg max-w-none text-white/90 font-sans">
              <ReactMarkdown
                components={{
                  h3: (props) => (
                    <h3
                      {...props}
                      className="font-display text-2xl font-bold mb-4 text-[#FFA043] tracking-wide"
                    />
                  ),
                  a: (props) => (
                    <a
                      {...props}
                      className="text-[#FF6B00] hover:text-[#FFA043] transition-colors underline underline-offset-4 decoration-1 font-medium"
                    />
                  ),
                  p: (props) => (
                    <p {...props} className="mb-6 leading-relaxed text-base sm:text-lg font-normal text-white/70" />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Stylistic LCD Stats Row */}
            <div className="pt-6 mt-4 border-t border-white/8 flex flex-wrap gap-2.5">
              <span className="lcd-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                EXP: 4+ YEARS
              </span>
              <span className="lcd-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8800]" />
                REPOS: 20+ PUBLIC
              </span>
              <span className="lcd-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA043]" />
                FOCUS: AI &amp; SYSTEMS
              </span>
            </div>
          </Card>
        </div>

        {/* Profile Visual Column */}
        <div className="lg:col-span-5 w-full">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[3/3] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] group hover:border-[#FF6B00]/40 transition-colors duration-500"
           >
              {/* Gradient mesh background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/12 via-transparent to-[#FFA043]/8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Decorative rotating rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#FF6B00]/20 animate-spin-slow" style={{ animationDuration: '24s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#FFA043]/15 animate-spin-slow" style={{ animationDuration: '32s', animationDirection: 'reverse' }} />

              {/* Center monogram */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-black/80 border-2 border-[#FF6B00]/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_25px_rgba(255,107,0,0.3)] group-hover:border-[#FF6B00] transition-colors">
                    <span className="font-display font-black text-5xl text-white tracking-wide">KD</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#FF6B00]/20 blur-xl -z-10" />
                </div>
                <div className="text-center">
                  <p className="font-display font-bold text-white text-lg">Caleb Botchway</p>
                  <p className="font-lcd text-xs text-[#FFA043] mt-1 tracking-wider">@iamdevkd // DEV_ID: 999</p>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-white/6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse shadow-[0_0_6px_#FF6B00]" />
                    <span className="font-lcd text-xs text-[#FFA043] uppercase tracking-wider">
                      FULL-STACK · GH 🇬🇭
                    </span>
                  </div>
                  <span className="font-lcd text-[10px] text-white/50">SYS_VER: 2.4</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm">
                <span className="font-lcd text-[10px] text-[#FFA043] uppercase tracking-wider">EST. 2022</span>
              </div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent pointer-events-none group-hover:from-white/6 transition-all duration-500" />
           </motion.div>
        </div>
      </div>
      
      {/* Full-width Tech Stack Banner */}
      <div className="w-full mt-16 sm:mt-20">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Technologies &amp; Tools
          </h3>
          <p className="font-lcd text-xs text-[#FFA043] mt-1 tracking-widest uppercase">
            // LANGUAGES // FRAMEWORKS // INFRASTRUCTURE
          </p>
        </div>
        <TechStack />
      </div>
    </>
  );
};
