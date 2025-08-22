import { Project } from "./Project";

// in a perfect world, we'd have a cool backend to store this in. For now though, this is fine. <- nevermind this is stupid LOL. 
let projects:Project[] = [];

const p1 = new Project(
  1,
  "Palette Picker",
  "A web application that lets you customize your palettes, stored locally.",
  2023,
  "Software",
  ["Web", "Solo", "Colors", "Local Storage", "Frontend", "App"],
  ["Javascript", "HTML5", "CSS", "Vite", ],
  "/screenshots/palettepicker.png",
  "https://github.com/tailsmonster/Palette-Picker",
  "https://tailsmonster.github.io/Palette-Picker/"
);

const p2 = new Project(
  2,
  "Recipe Wizard",
  "A web application made for those who need to quickly look up a recipe based on the ingredients they have at home. Users can see ingredients lists, directions, and a youtube video per meal!",
  2024,
  "Software",
  ["Web", "Food", "API", "Frontend", "App"],
  ["Javascript", "HTML5", "CSS", "Vite", "RecipeDB"],
  "/screenshots/recipewizard.jpg",
  "https://github.com/RecipeWizardTeam/Recipe-Wizard",
  "https://recipewizardteam.github.io/Recipe-Wizard/"
);

const p3 = new Project(
  3,
  "Breed Guesser",
  "A fun and interactive app for dog lovers that utilizes the Dog API! Users can test their knowledge of dog breeds in a guessing game, search for specific breeds, and browse random dog pictures! ",
  2024,
  "Software",
  ["Web", "Dogs", "API", "Frontend", "ArchArch!!", "App", "Games", "Responsive Layout"],
  ["ReactJS", "CSS", "Vite", "Hash Router", "DogAPI"],
  "/screenshots/breedguesser.png",
  "https://github.com/TeamDogald/Breed-Guesser",
  "https://teamdogald.github.io/Breed-Guesser/",
);

const p4 = new Project(
  4,
  "PEAR",
  "PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.",
  2024,
  "Software",
  ["Web", "Civic Tech", "Fullstack", "CRUD", "RESTful API", "User Authentication","App"],
  ["ReactJS", "Vite", "ExpressJS", "KnexJS", "Sass", "PostgreSQL"],
  "/screenshots/pear.png",
  "https://github.com/NCA-Association/PEAR",
  // "https://pear-7ed9.onrender.com/"
);

const p5 = new Project(
  5,
  "PrismGL",
  "A desktop application that displays a 3D prism using OpenGL.",
  2024,
  "Software",
  ["Desktop", "Solo", "Capstone", "App", "Shaders", "3D", "Low Level"],
  ["C++", "C", "OpenGL", "GLFW", "Visual Studio", ],
  "/screenshots/prismgl.png",
  "https://github.com/tailsmonster/prismGL",

);

const p6 = new Project(
  6,
  "EventXChange",
  "A full-stack community platform for hosting and discovering local events with others.",
  2025,
  "Software",
  ["Web", "Hackathon", "Fullstack", "CRUD", "RESTful API", "Agile", "User Authentication", "App", "freeCodeCamp"],
  ["ReactJS", "Vite", "ExpressJS", "MongoDB", "Mongoose", "TailwindCSS", ],
  "/screenshots/eventxchange.png",
  "https://github.com/freeCodeCamp-2025-Summer-Hackathon/EventXchange",
)



projects = [p1, p2, p3, p4, p5, p6];

export default projects;