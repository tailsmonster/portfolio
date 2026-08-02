import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-darkpurple">
      <main className="flex w-full max-w-3xl flex-col px-6 py-16 bg-white dark:bg-darkpurple sm:px-8">
        <Link
          href="/dispatch"
          className="text-sm font-medium text-zinc-500 underline-offset-4 hover:underline dark:text-purplemuted"
        >
          ← Dispatch
        </Link>
        <article className="mt-8">
          <header>
            <time className="text-xs font-medium text-zinc-400 dark:text-offwhite0">
              {post.date}
            </time>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black dark:text-offwhite">
              {post.title}
            </h1>
          </header>
          <div className="mt-6 space-y-4">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="leading-relaxed text-zinc-600 dark:text-purplemuted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
