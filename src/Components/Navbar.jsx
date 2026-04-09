import React, { useEffect, useState } from 'react'
import '../css/Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // You'll need these icons

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false); 
  const [isDark, setIsDark] = useState(true); 
  
  const toggleMenu = () => { setIsOpen(!isOpen); }; 
  const toggleTheme = () => { setIsDark(!isDark) };


    useEffect(() => {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark]);

return (
    <nav className="navbar">
      <div className="nav-logo"><span className='span'>I</span>srael</div>
      
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#work" onClick={toggleMenu}>My Work</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>

        <li className="theme-toggle" onClick={toggleTheme}>
       <div className={`theme-icon ${isDark ? "dark" : "light"}`}>
       {isDark ? <FaSun /> : <FaMoon />}
        </div>
       </li>

      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  ); 
}; 

export default Navbar;