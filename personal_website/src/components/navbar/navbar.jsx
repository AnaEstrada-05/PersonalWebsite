import React from 'react'
import { motion } from 'framer-motion'
import './navbar.css'
import logo from '../../assets/logo.png'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
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
    </nav>
  )
}

export default Navbar
