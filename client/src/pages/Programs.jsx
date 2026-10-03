import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, photo } from '../components/ui'
import { pillars, programs } from '../data/site'

export default function Programs() {
  return (
    <>
      <PageHero
        crumb="Our Work"
        title="Six programmes. One goal: families that can stand on their own."
        intro="We work across health, welfare, education and livelihoods, because poverty rarely has just one cause."
        image="hero-programs.jpg"
        fallback="var(--fb-blue)"
      />

      {/* ---------- Pillar overview ---------- */}
      <section className="section--tight bg-cream">
        <div className="wrap grid-4">
          {pillars.map((p) => (
            <div className="feature" key={p.key} style={{ borderTop: `4px solid ${p.color}` }}>
              <div className="feature__icon" style={{ color: p.color, background: `color-mix(in srgb, ${p.color} 12%, white)` }}>
                <Icon name={p.icon} size={26} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Program rows ---------- */}
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          {programs.map((p, i) => (
            <article className="program" id={p.slug} key={p.slug} style={{ '--c': p.color, scrollMarginTop: 100 }}>
              <div className="program__media reveal">
                <div className="media media--tall" style={photo(p.image, p.fallback)}>
                  <span className="card__tag" style={{ '--c': p.color, top: 24, left: 24 }}>{p.pillar}</span>
                </div>
              </div>
              <div className="reveal">
                <div className="program__num">PROGRAMME {String(i + 1).padStart(2, '0')}</div>
                <h2>{p.title}</h2>
                <p className="lead" style={{ fontSize: '1.08rem' }}>{p.body}</p>
                <div className="program__facts">
                  {p.facts.map(([n, l]) => (
                    <div key={l}><strong>{n}</strong><span>{l}</span></div>
                  ))}
                </div>
                <ul className="checklist">
                  {p.activities.slice(0, 3).map((a) => <li key={a}>{a}</li>)}
                </ul>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link className="btn btn--navy" to={`/programs/${p.slug}`}>Full programme details</Link>
                  <Link className="btn btn--outline" to={`/donate?program=${encodeURIComponent(p.title)}`}>Support this</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- How we deliver ---------- */}
      <section className="section bg-navy">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">How we deliver</span>
            <h2>From first contact to lasting change.</h2>
          </div>
          <div className="grid-4">
            {[
              ['users', '1. We find the need', 'Community leaders, schools, clinics and faith groups point us to people who need help.'],
              ['file', '2. We check', 'Our welfare team visits each family so support goes where it matters most.'],
              ['hands', '3. We deliver', 'Volunteers and partners provide care, supplies, training and grants directly.'],
              ['target', '4. We follow up', 'We check in, track results and report back to everyone who supported the work.'],
            ].map(([icon, title, text]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={26} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Need help ---------- */}
      <section className="section--tight">
        <div className="wrap">
          <div className="alert-box" style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div>
              <strong>Do you or someone you know need help?</strong>
              <p style={{ margin: '4px 0 0' }}>You can apply for any of our programmes. It is free and confidential.</p>
            </div>
            <Link className="btn btn--navy" to="/get-help">Request support</Link>
          </div>
        </div>
      </section>

      <CTA title="Sponsor a programme." text="You, your company or your congregation can fund a whole outreach, a group of scholars or a skills class. Let’s talk about what fits you." />
    </>
  )
}
