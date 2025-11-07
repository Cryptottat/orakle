import { useEffect, useRef } from 'react'
import './LandingPage.css'

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Grid parallax effect
    const handleScroll = () => {
      if (gridRef.current) {
        const scrollY = window.scrollY
        gridRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="landing-page">
      {/* Technical background effects */}
      <div className="tech-background">
        {/* 3D transformed grid */}
        <div className="tech-grid" ref={gridRef}></div>
        
        {/* Wave patterns */}
        <div className="tech-wave wave-1"></div>
        <div className="tech-wave wave-2"></div>
        <div className="tech-wave wave-3"></div>
        
        {/* Glow ring effects */}
        <div className="tech-glow-ring ring-1">
          <div className="ring-image-container">
            <img src="/12.png" alt="" className="ring-image" />
          </div>
        </div>
        <div className="tech-glow-ring ring-2"></div>
        <div className="tech-glow-ring ring-3"></div>
        
        {/* Geometric shapes - 3D transformed */}
        <div className="tech-geometric geo-1"></div>
        <div className="tech-geometric geo-2"></div>
        <div className="tech-geometric geo-3"></div>
        
        {/* Data stream effects */}
        <div className="tech-stream stream-1"></div>
        <div className="tech-stream stream-2"></div>
      </div>

      {/* Main content - asymmetric layout */}
      <div className="landing-hero" ref={heroRef}>
        {/* Left area - golden ratio 61.8% */}
        <div className="hero-left">
          <div className="hero-label" style={{ animationDelay: '0s' }}>
            <span className="label-line"></span>
            <span className="label-text">AI-Powered Predictions</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-word word-1" style={{ animationDelay: '0.1s' }}>
              Truth
            </span>
            <span className="title-word word-2" style={{ animationDelay: '0.2s' }}>
              On Demand.
            </span>
            <span className="title-word word-3 accent" style={{ animationDelay: '0.3s' }}>
              x402
            </span>
          </h1>
          
          <div className="hero-tagline" style={{ animationDelay: '0.4s' }}>
            <span className="tagline-main">Instant Data, Instant Wealth.</span>
          </div>
        </div>

        {/* Right area - golden ratio 38.2% */}
        <div className="hero-right">
          <div className="hero-description-wrapper" style={{ animationDelay: '0.5s' }}>
            <p className="hero-description">
              <span className="description-highlight">AI-Powered Predictions.</span>
              <br />
              Instantly Paid with x402.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="hero-decoration" style={{ animationDelay: '0.6s' }}>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="landing-footer">
        <div className="footer-line"></div>
        <div className="footer-text">Orakle</div>
      </div>
    </div>
  )
}
