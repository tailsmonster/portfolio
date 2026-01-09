import { Education } from "./Education";
import uagLogo from '../assets/static/logos/uag.jpg';
import marcyLogo from '../assets/static/logos/marcy.png';
import bmccLogo from '../assets/static/logos/bmcc.jpg'; // if needed
import wguLogo from '../assets/static/logos/wgu.png';



let educations:Education[];

const e1 = new Education (
  1,
  "Urban Assembly Gateway School for Technology",
  "Digital Design -> Software Engineering",
  [
    "Acquired proficiency in a range of programming languages, including HTML, CSS, Python, JavaScript, and Java, through the Software Engineering Pathway.",
    "Developed expertise in visual design tools like Adobe Photoshop and Adobe Illustrator, through the Digital Design and Animation Pathway.",
  ],
  ["Sep", "2019"],
  uagLogo,
  ["Jun", "2023"]
)

const e2 = new Education (
  2,
  "The Marcy Lab School",
  "Software Engineering",
  [
    "Completed 2,000+ hours of full-stack engineering, computer science, and leadership training.",
    "Built and deployed multiple production-grade apps using React, Node.js, SQL, and modern web development practices.",
  ],
  ["Sep", "2023"],
  marcyLogo,
  ["Sep", "2024"]
)

const e3 = new Education (
  3,
  "Borough of Manhattan Community College",
  "Business Management -> Cybersecurity",
  [
    "Used the year to build meaningful connections across campus while exploring entrepreneurship and core cybersecurity fundamentals.",
  ],
  ["Jan", "2025"],
  bmccLogo,
  ["Dec", "2025"]
)

const e4 = new Education (
  4,
  "West Governors University",
  "Computer Science",
  [
    "Currently in the process of obtaining a Bachelors Degree",
  ],
  ["Dec", "2025"],
  wguLogo,
  ["Present"]
)
educations = [e1,e2,e3,e4]

export default educations;
