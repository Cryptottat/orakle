import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isDocs = !isHome

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src="/logo_tr_fit.png" alt="Orakle Logo" className="logo-image" />
          <span className="logo-text">orakle</span>
        </Link>
        <nav className="header-nav">
          <a href="https://x.com/orakledotnet" target="_blank" rel="noopener noreferrer" className="nav-link">
            x
          </a>
          <Link to="/introduction/overview/what-is-orakle" className={`nav-link ${isDocs ? 'active' : ''}`}>
            docs
          </Link>
          <a href="https://app.orakle.com" target="_blank" rel="noopener noreferrer" className="nav-link">
            app
          </a>
        </nav>
      </div>
    </header>
  )
}


