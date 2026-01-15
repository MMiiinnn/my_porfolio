import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/#home", id: "01" },
    { name: "About", to: "/#about", id: "02" },
    { name: "Projects", to: "/#projects", id: "03" },
    { name: "Contact", to: "/#contact", id: "04" },
  ];

  const linkStyle = ({ isActive }) =>
    `transition-all duration-300 font-mono text-sm uppercase text-lg hover:text-sky-400 ${
      isActive ? "text-primary" : "text-slate-300 hover:text-primary"
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-bg-dark/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavHashLink
          smooth
          to="/#home"
          className="text-primary font-bold text-2xl tracking-tighter"
        >
          DEV<span className="text-white">.</span>
        </NavHashLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavHashLink smooth to={link.to} className={linkStyle}>
                  {link.name}
                </NavHashLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => window.open("/cv/CV_NguyenTrungNghia.pdf", "_blank")}
            className="px-5 py-2 border  border-primary text-primary text-base rounded cursor-pointer hover:bg-primary/10 transition-all font-mono"
          >
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-bg-dark transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center z-40`}
      >
        <ul className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavHashLink
                smooth
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-slate-300 hover:text-primary font-mono"
              >
                <div className="text-primary text-sm mb-1">{link.id}.</div>
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
