import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl bg-zinc-50 p-4 shadow-md dark:bg-purplecard">
      <Image
        src={project.image}
        alt={`${project.title} screenshot`}
        width={640}
        height={384}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />
      <h2 className="text-xl font-semibold text-black dark:text-offwhite">
        {project.title}
      </h2>
      <p className="mb-2 text-xs text-zinc-500 dark:text-purplemuted">
        {project.year}
      </p>
      <p className="mb-2 text-sm text-zinc-600 dark:text-purplelight">
        {project.description}
      </p>
      <p className="mb-2 text-xs text-zinc-500 dark:text-purplemuted">
        Tags: {project.tags.join(", ")}
      </p>
      <p className="mb-2 text-xs text-zinc-500 dark:text-purplemuted">
        Stack: {project.stack.join(", ")}
      </p>
      <div className="mt-auto flex flex-wrap gap-4 pt-3 text-sm font-medium">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Live Demo
          </a>
        )}
        {project.deployment && (
          <a
            href={project.deployment}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline dark:text-red-400"
          >
            Visit Site
          </a>
        )}
      </div>
    </article>
  );
}
