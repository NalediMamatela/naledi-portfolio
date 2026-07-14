import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold text-pink-400 tracking-wide"
        >
          NM
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-10">

          {links.map((link) => (
            <li key={link.name}>

              <a
                href={link.href}
                className="text-gray-300 hover:text-pink-400 transition duration-300"
              >
                {link.name}
              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl text-pink-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-5 border-b border-slate-800 hover:bg-pink-500 transition"
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}

export default Navbar;