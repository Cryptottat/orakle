import { useLocation, Link } from 'react-router-dom'
import './AppPage.css'

// Sub header component that will be used by all app pages
export function AppSubHeader() {
  const location = useLocation()
  const currentPath = location.pathname

  const menuItems = [
    { name: 'Dashboard', path: '/app/dashboard' },
    { name: 'Terminal', path: '/app/terminal' },
    { name: 'Query', path: '/app/query' },
    { name: 'Billing', path: '/app/billing' },
    { name: 'Feeds', path: '/app/feeds' },
    { name: 'Developer', path: '/app/developer' },
    { name: 'Settings', path: '/app/settings' }
  ]

  return (
    <div className="app-sub-header">
      <div className="app-sub-header-container">
        <nav className="app-sub-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`app-sub-nav-link ${currentPath === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default function AppPage() {
  return (
    <div className="app-page">
      {/* Sub header */}
      <AppSubHeader />

      <div className="app-page-container">
        <h1 className="app-page-title">Orakle App</h1>
        <p className="app-page-description">
          The Orakle application is coming soon. This will be your gateway to AI-powered predictions and instant data insights.
        </p>
        <div className="app-page-features">
          <div className="app-feature">
            <h3>Dashboard</h3>
            <p>Monitor your queries and insights</p>
          </div>
          <div className="app-feature">
            <h3>Query</h3>
            <p>Make predictions and get instant results</p>
          </div>
          <div className="app-feature">
            <h3>Billing</h3>
            <p>Manage your x402 micropayments</p>
          </div>
          <div className="app-feature">
            <h3>Feeds</h3>
            <p>Access real-time data streams</p>
          </div>
          <div className="app-feature">
            <h3>Developer</h3>
            <p>API keys and integration tools</p>
          </div>
          <div className="app-feature">
            <h3>Settings</h3>
            <p>Configure your preferences</p>
          </div>
        </div>
      </div>
    </div>
  )
}

