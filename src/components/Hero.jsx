import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Kaveen Perera</span></h1>
          <h2>Web Developer & Designer </h2>
          
          <p> Coding Automation & Beyond Constantly learning, exploring, and solving—bridging creativity and technology through hands-on experience
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
            <img src="/IMG-20250712-WA0023.jpg" alt="Kaveen Perera" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
