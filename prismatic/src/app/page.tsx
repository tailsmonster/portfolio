import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projects, { type Project } from "@/data/projects";
import ProjectCard from "@/ui/components/ProjectCard";
import { site } from "@/data/site";
import me from "@/media/portraits/me.png";

export const metadata: Metadata = {
  description:
    "Software Engineer from New York. Building software, art, and things in between.",
};

const featuredIds = [4, 7, 5];

const featuredProjects: Project[] = featuredIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => !!project);

const techStack = [
  { name: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "typescript", url: "https://www.typescriptlang.org/" },
  { name: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "scss", url: "https://sass-lang.com/" },
  { name: "tailwind", url: "https://tailwindcss.com/" },
  { name: "react", url: "https://reactjs.org/" },
  { name: "nextjs", url: "https://nextjs.org/" },
  { name: "nodejs", url: "https://nodejs.org/" },
  { name: "express", url: "https://expressjs.com/" },
  { name: "postgresql", url: "https://www.postgresql.org/" },
  { name: "mongodb", url: "https://www.mongodb.com/" },
  { name: "jest", url: "https://jestjs.io/" },
  { name: "postman", url: "https://www.postman.com/" },
  { name: "net", url: "https://dotnet.microsoft.com/" },
  { name: "cs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "cpp", url: "https://isocpp.org/" },
  { name: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "python", url: "https://www.python.org/" },
  { name: "bash", url: "https://www.gnu.org/software/bash/" },
  { name: "vscodium", url: "https://vscodium.com/" },
  { name: "rider", url: "https://www.jetbrains.com/rider/" },
  { name: "figma", url: "https://www.figma.com/" },
  { name: "linux", url: "https://kernel.org/" },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-darkpurple">
      <main className="flex w-full max-w-5xl flex-col bg-white px-6 py-16 dark:bg-darkpurple sm:px-8">
        <section className="flex flex-wrap items-center justify-center gap-8 py-8">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-3xl text-zinc-700 dark:text-purplelight">
              hey, i&apos;m
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-offwhite">
              Nico Aroca
            </h1>
            <p className="text-3xl text-zinc-700 dark:text-purplelight">
              a software engineer from New York
            </p>
          </div>
          <Image
            src={me}
            alt="Portrait of Nico Aroca"
            width={512}
            height={512}
            priority
            sizes="(min-width: 640px) 20rem, 16rem"
            className="h-64 w-64 rounded-full border-4 border-zinc-200 object-cover dark:border-purpleborder sm:h-80 sm:w-80"
          />
        </section>

        <ul className="mt-6 flex justify-center gap-6">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/buttons/GitHub-100000.svg"
                alt="GitHub"
                width={96}
                height={28}
                className="h-10 w-auto drop-shadow-md"
              />
            </a>
          </li>
          <li>
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              <Image
                src="/buttons/RESUME-E53935.svg"
                alt="Resume"
                width={78}
                height={28}
                className="h-10 w-auto drop-shadow-md"
              />
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/buttons/LinkedIn-0077B5.svg"
                alt="LinkedIn"
                width={91}
                height={28}
                className="h-10 w-auto drop-shadow-md"
              />
            </a>
          </li>
        </ul>

        <section className="mx-auto mt-16 w-full max-w-4xl">
          <div className="space-y-4 text-xl text-zinc-700 dark:text-purplelight">
            <p>
              I&apos;m Nico, a passionate software engineer from Brooklyn, NY
              with a deep love for technology and creative coding. Whether
              it&apos;s building apps, modding old electronics, or diving into
              obscure technical challenges, I love creating things that are
              meaningful and functional. I&apos;m an alumni of The Marcy Lab
              School and a firm believer that great work doesn&apos;t need a
              traditional path.
            </p>
            <p>
              I&apos;m especially drawn to projects that involve audio, embedded
              systems, game development, or breathing new life into aging tech.
              Right now, I&apos;m focused on shipping complete polished
              projects, and learning as I go.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-black dark:text-offwhite">
            tech stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Image
                src={`https://skillicons.dev/icons?i=${name}`}
                alt={name}
                width={48}
                height={48}
                sizes="3rem"
                className="h-12 w-12 drop-shadow-md"
              />
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-4xl">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-black dark:text-offwhite">
            featured projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/archive"
              className="inline-block rounded-xl bg-blurple px-6 py-2 font-semibold text-offwhite transition hover:bg-peenk"
            >
              See More
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 w-full max-w-4xl">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black dark:text-offwhite">
            Contact Me
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-purplemuted">
            Want to get in touch? Use this form to send me an email, and
            I&apos;ll respond as soon as I can!
          </p>
          <form
            className="space-y-6"
            action={site.email}
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-zinc-700 dark:text-purplelight"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-blurple focus:ring-blurple dark:border-purpleborder dark:bg-purplecard"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-700 dark:text-purplelight"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-blurple focus:ring-blurple dark:border-purpleborder dark:bg-purplecard"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-700 dark:text-purplelight"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 p-2 shadow-sm focus:border-blurple focus:ring-blurple dark:border-purpleborder dark:bg-purplecard"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-blurple py-2 px-4 font-semibold text-offwhite transition hover:bg-peenk"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
