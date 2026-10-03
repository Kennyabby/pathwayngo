import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { partnerGroups, sponsorships } from '../data/content'
import { images } from '../data/images'

function PartnerForm() {
  const [state, submit] = useSubmit('/api/partner')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={submit}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="p-org">Organisation *</label><input id="p-org" name="organisation" required /></div>
        <div>
          <label htmlFor="p-type">Type of partnership</label>
          <select id="p-type" name="type" defaultValue="Programme sponsorship">
            <option>Programme sponsorship</option><option>Corporate social responsibility (CSR)</option><option>Item donation</option>
            <option>Staff volunteering</option><option>Hospital or clinic partner</option><option>Faith-based partnership</option><option>Grant or foundation</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div><label htmlFor="p-name">Your name *</label><input id="p-name" name="name" required /></div>
        <div><label htmlFor="p-email">Email *</label><input id="p-email" name="email" type="email" required /></div>
      </div>
      <div><label htmlFor="p-phone">Phone</label><input id="p-phone" name="phone" type="tel" /></div>
      <div><label htmlFor="p-msg">What do you have in mind?</label><textarea id="p-msg" name="message" /></div>
      <button className="btn btn--navy" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Start the conversation'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function Partners() {
  return (
    <>
      <PageHero
        crumb={<><Link to="/about">About</Link> &nbsp;/&nbsp; Partners</>}
        title="We can do more together."
        intro="Hospitals, schools, businesses, churches, mosques and community groups help us reach more people than we ever could alone."
        image={images.banners.partners}
        fallback="var(--fb-blue)"
      />

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Our partners</span>
            <h2>Thank you to the people who stand with us.</h2>
          </div>
          <div className="grid-2">
            {partnerGroups.map((g) => (
              <div className="feature" key={g.title}>
                <div className="feature__icon"><Icon name={g.icon} size={24} /></div>
                <h3>{g.title}</h3>
                <div className="partners" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 16, gap: 12 }}>
                  {g.items.map((name, i) => <div className="partner" style={{ height: 70 }} key={name + i}>{name}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Why partner with us</span>
            <h2>Good for the community. Good for you.</h2>
          </div>
          <div className="grid-4">
            {[
              ['target', 'Local and focused', 'We know these streets and families. Your support goes where it’s needed.'],
              ['file', 'Clear reporting', 'You get photos, numbers and stories you can share with your team and board.'],
              ['users', 'Real involvement', 'Your staff or members can volunteer and see the work first-hand.'],
              ['shield', 'Trusted and safe', 'Strong governance, safeguarding and careful financial records.'],
            ].map(([icon, title, text]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream" id="sponsor" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Sponsorship</span>
            <h2>Sponsor a programme.</h2>
            <p className="lead">Pick a package below, or talk to us about a partnership that fits your goals and budget.</p>
          </div>
          <div className="grid-3">
            {sponsorships.map((s, i) => (
              <div className={`price-card${i === 1 ? ' price-card--featured' : ''}`} key={s.title}>
                <h3>{s.title}</h3>
                <div className="price-card__amount">{s.amount}</div>
                <ul className="checklist">
                  {s.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
                <a className={`btn ${i === 1 ? 'btn--green' : 'btn--outline'}`} style={{ justifyContent: 'center' }} href="#partner-form">Choose this</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="partner-form" style={{ scrollMarginTop: 90 }}>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Let’s talk</span>
            <h2>Start a partnership.</h2>
            <p>Tell us a little about your organisation and what you’d like to achieve. Our partnerships lead will get back to you within three working days.</p>
            <ul className="checklist">
              <li>Programme sponsorship and CSR projects</li>
              <li>Staff volunteering days</li>
              <li>Donations of products, equipment or venues</li>
              <li>Hospital referrals and medical support</li>
              <li>Grants and joint funding proposals</li>
            </ul>
          </div>
          <div className="donate-box">
            <h3>Partnership enquiry</h3>
            <PartnerForm />
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
