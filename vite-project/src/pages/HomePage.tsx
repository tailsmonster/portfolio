// import React from "react";

// interface Props {};

const HomePage = () => {
  return (
    <>
      <section id="top" className="max-w-6xl mx-auto pt-10">
        <div className="flex flex-wrap justify-center items-center">
          <div id="left">
            <div id="landingpage-toptext">
              <div className="my-3.5 max-w-">
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
        { /*<div id="landingpage-buttons" className="flex justify-around">
          <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-300  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 ">Contact Me</button>       
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-300  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 ">Projects</button>      
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 ">Experience</button>      

          </div>
          <div>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</button>      
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Linkedin</button>      

            <button className="border-4">Linkedin</button>
            <button className="border-4">Github</button>
          </div> 
        </div>  */}
      </section>
      <div></div>
      <section></section>


    </>
  )
}

export default HomePage