import { Certification } from "./Certification";

import youscienceLogo from '../assets/static/logos/youscience.jpg';
import codecademyLogo from '../assets/static/logos/codecademy.png';
import stackrouteLogo from '../assets/static/logos/stackroute.jpg'; 
import googleLogo from '../assets/static/logos/google.jpg'; 
// import microsoftLogo from '../assets/static/logos/microsoft.png'; 

const certifications: Certification[] = [
  new Certification(
    1,
    "Competency in Computer Programming I",
    "YouScience",
    ["JavaScript"],
    ["May", "2022"],
    youscienceLogo
  ),
  new Certification(
    2,
    "Learn the Command Line Course",
    "Codecademy",
    ["Bash"],
    ["Oct", "2023"],
    codecademyLogo,
    [`https://www.codecademy.com/profiles/tailsmonster/certificates/c87ba0541f8be78bc2f4ba1128233f6f`]
  ),
  new Certification(
    3,
    "Learn JavaScript Course",
    "Codecademy",
    ["JavaScript"],
    ["Jan", "2024"],
    codecademyLogo,
    [`https://www.codecademy.com/profiles/tailsmonster/certificates/705dcb15de0da4dd9d9fc4f3274b430e`]
  ),
  new Certification(
    4,
    "Introduction to Linux Course",
    "Codecademy",
    ["Linux", 'Ubuntu Linux', 'Arch Linux'],
    ["Apr", "2024"],
    codecademyLogo,
    ['https://www.codecademy.com/profiles/tailsmonster/certificates/54de574543f242baaf263227f82073bf']
  ),
  new Certification(
    5,
    "Learn C Skill Path",
    "Codecademy",
    ["C"],
    ["Jun", "2024"],
    codecademyLogo,
    ['https://www.codecademy.com/profiles/tailsmonster/certificates/9dba9d9b6bf64cf58b2b416ef9cd0912']
  ),
  new Certification(
    6,
    "Learn C++ Course",
    "Codecademy",
    ["C++"],
    ["Sep", "2024"],
    codecademyLogo,
    ['https://www.codecademy.com/profiles/tailsmonster/certificates/b74a2390dfc4127fa5d43fe147425ad0']
  ),
  new Certification(
    7,
    "Fundamentals of Cloud Computing Micro-Bootcamp",
    "StackRoute Learning",
    ["Cloud Computing", "Amazon Web Services (AWS)"],
    ["Feb", "2025"],
    stackrouteLogo,
  ),
  new Certification(
    8,
    "Technical Support Fundamentals",
    "Google",
    ["Customer Support", "Linux", "Binary Code", "Troubleshooting", "Networking"],
    ["Mar", "2025"],
    googleLogo,
    ["https://www.coursera.org/account/accomplishments/verify/2JDXHCOVBL3S", "2JDXHCOVBL3S"]
  ),
  new Certification(
    9,
    "Learn C# Course",
    "Codecademy",
    ["C#", ".NET"],
    ["Jul", "2025"],
    codecademyLogo,
    ["https://www.codecademy.com/profiles/tailsmonster/certificates/65f0ff88f4fc58e0536b3b51648dff24"]
  )
];


export default certifications;