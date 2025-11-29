"use client";
import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { Code, Layers, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Web Design",
    description:
      "Creating modern and responsive designs that look great on all devices.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building high-performance websites with the latest technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensuring your site is fast and easy to use on mobile.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="my-24 px-4 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-bold font-display text-center mb-12"
      >
        What I Do
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};
