import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    title: 'Movie Ticket Booking',
    description: 'A comprehensive web-based movie ticket booking application enabling users to browse films, select showtimes and seats, and complete transactions with both customer-facing and admin functionality.',
    tech: ['Java', 'Spring', 'React.js', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'AngularJS'],
    highlights: [
      'Transactional flow design',
      'User roles and permissions',
      'Responsive UI',
      'Real-time availability'
    ],
    github: 'https://github.com/samasaibhargavreddy/MovieTicketBooking'
  },
  {
    title: 'Chat Bot Application',
    description: 'An interactive chatbot application with conversational AI capabilities, featuring intelligent question-answer logic, real-time processing, and seamless user interaction through a modern chat interface.',
    tech: ['Python', 'React.js', 'Node.js', 'OpenAI API', 'Tailwind CSS', 'HTML5', 'JavaScript'],
    highlights: [
      'NLP Integration',
      'Real-time responses',
      'User input validation',
      'Modern UI/UX'
    ],
    github: 'https://github.com/samasaibhargavreddy/ChatBot'
  },
  {
    title: 'Music Application',
    description: 'A full-featured music web application allowing users to explore, manage music tracks, create playlists, and enjoy seamless playback with an intuitive and responsive user interface.',
    tech: ['JavaScript', 'React.js', 'Spring Framework', 'HTML5 Audio API', 'CSS3', 'Responsive Design'],
    highlights: [
      'Dynamic client-side behavior',
      'State management',
      'CSS animations',
      'Cross-browser compatibility'
    ],
    github: 'https://github.com/samasaibhargavreddy/Music-Application'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                  <FaGithub /> View Code
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn secondary">
                  <FaExternalLinkAlt /> Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
