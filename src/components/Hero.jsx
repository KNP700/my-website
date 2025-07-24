import React from 'react'
import useTypewriter from '../hooks/useTypewriter'

const Hero = () => {
  const titles = [
    'Web Developer',
    'Designer', 
    'Innovator',
    'Explorer',
    'Video Editor'
  ]
  
  const { text: dynamicText, isComplete } = useTypewriter(titles, 150, 2000)

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm <span className="highlight">Kaveen Perera</span></h1>
          <div className="typewriter-container">
            <h2>
              <span className={`dynamic-text ${isComplete ? 'complete' : ''}`}>{dynamicText}</span>
              <span className="cursor">|</span>
            </h2>
          </div>
          
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
