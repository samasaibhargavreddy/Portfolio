import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    title: 'Software Development Engineer (SDE)',
    company: 'Citibank',
    location: 'New Castle, DE, United States',
    period: 'May 2024 - Present',
    highlights: [
      'Enabled asynchronous communication between microservices using Kafka',
      'Led adoption of React.js for building interactive UIs with 40% increase in user engagement',
      'Implemented voice command and text-to-speech functionalities using AI APIs',
      'Streamlined automated process via Docker and Gradle with CI/CD pipelines',
      'Implemented AWS Lambda functions with CloudWatch and S3 integration'
    ]
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Wilmington University',
    location: 'New Castle, DE, United States',
    period: 'Aug 2023 - May 2024',
    highlights: [
      'Built scalable backend services in Python (FastAPI/Flask) for AI/ML models',
      'Optimized AI model inference latency using async programming and Redis caching',
      'Developed chatbots using NLP models integrated with Angular frontend',
      'Used Angular 16 and Node.js with SSR for enhanced performance',
      'Deployed applications on GCP using GKE, Cloud Run, and Cloud Functions'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Comviva',
    location: 'Bangalore, KA, India',
    period: 'Jul 2022 - Aug 2023',
    highlights: [
      'Designed microservices architecture with 40% improvement in scalability',
      'Designed real-time notification system using React.js and Firebase',
      'Optimized React applications with hooks, achieving 30% reduction in API calls',
      'Implemented standard software engineering practices for CI/CD deployment'
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
