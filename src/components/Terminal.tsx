"use client";
import { motion } from "framer-motion";
import { Card } from "./Card";

const codeSnippet = `
// DevKD_Profile.js
const developer = {
    name: "DevKD",
    skills: ["C++", "Flutter", "Python"],
    currentQuest: "Mastering Unreal Engine",
    mood: "Cool & Chill",
    securityLevel: "High"
};
`;

export const Terminal = () => {
  return (
    <Card className="relative p-4 font-mono text-xs">
      <div className="absolute top-3 left-4 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-sm text-text-primary mt-6 whitespace-pre-wrap">
        <code>{codeSnippet}</code>
      </pre>
    </Card>
  );
};
