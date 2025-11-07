import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function DeveloperPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Developer</h1>
          
          {/* API Keys section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>API Keys</h2>
            <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#1a1a1a', flex: 1 }}>
                  api_key_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    color: '#4CAF50',
                    border: '1px solid #4CAF50',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Copy
                </button>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'transparent',
                    color: 'rgba(26, 26, 26, 0.6)',
                    border: '1px solid rgba(26, 26, 26, 0.1)',
                    borderRadius: '6px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Revoke
                </button>
              </div>
            </div>
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
              Generate New Key
            </button>
          </div>

          {/* Webhooks section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Webhooks</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '0.5rem' }}>
                Endpoint URL
              </label>
              <input
                type="text"
                placeholder="https://your-endpoint.com/webhook"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(26, 26, 26, 0.1)',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
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
                Save
              </button>
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#4CAF50',
                  border: '1px solid #4CAF50',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Test
              </button>
            </div>
          </div>

          {/* API Logs section */}
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>API Logs</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Timestamp</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Method</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Endpoint</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.05)' }}>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>2024-01-{i.toString().padStart(2, '0')} 12:00:00</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>POST</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontFamily: 'monospace' }}>/api/v1/query</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>200</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>0.001 x402</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

