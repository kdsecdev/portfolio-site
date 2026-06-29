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

// Curated featured projects — manually defined for a premium showcase
export const featuredProjects = [
  {
    id: "accra-transit-optimizer",
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
    name: "CineGuide",
    description:
      "A sleek movie discovery app built with React. Browse, search, and explore films with a clean and responsive UI. Live on Vercel.",
    html_url: "https://github.com/kdsecdev/cineguide",
    liveUrl: "https://cineguide-six.vercel.app",
    topics: ["react", "css", "javascript", "vercel"],
    featured: true,
    badge: "🚀 Live",
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
    // Exclude profile repo, config repos, and empty repos
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
      <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-4 tracking-tight">
        My Work
      </h2>
      <p className="text-center text-text-secondary mb-16 text-lg">
        A selection of projects I&apos;m proud of — from hackathon builds to production apps.
      </p>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-mono text-accent-primary uppercase tracking-widest px-4">
            Featured
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/3 border border-white/10 hover:border-accent-primary/30 hover:bg-white/5 transition-all duration-300"
            >
              {project.badge && (
                <span className="inline-flex w-fit text-xs px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono">
                  {project.badge}
                </span>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.topics.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-white/8 text-white/50 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all text-xs font-medium"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
                {"liveUrl" in project && project.liveUrl && (
                  <a
                    href={project.liveUrl as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/25 text-accent-primary hover:bg-accent-primary/20 transition-all text-xs font-medium"
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
            <span className="text-xs font-mono text-text-secondary uppercase tracking-widest px-4">
              Recent on GitHub
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-text-secondary hover:text-white hover:border-white/30 transition-all text-sm font-medium"
        >
          View all on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </SectionWrapper>
  );
};
