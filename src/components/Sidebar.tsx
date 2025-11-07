import { useLocation, Link } from 'react-router-dom'
import { docsData } from '../data/docsData'
import { createRoutesFromDocs } from '../utils/routes'
import './Sidebar.css'

export default function Sidebar() {
  const location = useLocation()
  const routes = createRoutesFromDocs(docsData)
  
  // L1 그룹화
  const l1Groups = routes.reduce((acc, route) => {
    if (!acc[route.l1]) {
      acc[route.l1] = {}
    }
    if (!acc[route.l1][route.l2]) {
      acc[route.l1][route.l2] = []
    }
    acc[route.l1][route.l2].push(route)
    return acc
  }, {} as Record<string, Record<string, typeof routes>>)

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {Object.entries(l1Groups).map(([l1, l2Groups], l1Index) => (
          <div key={l1} className="nav-section" style={{ animationDelay: `${l1Index * 0.05}s` }}>
            <div className="nav-l1">{l1}</div>
            {Object.entries(l2Groups).map(([l2, l3Routes]) => (
              <div key={l2} className="nav-l2-group">
                <div className="nav-l2">{l2}</div>
                <ul className="nav-l3-list">
                  {l3Routes.map((route) => (
                    <li key={route.path} className="nav-l3-item">
                      <Link
                        to={route.path}
                        className={`nav-l3-link ${isActive(route.path) ? 'active' : ''}`}
                      >
                        {route.l3}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}



