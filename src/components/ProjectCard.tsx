"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./Card";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  projectUrl,
}) => {
  return (
    <Link href={projectUrl} target="_blank">
      <Card
        className="overflow-hidden h-full p-0"
        whileHover={{
          y: -8,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold font-display text-white">{title}</h3>
          <p className="mt-2 text-sm text-text-primary">{description || "No description available."}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-accent-primary/20 text-accent-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};
