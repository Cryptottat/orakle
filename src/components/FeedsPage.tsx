import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function FeedsPage() {
  const feedTitles = [
    'SOL/USD Price',
    'BTC/USD Price',
    'ETH/USD Price',
    'Market Sentiment',
    'Trading Volume',
    'Price Prediction',
    'News Feed',
    'Social Media',
    'On-chain Data'
  ]

  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Data Feeds</h1>
          
          {/* Search bar */}
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              placeholder="Search Feeds..."
              style={{
                width: '100%',
                maxWidth: '500px',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(26, 26, 26, 0.1)',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Feed grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {feedTitles.map((title, index) => (
              <div
                key={index}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(76, 175, 80, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(76, 175, 80, 0.1)'
                }}
              >
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a1a1a' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '1rem', lineHeight: '1.5' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(26, 26, 26, 0.5)' }}>
                  <span>Update Interval: 1s</span>
                  <span>Query Cost: 0.001 x402</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

