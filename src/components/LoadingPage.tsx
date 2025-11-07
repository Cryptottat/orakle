import { useEffect, useState } from 'react'
import './LoadingPage.css'

interface LoadingPageProps {
  onComplete: () => void
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let progressInterval: number | null = null

    // Start progress animation after 50ms delay
    const startDelay = setTimeout(() => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (progressInterval) {
              clearInterval(progressInterval)
            }
            return 100
          }
          return prev + 2
        })
      }, 30)
    }, 50)

    // Fade out after completion
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 2050)

    return () => {
      clearTimeout(startDelay)
      clearTimeout(fadeTimer)
      if (progressInterval) {
        clearInterval(progressInterval)
      }
    }
  }, [onComplete])

  return (
    <div className={`loading-page ${fadeOut ? 'fade-out' : ''}`}>
      {/* Full screen green overlay */}
      <div 
        className="loading-overlay" 
        style={{ width: `${progress}%` }}
      ></div>
      
      <div className="loading-content">
        <div className="loading-logo">orakle</div>
        <div className="loading-progress-container">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

