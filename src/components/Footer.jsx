import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sai Bhargav Reddy Sama</h3>
            <p>Frontend Developer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/in/saibhargavreddy6/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/samasaibhargavreddy" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sai Bhargav Reddy Sama. All rights reserved.</p>
          <div className="footer-divider"></div>
          <p>Designed & Built with <span className="heart">❤️</span> using React</p>
        </div>
      </div>
    </footer>
  )
}
