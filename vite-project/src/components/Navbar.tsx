// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-black text-white font-sans py-[20px]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <section className=""> 
          <h1 className="text-4xl font-prosto-one mx-5">
            <Link to="/">NICO AROCA</Link>
          </h1>
        </section>

        {/* MIDDLE */}
        <section> 

        </section>

        {/* RIGHT */}
        <section id="collapseMenu" className="mx-5"> 
          <ul className="flex space-x-6 top-0 left-0 font-bold">
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/experience">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </section>
      </div>
    </header>







    // <header className="fixed top-0 w-full bg-black text-white p-4 z-50">
    // <div className="flex justify-between items-center">
    //   {/* Left: Logo */}
    //   <h1 className="ml-4 text-lg font-bold">
    //     <Link to="/">NICO AROCA</Link>
    //   </h1>

    //   {/* Right: Mobile Menu Button */}
    //   <button 
    //     className="lg:hidden mr-4 text-white text-2xl focus:outline-none" 
    //     onClick={() => setIsOpen(!isOpen)}
    //   >
    //     {isOpen ? "✖" : "☰"}
    //   </button>

    //   {/* Navigation Links */}
    //   <nav
    //     className={`lg:flex lg:space-x-6 absolute lg:static bg-white lg:bg-transparent text-black lg:text-white w-2/3 max-w-[300px] h-full top-0 left-0 p-6 shadow-md transition-transform transform ${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     } lg:translate-x-0`}
    //   >
    //     <ul className="space-y-4 lg:space-y-0">
    //       <li><Link to="/blog">Blog</Link></li>
    //       <li><Link to="/portfolio">Portfolio</Link></li>
    //       <li><Link to="/experience">Resume</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //     </ul>
    //   </nav>
    // </div>
    // </header>
  );
}

export default Navbar;