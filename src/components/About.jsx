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
              Innovative Software Development Engineer specializing in frontend and full-stack development using React, Angular, Python, Node.js, and Spring Boot. Experienced in building AI-powered, cloud-native, and microservice-based applications with AWS, GCP, Docker, and Kubernetes, ensuring scalability, reliability, and exceptional user experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
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
            <div className="education-item">
              <div className="edu-header">
                <h4>Bachelor of Business Administration</h4>
                <span className="date">May 2019 - Jul 2022</span>
              </div>
              <p>Osmania University, Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
