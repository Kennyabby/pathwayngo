import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, photo, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { jobs } from '../data/content'
import { images } from '../data/images'

function ApplyForm() {
  const [state, submit] = useSubmit('/api/careers')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={submit}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="j-name">Full name *</label><input id="j-name" name="name" required /></div>
        <div><label htmlFor="j-phone">Phone *</label><input id="j-phone" name="phone" type="tel" required /></div>
      </div>
      <div className="form-row">
        <div><label htmlFor="j-email">Email *</label><input id="j-email" name="email" type="email" required /></div>
        <div>
          <label htmlFor="j-role">Role *</label>
          <select id="j-role" name="role" required defaultValue="">
            <option value="" disabled>Choose a role</option>
            {jobs.map((j) => <option key={j.title}>{j.title}</option>)}
            <option>General application</option>
          </select>
        </div>
      </div>
      <div><label htmlFor="j-link">Link to your CV or LinkedIn</label><input id="j-link" name="link" placeholder="Google Drive, Dropbox or LinkedIn link" /></div>
      <div><label htmlFor="j-msg">Why do you want to work with us? *</label><textarea id="j-msg" name="message" required /></div>
      <button className="btn btn--green" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Send application'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function Careers() {
  return (
    <>
      <PageHero
        crumb={<><Link to="/about">About</Link> &nbsp;/&nbsp; Careers</>}
        title="Do work that matters, close to home."
        intro="Jobs, internships and NYSC placements for people who want to make a real difference in Nigeria."
        image={images.banners.careers}
        fallback="var(--fb-green)"
      />

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Working here</span>
            <h2>What it’s like on our team.</h2>
            <p>We’re a small team, so everyone gets stuck in. One day you might be planning an outreach, the next you might be visiting a family or teaching a class. It’s busy and sometimes tiring, but you go home knowing you helped someone.</p>
            <ul className="checklist">
              <li>Real responsibility from day one</li>
              <li>Training in safeguarding, first aid and project management</li>
              <li>Supportive managers who make time for you</li>
              <li>A reference and certificate for interns and corps members</li>
            </ul>
          </div>
          <div className="media media--tall" style={photo(images.sections.careersWorkingHere, 'var(--fb-warm)')} />
        </div>
      </section>

      <section className="section bg-cream" id="openings">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Open roles</span>
              <h2>Current opportunities.</h2>
            </div>
          </div>
          <div className="list-rows">
            {jobs.map((j) => (
              <div className="row-card" key={j.title}>
                <div>
                  <div className="row-card__meta"><span className="pill">{j.type}</span><span className="pill pill--blue"><Icon name="pin" size={11} /> {j.place}</span></div>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
                <a className="btn btn--outline" href="#apply">Apply</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap grid-3">
          <div className="feature">
            <div className="feature__icon"><Icon name="users" size={24} /></div>
            <h3>NYSC corps members</h3>
            <p>We accept corps members for primary placement and CDS. Bring your posting letter to our office or apply below.</p>
          </div>
          <div className="feature">
            <div className="feature__icon"><Icon name="book" size={24} /></div>
            <h3>Students and SIWES</h3>
            <p>Students in health, social work, communications and business can do SIWES or community service hours with us.</p>
          </div>
          <div className="feature">
            <div className="feature__icon"><Icon name="briefcase" size={24} /></div>
            <h3>Fair and open hiring</h3>
            <p>We hire on merit and welcome applicants of every background. We never charge any fee to apply.</p>
          </div>
        </div>
      </section>

      <section className="section" id="apply" style={{ scrollMarginTop: 90 }}>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Apply</span>
            <h2>Send us your application.</h2>
            <p>We read every application. If you’re shortlisted, we’ll call you within two weeks to arrange a chat.</p>
            <div className="alert-box" style={{ marginTop: 20 }}>
              <strong>Please note:</strong> we will never ask you to pay money for a job or placement. If someone does, report it to us.
            </div>
          </div>
          <div className="donate-box">
            <h3>Application form</h3>
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  )
}
