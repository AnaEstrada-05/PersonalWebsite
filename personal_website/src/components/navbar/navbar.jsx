<<<<<<< Updated upstream
import React from 'react'
import { motion } from 'framer-motion'
import './navbar.css'
import logo from '../../assets/logo.png'
=======
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';
import logo from '../../assets/logo.png';
>>>>>>> Stashed changes

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
<<<<<<< Updated upstream
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.location.reload()
    } else {
      window.location.href = '/'
    }
  }

  return (
    <nav className="navbar">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        <ul className="navbarContent">
            {navItems.map((item, index) => (
            <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
            >
                <a href={`#${item.id}`} className="navLink">
                {item.label}
                <span className="underline" />
                </a>
            </motion.li>
            ))}
         </ul>
=======
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
>>>>>>> Stashed changes
    </nav>
  )
}

export default Navbar
