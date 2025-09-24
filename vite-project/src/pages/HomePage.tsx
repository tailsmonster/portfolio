// import React from "react";
import projects from "../lib/projects";
import { Project } from "../lib/Project";
import { Link } from "react-router-dom";
import TechStack from "../components/TechStack";
import githubButton from '../assets/static/buttons/GitHub-100000.svg'; 
import resumeButton from '../assets/static/buttons/RESUME-E53935.svg'; 
import linkedinButton from '../assets/static/buttons/LinkedIn-0077B5.svg'; 

const featuredProjects: Project[] = [projects[3], /*projects[5],*/ projects[2], projects[4]];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="top" className="max-w-5xl mx-auto pt-16 px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div id="left">
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-4xl">hey, i'm</p>
              <p className="text-5xl font-bold">Nico Aroca</p>
              <p className="text-4xl">a software engineer from New York</p>
            </div>
          </div>
          <div id="right">
            <img
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-gray-200"
              src="/images/headshot.jpg"
              alt="Faceshot"
            />
          </div>
        </div>

        {/* Social Buttons */}
        <ul className="mt-6 flex justify-center gap-6">
          <li>
            <a
              href="https://github.com/tailsmonster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ githubButton }
                alt="GitHub"
                className="h-10 drop-shadow-md"
              />
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ resumeButton }
                alt="Resume"
                className="h-10 drop-shadow-md"
              />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/nicoaroca12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={ linkedinButton }
                alt="LinkedIn"
                className="h-10 drop-shadow-md"
              />
            </a>
          </li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto mt-20 px-4">
        {/* <h2 className="text-2xl font-bold mb-4">about me</h2> */}
        <div className="space-y-4 text-xl text-gray-800">
          <p>
            I’m Nico, a passionate software engineer from Brooklyn, NY with a deep
            love for technology and creative coding. Whether it’s building apps,
            modding old electronics, or diving into obscure technical challenges,
            I love creating things that are meaningful and functional. I’m an
            alumni of The Marcy Lab School and a firm believer that great work
            doesn’t need a traditional path.
          </p>
          <p>
            I’m especially drawn to projects that involve audio, embedded systems,
            game development, or breathing new life into aging tech. Right now, I’m
            focused on shipping complete polished projects, and learning as I go.
          </p>
        </div>
      </section>

      {/* Techstack Section */}
      <section id="tech-stack" className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold mb-6">tech stack</h2>
        <TechStack/>
      </section>



      {/* Featured Projects Section */}
      <section id="featured-projects" className="max-w-5xl mx-auto mt-20 px-4">
        <h2 className="text-2xl font-bold mb-6">featured projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md p-4">
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-2">{project.year}</p>
              <p className="text-gray-700 text-sm mb-2">{project.description}</p>
              <p className="text-xs text-gray-500 mb-1">Tags: {project.tags.join(", ")}</p>
              <p className="text-xs text-gray-500 mb-2">Stack: {project.stack.join(", ")}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md text-green-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-block bg-blurple text-offwhite font-semibold py-2 px-6 rounded-xl hover:bg-peenk transition"
          >
            See More
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
