import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <ScrollAnimation animation="scroll-animate">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </ScrollAnimation>
        
        <div className="education-content">
          <ScrollAnimation animation="scroll-animate-left" className="education-item">
            <div className="education-card">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              
              <div className="education-info">
                <div className="education-status">Present</div>
                <h3>BSc (Hons) Computer Science</h3>
                <div className="education-institution">
                  <p className="university">University of Westminster, UK</p>
                  <p className="local-institution">Informatic Institute of Technology, Sri Lanka</p>
                </div>
                <div className="education-description">
                  <p>Bachelor's degree program in Computer Science with focus on software development, algorithms, and modern computing technologies.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="scroll-animate-right" className="education-item">
            <div className="education-card">
              <div className="education-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              
              <div className="education-info">
                <div className="education-status ongoing">July 2024 - Present</div>
                <h3>Higher National Diploma in Software Engineering</h3>
                <div className="education-institution">
                  <p className="university">Institute of Computer Engineering Technology</p>
                </div>
                <div className="education-description">
                  <p>Advanced diploma program specializing in software engineering principles, project management, and practical application development.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Education
