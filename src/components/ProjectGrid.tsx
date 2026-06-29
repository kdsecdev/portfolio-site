"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  homepage?: string;
}

interface ProjectGridProps {
  projects: Repo[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          className="h-full"
        >
          <ProjectCard
            title={project.name}
            description={project.description}
            tags={project.topics}
            imageUrl={`https://socialify.git.ci/kdsecdev/${project.name}/image?theme=Dark`}
            projectUrl={project.html_url}
            language={project.language}
            stars={project.stargazers_count}
            forks={project.forks_count}
            homepage={project.homepage}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
