import { SectionWrapper } from "./SectionWrapper";
import { ProjectGrid } from "./ProjectGrid";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

const getGithubRepos = async (username: string): Promise<Repo[]> => {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=pushed&per_page=3`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    if (!res.ok) {
      console.error("Failed to fetch GitHub repos");
      return [];
    }
    const repos = await res.json();
    return repos.filter((repo: Repo) => repo.name !== username).slice(0, 3);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

export const Work = async () => {
  const projects = await getGithubRepos("kdsecdev");

  return (
    <SectionWrapper id="work">
      <h2 className="text-4xl font-bold font-display text-center mb-12">
        My Recent Work
      </h2>
      <ProjectGrid projects={projects} />
    </SectionWrapper>
  );
};
