import { Experience } from "./Experience";

import ascLogo from '../assets/static/logos/asc.png';
import creativeartworksLogo from '../assets/static/logos/creativeartworks.jpg';
import marcyLogo from '../assets/static/logos/marcy.png'; 
import googleLogo from '../assets/static/logos/google.jpg'; 
import htiLogo from '../assets/static/logos/hti.png'; 

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
  "Software Engineer Capstone Project Intern",
  "The Marcy Lab School",
  [
    "Completed a 10-week internship simulating a professional software development environment.",
    "Spent 4 weeks mastering C++ and OpenGL, followed by 6 weeks developing a basic graphics engine.",
    `Demonstrated strong commitment, self-management, and a focus on continuous improvement.`,
  ],
  "Brooklyn, New York",
  "On-site",
  "Internship",
  ["Jun", "2024"],
  "Art",
  marcyLogo,
  ["Sep", "2024"],
)

const x4 = new Experience(
  4,
  "G-SWEP Fellow (Google Software Engineering Program)",
  "Google",
  [
    "Engaged in weekly 1:1 mentorship to deepen understanding of data structures and algorithms.",
    "Strengthened technical problem-solving and interview skills through structured coaching.",
  ],
  "Brooklyn, New York",
  "Remote",
  "Mentorship",
  ["Oct", "2024"],
  "Art",
  googleLogo,
  ["Dec", "2024"],
)

const x5 = new Experience(
  4,
  "Software Engineer (Volunteer)",
  "Hedgehog Technical Institute",
  [
    "Shipped production-ready landing and event pages using React, TypeScript, and TailwindCSS.",
    "Customized and maintained phpBB community forums, implementing UI enhancements and supporting user engagement features.",
  ],
  "United Kingdom",
  "Remote",
  "Part-time Volunteer",
  ["Jul", "2025"],
  "Video Games",
  htiLogo,
  ["Present"],
)


experiences = [x1,x2,x3,x4,x5];

export default experiences;