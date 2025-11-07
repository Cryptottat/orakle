import { useEffect, useState } from 'react'
import './LoadingPage.css'

interface LoadingPageProps {
  onComplete: () => void
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null

    // 0.05초 딜레이 후 진행률 애니메이션 시작
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
    }, 50) // 0.05초 딜레이

    // 완료 후 페이드아웃
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 2050) // 딜레이 시간 추가

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
      {/* 전체 화면 녹색 오버레이 */}
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

