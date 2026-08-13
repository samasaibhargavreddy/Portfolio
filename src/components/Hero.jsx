import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="tech-bg">
        <div className="tech-element tech-cube"></div>
        <div className="tech-element tech-sphere"></div>
        <div className="tech-element tech-pyramid"></div>
        <div className="tech-element tech-ring"></div>
        <div className="tech-element tech-torus"></div>
        <div className="tech-element tech-hexagon"></div>
        <div className="code-lines">
          <span>&lt;code&gt;</span>
          <span>function() &#123;</span>
          <span>  return innovation;</span>
          <span>&#125;</span>
        </div>
        <div className="code-lines code-lines-2">
          <span>const build = () =&gt; &#123;</span>
          <span>  deploy('future');</span>
          <span>&#125;;</span>
        </div>
        <div className="floating-icons">
          <div className="tech-icon">&#123; &#125;</div>
          <div className="tech-icon">&lt;/&gt;</div>
          <div className="tech-icon">&#9731;</div>
          <div className="tech-icon">&#9889;</div>
          <div className="tech-icon">&#128187;</div>
          <div className="tech-icon">&#128209;</div>
          <div className="tech-icon">&#9881;</div>
          <div className="tech-icon">&#128396;</div>
        </div>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="red-accent">SAI BHARGAV REDDY</span>
              <br />
              <span className="hero-subtitle">Frontend Developer</span>
            </h1>
            <p className="hero-description">
              <strong>Building the bridge between creativity and technology through intelligent code</strong>
            </p>
            <div className="hero-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>Dallas, Texas, USA</span>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <span>+1 (816) 723-2369</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>bhargavsama6@gmail.com</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#contact" className="cta-button primary">Get In Touch</a>
              <a href="#projects" className="cta-button secondary">View My Work</a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/saibhargavreddy6/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://github.com/samasaibhargavreddy" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="mailto:bhargavsama6@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-car">s
            <div className="profile-picture">
              <img src="/profile.jpg" alt="Sai Bhargav Reddy" className="profile-img" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex';}} />
              <div className="profile-placeholder-box" style={{display: 'none'}}>
                <p>📷</p>
                <p>Profile Picture</p>
                <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Save your image to:<br/><code>public/profile.jpg</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
