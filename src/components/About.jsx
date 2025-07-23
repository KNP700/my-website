import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <ScrollAnimation animation="scroll-animate-left">
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <h3>I'm passionate about creating digital experiences</h3>
              <p>
                With a strong background in web development, I specialize in creating 
                modern, responsive websites and applications. I love turning complex 
                problems into simple, beautiful designs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                reading about design trends, or enjoying outdoor activities. I believe 
                in continuous learning and staying up-to-date with the latest industry practices.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="scroll-animate-right">
            <div className="about-image">
              <img src="/IMG-20250712-WA0023.jpg" alt="About Kaveen Perera" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About
