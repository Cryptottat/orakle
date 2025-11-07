import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import LoadingPage from './components/LoadingPage'
import AppPage from './components/AppPage'
import DashboardPage from './components/DashboardPage'
import QueryPage from './components/QueryPage'
import BillingPage from './components/BillingPage'
import FeedsPage from './components/FeedsPage'
import DeveloperPage from './components/DeveloperPage'
import SettingsPage from './components/SettingsPage'
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
        {/* Landing page shows only header */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <LandingPage />
            </>
          } 
        />
        {/* App pages */}
        <Route 
          path="/app" 
          element={
            <>
              <Header />
              <AppPage />
            </>
          } 
        />
        <Route 
          path="/app/dashboard" 
          element={
            <>
              <Header />
              <DashboardPage />
            </>
          } 
        />
        <Route 
          path="/app/query" 
          element={
            <>
              <Header />
              <QueryPage />
            </>
          } 
        />
        <Route 
          path="/app/billing" 
          element={
            <>
              <Header />
              <BillingPage />
            </>
          } 
        />
        <Route 
          path="/app/feeds" 
          element={
            <>
              <Header />
              <FeedsPage />
            </>
          } 
        />
        <Route 
          path="/app/developer" 
          element={
            <>
              <Header />
              <DeveloperPage />
            </>
          } 
        />
        <Route 
          path="/app/settings" 
          element={
            <>
              <Header />
              <SettingsPage />
            </>
          } 
        />
        {/* Docs pages use Layout */}
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

