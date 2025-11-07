import { AppSubHeader } from './AppPage'
import './AppPage.css'

export default function TerminalPage() {
  return (
    <div className="app-page">
      <AppSubHeader />
      <div className="page-preview-container">
      <div className="page-content-wrapper" style={{ padding: 'calc(64px + 56px + 0) 0 0 0' }}>
        {/* Terminal - Full width */}
        <div className="dashboard-terminal">
          <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">orakle@cloud:~$</span>
                <span className="terminal-command"> orakle status</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">System: Operational</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">API: Connected</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">x402 Network: Active</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">orakle@cloud:~$</span>
                <span className="terminal-command"> query --help</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">Usage: query [options]</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">  --real-time    Enable real-time data</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">  --ai           Use AI predictions</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">orakle@cloud:~$</span>
                <span className="terminal-command"> orakle balance</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-output">Current Balance: 0.00... x402</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">orakle@cloud:~$</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

