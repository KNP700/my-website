import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
          <h2>Web Developer & Designer</h2>
          <p>
            I create beautiful and functional websites that provide amazing user experiences.
            Welcome to my digital portfolio where creativity meets functionality.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <img src="/api/placeholder/300/300" alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
