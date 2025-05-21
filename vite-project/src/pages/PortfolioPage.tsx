
import projects from "../lib/projects"; // adjust path as needed
import { Project } from "../lib/Project"; // assuming Project class is here

const PortfolioPage = () => {
  return (
    <div className="p-6 mx-auto ">
      <h2 className="text-4xl font-bold m-4 text-center font-Inter">Software Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {[...projects].reverse().map((project: Project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-md p-4 m-7  ">
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{project.year}</p>
            <p className="text-gray-700 text-sm mt-1 mb-2">{project.description}</p>
            <p className="text-xs text-gray-500 mb-2">Tags: {project.tags.join(", ")}</p>
            <p className="text-xs text-gray-500 mb-2">Stack: {project.stack.join(", ")}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:underline"
                >
                  URL
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default PortfolioPage