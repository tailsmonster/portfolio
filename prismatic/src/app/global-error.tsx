"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-darkpurple px-6 font-sans text-center text-offwhite">
        <h1 className="text-4xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <p className="text-sm text-purplemuted">
          {error.digest ? `Error digest: ${error.digest}` : "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="rounded-full border-2 border-peenk px-4 py-1 text-sm font-bold text-offwhite transition hover:bg-peenk hover:text-blurple"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
