import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, photo } from '../components/ui'
import { programs } from '../data/site'
import NotFound from './NotFound'

export default function ProgramDetail() {
  const { slug } = useParams()
  const index = programs.findIndex((p) => p.slug === slug)
  if (index === -1) return <NotFound />
  const p = programs[index]
  const next = programs[(index + 1) % programs.length]

  return (
    <>
      <PageHero
        crumb={<><Link to="/programs">Our Work</Link> &nbsp;/&nbsp; {p.title}</>}
        title={p.title}
        intro={p.summary}
        image={p.image}
        fallback={p.fallback}
      />

      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <div className="reveal">
              <span className="eyebrow" style={{ color: p.color }}>{p.pillar}</span>
              <h2>Why this programme matters</h2>
              <p className="lead">{p.body}</p>
            </div>

            <div className="program__facts reveal">
              {p.facts.map(([n, l]) => (
                <div key={l}><strong>{n}</strong><span>{l}</span></div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: 40 }}>
              <h3>Who it’s for</h3>
              <p>{p.who}</p>
            </div>

            <div className="reveal" style={{ marginTop: 30 }}>
              <h3>What we do</h3>
              <ul className="checklist">
                {p.activities.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>

            <div className="reveal" style={{ marginTop: 10 }}>
              <h3>How to take part</h3>
              <ol className="steps">
                {p.steps.map((s) => <li key={s}><span style={{ paddingTop: 8 }}>{s}</span></li>)}
              </ol>
              <Link className="btn btn--green" to="/get-help">Apply for support</Link>
            </div>

            <div className="reveal" style={{ marginTop: 50 }}>
              <h3>What changes</h3>
              <div className="grid-3" style={{ gap: 16 }}>
                {p.outcomes.map((o) => (
                  <div className="feature" key={o} style={{ padding: 24 }}>
                    <div className="feature__icon" style={{ width: 40, height: 40, marginBottom: 12 }}><Icon name="target" size={20} /></div>
                    <p>{o}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ marginTop: 50, padding: 36, background: 'var(--green-soft)', borderRadius: 24 }}>
              <blockquote className="quote" style={{ fontSize: '1.4rem' }}>{p.quote.text}</blockquote>
              <div className="person">
                <div className="person__avatar">{p.quote.name.replace(/^(Mrs?|Dr|Mama)\.?\s+/, '')[0]}</div>
                <div><strong>{p.quote.name}</strong><span>{p.quote.role}</span></div>
              </div>
            </div>
          </div>

          <aside className="sidebar-box reveal reveal--right">
            <h3>What your gift does</h3>
            {p.giving.map(([amount, text]) => (
              <div className="give-row" key={amount}><strong>{amount}</strong><span>{text}</span></div>
            ))}
            <Link className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }} to={`/donate?program=${encodeURIComponent(p.title)}`}>
              <Icon name="heart" size={18} /> Support this programme
            </Link>
            <Link className="btn btn--outline" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }} to="/get-involved#volunteer">Volunteer</Link>
          </aside>
        </div>
      </section>

      <section className="section--tight bg-cream">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <div>
              <span className="eyebrow">Next programme</span>
              <h2 style={{ marginBottom: 0 }}>{next.title}</h2>
            </div>
            <Link className="btn btn--navy" to={`/programs/${next.slug}`}>View programme <Icon name="arrow" size={18} /></Link>
          </div>
          <div className="mini-nav">
            {programs.map((x) => (
              <Link key={x.slug} to={`/programs/${x.slug}`} style={x.slug === slug ? { background: 'var(--navy)', color: '#fff' } : undefined}>{x.title}</Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
