import type { Metadata } from "next";
import Link from "next/link";
import posts from "@/data/posts";

export const metadata: Metadata = {
  title: "Dispatch",
  description: "The blog: dispatches on what I'm building, learning, and thinking about.",
};

export default function DispatchPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-darkpurple">
      <main className="flex w-full max-w-3xl flex-col px-6 py-16 bg-white dark:bg-darkpurple sm:px-8">
        <header className="mb-12">
          <p className="text-sm font-medium text-zinc-500 dark:text-purplemuted">
            Notes from the front lines.
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-black dark:text-offwhite">
            Dispatch
          </h1>
        </header>

        <ul className="divide-y divide-zinc-200 dark:divide-purpleborder">
          {posts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0 last:pb-0">
              <Link href={`/dispatch/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-semibold text-black transition-colors group-hover:text-blue-600 dark:text-offwhite dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>
                  <time className="shrink-0 text-xs font-medium text-zinc-400 dark:text-offwhite0">
                    {post.date}
                  </time>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-purplemuted">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-blue-600 underline-offset-4 group-hover:underline dark:text-blue-400">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
