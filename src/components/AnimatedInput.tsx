"use client";
import { motion } from "framer-motion";
import { useId } from "react";

interface AnimatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextarea?: boolean;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  isTextarea,
  ...props
}) => {
  const id = useId();
  const InputComponent = isTextarea ? motion.textarea : motion.input;

  return (
    <div className="relative">
      <InputComponent
        id={id}
        placeholder=" "
        rows={isTextarea ? 5 : undefined}
        className="block w-full px-4 py-3 bg-surface border border-white/10 rounded-lg peer focus:outline-none focus:ring-1 focus:ring-accent-primary"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};
