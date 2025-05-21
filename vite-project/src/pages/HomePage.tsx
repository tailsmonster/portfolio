// import React from "react";

// interface Props {};

import projects from "../lib/projects";
import { Project } from "../lib/Project";

const featuredProjects:Project[] = [projects[3], projects[0], projects[projects.length-1]];

const HomePage = () => {
  return (
    <>
      <section id="top" className="max-w-5xl mx-auto pt-10">
        <div className="flex flex-wrap justify-center items-center">
          <div id="left">
            <div id="landingpage-toptext">
              <div className="my-3.5">
                <p className="text-4xl">hey, i'm</p>
                <p className="text-5xl font-bold">Nico Aroca</p>
                <p className="text-4xl">a software engineer from New York</p>
              </div>
            </div>
          </div>
          <div id="right">
            <div>
              <img
                className="m-5 p-3 w-80 h-80 rounded-[100%] object-cover"
                src="https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/headshot.jpg"
                alt="Faceshot"
              />
            </div>
          </div>
        </div>

        <div
          id="landingpage-buttons"
          className="mx-auto mt-4 flex justify-center gap-6"
        >
          <a
            href="https://github.com/tailsmonster"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://github.com/tailsmonster/portfolio/blob/main/vite-project/src/assets/static/GITHUB.png?raw=true"
              alt="GitHub"
              className="h-10"
            />
          </a>
          <a
            href="https://linkedin.com/in/nicoaroca12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="LinkedIn"
              className="h-10"
            />
          </a>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto mt-10">
        <div className="px-4">
          <h2 className="text-2xl font-bold mb-4">about me</h2>
          <p className="text-xl mb-2">
            I’m Nico, a passionate software engineer from Brooklyn, NY with a deep
            love for technology and creative coding. Whether it’s building apps,
            modding old electronics, or diving into obscure technical challenges,
            I love creating things that are meaningful and functional. I’m an
            alumni of The Marcy Lab School and a firm believer that great work
            doesn’t need a traditional path.
          </p>
          <p className="text-xl mb-2">
            I’m especially drawn to projects that involve audio, embedded systems,
            game emulation, or breathing new life into aging tech. Right now, I’m
            focused on shipping complete, polished projects — and learning as I go.
          </p>
        </div>
      </section>

      <section id="featured-projects" className="max-w-5xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">featured projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
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
      </section>
    </>
  );
};

export default HomePage;