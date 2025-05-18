import { Project } from "./Project";

// in a perfect world, we'd have a cool backend to store this in. For now though, this is fine.
let projects = [];

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
  "https://media.discordapp.net/attachments/1373769034754953247/1373769073506123877/1718217076956.jpg?ex=682b9da6&is=682a4c26&hm=1522e919bf1254187bfcae7b13d1085ea99db0361b034ae4db7ef31cd84f9897&=&format=webp&width=720&height=376",
  "https://github.com/RecipeWizardTeam/Recipe-Wizard",
  "https://recipewizardteam.github.io/Recipe-Wizard/"
);

const p3 = new Project(
  3,
  "Breed Guesser",
  "A web application made for those who enjoy looking at pictures of dogs! Users can look at several images from different breeds of dogs. Users can also play a matching memory game!",
  2024,
  "Software",
  ["Web", "Dogs", "API", "Frontend", "Arch Arch", "App"],
  ["ReactJS", "CSS", "Vite", "DogAPI"],
  "https://media.discordapp.net/attachments/1373769034754953247/1373769073963434084/1718217731401.jpg?ex=682b9da6&is=682a4c26&hm=ad4e1508f4e5f94e3cb6961e9615081701f067c95fec06107baeae62fa387533&=&format=webp&width=720&height=361",
  "https://teamdogald.github.io/Breed-Guesser/",
  "https://github.com/TeamDogald/Breed-Guesser"
);

const p4 = new Project(
  4,
  "PEAR",
  "PEAR is an application that helps low-income families find enrichment programs for their children to support their development and close the achievement and play gap.",
  2024,
  "Software",
  ["Web", "Civic Tech", "Fullstack", "App"],
  ["ReactJS", "Vite", "ExpressJS", "KnexJS", "Sass", ],
  "https://media.discordapp.net/attachments/1373769034754953247/1373769076567969822/1718218203435.jpg?ex=682b9da7&is=682a4c27&hm=fc720a92c6c980b39f7d60fb4866b7c18f4f22b331d164a52b3867c42f20d61a&=&format=webp&width=720&height=487",
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
  "https://media.discordapp.net/attachments/1240494000000204801/1353537045238120568/image-45.png?ex=682b2e5b&is=6829dcdb&hm=cef98f21f26a19ed15c04b2daa46336fd322c7c7c464dc01958f025843f88899&=&format=webp&quality=lossless&width=1229&height=691",
  "https://github.com/tailsmonster/prismGL",
);



projects = [p1, p2, p3, p4, p5];

export default projects;