import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white px-6 py-24 font-sans text-center dark:bg-darkpurple">
      <p className="text-6xl font-bold text-blurple dark:text-peenk">404</p>
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-offwhite">
        This page doesn&apos;t exist
      </h1>
      <p className="text-sm text-zinc-500 dark:text-purplemuted">
        The page you&apos;re looking for was moved, renamed, or never was.
      </p>
      <Link
        href="/"
        className="rounded-full border-2 border-peenk bg-blurple px-4 py-1 text-sm font-bold text-offwhite transition hover:bg-peenk hover:text-blurple"
      >
        Back home
      </Link>
    </div>
  );
}
