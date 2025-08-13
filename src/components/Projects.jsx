import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RepairME",
      description: "repaireME is a location-based app that connects stranded drivers with nearby garages, enabling real-time repair requests and navigation support for garage personnel to reach and assist on-site",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=RepairME",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 2,
      title: "Chrome Extension For youtube",
      description: "Chrome extension that summerize video, Genarate real time quizes from that video and there is a AI bot to ask any question about that video",
      image: "/api/placeholder/400/250",
      technologies: ["Vite", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Cogni website",
      description: "Website for cogni chrome extension",
      image: "/vite.svg",
      technologies: [ "CSS", "JavaScript"],
      liveLink: "https://cogni.lk"
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollAnimation animation="scroll-animate">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on recently
          </p>
        </ScrollAnimation>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              animation="scroll-animate-stagger"
              className="project-card"
            >
              {/* Always show the main image if provided */}
              {project.image && (
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = '/api/placeholder/400/250';
                    }}
                  />
                </div>
              )}
              
              <div className="project-content">
                <div className="project-title-container">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {(project.githubLink || project.liveLink) && (
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Click to see
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
