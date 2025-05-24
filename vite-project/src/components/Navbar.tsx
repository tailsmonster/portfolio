import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-[#3a0ca3] text-white font-Inter py-4 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5">
        {/* LEFT */}
        <h1 className="text-3xl sm:text-5xl font-modak">
          <Link to="/">NICO AROCA</Link>
        </h1>

        {/* Hamburger - Mobile only */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <p className='font-bold text-lg'>X</p>  : <p className='font-bold text-lg'>MENU</p>}
        </button>

        {/* Menu - Desktop */}
        <ul className="hidden sm:flex space-x-6 font-bold">
          <li><Link to="/portfolio">portfolio</Link></li>
          <li><Link to="/experience">experience</Link></li>
          <li><Link to="/contact">contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu - toggles open */}
      {menuOpen && (
        <nav className="sm:hidden px-5 pt-2 pb-4 bg-[#3a0ca3]">
          <ul className="flex flex-col space-y-3 font-bold text-lg">
            <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>portfolio</Link></li>
            <li><Link to="/experience" onClick={() => setMenuOpen(false)}>experience</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
