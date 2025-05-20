import { Project } from "./Project";

// in a perfect world, we'd have a cool backend to store this in. For now though, this is fine.
let projects:Project[] = [];

const p1 = new Project(
  1,
  "Palette Picker",
  "A web application that lets you customize your palettes, stored locally.",
  2023,
  "Software",
  ["Web", "Solo", "Colors", "Local Storage", "Frontend", "App"],
  ["Javascript", "HTML5", "CSS", "Vite", ],
  "https://github.com/tailsmonster/Palette-Picker/blob/main/screenshot.png?raw=true",
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
  "https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/screenshots/recipewizard.jpg",
  "https://github.com/RecipeWizardTeam/Recipe-Wizard",
  "https://recipewizardteam.github.io/Recipe-Wizard/"
);

const p3 = new Project(
  3,
  "Breed Guesser",
  "A web application made for those who enjoy looking at pictures of dogs! Users can look at several images from different breeds of dogs. Users can also play a matching memory game!",
  2024,
  "Software",
  ["Web", "Dogs", "API", "Frontend", "ArchArch!!", "App"],
  ["ReactJS", "CSS", "Vite", "DogAPI"],
  "https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/screenshots/breedguesser.jpg",
  "https://teamdogald.github.io/Breed-Guesser/",
  "https://github.com/TeamDogald/Breed-Guesser"
);

const p4 = new Project(
  4,
  "PEAR",
  "PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.",
  2024,
  "Software",
  ["Web", "Civic Tech", "Fullstack", "CRUD", "User Authentication","App"],
  ["ReactJS", "Vite", "ExpressJS", "KnexJS", "Sass", ],
  "https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/screenshots/pear.jpg",
  "https://github.com/NCA-Association/PEAR",
  "https://pear-7ed9.onrender.com/"
);

const p5 = new Project(
  5,
  "PrismGL",
  "A desktop application that displays a 3D prism using OpenGL.",
  2024,
  "Software",
  ["Desktop", "Solo", "Capstone", "App", "Shaders", "3D", "Low Level"],
  ["C++", "C", "OpenGL", "GLFW", "Visual Studio", ],
  "https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/screenshots/prismgl.png",
  "https://github.com/tailsmonster/prismGL",
);



projects = [p1, p2, p3, p4, p5];

export default projects;