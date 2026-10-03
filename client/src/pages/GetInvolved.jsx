import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, photo, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { faqs } from '../data/site'
import { images } from '../data/images'

const roles = [
  ['heart', 'Health volunteers', 'Doctors, nurses, pharmacists, lab scientists and health students for outreaches and mothers’ circles.', 'Outreach days'],
  ['book', 'Teachers and mentors', 'Run reading and maths clinics or mentor one scholarship child through the school year.', '2 to 4 hours a week'],
  ['briefcase', 'Trade instructors', 'Teach tailoring, catering, phone repair or computer skills at our academy.', 'Flexible'],
  ['users', 'Event volunteers', 'Registration, crowd control, packing food and setting up on outreach days.', 'Weekends'],
  ['file', 'Media and admin', 'Photography, video, writing, social media, data entry and office support.', 'Remote or on-site'],
  ['handshake', 'Fundraisers', 'Help us plan events, write proposals and reach new supporters.', 'Flexible'],
]

function VolunteerForm() {
  const [state, submit] = useSubmit('/api/volunteer')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={submit}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="v-name">Full name *</label><input id="v-name" name="name" required /></div>
        <div><label htmlFor="v-phone">Phone number *</label><input id="v-phone" name="phone" type="tel" required /></div>
      </div>
      <div className="form-row">
        <div><label htmlFor="v-email">Email</label><input id="v-email" name="email" type="email" /></div>
        <div>
          <label htmlFor="v-area">How would you like to help? *</label>
          <select id="v-area" name="area" required defaultValue="">
            <option value="" disabled>Choose one</option>
            {roles.map(([, title]) => <option key={title}>{title}</option>)}
            <option>NYSC / student placement</option>
            <option>Anywhere I’m needed</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="v-avail">When are you free?</label>
        <select id="v-avail" name="availability" defaultValue="Weekends">
          <option>Weekends</option><option>Weekdays</option><option>Outreach days only</option><option>Remote / online</option>
        </select>
      </div>
      <div><label htmlFor="v-msg">Tell us a little about yourself</label><textarea id="v-msg" name="message" placeholder="Your skills, experience and why you’d like to volunteer" /></div>
      <button className="btn btn--green" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Send my application'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function GetInvolved() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        title="You can change someone’s week. Maybe their whole life."
        intro="Give, volunteer, fundraise or partner with us. There’s a way for everyone to help, whatever your time or budget."
        image={images.banners.getInvolved}
        fallback="var(--fb-warm)"
      />

      {/* ---------- Ways ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Ways to help</span>
            <h2>Pick what works for you.</h2>
          </div>
          <div className="grid-3">
            <div className="help-card help-card--red">
              <Icon name="gift" size={36} />
              <h3 style={{ marginTop: 18 }}>Donate</h3>
              <p>Give once or monthly, sponsor a child, or give in memory of someone you love.</p>
              <Link className="btn btn--light" to="/donate">Donate now</Link>
            </div>
            <div className="help-card help-card--green">
              <Icon name="users" size={36} />
              <h3 style={{ marginTop: 18 }}>Volunteer</h3>
              <p>Bring your skills to an outreach, a classroom or our office. No experience needed for many roles.</p>
              <a className="btn btn--light" href="#volunteer">Become a volunteer</a>
            </div>
            <div className="help-card help-card--blue">
              <Icon name="handshake" size={36} />
              <h3 style={{ marginTop: 18 }}>Partner</h3>
              <p>Companies, faith groups, hospitals and schools can sponsor or co-run a programme with us.</p>
              <Link className="btn btn--light" to="/partners">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Volunteer roles ---------- */}
      <section className="section bg-cream" id="volunteer">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Volunteer</span>
              <h2>Roles you can take on.</h2>
              <p>Over 150 people volunteer with us every year. Here’s where we need help most.</p>
            </div>
          </div>
          <div className="grid-3">
            {roles.map(([icon, title, text, time]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3>{title}</h3>
                <p style={{ marginBottom: 14 }}>{text}</p>
                <span className="pill"><Icon name="clock" size={12} /> {time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Volunteer form ---------- */}
      <section className="section">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <div className="media" style={{ ...photo(images.sections.getInvolvedVolunteer, 'var(--fb-green)'), minHeight: 300, marginBottom: 32 }} />
            <span className="eyebrow">What to expect</span>
            <h2>Joining is simple.</h2>
            <ol className="steps">
              <li><span style={{ paddingTop: 8 }}>Fill the form. It takes two minutes.</span></li>
              <li><span style={{ paddingTop: 8 }}>Our volunteer lead calls you within a week to chat about what you’d enjoy.</span></li>
              <li><span style={{ paddingTop: 8 }}>You attend a short orientation and sign our safeguarding code of conduct.</span></li>
              <li><span style={{ paddingTop: 8 }}>You join your first activity, with an experienced volunteer by your side.</span></li>
            </ol>
            <p style={{ color: 'var(--muted)' }}>
              Volunteers get a certificate of service, a reference letter after three months, and a team that will
              quickly feel like family. NYSC members and students should also see our <Link to="/careers">Careers page</Link>.
            </p>
          </div>
          <div className="donate-box">
            <h3>Volunteer application</h3>
            <p style={{ color: 'var(--muted)' }}>We’ll be in touch within a week.</p>
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* ---------- Fundraise ---------- */}
      <section className="section bg-navy" id="fundraise">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Fundraise</span>
              <h2>Raise money with the people around you.</h2>
              <p style={{ color: '#b9c7dd' }}>Some of our best support comes from people who simply asked their friends to join in.</p>
            </div>
          </div>
          <div className="grid-4">
            {[
              ['gift', 'Birthday fundraiser', 'Ask friends to give to Pathway Finders instead of buying you a gift.'],
              ['users', 'Church or mosque drive', 'Hold a special collection or food drive with your congregation.'],
              ['briefcase', 'Office challenge', 'Get your team to raise money and match it as a company.'],
              ['target', 'Sports or fun event', 'Run, walk, play football or host a game night for a cause.'],
            ].map(([icon, title, text]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 40, color: '#b9c7dd' }}>
            Planning something? <Link to="/contact" style={{ color: '#9be38f', fontWeight: 600 }}>Tell us about it</Link> and we’ll send you posters, photos and a thank-you certificate for everyone who takes part.
          </p>
        </div>
      </section>

      {/* ---------- In-kind ---------- */}
      <section className="section" id="items">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Give items</span>
              <h2>Things we always need.</h2>
              <p>Drop items at our head office in Lagos, or call us and we’ll arrange collection in any state where we have a team.</p>
            </div>
          </div>
          <div className="grid-4">
            {[
              ['heart', 'Medical supplies', 'Test kits, glucometers, BP monitors, first-aid items and essential medicines.'],
              ['gift', 'Food items', 'Rice, beans, garri, vegetable oil, noodles, sugar and baby food.'],
              ['book', 'School materials', 'Textbooks, exercise books, school bags, sandals and uniforms.'],
              ['briefcase', 'Training equipment', 'Sewing machines, cooking equipment, laptops and repair tools.'],
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

      {/* ---------- Spread the word ---------- */}
      <section className="section--tight bg-green">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Spread the word</span>
            <h2>Don’t have time or money right now? That’s okay.</h2>
            <p>
              Share our posts, tell a friend about our next outreach, or let a family in need know we exist.
              Sometimes the most helpful thing is simply pointing someone our way.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="btn btn--navy" to="/get-help">Share our Get Help page</Link>
            <Link className="btn btn--outline" to="/events">See upcoming events</Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Questions</span>
            <h2>Things volunteers often ask.</h2>
          </div>
          <div className="faq">
            {faqs.filter((f) => f.cat === 'Volunteering' || f.cat === 'Partnerships').map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
