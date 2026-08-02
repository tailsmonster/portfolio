import palettepickerImg from "@/media/projects/software/palettepicker/screenshot.webp";
import recipewizardImg from "@/media/projects/software/recipewizard/screenshot.webp";
import breedguesserImg from "@/media/projects/software/breedguesser/screenshot.webp";
import pearImg from "@/media/projects/software/pear/screenshot.webp";
import prismglImg from "@/media/projects/software/prismgl/screenshot.webp";
import eventxchangeImg from "@/media/projects/software/hackathon_fcc2025/screenshot.webp";
import htiImg from "@/media/projects/software/hti/site_screenshot.webp";
import type { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  year: number;
  category: string;
  tags: string[];
  stack: string[];
  image: StaticImageData;
  repo?: string;
  demo?: string;
  deployment?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Palette Picker",
    description:
      "A web application that lets you customize your palettes, stored locally.",
    year: 2023,
    category: "Software",
    tags: ["Web", "Solo", "Colors", "Local Storage", "Frontend", "App"],
    stack: ["Javascript", "HTML5", "CSS", "Vite"],
    image: palettepickerImg,
    repo: "https://github.com/tailsmonster/Palette-Picker",
    demo: "https://tailsmonster.github.io/Palette-Picker/",
  },
  {
    id: 2,
    title: "Recipe Wizard",
    description:
      "A web application made for those who need to quickly look up a recipe based on the ingredients they have at home. Users can see ingredients lists, directions, and a youtube video per meal!",
    year: 2024,
    category: "Software",
    tags: ["Web", "Food", "API", "Frontend", "App"],
    stack: ["Javascript", "HTML5", "CSS", "Vite", "RecipeDB"],
    image: recipewizardImg,
    repo: "https://github.com/RecipeWizardTeam/Recipe-Wizard",
    demo: "https://recipewizardteam.github.io/Recipe-Wizard/",
  },
  {
    id: 3,
    title: "Breed Guesser",
    description:
      "A fun and interactive app for dog lovers that utilizes the Dog API! Users can test their knowledge of dog breeds in a guessing game, search for specific breeds, and browse random dog pictures!",
    year: 2024,
    category: "Software",
    tags: ["Web", "Dogs", "API", "Frontend", "App", "Games", "Responsive Layout"],
    stack: ["ReactJS", "CSS", "Vite", "Hash Router", "DogAPI"],
    image: breedguesserImg,
    repo: "https://github.com/TeamDogald/Breed-Guesser",
    demo: "https://teamdogald.github.io/Breed-Guesser/",
  },
  {
    id: 4,
    title: "PEAR",
    description:
      "PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.",
    year: 2024,
    category: "Software",
    tags: ["Web", "Civic Tech", "Fullstack", "CRUD", "RESTful API", "User Authentication", "App"],
    stack: ["ReactJS", "Vite", "ExpressJS", "KnexJS", "Sass", "PostgreSQL"],
    image: pearImg,
    repo: "https://github.com/NCA-Association/PEAR",
  },
  {
    id: 5,
    title: "prismGL",
    description: "A desktop application that displays a 3D prism using OpenGL.",
    year: 2024,
    category: "Software",
    tags: ["Desktop", "Solo", "Capstone", "App", "Shaders", "3D", "Low Level"],
    stack: ["C++", "C", "OpenGL", "GLFW", "Visual Studio"],
    image: prismglImg,
    repo: "https://github.com/tailsmonster/prismGL",
  },
  {
    id: 6,
    title: "EventXChange",
    description:
      "A full-stack community platform for hosting and discovering local events with others.",
    year: 2025,
    category: "Software",
    tags: ["Web", "Hackathon", "Fullstack", "CRUD", "RESTful API", "Agile", "User Authentication", "App", "freeCodeCamp"],
    stack: ["ReactJS", "Vite", "ExpressJS", "MongoDB", "Mongoose", "TailwindCSS"],
    image: eventxchangeImg,
    repo: "https://github.com/freeCodeCamp-2025-Summer-Hackathon/EventXchange",
  },
  {
    id: 7,
    title: "Hedgehog Technical Institute (Website)",
    description:
      "A frontend platform for HTI's 300+ indie-dev community, built with reusable layouts, schema-driven event pages, and a modern routing system that cut new-event dev time by ~40%.",
    year: 2025,
    category: "Software",
    tags: ["Web", "Community", "Online Events", "Schemas"],
    stack: ["ReactJS", "TypeScript", "React Router", "TailwindCSS", "Vite"],
    image: htiImg,
    deployment: "https://hedgehogtechnicalinstitute.com/",
  },
];

export default projects;
