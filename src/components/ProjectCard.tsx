"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
  language?: string;
  stars?: number;
  forks?: number;
  homepage?: string;
}

// Language colour dots — GitHub's palette
const languageColors: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dart: "#00B4AB",
  CSS: "#563d7c",
  Java: "#b07219",
  HTML: "#e34c26",
  Shell: "#89e051",
  Rust: "#dea584",
  Go: "#00ADD8",
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  projectUrl,
  language,
  stars = 0,
  forks = 0,
  homepage,
}) => {
  const langColor = language ? (languageColors[language] ?? "#888") : null;

  return (
    <motion.div
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="flex flex-col gap-4 p-5 rounded-xl bg-[#0d1117] border border-white/10 hover:border-white/20 transition-colors h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {/* GitHub-style book icon */}
          <svg
            className="w-4 h-4 text-text-secondary shrink-0"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#58a6ff] hover:underline text-sm truncate"
          >
            {title}
          </Link>
        </div>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded-full border border-white/15 text-white/50 font-mono">
          public
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-text-secondary leading-relaxed flex-1 line-clamp-3">
        {description || "No description provided."}
      </p>

      {/* Topics */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-[#388bfd1a] text-[#58a6ff] font-mono border border-[#388bfd33]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer: language + stars + forks + links */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-3 text-xs text-text-secondary">
          {langColor && (
            <span className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: langColor }}
              />
              {language}
            </span>
          )}
          {stars > 0 && (
            <span className="flex items-center gap-1">
              <Star size={12} />
              {stars}
            </span>
          )}
          {forks > 0 && (
            <span className="flex items-center gap-1">
              <GitFork size={12} />
              {forks}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-secondary hover:text-white hover:bg-white/8 transition-all"
            title="View on GitHub"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </Link>
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded text-xs text-text-secondary hover:text-white hover:bg-white/8 transition-all"
              title="Live Site"
            >
              <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
