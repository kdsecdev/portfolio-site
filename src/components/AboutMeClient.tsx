"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Card } from "./Card";
import { TechStack } from "./TechStack";
import { FileDown, GraduationCap, Briefcase, Award } from "lucide-react";

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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">
          About Me
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

            {/* Clean credentials footer */}
            <div className="pt-5 mt-2 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-white/40 font-sans leading-relaxed">
                BSc IT · Central University (L300) &nbsp;·&nbsp; Software Intern @ IT Consortium &nbsp;·&nbsp; 3× Hackathon Winner
              </p>

              <a
                href="/Caleb_Botchway_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Caleb_Botchway_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B00]/12 border border-[#FF6B00]/25 text-white/70 hover:bg-[#FF6B00] hover:text-black transition-all text-xs font-medium shrink-0"
              >
                <FileDown size={13} />
                Download CV
              </a>
            </div>
          </Card>
        </div>

        {/* Profile Visual Column */}
        <div className="lg:col-span-5 w-full space-y-4">
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
                  <p className="font-lcd text-xs text-[#FFA043] mt-1 tracking-wider">@iamdevkd</p>
                </div>
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                  <span className="text-xs text-white/50 font-sans">
                    Full-Stack Developer · Accra, Ghana
                  </span>
                </div>
              </div>

              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent pointer-events-none group-hover:from-white/6 transition-all duration-500" />
           </motion.div>

           {/* Quick Credentials Card */}
           <div className="p-4 sm:p-5 rounded-2xl bg-[#111111]/90 border border-white/10 space-y-3 shadow-lg">
             <div className="flex items-center gap-3 text-xs text-white/80">
               <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0 text-[#FFA043]">
                 <GraduationCap size={16} />
               </div>
               <div>
                 <p className="font-semibold text-white">Central University</p>
                 <p className="text-white/50 text-[11px]">BSc IT · Level 300 (Expected 2027)</p>
               </div>
             </div>

             <div className="flex items-center gap-3 text-xs text-white/80">
               <div className="w-8 h-8 rounded-lg bg-[#FF8800]/10 border border-[#FF8800]/30 flex items-center justify-center shrink-0 text-[#FFA043]">
                 <Briefcase size={16} />
               </div>
               <div>
                 <p className="font-semibold text-white">IT Consortium</p>
                 <p className="text-white/50 text-[11px]">Software Intern (On-site)</p>
               </div>
             </div>

             <div className="flex items-center gap-3 text-xs text-white/80">
               <div className="w-8 h-8 rounded-lg bg-[#FFA043]/10 border border-[#FFA043]/30 flex items-center justify-center shrink-0 text-[#FFA043]">
                 <Award size={16} />
               </div>
               <div>
                 <p className="font-semibold text-white">BridgeLabs Ghana AI Hackathon</p>
                 <p className="text-white/50 text-[11px]">1st Place Winner (2025)</p>
               </div>
             </div>
           </div>
        </div>
      </div>
      
      {/* Full-width Tech Stack Banner */}
      <div className="w-full mt-16 sm:mt-20">
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Stack
          </h3>
        </div>
        <TechStack />
      </div>
    </>
  );
};
