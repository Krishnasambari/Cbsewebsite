import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/fef7a9ea1a4f751d93bdd8e7fa6b4b875e4a7a9e.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "CBSE Disclosure", path: "/disclosure" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-3 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={logo}
              alt="Sri Chaitanya Techno School Logo" 
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-10" : "h-12 md:h-14"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex gap-6 items-center text-[15px] font-medium">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-blue-800 after:transition-all after:duration-300 ${
                    isActive 
                    ? "text-blue-800 after:w-full" 
                    : "text-gray-700 hover:text-blue-800 after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/admissions" 
              className="bg-[#a41f2a] hover:bg-[#8a1a23] text-white px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-md ml-2"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden text-gray-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen overflow-y-auto pb-20">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg text-lg ${
                    isActive ? "bg-blue-50 text-blue-800 font-bold" : "text-gray-700 hover:bg-gray-50 font-medium"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link 
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block bg-[#a41f2a] text-white text-center py-4 rounded-lg font-bold text-lg mt-4 shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
