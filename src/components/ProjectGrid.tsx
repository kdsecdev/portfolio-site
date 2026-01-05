"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

interface ProjectGridProps {
  projects: Repo[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.name}
          description={project.description}
          tags={project.topics}
          imageUrl={`https://socialify.git.ci/kdsecdev/${project.name}/image?theme=Dark`}
          projectUrl={project.html_url}
        />
      ))}
    </motion.div>
  );
};
