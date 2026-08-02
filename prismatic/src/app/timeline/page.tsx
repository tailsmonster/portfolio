import type { Metadata } from "next";
import { sortedTimeline, timelineCategories } from "@/data/archive";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "A complete timeline of everything I've worked on: work, education, projects, and certifications.",
};

export default function TimelinePage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-darkpurple">
      <main className="flex w-full max-w-3xl flex-col px-6 py-16 bg-white dark:bg-darkpurple sm:px-8">
        <header className="mb-12">
          <p className="text-sm font-medium text-zinc-500 dark:text-purplemuted">
            Everything I&apos;ve worked on, in order.
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black dark:text-offwhite">
            Timeline
          </h1>
        </header>

        <div className="relative ml-2 border-l-2 border-zinc-200 dark:border-purpleborder">
          {sortedTimeline.map((entry) => {
            const cat = timelineCategories[entry.category];
            return (
              <article
                key={entry.id}
                className="relative mb-10 pl-8 last:mb-0"
              >
                <span
                  className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 bg-white dark:bg-darkpurple ${cat.dot}`}
                  aria-hidden
                />
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-xs font-medium ${cat.badge}`}
                  >
                    {cat.label}
                  </span>
                  <time className="text-xs font-medium text-zinc-400 dark:text-offwhite0">
                    {entry.period}
                  </time>
                </div>
                <h2 className="mt-2 text-lg font-semibold text-black dark:text-offwhite">
                  {entry.title}
                </h2>
                {entry.subtitle ? (
                  <p className="text-sm font-medium text-zinc-500 dark:text-purplemuted">
                    {entry.subtitle}
                  </p>
                ) : null}
                <div className="mt-2 space-y-1.5">
                  {entry.description.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-zinc-600 dark:text-purplemuted"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                {entry.tags?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-purplecard dark:text-purplemuted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {entry.links?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
                    {entry.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                        >
                          {link.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
