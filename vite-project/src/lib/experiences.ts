import { Experience } from "./Experience";

import ascLogo from '../assets/static/logos/asc.png';
import creativeartworksLogo from '../assets/static/logos/creativeartworks.jpg';
import marcyLogo from '../assets/static/logos/marcy.png'; 
import googleLogo from '../assets/static/logos/google.jpg'; 
import htiLogo from '../assets/static/logos/hti.png'; 
import ubsLogo from '../assets/static/logos/ubs.png'; 

let experiences:Experience[] = [];

const x1 = new Experience(
  1,
  "Software Engineering Apprentice",
  "All Star Code",
  [
    "Participated in a 6-week summer intensive focused on web application development.",
    "Developed practical solutions addressing real-world issues through web application projects."
  ],
  "New York City",
  "Remote",
  "Apprenticeship",
  ["Jul", "2022"],
  "Software Engineering",
  ascLogo,
  ["Aug", "2022"],
)

const x2 = new Experience(
  2,
  "Character Designing Intern",
  "Creative Art Works",
  [
    "Engaged in a 14-week internship focused on character creation and narrative development.",
    "Collaborated with diverse artists and designers, receiving feedback and career guidance on character design.",
    `Honored with the "Most Original Character" award from my group.`,
  ],
  "New York City",
  "Hybrid",
  "Internship",
  ["Feb", "2023"],
  "Art",
  creativeartworksLogo,
  ["Jun", "2023"],
)

const x3 = new Experience(
  3,
  "Software Engineer Intern",
  "The Marcy Lab School",
  [
    "Built a real-time 3D rendering engine using C++ and OpenGL, designing shaders, buffers, and timing control from scratch.",
    "Delivered a complete rendering pipeline, from shader architecture to frame timing, under tight project constraints.",
  ],
  "Brooklyn, New York",
  "On-site",
  "Internship",
  ["Jun", "2024"],
  "Software Engineering",
  marcyLogo,
  ["Sep", "2024"],
)

const x4 = new Experience(
  4,
  "Google Software Engineering Program Fellow",
  "Google",
  [
    "Selected for a competitive Google mentorship and received weekly 1:1 guidance from a Google engineer.",
    "Worked through DS&A problems involving decomposition, algorithm design, and optimized implementations in JavaScript.",
  ],
  "Brooklyn, New York",
  "Remote",
  "Mentorship",
  ["Oct", "2024"],
  "Professional Development",
  googleLogo,
  ["Dec", "2024"],
)

const x5 = new Experience(
  5,
  "Career Launch Spark Fellow",
  "The Marcy Lab School",
  [
    "Developing communication and behavioral interviewing skills through structured coaching, practice, and feedback aimed at clarity and confidence.",
    "Working weekly with a career coach on mock interviews, portfolio refinement, and consistent strategies for presenting technical work and approaching interview problems.",
  ],
  "Brooklyn, New York",
  "Hybrid",
  "Mentorship",
  ["Apr", "2025"],
  "Professional Development",
  marcyLogo,
  ["Dec", "2025"],
)

const x6 = new Experience(
  6,
  "Web Developer (Volunteer)",
  "Hedgehog Technical Institute",
  [
    "Supports a 300+ member indie-dev community by engineering and maintaining HTI’s React/TypeScript platform and event systems.",
    "Rebuilt routing architecture using React Router v7 with nested layouts and page shells, cutting development time for new event pages by ~40%.",
    "Shipped UI upgrades and phpBB customizations that improved forum usability and boosted community engagement by 15%.",
    "Partnered with HTI leads to delivering new event pages (CGS, arcINDIE) and improving mobile UX and visual consistency across the platform."
  ],
  "United Kingdom",
  "Remote",
  "Volunteer",
  ["Jul", "2025"],
  "Video Games",
  htiLogo,
  ["Present"],
)

const x7 = new Experience (
  7,
  "AI Engineer (Talent Accelerator Program via NPower)",
  "UBS",
  [
    "Developing AI-enabled features for financial services workflows, including integrating LLM-based components into production systems.",
    "Contributing to scalable interfaces for AI-driven decision systems using modern frameworks and secure cloud infrastructure.",
    "Collaborating with cross-functional teams to ensure outputs meet rigorous reliability, security, and performance standards.",
  ],
  "Queens, New York",
  "On-site",
  "Full-Time",
  ["Jan", "2026"],
  ubsLogo,
  ["Present"],
)

experiences = [x1,x2,x3,x4,x5,x6,x7];

export default experiences;
