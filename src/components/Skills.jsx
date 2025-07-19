import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      isLearning: true,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 50 },
        { name: "React", level: 40 },
        { name: "Typescript", level: 30 }
      ]
    },
    {
      title: "Backend",
      isLearning: true,
      skills: [
        ,
        { name: "Python", level: 50 },
        { name: "PHP", level: 20 },
        { name: "MYSQL", level: 60 },
        { name: "Node.js", level: 30 },
        { name: "Java", level: 35 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 70 },
        { name: "Figma", level: 90 },
        { name: "Photoshop", level: 60 },
        { name: "WordPress", level: 40 },
        { name:"Adobe After Effects", level: 85}
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Here are some of the technologies and tools I work with
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skill-category ${category.isLearning ? 'learning' : ''}`}>
              <div className="skill-category-header">
                <h3>
                  {category.title}
                  {category.isLearning && (
                    <span className="learning-badge">still learning</span>
                  )}
                </h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
