"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight, Code2, Layout, Server, Shield, Smartphone, Cpu } from "lucide-react";

const services = [
  {
    icon: <Layout size={28} />,
    title: "UI / UX Design",
    tagline: "Beautiful interfaces that convert",
    description:
      "From wireframes to fully polished, responsive interfaces. I design with clarity and intent — every pixel has a purpose.",
    skills: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#00F0FF",
  },
  {
    icon: <Code2 size={28} />,
    title: "Full-Stack Development",
    tagline: "End-to-end web applications",
    description:
      "I build robust, scalable full-stack applications — from seamless React/Next.js frontends to high-performance APIs and databases.",
    skills: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    color: "#00FF85",
  },
  {
    icon: <Server size={28} />,
    title: "Backend & API Engineering",
    tagline: "Fast, secure, and scalable APIs",
    description:
      "RESTful and GraphQL APIs, microservices, authentication systems, and database design built for production scale.",
    skills: ["FastAPI", "Node.js", "Docker", "PostgreSQL"],
    color: "#A855F7",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    tagline: "Cross-platform apps with Flutter",
    description:
      "Native-quality mobile experiences for iOS and Android using Flutter & Dart. Fast, beautiful, and reliable.",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs"],
    color: "#F59E0B",
  },
  {
    icon: <Shield size={28} />,
    title: "Secure Systems",
    tagline: "Security-first development",
    description:
      "Authentication flows, secure API design, code auditing, and hardening your stack against real-world threats.",
    skills: ["C++", "Python", "Volatility3", "MCP"],
    color: "#FF4466",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI / ML Integration",
    tagline: "Smart features, real-world impact",
    description:
      "Integrating machine learning models and AI APIs into production applications — from natural language to computer vision.",
    skills: ["Python", "FastAPI", "TensorFlow", "OpenAI API"],
    color: "#00FF85",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Services = () => {
  return (
    <SectionWrapper id="services">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-4"
        >
          What I Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4"
        >
          Services & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg max-w-xl mx-auto"
        >
          From pixel-perfect designs to fortified backends — I deliver complete digital solutions.
        </motion.p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative flex flex-col gap-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden cursor-default"
          >
            {/* Glow spot on hover */}
            <div
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: `${service.color}20` }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300"
              style={{
                backgroundColor: `${service.color}10`,
                borderColor: `${service.color}30`,
                color: service.color,
              }}
            >
              {service.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: service.color }}>
                {service.tagline}
              </p>
              <h3 className="text-xl font-bold font-display text-white mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {service.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/8 text-white/50 font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden border border-white/10 p-8 md:p-12 text-center"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00FF85]/8 via-transparent to-[#00F0FF]/8 pointer-events-none" />
        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />

        <p className="font-mono text-xs text-accent-primary uppercase tracking-widest mb-4">
          Ready to collaborate?
        </p>
        <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-4 tracking-tight">
          Let&apos;s build something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] to-[#00F0FF]">
            extraordinary.
          </span>
        </h3>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss and get a custom quote tailored to your needs.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-all group"
        >
          Get a Free Quote
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </SectionWrapper>
  );
};
