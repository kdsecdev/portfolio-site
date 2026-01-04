"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, User, Briefcase, Contact } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "About", href: "#about", icon: <User size={20} /> },
  { name: "Work", href: "#work", icon: <Briefcase size={20} /> },
  { name: "Contact", href: "#contact", icon: <Contact size={20} /> },
];

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 p-6"
        >
          <div className="flex justify-end">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} className="text-white" />
            </motion.button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 + i * 0.1, duration: 0.3 },
                }}
                className="text-3xl font-display text-white flex items-center gap-4"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
