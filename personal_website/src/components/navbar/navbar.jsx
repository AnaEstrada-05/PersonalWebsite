import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../i18n/translations';
import './navbar.css';

const Navbar = () => {
  const { lang, toggle } = useLang();
  const tr = t[lang].nav;

  const navItems = [
    { id: 'home',     label: tr.home },
    { id: 'projects', label: tr.projects },
    { id: 'skills',   label: tr.skills },
    { id: 'about',    label: tr.about },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 90;
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h3 className="navbarLogo">PORTFOLIO</h3>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <ul className="navbarContent">
        {navItems.map((item) => (
          <li key={item.id}>
            <button className="navLink" onClick={() => handleScrollToSection(item.id)}>
              {item.label}
              <span className="underline" />
            </button>
          </li>
        ))}
      </ul>

      <div className="navbarRight">
        <button className="navbarButton">{tr.contact}</button>
      </div>

      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleScrollToSection(item.id)}>{item.label}</button>
            </li>
          ))}
          <li>
            <button className="mobileLangToggle" onClick={toggle}>
              {lang === 'en' ? '🌐 Español' : '🌐 English'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;