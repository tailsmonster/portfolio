import { Experience } from "./Experience";

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
  "https://media.discordapp.net/attachments/1373769034754953247/1373990006342815784/ASC-SQ-Logo-1-488547169.png?ex=682c6b69&is=682b19e9&hm=d0b3f37e8cb434ee44146576696bd835f9601918ae51129b6810fe3b750a745d&=&format=webp&quality=lossless&width=972&height=972",
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
  "https://media.discordapp.net/attachments/1373769034754953247/1374018781851947049/creativeartworks.jpg?ex=682c8635&is=682b34b5&hm=89f74d7286f55176d5f5a79ca6900590dbeb56c6f3eec58de07582451fc3505a&=&format=webp&width=202&height=202",
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
  "https://media.discordapp.net/attachments/1373769034754953247/1374018781407477892/54635790-4022031166.png?ex=682c8635&is=682b34b5&hm=d99ae4749b3b8e17d61f5cf7f1fc7ce54cbfb0212b562a79f76450e1beeb09e2&=&format=webp&quality=lossless&width=252&height=252",
  ["Sep", "2024"],
)

const x4 = new Experience(
  4,
  "Google Software Engineering Program Fellow (G-SWEP)",
  "Google",
  [
    "Engaged in weekly 1:1 mentorship to deepen understanding of data structures and algorithms.",
    "Strengthened technical problem-solving and interview skills through structured coaching.",
  ],
  "Brooklyn, New York",
  "Remote",
  "Fellowship",
  ["Oct", "2024"],
  "Art",
  "https://media.discordapp.net/attachments/1373769034754953247/1373990006045016094/colourful-google-logo-on-white-background-free-vector-2035745673.jpg?ex=682c6b68&is=682b19e8&hm=d5cd8d891e92f8cdcd9fb89fec15b8d3a643dd6f7a8f996c59ee049a211b6865&=&format=webp&width=1241&height=1241",
  ["Dec", "2024"],
)


experiences = [x1,x2,x3,x4];

export default experiences;