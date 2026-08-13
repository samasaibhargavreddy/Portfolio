import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    title: 'Full Stack Engineer',
    company: 'CBRE',
    location: 'Dallas, TX, United States',
    period: 'Dec 2025 - Present',
    highlights: [
    ]
  },
  {
    title: 'Full Stack Engineer',
    company: 'Northern Trust Bank',
    location: 'Chicago, Illinois, United States',
    period: 'May 2024 - Dec 2024',
    highlights: [
    ]
  },
  {
    title: 'Full Stack Engineer',
    company: 'FuGenx Technologies',
    location: 'Bangalore, KA, India',
    period: 'Jul 2022 - Aug 2023',
    highlights: [
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-marker">
                <FaBriefcase />
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="location">{exp.location}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
