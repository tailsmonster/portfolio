export default function Loading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white px-6 py-24 font-sans dark:bg-darkpurple">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-200 border-t-blurple dark:border-purpleborder dark:border-t-peenk" />
      <p className="text-sm font-medium text-zinc-500 dark:text-purplemuted">
        Loading…
      </p>
    </div>
  );
}
