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
                <h2 className="text-3xl font-prosto-one">hey, i'm -</h2>
                <h2 className="text-4xl font-prosto-one font-bold">Nico Aroca</h2>
                <h2 className="text-3xl font-prosto-one">- a software engineer from NY</h2>
                <p className="text-[20px] mt-4">I like making cool stuff with code and design.</p>

              </div>
            </div>
          </div>
          <div id="right">
            <div>
              <img className="m-5 p-3 w-80 h-80 rounded-[50px] -rotate-6"src="https://media.licdn.com/dms/image/v2/D4E03AQFCfJBx7Chj1w/profile-displayphoto-shrink_800_800/B4EZUWNdo9GgAc-/0/1739834383624?e=1748476800&v=beta&t=HtBlQBSa_iZf24gDsJwRIjEKkFvmbUF1e8YQXCwAPlg" alt="My Linkedin Portrait" />
            </div>
          </div>
        </div>
        <div id="landingpage-buttons" className="flex justify-around">
          <div>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Me</button>      
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Projects</button>      
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Experience</button>      

          </div>
          <div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</button>      
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Linkedin</button>      

            {/* <button className="border-4">Linkedin</button> */}
            {/* <button className="border-4">Github</button> */}
          </div>
        </div>
      </section>



    </>
  )
}

export default HomePage