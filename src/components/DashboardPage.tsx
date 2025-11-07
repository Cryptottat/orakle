import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function DashboardPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Dashboard</h1>
          
          {/* Top grid - 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h3 style={{ fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '0.5rem' }}>x402 Balance</h3>
              <p style={{ fontSize: '2rem', fontWeight: '600', color: '#1a1a1a' }}>0.00...</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h3 style={{ fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '0.5rem' }}>Total Queries (30d)</h3>
              <p style={{ fontSize: '2rem', fontWeight: '600', color: '#1a1a1a' }}>0</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h3 style={{ fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '0.5rem' }}>API Status</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50' }}></span>
                <p style={{ fontSize: '1rem', fontWeight: '500', color: '#1a1a1a' }}>Operational</p>
              </div>
            </div>
          </div>

          {/* Quick Query section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Quick Query</h2>
            <textarea
              placeholder="Ask Orakle anything..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(26, 26, 26, 0.1)',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
            <button
              style={{
                marginTop: '1rem',
                padding: '0.75rem 2rem',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </div>

          {/* Recent Query History */}
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Recent Query History</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Query ID</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Cost</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.05)' }}>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>qry_{i}xxxxx</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Completed</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>0.001 x402</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>2024-01-{i.toString().padStart(2, '0')} 12:00</td>
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

