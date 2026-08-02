import type { Metadata } from "next";
import projects from "@/data/projects";
import ProjectCard from "@/ui/components/ProjectCard";

export const metadata: Metadata = {
  title: "Archive",
  description: "Software projects, past and present.",
};

export default function ArchivePage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-darkpurple">
      <main className="flex w-full max-w-5xl flex-col bg-white px-6 py-16 dark:bg-darkpurple sm:px-8">
        <header className="mb-12">
          <p className="text-sm font-medium text-zinc-500 dark:text-purplemuted">
            Software projects, past and present.
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black dark:text-offwhite">
            Archive
          </h1>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...projects].reverse().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
