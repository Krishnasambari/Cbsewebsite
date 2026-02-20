import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import logo from "https://cbseassets.s3.ap-south-1.amazonaws.com/logo.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#083465]/95 backdrop-blur-md shadow-md py-2"
          : "bg-[#083465] py-3 shadow-sm"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="https://cbseassets.s3.ap-south-1.amazonaws.com/logo.png"
              alt="Sri Chaitanya Techno School"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden xl:flex gap-6 items-center text-[15px] font-medium">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${isActive
                    ? "text-white after:w-full"
                    : "text-blue-100 hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* <Link
              to="/admissions"
              className="bg-white text-[#083465] hover:bg-blue-100 px-5 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 shadow-md ml-2"
            >
              Apply Now
            </Link> */}
          </nav>

          <button
            className="xl:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen overflow-y-auto pb-20">
          <div className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-lg text-lg ${isActive
                    ? "bg-[#083465]/10 text-[#083465] font-bold"
                    : "text-gray-700 hover:bg-gray-50 font-medium"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
