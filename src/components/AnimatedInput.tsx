"use client";
import { motion, MotionProps } from "framer-motion";
import { useId } from "react";

type AnimatedInputProps = React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
  isTextarea?: boolean;
} & MotionProps;

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
        placeholder={label}
        rows={isTextarea ? 5 : undefined}
        className="block w-full px-4 py-3.5 bg-[#121212] border border-white/10 rounded-xl peer focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] placeholder-transparent text-white font-sans text-sm transition-all"
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-white/50 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-[#FFA043] font-sans"
      >
        {label}
      </label>
    </div>
  );
};