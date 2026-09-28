"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight, Code2, Server, Smartphone, ShieldCheck, Cpu, Gamepad2 } from "lucide-react";

const services = [
  {
    code: "SVC_01",
    icon: Code2,
    title: "Full-Stack Development",
    tagline: "Modern web applications",
    description:
      "End-to-end web applications built with React and Next.js on the frontend, paired with robust backend services and structured relational databases.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "#FF6B00",
  },
  {
    code: "SVC_02",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "Cross-platform iOS & Android",
    description:
      "Native-speed mobile apps using Flutter and Dart. Real-time Firebase backends, dynamic state management, and smooth responsive UIs.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    color: "#FFA043",
  },
  {
    code: "SVC_03",
    icon: Server,
    title: "Backend & API Engineering",
    tagline: "Fast, resilient architecture",
    description:
      "RESTful APIs, microservices, and database design built for production. Scalable services in FastAPI and Node.js connected to MySQL and PostgreSQL.",
    skills: ["FastAPI", "Python", "MySQL", "PostgreSQL"],
    color: "#FF7A00",
  },
  {
    code: "SVC_04",
    icon: Cpu,
    title: "AI & Transit Analytics",
    tagline: "Predictive models & GTFS data",
    description:
      "Public transit route optimization, machine learning models estimating corridor travel speeds, and automated AI agents via modern protocols.",
    skills: ["Python", "GTFS Feeds", "Machine Learning", "FastAPI"],
    color: "#FF8C00",
  },
  {
    code: "SVC_05",
    icon: ShieldCheck,
    title: "Systems & Security Tooling",
    tagline: "Memory forensics & low-level code",
    description:
      "Rootkit detection tooling, physical memory triangulation using Volatility 3, custom MCP bridges, and low-level C++ systems programming.",
    skills: ["C++", "Python", "Volatility 3", "MCP"],
    color: "#FF5500",
  },
  {
    code: "SVC_06",
    icon: Gamepad2,
    title: "Game Dev & Interactive 3D",
    tagline: "Real-time engines & mechanics",
    description:
      "Interactive 2D and 3D environment development in Unreal Engine and Godot. Game logic, physics, QA mechanics analysis, and crash diagnostics.",
    skills: ["Unreal Engine", "Godot", "C++", "QA Analysis"],
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base sm:text-lg max-w-xl mx-auto font-sans"
        >
          Web, mobile, backend, and security work. Here&#39;s what I build.
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

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${service.color}12`,
                  borderColor: `${service.color}28`,
                }}
              >
                <IconComponent size={20} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[11px] text-white/40 mb-1.5 font-sans">{service.tagline}</p>
                <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-[#FFA043] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-sans">{service.description}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/6">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/4 border border-white/8 text-white/45 font-sans"
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

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-white mb-4 tracking-tight">
          Got a project in mind?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#FF8800] to-[#FFA726]">
            Let&#39;s build it.
          </span>
        </h3>
        <p className="text-white/60 mb-8 max-w-md mx-auto font-sans">
          I&#39;m open to contract work, full-time roles, and interesting collaborations. Reach out and we&#39;ll figure out the details.
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
