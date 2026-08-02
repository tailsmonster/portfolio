export const site = {
  name: "Nico Aroca",
  url: "https://nicoaroca.dev",
  github: "https://github.com/tailsmonster",
  linkedin: "https://linkedin.com/in/nicoaroca12",
  email: "https://formspree.io/f/xzzrwnyo",
  resume: "/resume.pdf",
};

export type ContactLink = {
  label: string;
  href: string;
};

export const contactLinks: ContactLink[] = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: site.email },
  { label: "Resume", href: site.resume },
];
