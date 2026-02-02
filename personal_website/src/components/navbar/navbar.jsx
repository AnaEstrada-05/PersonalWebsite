import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import logo from '../../assets/logo.png';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import logo from '../../assets/logo.png';


const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h3 className="navbarLogo">PORTFOLIO</h3>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Menú desktop */}
      <ul className="navbarContent">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="navLink">
              {item.label}
              <span className="underline" />
            </a>
          </li>
        ))}
      </ul>
      <button className="navbarButton">CONTACT ME →</button>

      {/* Menú móvil */}
      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
      </div>
    </nav>
  );
};

export default Navbar;
