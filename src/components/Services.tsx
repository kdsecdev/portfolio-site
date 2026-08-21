"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight, Layout, Code2, Server, Smartphone, ShieldCheck, Cpu } from "lucide-react";

const services = [
  {
    code: "SVC_01",
    icon: Layout,
    title: "UI / UX Design",
    tagline: "High-conversion modern interfaces",
    description:
      "From wireframes to fully polished, responsive interfaces. I design with clarity and intent — every pixel has a purpose.",
    skills: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#FF6B00",
  },
  {
    code: "SVC_02",
    icon: Code2,
    title: "Full-Stack Development",
    tagline: "End-to-end web applications",
    description:
      "I build robust, scalable full-stack applications — from seamless React/Next.js frontends to high-performance APIs and databases.",
    skills: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    color: "#FFA043",
  },
  {
    code: "SVC_03",
    icon: Server,
    title: "Backend & API Engineering",
    tagline: "Fast, secure, and scalable APIs",
    description:
      "RESTful and GraphQL APIs, microservices, authentication systems, and database design built for production scale.",
    skills: ["FastAPI", "Node.js", "Docker", "PostgreSQL"],
    color: "#FF7A00",
  },
  {
    code: "SVC_04",
    icon: Smartphone,
    title: "Mobile Development",
    tagline: "Cross-platform apps with Flutter",
    description:
      "Native-quality mobile experiences for iOS and Android using Flutter & Dart. Fast, beautiful, and reliable.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    color: "#FF8C00",
  },
  {
    code: "SVC_05",
    icon: ShieldCheck,
    title: "Secure Systems",
    tagline: "Security-first development",
    description:
      "Authentication flows, secure API design, code auditing, and memory forensic tooling to safeguard your stack.",
    skills: ["C++", "Python", "Volatility3", "MCP"],
    color: "#FF5500",
  },
  {
    code: "SVC_06",
    icon: Cpu,
    title: "AI / ML Integration",
    tagline: "Smart features, real-world impact",
    description:
      "Integrating machine learning models and AI agents into production applications — from natural language to forensic intelligence.",
    skills: ["Python", "FastAPI", "Agents", "OpenAI API"],
    color: "#FFA043",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Services = () => {
  return (
    <SectionWrapper id="services">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <p className="font-lcd text-xs text-[#FFA043] tracking-widest uppercase mb-3">
          // SECTION: 03 // CAPABILITIES &amp; OFFERINGS
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4"
        >
          Services &amp; Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base sm:text-lg max-w-xl mx-auto font-sans"
        >
          From pixel-perfect web experiences to fortified backend systems — I deliver complete digital solutions.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16"
      >
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 overflow-hidden cursor-default shadow-xl hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]"
            >
              {/* Glow spot on hover */}
              <div
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `${service.color}25` }}
              />

              {/* Top row: Minimalist Vector Icon + LCD code */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${service.color}15`,
                    borderColor: `${service.color}35`,
                  }}
                >
                  <IconComponent size={22} style={{ color: service.color }} />
                </div>
                <span className="font-lcd text-xs text-[#FFA043] font-bold tracking-wider">
                  [{service.code}]
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-lcd text-[11px] uppercase tracking-wider mb-1" style={{ color: service.color }}>
                  {service.tagline}
                </p>
                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-[#FFA043] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-sans">{service.description}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/6">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/8 text-white/60 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden border border-white/10 p-6 sm:p-8 md:p-12 text-center bg-[#111111]/80 shadow-2xl"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 via-transparent to-[#FFA043]/10 pointer-events-none" />
        <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />

        <p className="font-lcd text-xs text-[#FFA043] uppercase tracking-widest mb-3">
          // INITIATE_PROJECT // GET_QUOTE
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-white mb-4 tracking-tight">
          Let&apos;s build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-[#FFA726]">
            extraordinary.
          </span>
        </h3>
        <p className="text-white/60 mb-8 max-w-md mx-auto font-sans">
          Have a project in mind? I&apos;d love to discuss requirements, architecture, and timelines for your product.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF6B00] text-black font-bold hover:bg-[#FF7A00] transition-all shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_30px_rgba(255,107,0,0.55)] group active:scale-95"
        >
          Get a Free Quote
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
};
