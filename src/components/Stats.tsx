"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
];

export const Stats = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24 px-4 md:px-12"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center"
        >
          <p className="text-5xl font-bold font-display gradient-text">
            {stat.value}
          </p>
          <p className="text-lg text-text-primary mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};
