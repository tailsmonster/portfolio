export type TimelineCategory =
  | "work"
  | "education"
  | "project"
  | "certification";

export type TimelineEntry = {
  id: string;
  title: string;
  subtitle?: string;
  description: string[];
  period: string;
  start: string;
  category: TimelineCategory;
  tags?: string[];
  links?: { label: string; href: string }[];
};

const timeline: TimelineEntry[] = [
  {
    id: "ubs",
    title: "AI Engineer (Talent Accelerator Program via NPower)",
    subtitle: "UBS",
    description: [
      "One of 23 members of the first Americas-based cohort of UBS' Talent Accelerator Program.",
    ],
    period: "Jan 2026 – Present",
    start: "2026-01",
    category: "work",
    tags: ["Software Engineering"],
  },
  {
    id: "wgu",
    title: "West Governors University",
    subtitle: "B.S. Computer Science",
    description: ["Currently in the process of obtaining a Bachelor's degree."],
    period: "Dec 2025 – Present",
    start: "2025-12",
    category: "education",
    tags: ["Computer Science"],
  },
  {
    id: "hti-website",
    title: "Hedgehog Technical Institute (Website)",
    subtitle: "Software Project",
    description: [
      "A frontend platform for HTI's 300+ indie-dev community, built with reusable layouts, schema-driven event pages, and a modern routing system that cut new-event dev time by ~40%.",
    ],
    period: "2025",
    start: "2025-07",
    category: "project",
    tags: ["ReactJS", "TypeScript", "React Router", "TailwindCSS", "Vite"],
    links: [{ label: "hedgehogtechnicalinstitute.com", href: "https://hedgehogtechnicalinstitute.com/" }],
  },
  {
    id: "hti",
    title: "Web Developer (Volunteer)",
    subtitle: "Hedgehog Technical Institute",
    description: [
      "Supports a 300+ member indie-dev community by engineering and maintaining HTI's React/TypeScript platform and event systems.",
      "Rebuilt routing architecture using React Router v7 with nested layouts and page shells, cutting development time for new event pages by ~40%.",
      "Shipped UI upgrades and phpBB customizations that improved forum usability and boosted community engagement by 15%.",
      "Partnered with HTI leads to deliver new event pages (CGS, arcINDIE) and improve mobile UX and visual consistency across the platform.",
    ],
    period: "Jul 2025 – Present",
    start: "2025-07",
    category: "work",
    tags: ["Video Games", "Remote"],
  },
  {
    id: "eventxchange",
    title: "EventXChange",
    subtitle: "Software Project",
    description: [
      "A full-stack community platform for hosting and discovering local events with others. Built at the freeCodeCamp 2025 Summer Hackathon.",
    ],
    period: "2025",
    start: "2025-06",
    category: "project",
    tags: ["ReactJS", "Vite", "ExpressJS", "MongoDB", "Mongoose", "TailwindCSS"],
    links: [{ label: "GitHub", href: "https://github.com/freeCodeCamp-2025-Summer-Hackathon/EventXchange" }],
  },
  {
    id: "dotnet-backend",
    title: "Back-End Development with .NET",
    subtitle: "Microsoft",
    description: [
      "Certification covering C#, ASP.NET, application frameworks, JSON, middleware, REST APIs, and back-end web development.",
    ],
    period: "Aug 2025",
    start: "2025-08",
    category: "certification",
    tags: ["C#", "ASP.NET", ".NET", "REST APIs"],
    links: [{ label: "Verify", href: "https://coursera.org/verify/CE5GCAG14T51" }],
  },
  {
    id: "csharp",
    title: "Learn C# Course",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Learn C# course."],
    period: "Jul 2025",
    start: "2025-07",
    category: "certification",
    tags: ["C#", ".NET"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/65f0ff88f4fc58e0536b3b51648dff24" }],
  },
  {
    id: "spark",
    title: "Career Launch Spark Fellow",
    subtitle: "The Marcy Lab School",
    description: [
      "Developed communication and behavioral interviewing skills through structured coaching, practice, and feedback aimed at clarity and confidence.",
      "Worked weekly with a career coach on mock interviews, portfolio refinement, and consistent strategies for presenting technical work and approaching interview problems.",
    ],
    period: "Apr 2025 – Dec 2025",
    start: "2025-04",
    category: "work",
    tags: ["Professional Development"],
  },
  {
    id: "google-tech-support",
    title: "Technical Support Fundamentals",
    subtitle: "Google",
    description: ["Completed Google's Technical Support Fundamentals certification."],
    period: "Mar 2025",
    start: "2025-03",
    category: "certification",
    tags: ["Linux", "Networking", "Troubleshooting"],
    links: [{ label: "Verify", href: "https://coursera.org/verify/2JDXHCOVBL3S" }],
  },
  {
    id: "cloud",
    title: "Fundamentals of Cloud Computing Micro-Bootcamp",
    subtitle: "StackRoute Learning",
    description: ["Completed a micro-bootcamp covering cloud computing fundamentals."],
    period: "Feb 2025",
    start: "2025-02",
    category: "certification",
    tags: ["Cloud Computing", "AWS"],
  },
  {
    id: "bmcc",
    title: "Borough of Manhattan Community College",
    subtitle: "Business Management → Cybersecurity",
    description: [
      "Used the year to build meaningful connections across campus while exploring entrepreneurship and core cybersecurity fundamentals.",
    ],
    period: "Jan 2025 – Dec 2025",
    start: "2025-01",
    category: "education",
    tags: ["Business", "Cybersecurity"],
  },
  {
    id: "google-sep",
    title: "Google Software Engineering Program Fellow",
    subtitle: "Google",
    description: [
      "Selected for a competitive Google mentorship and received weekly 1:1 guidance from a Google engineer.",
      "Worked through DS&A problems involving decomposition, algorithm design, and optimized implementations in JavaScript.",
    ],
    period: "Oct 2024 – Dec 2024",
    start: "2024-10",
    category: "work",
    tags: ["DS&A", "JavaScript", "Mentorship"],
  },
  {
    id: "cpp",
    title: "Learn C++ Course",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Learn C++ course."],
    period: "Sep 2024",
    start: "2024-09",
    category: "certification",
    tags: ["C++"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/b74a2390dfc4127fa5d43fe147425ad0" }],
  },
  {
    id: "marcy",
    title: "The Marcy Lab School",
    subtitle: "Software Engineering",
    description: [
      "Completed 2,000+ hours of full-stack engineering, computer science, and leadership training.",
      "Built and deployed multiple production-grade apps using React, Node.js, SQL, and modern web development practices.",
    ],
    period: "Sep 2023 – Sep 2024",
    start: "2023-09",
    category: "education",
    tags: ["React", "Node.js", "SQL"],
  },
  {
    id: "marcy-intern",
    title: "Software Engineer Intern",
    subtitle: "The Marcy Lab School",
    description: [
      "Built a real-time 3D rendering engine using C++ and OpenGL, designing shaders, buffers, and timing control from scratch.",
      "Delivered a complete rendering pipeline, from shader architecture to frame timing, under tight project constraints.",
    ],
    period: "Jun 2024 – Sep 2024",
    start: "2024-06",
    category: "work",
    tags: ["C++", "OpenGL"],
  },
  {
    id: "prismgl",
    title: "prismGL",
    subtitle: "Software Project",
    description: [
      "A desktop application that displays a 3D prism using OpenGL. Capstone project built with a complete rendering pipeline from scratch.",
    ],
    period: "2024",
    start: "2024-06",
    category: "project",
    tags: ["C++", "C", "OpenGL", "GLFW"],
    links: [{ label: "GitHub", href: "https://github.com/tailsmonster/prismGL" }],
  },
  {
    id: "c",
    title: "Learn C Skill Path",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Learn C skill path."],
    period: "Jun 2024",
    start: "2024-06",
    category: "certification",
    tags: ["C"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/9dba9d9b6bf64cf58b2b416ef9cd0912" }],
  },
  {
    id: "linux",
    title: "Introduction to Linux Course",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Introduction to Linux course."],
    period: "Apr 2024",
    start: "2024-04",
    category: "certification",
    tags: ["Linux", "Ubuntu", "Arch"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/54de574543f242baaf263227f82073bf" }],
  },
  {
    id: "pear",
    title: "PEAR",
    subtitle: "Software Project",
    description: [
      "PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.",
    ],
    period: "2024",
    start: "2024-01",
    category: "project",
    tags: ["ReactJS", "ExpressJS", "PostgreSQL", "CRUD", "Auth"],
    links: [{ label: "GitHub", href: "https://github.com/NCA-Association/PEAR" }],
  },
  {
    id: "js",
    title: "Learn JavaScript Course",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Learn JavaScript course."],
    period: "Jan 2024",
    start: "2024-01",
    category: "certification",
    tags: ["JavaScript"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/705dcb15de0da4dd9d9fc4f3274b430e" }],
  },
  {
    id: "recipewizard",
    title: "Recipe Wizard",
    subtitle: "Software Project",
    description: [
      "A web application for anyone who needs to quickly look up a recipe based on the ingredients they have at home. Users can see ingredient lists, directions, and a YouTube video per meal!",
    ],
    period: "2024",
    start: "2024-01",
    category: "project",
    tags: ["JavaScript", "HTML5", "CSS", "Vite", "RecipeDB"],
    links: [
      { label: "GitHub", href: "https://github.com/RecipeWizardTeam/Recipe-Wizard" },
      { label: "Live", href: "https://recipewizardteam.github.io/Recipe-Wizard/" },
    ],
  },
  {
    id: "breedguesser",
    title: "Breed Guesser",
    subtitle: "Software Project",
    description: [
      "A fun and interactive app for dog lovers that utilizes the Dog API! Test your knowledge of dog breeds in a guessing game, search for specific breeds, and browse random dog pictures!",
    ],
    period: "2024",
    start: "2024-01",
    category: "project",
    tags: ["ReactJS", "CSS", "Vite", "Hash Router", "DogAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/TeamDogald/Breed-Guesser" },
      { label: "Live", href: "https://teamdogald.github.io/Breed-Guesser/" },
    ],
  },
  {
    id: "creative-art-works",
    title: "Character Designing Intern",
    subtitle: "Creative Art Works",
    description: [
      "Engaged in a 14-week internship focused on character creation and narrative development.",
      "Collaborated with diverse artists and designers, receiving feedback and career guidance on character design.",
      `Honored with the "Most Original Character" award from my group.`,
    ],
    period: "Feb 2023 – Jun 2023",
    start: "2023-02",
    category: "work",
    tags: ["Art", "Character Design"],
  },
  {
    id: "palettepicker",
    title: "Palette Picker",
    subtitle: "Software Project",
    description: [
      "A web application that lets you customize your palettes, stored locally.",
    ],
    period: "2023",
    start: "2023-01",
    category: "project",
    tags: ["JavaScript", "HTML5", "CSS", "Vite"],
    links: [
      { label: "GitHub", href: "https://github.com/tailsmonster/Palette-Picker" },
      { label: "Live", href: "https://tailsmonster.github.io/Palette-Picker/" },
    ],
  },
  {
    id: "command-line",
    title: "Learn the Command Line Course",
    subtitle: "Codecademy",
    description: ["Completed Codecademy's Learn the Command Line course."],
    period: "Oct 2023",
    start: "2023-10",
    category: "certification",
    tags: ["Bash"],
    links: [{ label: "Verify", href: "https://www.codecademy.com/profiles/tailsmonster/certificates/c87ba0541f8be78bc2f4ba1128233f6f" }],
  },
  {
    id: "uag",
    title: "Urban Assembly Gateway School for Technology",
    subtitle: "Digital Design → Software Engineering",
    description: [
      "Acquired proficiency in a range of programming languages, including HTML, CSS, Python, JavaScript, and Java, through the Software Engineering Pathway.",
      "Developed expertise in visual design tools like Adobe Photoshop and Adobe Illustrator, through the Digital Design and Animation Pathway.",
    ],
    period: "Sep 2019 – Jun 2023",
    start: "2019-09",
    category: "education",
    tags: ["HTML", "CSS", "Python", "JavaScript", "Java", "Photoshop", "Illustrator"],
  },
  {
    id: "asc",
    title: "Software Engineering Apprentice",
    subtitle: "All Star Code",
    description: [
      "Participated in a 6-week summer intensive focused on web application development.",
      "Developed practical solutions addressing real-world issues through web application projects.",
    ],
    period: "Jul 2022 – Aug 2022",
    start: "2022-07",
    category: "work",
    tags: ["Web Development"],
  },
  {
    id: "youscience",
    title: "Competency in Computer Programming I",
    subtitle: "YouScience",
    description: ["Certified in JavaScript through YouScience."],
    period: "May 2022",
    start: "2022-05",
    category: "certification",
    tags: ["JavaScript"],
  },
];

export const sortedTimeline = [...timeline].sort((a, b) =>
  b.start.localeCompare(a.start),
);

export const timelineCategories: Record<
  TimelineCategory,
  { label: string; badge: string; dot: string }
> = {
  work: {
    label: "Work",
    badge: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30",
    dot: "border-blue-500",
  },
  education: {
    label: "Education",
    badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30",
    dot: "border-emerald-500",
  },
  project: {
    label: "Project",
    badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/30",
    dot: "border-violet-500",
  },
  certification: {
    label: "Certification",
    badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30",
    dot: "border-amber-500",
  },
};
