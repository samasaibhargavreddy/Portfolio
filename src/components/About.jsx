import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
                        <p className="about-intro">
              Innovative Full Stack Developer specializing in building scalable, responsive, and high performance web applications using React, Angular, TypeScript, JavaScript, HTML5, and CSS3. Experienced in developing modern user interfaces, integrating REST APIs, optimizing application performance, and creating seamless user experiences with cloud-native and component-based architectures. Skilled in frontend best practices, accessibility, responsive design, and modern development tools across enterprise level applications.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <div className="edu-header">
                <h4>Master of Science in Information System Technologies</h4>
                <span className="date">Aug 2023 - Dec 2024</span>
              </div>
              <p>Wilmington University, DE, USA</p>
              <p className="gpa">GPA: 3.7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
