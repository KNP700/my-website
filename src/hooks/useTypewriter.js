import { useState, useEffect } from 'react'

const useTypewriter = (words, speed = 100, pauseDuration = 2000) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false)
        setIsDeleting(true)
        setIsComplete(false)
        return
      }

      if (isDeleting) {
        // Delete characters
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => 
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          )
        }
      } else {
        // Type characters
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        } else {
          // Finished typing, pause before deleting
          setIsComplete(true)
          setIsPaused(true)
        }
      }
    }, isPaused ? pauseDuration : isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, speed, pauseDuration])

  return { text: currentText, isComplete, currentWordIndex }
}

export default useTypewriter
