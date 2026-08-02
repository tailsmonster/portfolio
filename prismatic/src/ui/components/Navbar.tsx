"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { contactLinks } from "@/data/site";

const links = [
  { href: "/", label: "about" },
  { href: "/archive", label: "archive" },
  { href: "/timeline", label: "timeline" },
  { href: "/dispatch", label: "dispatch" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [contactOpen, setContactOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contactOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setContactOpen(false);
    };

    const onMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, [contactOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClasses = (href: string) =>
    `pb-1 border-b-2 transition ${
      isActive(href)
        ? "border-offwhite text-offwhite"
        : "border-transparent hover:border-peenk"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-blurple font-sans">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <ThemeToggle />
          <Link
            href="/"
            className="truncate font-modak text-2xl text-offwhite leading-none sm:text-3xl"
          >
            NICO AROCA
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center space-x-6 text-sm font-heading font-bold text-offwhite md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setContactOpen(!contactOpen)}
              aria-label={contactOpen ? "Close contact menu" : "Open contact menu"}
              aria-expanded={contactOpen}
              className="shrink-0 text-offwhite transition hover:text-peenk"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

            {contactOpen && (
              <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-zinc-200 bg-white p-2 shadow-lg dark:border-purpleborder dark:bg-purplecard">
                <p className="px-3 pb-1 pt-2 text-xs font-heading font-semibold uppercase tracking-wider text-zinc-500 dark:text-purplemuted">
                  Contact
                </p>
                <ul className="flex flex-col">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-2 text-sm font-heading font-bold text-blurple transition hover:bg-zinc-100 dark:text-blue-300 dark:hover:bg-purplehover"
                        onClick={() => setContactOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col border-t border-zinc-200 pb-1 pt-1 dark:border-purpleborder md:hidden">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-3 py-2 text-sm font-heading font-bold transition hover:bg-zinc-100 dark:hover:bg-purplehover ${
                          isActive(link.href)
                            ? "text-black dark:text-offwhite"
                            : "text-zinc-600 dark:text-purplemuted"
                        }`}
                        onClick={() => setContactOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
