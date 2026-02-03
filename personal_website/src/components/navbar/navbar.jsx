import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' }
];

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll para estilo navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⭐ Scroll con offset para navbar fixed
  const handleScrollToSection = (id) => {

    const element = document.getElementById(id);
    const offset = 90; // altura navbar (ajusta si quieres)

    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      <h3 className="navbarLogo">PORTFOLIO</h3>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* DESKTOP MENU */}
      <ul className="navbarContent">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className="navLink"
              onClick={() => handleScrollToSection(item.id)}
            >
              {item.label}
              <span className="underline" />
            </button>
          </li>
        ))}
      </ul>

      <button className="navbarButton">CONTACT ME →</button>

      {/* MOBILE MENU */}
      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleScrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
