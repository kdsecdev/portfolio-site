import { SectionWrapper } from "./SectionWrapper";
import { ProjectGrid } from "./ProjectGrid";
import { ExternalLink } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage?: string;
}

export const featuredProjects = [
  {
    id: "accra-transit-optimizer",
    code: "PROJ_01",
    name: "Accra Transit Optimizer",
    description:
      "AI-powered public transport route optimizer for Accra, Ghana. Built with FastAPI, GTFS data feeds, and a Flutter mobile client. Won the BridgeLabs Ghana AI Hackathon 2025.",
    html_url: "https://github.com/kdsecdev/accra-transit-optimizer",
    topics: ["python", "fastapi", "flutter", "ai", "gtfs", "hackathon"],
    featured: true,
    badge: "🏆 Hackathon Winner · ⭐ 3",
  },
  {
    id: "aura-forensics",
    code: "PROJ_02",
    name: "Aura Forensics",
    description:
      "Autonomous AI forensic agent using a custom MCP bridge and Volatility 3 to detect unlinked rootkits via physical memory triangulation. Cutting-edge cybersecurity tooling.",
    html_url: "https://github.com/kdsecdev/Aura-Forensics",
    topics: ["python", "ai", "cybersecurity", "volatility3", "mcp", "forensics"],
    featured: true,
    badge: "🔐 Security Tool",
  },
  {
    id: "cineguide",
    code: "PROJ_03",
    name: "CineGuide",
    description:
      "A sleek movie discovery app built with React. Browse, search, and explore films with a clean and responsive UI. Live on Vercel.",
    html_url: "https://github.com/kdsecdev/cineguide",
    liveUrl: "https://cineguide-six.vercel.app",
    topics: ["react", "css", "javascript", "vercel"],
    featured: true,
    badge: "🚀 Live Demo",
  },
];

const getGithubRepos = async (username: string): Promise<Repo[]> => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=10`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      console.error("Failed to fetch GitHub repos");
      return [];
    }
    const repos = await res.json();
    return repos
      .filter(
        (repo: Repo) =>
          repo.name !== username &&
          !repo.name.toLowerCase().includes("config") &&
          repo.description !== null
      )
      .slice(0, 3);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

export const Work = async () => {
  const githubProjects = await getGithubRepos("kdsecdev");

  return (
    <SectionWrapper id="work">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <p className="font-lcd text-xs text-[#FFA043] tracking-widest uppercase mb-3">
          // SECTION: 02 // CODE &amp; REPOSITORIES
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-3 sm:mb-4">
          Featured Projects
        </h2>
        <p className="text-white/60 max-w-xl mx-auto text-base sm:text-lg">
          A selection of projects I&apos;m proud of — from hackathon winners to security tools.
        </p>
      </div>

      {/* ── GitHub Spotlight Banner ── */}
      <a
        href="https://github.com/kdsecdev"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mb-10 sm:mb-14 p-5 sm:p-6 rounded-2xl bg-[#121212]/90 border border-white/10 hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/[0.04] transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,107,0,0.15)]"
      >
        {/* GitHub wordmark + avatar */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center group-hover:border-[#FF6B00]/40 group-hover:bg-[#FF6B00]/10 transition-colors">
            <svg viewBox="0 0 16 16" className="w-6 h-6 fill-white group-hover:fill-[#FFA043] transition-colors" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </div>
          <div>
            <p className="font-bold text-white text-sm group-hover:text-[#FFA043] transition-colors">github.com/kdsecdev</p>
            <p className="font-lcd text-xs text-[#FF6B00] mt-0.5 tracking-wider">STATUS: ACTIVE COMMITS</p>
          </div>
        </div>

        {/* Contribution graph with Orange palette */}
        <div className="flex-1 w-full overflow-hidden rounded-lg opacity-85 group-hover:opacity-100 transition-opacity min-w-0">
          <img
            src="https://ghchart.rshah.org/FF6B00/kdsecdev"
            alt="kdsecdev GitHub contribution graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* CTA arrow */}
        <div className="shrink-0 flex items-center gap-1.5 text-white/50 group-hover:text-[#FFA043] transition-colors text-sm font-semibold">
          <ExternalLink size={15} />
          <span className="hidden sm:inline">View Profile</span>
        </div>
      </a>

      {/* Featured Projects Grid */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-lcd text-xs text-[#FFA043] uppercase tracking-widest px-4">
            // HIGHLIGHTS
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/[0.03] transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]"
            >
              {/* Header with LCD Code and Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-lcd text-xs text-[#FFA043] font-bold tracking-wider">
                  [{project.code}]
                </span>
                {project.badge && (
                  <span className="inline-flex text-xs px-2.5 py-1 rounded-full bg-[#FF6B00]/12 border border-[#FF6B00]/25 text-[#FFA043] font-sans font-medium">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#FFA043] transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.topics.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/8 text-white/60 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-white/6">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/6 border border-white/10 text-white/80 hover:text-white hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 transition-all text-xs font-medium"
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
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF6B00] text-black font-bold hover:bg-[#FF7A00] transition-all text-xs shadow-[0_0_12px_rgba(255,107,0,0.3)]"
                  >
                    <ExternalLink size={12} />
                    Live Demo
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
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="font-lcd text-xs text-[#FFA043] uppercase tracking-widest px-4">
              // RECENT_PUSHES
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <ProjectGrid projects={githubProjects} />
        </div>
      )}

      {/* View All Link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/kdsecdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#FF6B00]/50 hover:bg-[#FF6B00]/8 transition-all text-sm font-medium"
        >
          View all repositories on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </SectionWrapper>
  );
};
