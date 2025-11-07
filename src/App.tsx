import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import LoadingPage from './components/LoadingPage'
import { docsData } from './data/docsData'
import { createRoutesFromDocs } from './utils/routes'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const routes = createRoutesFromDocs(docsData)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingPage onComplete={handleLoadingComplete} />
  }

  return (
    <Router>
      <Routes>
        {/* 랜딩 페이지는 헤더만 표시 */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <LandingPage />
            </>
          } 
        />
        {/* 문서 페이지는 Layout 사용 */}
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<Layout>{route.element}</Layout>} 
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App

