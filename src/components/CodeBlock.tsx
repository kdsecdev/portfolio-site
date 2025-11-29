"use client";
import { motion } from "framer-motion";
import { Card } from "./Card";

const codeSnippet = `
// Welcome to my portfolio!
// I'm a software developer who loves building
// beautiful and performant web experiences.

const Developer = ({ name, passion }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{passion}</p>
    </div>
  );
}
`;

export const CodeBlock = () => {
  return (
    <Card
      className="relative p-4" // Card already provides padding
    >
      <div className="absolute top-3 left-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-sm text-text-primary mt-6 whitespace-pre-wrap">
        <code>{codeSnippet}</code>
      </pre>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], transition: { duration: 3, repeat: Infinity } }}
        className="absolute inset-0 -z-10 bg-accent-primary/20 blur-3xl"
      />
    </Card>
  );
};
