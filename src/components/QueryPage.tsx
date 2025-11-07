import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function QueryPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Orakle Query</h1>
          
          {/* Query input */}
          <div style={{ marginBottom: '2rem' }}>
            <textarea
              placeholder="Ask Orakle anything... (e.g., Predict $SOL sentiment in 1h)"
              style={{
                width: '70%',
                minHeight: '200px',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(26, 26, 26, 0.1)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Option toggles */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Real-time Data
            </button>
            <button
              style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: 'rgba(26, 26, 26, 0.6)',
                border: '1px solid rgba(26, 26, 26, 0.1)',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              AI Prediction
            </button>
          </div>

          {/* Cost display */}
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)' }}>
              Estimated Cost: <span style={{ fontWeight: '600', color: '#1a1a1a' }}>0.0... x402</span>
            </p>
          </div>

          {/* Submit button */}
          <div style={{ marginBottom: '3rem' }}>
            <button
              disabled
              style={{
                padding: '0.75rem 2rem',
                background: 'rgba(26, 26, 26, 0.1)',
                color: 'rgba(26, 26, 26, 0.4)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'not-allowed'
              }}
            >
              Submit Query
            </button>
          </div>

          {/* Results panel */}
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Results</h2>
            <div
              style={{
                minHeight: '300px',
                padding: '2rem',
                background: 'rgba(76, 175, 80, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(76, 175, 80, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(26, 26, 26, 0.4)'
              }}
            >
              Your query results will appear here...
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

