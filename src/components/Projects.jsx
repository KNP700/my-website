import React from 'react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Chrome Extension For youtube",
      description: "Chrome extension that summerize video, Genarate real time quizes from that video and there is a AI bot to ask any question about that video",
      image: "/api/placeholder/400/250",
      technologies: ["Vite", "Node.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ecommerce-project",
      liveLink: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with drag-and-drop functionality and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Firebase", "CSS3", "JavaScript"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://your-task-manager.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather conditions and forecasts for multiple cities.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://your-weather-app.com"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
