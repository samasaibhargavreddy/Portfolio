import React from 'react'
import './Skills.css'

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'Java', 'SQL', 'Python', 'Kotlin', 'TypeScript']
  },
  {
    category: 'Frontend Technologies',
    skills: ['React.js', 'Angular', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
  },
  {
    category: 'Backend & Frameworks',
    skills: ['Spring', 'Spring Boot', 'Node.js', 'Express.js', 'Hibernate', 'FastAPI', 'Flask']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle DB', 'DynamoDB', 'Cassandra', 'Redis']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible']
  },
  {
    category: 'Tools & Methodologies',
    skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Maven', 'Gradle', 'Agile', 'Scrum']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
