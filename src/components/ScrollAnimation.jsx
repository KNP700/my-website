import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ScrollAnimation = ({ 
  children, 
  animation = 'scroll-animate', 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px',
  className = '',
  ...props 
}) => {
  const [elementRef, isVisible] = useScrollAnimation(threshold, rootMargin)

  return (
    <div
      ref={elementRef}
      className={`${animation} ${isVisible ? 'animate-in' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
