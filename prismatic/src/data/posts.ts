export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "Aug 2, 2026",
    excerpt:
      "The first entry in the dispatch log. What this blog is for, and why I'm writing it.",
    content: [
      "Welcome to the first post in the dispatch log. I've wanted a place to write for a while — something lighter than a dev log, more structured than a Twitter thread.",
      "This blog is where I'll document what I'm building, what I'm learning, and whatever I find interesting enough to remember. Think of it as a dispatch from the front lines of my own projects.",
      "The first real entries will cover the UBS Talent Accelerator Program, my work on the HTI platform, and the v2 rebuild of this very site. If you're reading this, thanks for stopping by.",
    ],
  },
  {
    slug: "why-dispatch",
    title: "Why Dispatch?",
    date: "Aug 2, 2026",
    excerpt:
      "Naming things is hard. Here's the story behind the blog's name.",
    content: [
      "Naming things is famously one of the hardest problems in computer science, right up there with cache invalidation and off-by-one errors.",
      "I wanted something short, punchy, and slightly unexpected. A dispatch is a message sent with purpose — from the field, from the front lines. That's exactly what I want this to be: a stream of reports from whatever I'm working on at the moment.",
      "It also sounds cool, which honestly counts for a lot. No further explanation needed.",
    ],
  },
  {
    slug: "prismatic-v2",
    title: "Building Prismatic v2",
    date: "Aug 2, 2026",
    excerpt:
      "Rebuilding my portfolio from scratch with Next.js, and the decisions that went into it.",
    content: [
      "The v1 of this site served me well, but it was time for a rebuild. This time I went with the Next.js App Router, Tailwind, and a cleaner, more deliberate structure.",
      "The Archive page is a complete timeline of everything I've worked on — pulled together from scattered projects, internships, and certifications. The Dispatch is the new blog you're reading right now.",
      "I'm still early in the rebuild, so expect more pages, better content, and a lot of polish in the coming weeks.",
    ],
  },
];

export default posts;
