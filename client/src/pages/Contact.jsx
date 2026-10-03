import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { org, formatPhone, telHref } from '../data/site'

export default function Contact() {
  const [state, submit] = useSubmit('/api/contact')
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(org.mapQuery)}&output=embed`

  return (
    <>
      <PageHero
        crumb="Contact"
        title="We’d love to hear from you."
        intro="Need help, want to support our work, or just have a question? Call, send a WhatsApp message, fill the form, or visit our head office in Lagos."
        image="hero-contact.jpg"
        fallback="var(--fb-blue)"
      />

      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div className="reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>Reach our team.</h2>
            <p className="lead" style={{ marginBottom: 30 }}>
              Whether you need support, want to help, or are curious about what we do, we’re a phone call away.
              Everything you tell us is kept private.
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item__icon"><Icon name="pin" /></div>
                <div>
                  <h3>Office address</h3>
                  <p>{org.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><Icon name="phone" /></div>
                <div>
                  <h3>Phone</h3>
                  {org.phones.map((p) => (
                    <p key={p}><a href={telHref(p)}>{formatPhone(p)}</a></p>
                  ))}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon" style={{ background: '#e3f8ea', color: '#1da851' }}><Icon name="whatsapp" /></div>
                <div>
                  <h3>WhatsApp</h3>
                  <p><a href={`https://wa.me/${org.whatsapp}`} target="_blank" rel="noreferrer">Chat with us on {formatPhone(org.phones[0])}</a></p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><Icon name="clock" /></div>
                <div>
                  <h3>Office hours</h3>
                  <p>{org.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="donate-box reveal">
            <h3>Send us a message</h3>
            <p style={{ color: 'var(--muted)' }}>We reply to every message within two working days.</p>
            {state.status === 'success' ? (
              <FormStatus state={state} />
            ) : (
              <form className="form" onSubmit={submit}>
                <Honeypot />
                <div className="form-row">
                  <div><label htmlFor="c-name">Full name *</label><input id="c-name" name="name" required /></div>
                  <div><label htmlFor="c-phone">Phone number</label><input id="c-phone" name="phone" type="tel" /></div>
                </div>
                <div><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" /></div>
                <div>
                  <label htmlFor="c-subject">Subject</label>
                  <select id="c-subject" name="subject" defaultValue="General enquiry">
                    <option>General enquiry</option>
                    <option>I need support</option>
                    <option>Donation</option>
                    <option>Volunteering</option>
                    <option>Partnership</option>
                    <option>Media / press</option>
                  </select>
                </div>
                <div><label htmlFor="c-msg">Message *</label><textarea id="c-msg" name="message" required /></div>
                <button className="btn btn--primary" disabled={state.status === 'loading'}>
                  {state.status === 'loading' ? 'Sending...' : 'Send message'} <Icon name="arrow" size={18} />
                </button>
                <FormStatus state={state} />
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section--tight bg-cream">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Find us</span>
              <h2>Visit our head office.</h2>
              <p>Our head office is in Agiliti Estate, Mile 12, Lagos, off Ikorodu Road. Our teams in other states can be reached on the same phone numbers.</p>
            </div>
            <a className="btn btn--navy" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(org.mapQuery)}`} target="_blank" rel="noreferrer">
              <Icon name="pin" size={18} /> Get directions
            </a>
          </div>
          <iframe className="map reveal" title="Map to Pathway Finders office" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Quick links</span>
            <h2>Looking for something specific?</h2>
          </div>
          <div className="grid-4">
            {[
              ['hands', 'I need help', 'Ask for medical, food, school or business support.', '/get-help', 'Request support'],
              ['gift', 'I want to give', 'Donate, sponsor a child or give items.', '/donate', 'Ways to give'],
              ['users', 'I want to volunteer', 'Join us at outreaches, classes or behind the scenes.', '/get-involved#volunteer', 'Volunteer'],
              ['handshake', 'I represent an organisation', 'Sponsorships, CSR and joint projects.', '/partners', 'Partner with us'],
            ].map(([icon, title, text, to, cta]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3>{title}</h3>
                <p style={{ marginBottom: 16 }}>{text}</p>
                <Link className="link-arrow" to={to}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
