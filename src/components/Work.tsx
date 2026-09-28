"use client";

import { useEffect, useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { ExternalLink } from "lucide-react";

interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string | null;
}

const featuredProjects = [
  {
    id: 1,
    name: "Accra Transit Optimizer",
    category: "AI · Transport",
    badge: "BridgeLabs Award Winner 2025",
    description:
      "AI-powered public transport route optimizer for Accra. Built with FastAPI, GTFS data feeds, real-time GPS tracking, and a Flutter mobile client. Recognised as one of 6 award winners at BridgeLabs Ghana AI Hackathon.",
    topics: ["FastAPI", "Flutter", "Python", "GTFS"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: null,
  },
  {
    id: 2,
    name: "Aura Forensics",
    category: "Security · Systems",
    badge: "Memory Forensics Tool",
    description:
      "Autonomous AI forensic agent using a custom Model Context Protocol (MCP) bridge and Volatility 3 to detect unlinked rootkits via physical memory triangulation.",
    topics: ["Python", "AI", "Volatility 3", "MCP"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: null,
  },
  {
    id: 3,
    name: "Trotro Live",
    category: "AI · Transport",
    badge: "Public Transit AI",
    description:
      "Public transport tracking system for Ghanaian commuters. Engineered backend microservices for route mapping, congestion estimation, and real-time vehicle speed modeling.",
    topics: ["Python", "FastAPI", "GTFS", "Transit Analytics"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: null,
  },
  {
    id: 4,
    name: "Smart Asset Management",
    category: "Desktop · Java",
    badge: "Inventory System",
    description:
      "JavaFX desktop application for IT asset lifecycle management. Tracks hardware assignments, maintenance schedules, and depreciation with a MySQL backend.",
    topics: ["Java", "JavaFX", "MySQL", "OOP"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: null,
  },
  {
    id: 5,
    name: "Food Delivery App",
    category: "Mobile · Flutter",
    badge: "Cross-Platform",
    description:
      "Flutter mobile app for on-demand food ordering. Real-time order tracking, Firebase push notifications, and a clean responsive UI across iOS and Android.",
    topics: ["Flutter", "Dart", "Firebase", "Mobile"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: null,
  },
  {
    id: 6,
    name: "CineGuide",
    category: "Web · React",
    badge: "Live",
    description:
      "Movie discovery web app powered by the TMDB API. Features browsing by genre, full-text search, detailed film pages, and a watchlist saved to localStorage.",
    topics: ["React", "JavaScript", "CSS", "Vercel"],
    html_url: "https://github.com/kdsecdev",
    liveUrl: "https://cine-guide-two.vercel.app",
  },
];

const ProjectGrid = ({ projects }: { projects: GitHubProject[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
    {projects.map((project) => (
      <a
        key={project.id}
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-3 p-5 rounded-xl bg-[#111111]/90 border border-white/8 hover:border-white/20 transition-all duration-200"
      >
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-white text-sm group-hover:text-[#FFA043] transition-colors leading-snug">
            {project.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
          </h4>
          {project.language && (
            <span className="shrink-0 text-[11px] text-white/40 font-mono mt-0.5">{project.language}</span>
          )}
        </div>
        {project.description && (
          <p className="text-xs text-white/50 leading-relaxed line-clamp-2 font-sans">{project.description}</p>
        )}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/6 text-[11px] text-white/40">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 16 16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/></svg>
            {project.stargazers_count}
          </span>
          <ExternalLink size={11} className="ml-auto" />
        </div>
      </a>
    ))}
  </div>
);

export const Work = () => {
  const [githubProjects, setGithubProjects] = useState<GitHubProject[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/kdsecdev/repos?sort=updated&per_page=9")
      .then((r) => r.json())
      .then((data: GitHubProject[]) => {
        if (Array.isArray(data)) {
          const filtered = data.filter(
            (r) => !r.name.toLowerCase().includes("portfolio") && !r.name.startsWith(".")
          );
          setGithubProjects(filtered.slice(0, 6));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <SectionWrapper id="work">
      {/* Section header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3">
          Featured Projects
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
          A selection of projects I&apos;m proud of.
        </p>
      </div>

      {/* GitHub Activity Banner */}
      <a
        href="https://github.com/kdsecdev"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mb-10 sm:mb-14 p-5 sm:p-6 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
            <svg viewBox="0 0 16 16" className="w-5 h-5 fill-white" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-white text-sm">github.com/kdsecdev</p>
            <p className="text-xs text-white/40 mt-0.5">Active commits</p>
          </div>
        </div>

        <div className="flex-1 w-full overflow-hidden rounded-lg opacity-70 group-hover:opacity-100 transition-opacity min-w-0">
          <img
            src="https://ghchart.rshah.org/FF6B00/kdsecdev"
            alt="kdsecdev GitHub contribution graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="shrink-0 flex items-center gap-1.5 text-white/40 group-hover:text-white/70 transition-colors text-sm">
          <ExternalLink size={14} />
          <span className="hidden sm:inline text-xs">View Profile</span>
        </div>
      </a>

      {/* Featured Projects Grid */}
      <div className="mb-12 sm:mb-16">
        <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-sans">Highlights</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-[#111111]/90 border border-white/8 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-200 shadow-xl"
            >
              {/* Category + badge row */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium text-white/40 tracking-wide font-sans">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="inline-flex text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50 font-sans">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold font-display text-white mb-2 group-hover:text-[#FFA043] transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Tech chips — clean, no hashtags */}
              <div className="flex flex-wrap gap-1.5">
                {project.topics.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-white/4 border border-white/8 text-white/45 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/6">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors font-medium"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Source Code
                </a>
                {"liveUrl" in project && project.liveUrl && (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs text-[#FF6B00] hover:text-[#FFA043] transition-colors font-medium"
                  >
                    <ExternalLink size={11} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Recent Repos */}
      {githubProjects.length > 0 && (
        <div>
          <p className="text-xs text-white/30 uppercase tracking-widest mb-6 font-sans">Recent on GitHub</p>
          <ProjectGrid projects={githubProjects} />
        </div>
      )}

      {/* View All */}
      <div className="mt-10 text-center">
        <a
          href="https://github.com/kdsecdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
        >
          View all repositories on GitHub
          <ExternalLink size={13} />
        </a>
      </div>
    </SectionWrapper>
  );
};
