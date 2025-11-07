import { useEffect, useState } from 'react'
import './LoadingPage.css'

interface LoadingPageProps {
  onComplete: () => void
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [showLogo, setShowLogo] = useState(false)

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
            // Show logo when progress reaches 100%
            setShowLogo(true)
            return 100
          }
          return prev + 2
        })
      }, 30)
    }, 50)

    // Fade out after logo appears (wait for logo animation to complete)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 2350) // 2050ms (progress) + 300ms (logo animation)

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
        <div className="loading-logo-wrapper">
          <div className="loading-logo">orakle</div>
          {showLogo && (
            <img 
              src="/logo_tr_fit.png" 
              alt="Orakle Logo" 
              className="loading-logo-image"
            />
          )}
        </div>
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

