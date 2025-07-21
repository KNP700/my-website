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
      title: "Cogni website",
      description: "Website for cogni chrome extension",
      image: "/api/placeholder/400/250",
      technologies: [ "CSS", "JavaScript"]
    
    },
    
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
