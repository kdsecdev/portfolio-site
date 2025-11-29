"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Code, Contact, Home, Briefcase } from "lucide-react";
import Link from "next/link";

const spring = {
  type: "spring",
  stiffness: 400,
  damping: 25,
  mass: 0.8,
};

export const DynamicIslandNav = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
      setIsExpanded(false); // Collapse when hiding
    } else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { name: "Work", href: "#work", icon: <Briefcase size={20} /> },
    { name: "Services", href: "#services", icon: <Code size={20} /> },
    { name: "Contact", href: "#contact", icon: <Contact size={20} /> },
  ];

  return (
    <motion.div
      variants={{
        hidden: { y: "-100%", opacity: 0 },
        visible: { y: "0%", opacity: 1 },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        layout
        transition={spring}
        className="flex items-center gap-4 p-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
      >
        <Link href="/">
          <motion.div layout="position" className="w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
            <Home size={16} className="text-background" />
          </motion.div>
        </Link>
        {isExpanded && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 + i * 0.05 },
                }}
                className="flex items-center gap-2 text-text-primary hover:text-white transition-colors"
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </motion.a>
            ))}
          </motion.nav>
        )}
        <motion.div layout="position" className="flex items-center gap-2 cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-text-primary font-medium">
            Available for Work
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
