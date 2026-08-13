import React from 'react'
import './Skills.css'

const skillsData = [
  {
    category: 'Frontend Technologies',
    skills: ['React.js', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Redux', 'Redux Toolkit', 'React Router', 'TanStack Query', 'Material-UI', 'Tailwind CSS', 'Sass', 'Webpack', 'Bootstrap']
  },
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3', 'C++']
  },
  {
    category: 'Backend Technologies',
    skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'Spring JPA', 'Python', 'Microservices']
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'Apache Druid', 'Oracle DB', 'DynamoDB', 'Cassandra']
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, Lambda, IAM, CloudWatch)', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible']
  },
  {
    category: 'Testing & Tools',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'JUnit', 'Mockito', 'Git', 'GitHub', 'NPM', 'Maven', 'Gradle', 'Jira', 'Confluence']
  },
  {
    category: 'UI/UX & Design',
    skills: ['Responsive Web Design', 'Reusable Component Architecture', 'Design Systems', 'Figma', 'Wireframing', 'Prototyping', 'State Management']
  },
  {
    category: 'Data Visualization',
    skills: ['D3.js', 'Chart.js', 'Interactive Dashboards', 'Data-Driven Interfaces', 'JSON']
  },
  {
    category: 'Development Practices',
    skills: ['Agile/Scrum', 'SDLC', 'Code Reviews', 'CI/CD', 'Accessibility Testing', 'Performance Optimization', 'Technical Documentation']
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
