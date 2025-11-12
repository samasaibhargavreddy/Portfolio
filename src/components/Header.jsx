import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🏎️</span>
            <span className="logo-text">SAI BHARGAV</span>
          </div>
          
          <nav className={`nav ${isOpen ? 'active' : ''}`}>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link contact-btn">Contact</button>
          </nav>

          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </header>
  )
}
