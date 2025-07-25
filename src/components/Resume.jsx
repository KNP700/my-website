import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Kaveen_Nimsara_CV.pdf'
    link.download = 'Kaveen_Nimsara_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    window.open('/Kaveen_Nimsara_CV.pdf', '_blank')
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <ScrollAnimation animation="scroll-animate">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            CV will be available soon. Please check back later or contact me for more information.
          </p>
        </ScrollAnimation>
        
        <div className="resume-content">
          <ScrollAnimation animation="scroll-animate-scale" className="resume-card">
            <div className="resume-preview">
              <div className="resume-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              
              <div className="resume-info">
                <h3>Kaveen Nimsara CV</h3>
                <p>Complete professional resume with experience, education, and skills</p>
                
                <div className="resume-details">
                  <span className="file-type">PDF Document</span>
                  <span className="file-size">Updated 2025</span>
                </div>
              </div>
            </div>
            
            {/* Temporarily disabled CV download and view buttons */}
            {/*
            <div className="resume-actions">
              <button onClick={handleDownload} className="btn primary resume-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </button>
              
              <button onClick={handleView} className="btn secondary resume-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View Online
              </button>
            </div>
            */}
            
            <div className="resume-notice">
              <p><strong>Note:</strong> CV will be made available soon. Feel free to contact me for any inquiries.</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scroll-animate-left" className="resume-highlights">
            <h3>Resume Highlights</h3>
            <div className="highlight-grid">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div>
                  <h4>Technical Skills</h4>
                  <p>Frontend & Backend Development</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>Projects</h4>
                  <p>Innovative web applications</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h4>Education</h4>
                  <p>Academic background & certifications</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4>Experience</h4>
                  <p>Professional work history</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Resume
