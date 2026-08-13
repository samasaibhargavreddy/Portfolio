import React from 'react'
import { FaAward, FaGoogle } from 'react-icons/fa'
import './Certifications.css'

const certifications = [
  {
    title: 'Cross-platform apps with Angular',
    issuer: 'Google for Dev',
    icon: FaGoogle,
    description: 'Professional certification in building cross-platform applications using Angular framework'
  },
  {
    title: 'React JS Certified Developer',
    issuer: 'Great Learning',
    icon: 'great-learning.svg',
    description: 'Certification in React.js development, covering component-based architecture, state management, and frontend best practices'
  },
  {
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    icon: FaAward,
    description: 'Certification in AWS cloud development, demonstrating expertise in building, deploying, and maintaining AWS applications'
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div key={index} className="cert-card">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <div className="cert-content">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">
                    <IconComponent className="issuer-icon" />
                    {cert.issuer}
                  </p>
                  <p className="cert-description">{cert.description}</p>
                </div>
                <div className="cert-badge">
                  <span>Certified</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
