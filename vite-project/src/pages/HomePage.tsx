// import React from "react";

// interface Props {};

const HomePage = () => {
  return (
    <>
      <section id="top" className="max-w-5xl mx-auto pt-10">
        <div className="flex flex-wrap justify-center items-center">
          <div id="left">
            <div id="landingpage-toptext">
              <div className="my-3.5">
                <p className="text-4xl ">hey, i'm</p>
                <p className="text-5xl font-bold">Nico Aroca</p>
                <p className="text-4xl">a software engineer from New York</p>
                {/* <p className="text-[20px] mt-4">I like making cool stuff with code and design.</p> */}

              </div>
            </div>
          </div>
          <div id="right">
            <div>
              <img className="m-5 p-3 w-80 h-80 rounded-[100%] object-cover"src="https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/static/headshot.jpg" alt="Faceshot" />
            </div>
          </div>
        </div>
        {/* <div id="spacer" className=""></div> */}
        <div id="landingpage-buttons" className="flex justify-end">
          <div className="">
            <a
              href="https://github.com/tailsmonster"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github.png"
                alt="GitHub"
                className="w-10 h-10"
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
                className=" h-10"
              />
            </a>
          </div>
        </div> 
      </section>
      <div></div>
      <section id="theRest..." className="max-w-4xl mx-auto">
        <div className="">
          {/* <h3 className="font-Inter font-semibold text-2xl">who am I?</h3> */}
          <div>
            <p className="font-Inter text-xl mx-5 my-2">I am an Ecuadorian-American, born and raised in Brooklyn, New York. I love technology, and in my formative years grew an almost obsessive fascination with game design.</p>
            <p className="font-Inter text-xl mx-5 my-2">I've been working on projects for almost a decade, and I've been writing code for over 3 years. 
              I attended The Marcy Lab School, and I came out as a full-stack software engineer.</p>
          </div>
        </div>
        <div>
          <p>
            
          </p>

        </div>
      </section>
    </>
  )
}

export default HomePage