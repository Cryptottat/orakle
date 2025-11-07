import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function BillingPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Billing & Wallet</h1>
          
          {/* Top grid - 2 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
            {/* Left: Current Balance */}
            <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h2 style={{ fontSize: '1rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '1rem' }}>Current Balance</h2>
              <p style={{ fontSize: '3rem', fontWeight: '700', color: '#1a1a1a' }}>0.00... x402</p>
            </div>

            {/* Right: Deposit Address */}
            <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h2 style={{ fontSize: '1rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '1rem' }}>Your Deposit Address</h2>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#1a1a1a', wordBreak: 'break-all', marginBottom: '1rem' }}>
                    x402_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                  </p>
                </div>
                <div style={{ width: '120px', height: '120px', background: 'rgba(26, 26, 26, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(26, 26, 26, 0.3)', fontSize: '0.75rem' }}>
                  QR Code
                </div>
              </div>
            </div>

            {/* Right: Deposit Address */}
            <div style={{ padding: '2rem', background: 'rgba(76, 175, 80, 0.05)', borderRadius: '8px', border: '1px solid rgba(76, 175, 80, 0.1)' }}>
              <h2 style={{ fontSize: '1rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '1rem' }}>Your Deposit Address</h2>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#1a1a1a', wordBreak: 'break-all', marginBottom: '1rem' }}>
                    x402_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                  </p>
                </div>
                <div style={{ width: '120px', height: '120px', background: 'rgba(26, 26, 26, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(26, 26, 26, 0.3)', fontSize: '0.75rem' }}>
                  QR Code
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Transaction History</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.1)' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Date</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Amount</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', fontWeight: '500' }}>TxID</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(26, 26, 26, 0.05)' }}>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>2024-01-{i.toString().padStart(2, '0')}</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{i % 2 === 0 ? 'Deposit' : 'Withdrawal'}</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>{i * 0.1} x402</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Confirmed</td>
                    <td style={{ padding: '0.75rem', fontSize: '0.875rem', fontFamily: 'monospace' }}>tx_{i}xxxxx</td>
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

