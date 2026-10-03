import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { Counter } from './Home'
import { stats, programs } from '../data/site'
import { spending, reports } from '../data/content'

function ReportRequest() {
  const [state, submit] = useSubmit('/api/contact')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={(e) => submit(e, { subject: 'Report request' })}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="r-name">Name *</label><input id="r-name" name="name" required /></div>
        <div><label htmlFor="r-email">Email *</label><input id="r-email" name="email" type="email" required /></div>
      </div>
      <div>
        <label htmlFor="r-msg">Which report would you like? *</label>
        <select id="r-msg" name="message" required defaultValue={reports[0].title}>
          {reports.map((r) => <option key={r.title}>{r.title}</option>)}
        </select>
      </div>
      <button className="btn btn--navy" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Request a copy'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function Impact() {
  return (
    <>
      <PageHero
        crumb={<><Link to="/about">About</Link> &nbsp;/&nbsp; Impact & Reports</>}
        title="What your support has made possible."
        intro="We count what we do, check whether it’s working, and share the results with you. Here’s the picture so far."
        image="hero-impact.jpg"
        fallback="var(--fb-green)"
      />

      <section className="section bg-navy">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Since 2018</span>
              <h2>The headline numbers.</h2>
            </div>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}><Counter value={s.value} suffix={s.suffix} /><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Results by programme</span>
            <h2>What each programme achieved.</h2>
          </div>
          <div className="grid-3">
            {programs.map((p) => (
              <div className="feature" key={p.slug} style={{ borderTop: `4px solid ${p.color}` }}>
                <span className="pill" style={{ marginBottom: 12, display: 'inline-block' }}>{p.pillar}</span>
                <h3>{p.title}</h3>
                <div className="program__facts" style={{ margin: '16px 0', gridTemplateColumns: '1fr 1fr 1fr' }}>
                  {p.facts.map(([n, l]) => <div key={l}><strong style={{ fontSize: '1.3rem' }}>{n}</strong><span>{l}</span></div>)}
                </div>
                <Link className="link-arrow" to={`/programs/${p.slug}`}>About this programme</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Finances</span>
            <h2>How we spent each ₦100 last year.</h2>
            <p>We keep running costs low by relying on volunteers and donated venues. Our books are reviewed by our trustees and audited every year.</p>
            <div className="bars" style={{ marginTop: 30 }}>
              {spending.map((s) => (
                <div key={s.label}>
                  <div className="bar__label"><span>{s.label}</span><span>{s.value}%</span></div>
                  <div className="bar__track"><div className="bar__fill" style={{ '--w': `${s.value}%`, background: s.color }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow">How we measure</span>
            <h2>We don’t just count heads.</h2>
            <ul className="checklist">
              <li>We record every person we serve, with their consent</li>
              <li>We follow up with patients we refer to see if they got care</li>
              <li>We track scholars’ attendance and grades every term</li>
              <li>We check on academy graduates and grant recipients for a year after</li>
              <li>We ask beneficiaries what is working and what isn’t, and we change things</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Publications</span>
            <h2>Annual reports and accounts.</h2>
            <p>Fill the form and we’ll email you a copy of any report.</p>
            <div className="list-rows" style={{ marginTop: 30 }}>
              {reports.map((r) => (
                <div className="row-card" key={r.title}>
                  <div>
                    <div className="row-card__meta"><span className="pill pill--blue">{r.year}</span></div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                  <Icon name="file" size={28} style={{ color: 'var(--green)' }} />
                </div>
              ))}
            </div>
          </div>
          <div className="donate-box">
            <h3>Request a report</h3>
            <ReportRequest />
          </div>
        </div>
      </section>

      <CTA title="Be part of next year’s numbers." />
    </>
  )
}
