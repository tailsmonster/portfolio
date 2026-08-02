"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white px-6 py-24 font-sans text-center dark:bg-darkpurple">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-offwhite">
        Something went wrong
      </h1>
      <p className="text-sm text-zinc-500 dark:text-purplemuted">
        {error.digest
          ? `Error digest: ${error.digest}`
          : "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="rounded-full border-2 border-peenk bg-blurple px-4 py-1 text-sm font-bold text-offwhite transition hover:bg-peenk hover:text-blurple"
      >
        Try again
      </button>
    </div>
  );
}
