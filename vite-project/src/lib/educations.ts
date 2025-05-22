import { Education } from "./Education";

let educations:Education[];

const e1 = new Education (
  1,
  "Urban Assembly Gateway School for Technology",
  "Digital Design / Software Engineering",
  [
    "Acquired proficiency in a range of programming languages, including HTML, CSS, Python, JavaScript, and Java, through the Software Engineering Pathway.",
    "Developed expertise in visual design tools like Adobe Photoshop and Adobe Illustrator, through the Digital Design and Animation Pathway.",
  ],
  ["Sep", "2019"],
  "https://github.com/tailsmonster/portfolio/blob/main/vite-project/src/assets/static/logos/uag.jpg?raw=true",
  ["Jun", "2023"]
)

const e2 = new Education (
  2,
  "The Marcy Lab School",
  "Software Engineering",
  [
    "Completed 2,000 hours of coursework in web development, CS fundamentals, and leadership development.",
    "Developed proficiency in HTML/CSS, JavaScript, Python, NodeJS, ReactJS, SQL, and AWS.",
  ],
  ["Sep", "2023"],
  "https://github.com/tailsmonster/portfolio/blob/main/vite-project/src/assets/static/logos/marcy.png?raw=true",
  ["Sep", "2024"]
)

// const e3 = new Education (
//   3,
//   "Borough of Manhattan Community College",
//   "Cybersecurity",
//   [
//     "Currently participating in BMCC's Cybersecurity Certificate associates program.",
//   ],
//   ["Jan", "2025"],
//   "https://github.com/tailsmonster/portfolio/blob/main/vite-project/src/assets/static/logos/bmcc.jpg?raw=true",
//   ["Now"]
// )
educations = [e1,e2,]

export default educations;