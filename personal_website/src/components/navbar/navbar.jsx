import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import logo from '../../assets/logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={handleLogoClick}
      />

      {/* Botón hamburguesa solo móvil */}
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

      {/* Menú fullscreen móvil */}
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
    </nav>
  );
};

export default Navbar;
