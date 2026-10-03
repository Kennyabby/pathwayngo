import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { org, programs, formatPhone, telHref, faqs } from '../data/site'
import { images } from '../data/images'

function HelpForm() {
  const [state, submit] = useSubmit('/api/help-request')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={submit}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="h-name">Your name *</label><input id="h-name" name="name" required /></div>
        <div><label htmlFor="h-phone">Phone number *</label><input id="h-phone" name="phone" type="tel" required /></div>
      </div>
      <div className="form-row">
        <div><label htmlFor="h-area">Town and state where you live *</label><input id="h-area" name="area" required placeholder="e.g. Kaduna North, Ikeja, Jos" /></div>
        <div>
          <label htmlFor="h-need">What kind of help do you need? *</label>
          <select id="h-need" name="need" required defaultValue="">
            <option value="" disabled>Choose one</option>
            {programs.map((p) => <option key={p.slug}>{p.title}</option>)}
            <option>Emergency (flood, fire, eviction)</option>
            <option>I’m not sure</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="h-for">Who is this request for?</label>
        <select id="h-for" name="for" defaultValue="Myself">
          <option>Myself</option><option>My child or family member</option><option>Someone in my community</option>
        </select>
      </div>
      <div><label htmlFor="h-msg">Tell us a bit about the situation *</label><textarea id="h-msg" name="message" required placeholder="Share as much or as little as you’re comfortable with." /></div>
      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontWeight: 400, color: 'var(--muted)' }}>
        <input type="checkbox" name="consent" value="yes" required style={{ width: 'auto', marginTop: 5 }} />
        I agree that Pathway Finders can contact me about this request and keep my details private.
      </label>
      <button className="btn btn--green" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Send my request'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function GetHelp() {
  return (
    <>
      <PageHero
        crumb="Get Help"
        title="You don’t have to face this alone."
        intro="If you or someone you know is struggling with health, food, school fees or finding work, reach out. Asking for help is free and private."
        image={images.banners.getHelp}
        fallback="var(--fb-green)"
      />

      <section className="section--tight">
        <div className="wrap">
          <div className="alert-box" style={{ display: 'flex', gap: 18, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <strong>Is it a medical emergency?</strong> Please go to the nearest hospital right away, or call the national emergency number <strong>112</strong>, free from any phone in Nigeria. Contact us afterwards and we will try to help.
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">What we can help with</span>
            <h2>Support you can ask for.</h2>
          </div>
          <div className="grid-3">
            {programs.map((p) => (
              <Link to={`/programs/${p.slug}`} className="feature" key={p.slug} style={{ display: 'block', color: 'inherit', textDecoration: 'none', borderTop: `4px solid ${p.color}` }}>
                <div className="feature__icon" style={{ color: p.color, background: `color-mix(in srgb, ${p.color} 12%, white)` }}><Icon name={p.icon} size={24} /></div>
                <h3>{p.title}</h3>
                <p>{p.who}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">How it works</span>
            <h2>What happens after you reach out.</h2>
          </div>
          <div className="grid-4">
            {[
              ['phone', '1. You contact us', 'Use the form below, call us, send a WhatsApp message or walk into our office.'],
              ['users', '2. We listen', 'A staff member calls you within three working days to understand what you need.'],
              ['pin', '3. We visit', 'For most programmes, our welfare officer visits your home. This helps us help you properly.'],
              ['hands', '4. We help', 'If we can support you, we tell you what happens next. If we can’t, we try to point you to someone who can.'],
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

      <section className="section" id="request">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Request support</span>
            <h2>Tell us what you need.</h2>
            <p>Everything you share stays private. We only use it to help you.</p>
            <h3 style={{ marginTop: 30, fontSize: '1.15rem' }}>It helps if you have:</h3>
            <ul className="checklist">
              <li>A phone number we can reach you on</li>
              <li>Any hospital cards or prescriptions, for health support</li>
              <li>Your child’s school name and class, for scholarships</li>
              <li>A community leader or neighbour who knows you, if possible</li>
            </ul>
            <p style={{ color: 'var(--muted)' }}>Don’t worry if you don’t have these. Reach out anyway.</p>
            <div className="contact-list" style={{ marginTop: 24 }}>
              <div className="contact-item">
                <div className="contact-item__icon"><Icon name="phone" /></div>
                <div>
                  <h3>Prefer to talk?</h3>
                  {org.phones.map((p) => <p key={p}><a href={telHref(p)}>{formatPhone(p)}</a></p>)}
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><Icon name="pin" /></div>
                <div>
                  <h3>Visit our head office</h3>
                  <p>{org.address}</p>
                  <p style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '.92rem', marginTop: 4 }}>{org.hours}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="donate-box">
            <h3>Support request form</h3>
            <HelpForm />
          </div>
        </div>
      </section>

      <section className="section bg-green">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Questions</span>
            <h2>Common questions about getting help.</h2>
          </div>
          <div className="faq">
            {faqs.filter((f) => f.cat === 'Getting help' || f.q.includes('areas')).map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <details>
              <summary>Do I have to pay anything?</summary>
              <p>No. Our support is free. No staff member or volunteer should ever ask you for money or favours. If anyone does, please report it to us straight away.</p>
            </details>
            <details>
              <summary>Will people know I asked for help?</summary>
              <p>No. We keep your information private and we never share your story or photo without your permission.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
