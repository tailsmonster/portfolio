const icons = [
  { name: "javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "typescript", url: "https://www.typescriptlang.org/" },
  { name: "css", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "html", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "scss", url: "https://sass-lang.com/" },
  { name: "tailwind", url: "https://tailwindcss.com/" },
  { name: "react", url: "https://reactjs.org/" },
  { name: "nextjs", url: "https://nextjs.org/" },
  { name: "nodejs", url: "https://nodejs.org/" },
  { name: "express", url: "https://expressjs.com/" },
  { name: "postgresql", url: "https://www.postgresql.org/" },
  { name: "mongodb", url: "https://www.mongodb.com/" },
  { name: "jest", url: "https://jestjs.io/" },
  { name: "postman", url: "https://www.postman.com/" },
  { name: "net", url: "https://dotnet.microsoft.com/" },
  { name: "cs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "cpp", url: "https://isocpp.org/" },
  { name: "c", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { name: "python", url: "https://www.python.org/" },
  { name: "bash", url: "https://www.gnu.org/software/bash/" },
  { name: "vscodium", url: "https://vscodium.com/" },
  { name: "rider", url: "https://www.jetbrains.com/rider/" },
  { name: "figma", url: "https://www.figma.com/" },
  { name: "linux", url: "https://kernel.org/" },
];

const TechStack = () => {
  return (
    <section className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {icons.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            // className="transition-transform hover:scale-110"
          >
            <img
              src={`https://skillicons.dev/icons?i=${name}`}
              alt={name}
              className="h-15 drop-shadow-md"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechStack;