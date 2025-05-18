// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full to-black bg-[#3a0ca3] text-white font-sans py-[20px] z-99">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <section className=""> 
          <h1 className="text-5xl font-modak mx-5">
            <Link to="/">NICO AROCA</Link>
          </h1>
        </section>

        {/* MIDDLE */}
        <section> 

        </section>

        {/* RIGHT */}
        <section id="collapseMenu" className="mx-5"> 
          <ul className="flex space-x-6 top-0 left-0 font-bold">
            {/* <li><Link to="/blog">Blog</Link></li> */}
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/experience">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

        </section>
      </div>
    </header>
  );
}

export default Navbar;