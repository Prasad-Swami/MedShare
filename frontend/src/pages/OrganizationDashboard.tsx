
import { useState } from 'react'
import '../styles/OrganizationDashboard.css'

type Section = 'Overview' | 'Donation Listings' | 'Medicine Requests' | 'My Coordinations' | 'Organization Profile'

const donations: any[] = []

const requests: any[] = []

const activities: any[] = []

function OrganizationDashboard() {
  const [section, setSection] = useState<Section>('Overview')
  const [verified, setVerified] = useState(false)
  const [selected, setSelected] = useState<any>(null)
  const [interested, setInterested] = useState<number[]>([])

  const menu: Section[] = [
    'Overview',
    'Donation Listings',
    'Medicine Requests',
    'My Coordinations',
    'Organization Profile',
  ]

  const expressInterest = (id: number) => {
    setInterested([...interested, id])
    alert('Your interest has been recorded. The recipient will be notified.')
  }

  const openDetails = (item: any, type: string) => {
    setSelected({ ...item, type })
  }

  return (
    <div className="org-dashboard">
      <aside className="org-sidebar">
        <div className="org-brand">MedShare<span>.</span></div>
        <p className="sidebar-label">ORGANIZATION</p>

        {menu.map(item => (
          <button
            key={item}
            className={`sidebar-link ${section === item ? 'active' : ''}`}
            onClick={() => setSection(item)}
          >
            {item}
          </button>
        ))}

        <button className="logout-button" onClick={() => alert('Logout will be connected later.')}>
          Logout
        </button>
      </aside>

      <main className="org-main">
        <header className="org-header">
          <div>
            <p className="header-small">ORGANIZATION PORTAL</p>
            <h2>Welcome, Helping Hands Foundation</h2>
          </div>
          <div className="header-status">
            <span className={verified ? 'status-verified' : 'status-pending'}>
              {verified ? 'Verified Account' : 'Pending Verification'}
            </span>
          </div>
        </header>

        {!verified ? (
          <section className="pending-card">
            <div className="pending-icon">⌛</div>
            <h2>Your organization account is under review.</h2>
            <p>
              The registration details and documents submitted by your
              organization are being reviewed by our Admin team.
            </p>
            <p className="pending-note">
              You will be able to access organization activities after verification.
            </p>
          </section>
        ) : (
          <>
            <section className="verification-banner">
              <div>
                <strong>✓ Organization Verified</strong>
                <p>Your organization can access all operational activities.</p>
              </div>
              <span>Approved</span>
            </section>

            <div className="dashboard-layout">
              <section className="org-content">
                <h1>{section}</h1>

                {section === 'Overview' && (
                  <>
                    <p className="section-description">Manage your medicine donations, requests and coordination.</p>
                    <div className="overview-cards">
                      <div className="overview-card">
                        <span>Available Donations</span>
                        <strong>{donations.length}</strong>
                      </div>
                      <div className="overview-card">
                        <span>Medicine Requests</span>
                        <strong>{requests.length}</strong>
                      </div>
                      <div className="overview-card">
                        <span>Active Coordinations</span>
                        <strong>0</strong>
                      </div>
                    </div>
                    <h3 className="subheading">Quick access</h3>
                    <div className="quick-links">
                      {menu.slice(1).map(item => (
                        <button key={item} onClick={() => setSection(item)}>{item} →</button>
                      ))}
                    </div>
                  </>
                )}

                {section === 'Donation Listings' && (
                  <DataTable
                    headings={['Medicine Name', 'Quantity', 'Expiry Date', 'Action']}
                    rows={donations.map(item => [
                      item.medicine, item.quantity, item.expiry,
                      <button className="table-button" onClick={() => openDetails(item, 'Donation')}>View Details</button>
                    ])}
                  />
                )}

                {section === 'Medicine Requests' && (
                  <DataTable
                    headings={['Medicine Name', 'Quantity Required', 'Action']}
                    rows={requests.map(item => [
                      item.medicine, item.quantity,
                      <div className="action-buttons">
                        <button className="table-button" onClick={() => openDetails(item, 'Request')}>View Details</button>
                        <button
                          className="interest-button"
                          disabled={interested.includes(item.id)}
                          onClick={() => expressInterest(item.id)}
                        >
                          {interested.includes(item.id) ? 'Interest Sent' : 'Express Interest'}
                        </button>
                      </div>
                    ])}
                  />
                )}

                {section === 'My Coordinations' && (
                  <DataTable
                    headings={['Person', 'Medicine', 'Address', 'Delivery Status', 'Action']}
                    rows={[]}
                  />
                )}

                {section === 'Organization Profile' && (
                  <div className="profile-card">
                 <p>Your organization details will appear here after registration.</p>
                  </div>
                )}
              </section>

              <aside className="recent-panel">
              <h3>Recent Activity</h3>

            {activities.length === 0 ? (
            <p>No recent activity yet.</p>
             ) : (
             activities.map((item, index) => (
             <div className="activity-item" key={index}>
              <strong>{item.title}</strong>
                <p>{item.detail}</p>
                 <small>{item.time}</small>
                 </div>
                   ))
                )}
               </aside>
            </div>
          </>
        )}
      </main>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="details-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>×</button>
            <h2>{selected.type} Details</h2>
            <p><strong>Medicine:</strong> {selected.medicine}</p>
            {selected.quantity && <p><strong>Quantity:</strong> {selected.quantity}</p>}
            {selected.expiry && <p><strong>Expiry Date:</strong> {selected.expiry}</p>}
            <p><strong>{selected.type === 'Donation' ? 'Donor' : selected.type === 'Request' ? 'Requester' : 'Person'}:</strong> {selected.donor || selected.requester || selected.person}</p>
            <p><strong>Location:</strong> {selected.location}</p>
            {selected.status && <p><strong>Status:</strong> {selected.status}</p>}
            {selected.type !== 'Coordination' && (
              <p className="privacy-note">
                Contact details will be shared only after the donor or recipient
                gives consent for coordination.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function DataTable({ headings, rows }: { headings: string[], rows: any[][] }) {
  return (
    <div className="table-wrapper">
      <table className="org-table">
        <thead>
          <tr>{headings.map(item => <th key={item}>{item}</th>)}</tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headings.length} style={{ textAlign: 'center', padding: '30px' }}>
                No records available yet.
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => <td key={i}>{cell}</td>)}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrganizationDashboard
