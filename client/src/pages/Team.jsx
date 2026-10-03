import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, photo, initials } from '../components/ui'
import { staff, board } from '../data/content'

const fallbacks = ['var(--fb-blue)', 'var(--fb-green)', 'var(--fb-warm)']

export default function Team() {
  return (
    <>
      <PageHero
        crumb={<><Link to="/about">About</Link> &nbsp;/&nbsp; Our Team</>}
        title="The people who make it happen."
        intro="A small staff team, a committed Board of Trustees and more than 150 volunteers. Most of us live in or near the communities we serve."
        image="hero-team.jpg"
        fallback="var(--fb-blue)"
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Staff</span>
              <h2>Our team.</h2>
              <p>The people you’ll meet at our office, at outreaches and on the phone.</p>
            </div>
          </div>
          <div className="grid-4">
            {staff.map((t, i) => (
              <div className="team-card" key={t.role}>
                <div className="team-card__photo" style={photo(t.image, fallbacks[i % 3])} />
                <h3>{t.name}</h3>
                <span>{t.role}</span>
                <p>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Governance</span>
              <h2>Board of Trustees.</h2>
              <p>Our trustees volunteer their time to guide our direction, check our finances and protect the people we serve. They meet every quarter.</p>
            </div>
          </div>
          <div className="grid-2">
            {board.map((b, i) => (
              <div className="board-card" key={i}>
                <div className="person__avatar" style={{ background: fallbacks[i % 3] }}>{initials(b.name)}</div>
                <div>
                  <h3>{b.name}</h3>
                  <span>{b.role}</span>
                  <p>{b.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Volunteers</span>
            <h2>Our biggest team doesn’t get paid.</h2>
            <p>
              Doctors who give up their Saturdays. Teachers who stay after school. Young people who carry boxes
              of food in the sun. Corps members who help with records. Our volunteers are the reason we can do so
              much with so little.
            </p>
            <Link className="btn btn--light" to="/get-involved#volunteer">Join them</Link>
          </div>
          <div className="stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
            {[['150+', 'active volunteers'], ['40+', 'health professionals'], ['5,000+', 'hours given each year'], ['20+', 'NYSC members hosted']].map(([n, l]) => (
              <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="media" style={{ ...photo('team-office.jpg', 'var(--fb-green)'), minHeight: 360 }} />
          <div>
            <span className="eyebrow">Work with us</span>
            <h2>Want to join the team?</h2>
            <p>We sometimes have paid roles, internships and NYSC placements. If you care about this community and want to do meaningful work, we’d love to hear from you.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn--navy" to="/careers">See open roles</Link>
              <Link className="btn btn--outline" to="/contact"><Icon name="mail" size={18} /> Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
