import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function SettingsPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '600' }}>Settings</h1>
          
          {/* Profile section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Profile</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', color: 'rgba(26, 26, 26, 0.6)', marginBottom: '0.5rem' }}>
                Email
              </label>
              <input
                type="email"
                disabled
                value="user@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(26, 26, 26, 0.1)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  background: 'rgba(26, 26, 26, 0.05)',
                  color: 'rgba(26, 26, 26, 0.4)',
                  cursor: 'not-allowed'
                }}
              />
            </div>
          </div>

          {/* Change Password section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Change Password</h2>
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
              Change Password
            </button>
          </div>

          {/* Notifications section */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Notifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="checkbox"
                  id="low-balance"
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <label htmlFor="low-balance" style={{ fontSize: '0.875rem', color: '#1a1a1a', cursor: 'pointer' }}>
                  Email me on low balance
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <input
                  type="checkbox"
                  id="app-notifications"
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <label htmlFor="app-notifications" style={{ fontSize: '0.875rem', color: '#1a1a1a', cursor: 'pointer' }}>
                  App
                </label>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div>
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
              Save Changes
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

