import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, CTA, fmtDate, useSubmit, FormStatus, Honeypot } from '../components/ui'
import { events, pastEvents } from '../data/content'
import { images } from '../data/images'

function RsvpForm() {
  const [state, submit] = useSubmit('/api/events/rsvp')
  if (state.status === 'success') return <FormStatus state={state} />
  return (
    <form className="form" onSubmit={submit}>
      <Honeypot />
      <div className="form-row">
        <div><label htmlFor="e-name">Full name *</label><input id="e-name" name="name" required /></div>
        <div><label htmlFor="e-phone">Phone *</label><input id="e-phone" name="phone" type="tel" required /></div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="e-event">Event *</label>
          <select id="e-event" name="event" required defaultValue={events[0].title}>
            {events.map((e) => <option key={e.slug}>{e.title}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="e-as">I’m coming as</label>
          <select id="e-as" name="as" defaultValue="Volunteer">
            <option>Volunteer</option><option>Guest / supporter</option><option>Partner or sponsor</option><option>Media</option>
          </select>
        </div>
      </div>
      <button className="btn btn--green" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending...' : 'Register'}</button>
      <FormStatus state={state} />
    </form>
  )
}

export default function Events() {
  return (
    <>
      <PageHero
        crumb="Events"
        title="Join us on the ground."
        intro="Outreaches, food drives, graduations and more. Come as a volunteer, a guest or a sponsor."
        image={images.banners.events}
        fallback="var(--fb-green)"
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Upcoming</span>
              <h2>What’s coming up.</h2>
            </div>
            <a className="btn btn--navy" href="#register">Register to attend</a>
          </div>
          <div className="events">
            {events.map((e) => {
              const d = fmtDate(e.date)
              return (
                <div className="event" key={e.slug} id={e.slug} style={{ scrollMarginTop: 110, alignItems: 'start' }}>
                  <div className="event__date"><strong>{d.day}</strong><span>{d.month}</span></div>
                  <div>
                    <span className="pill" style={{ background: `color-mix(in srgb, ${e.color} 12%, white)`, color: e.color }}>{e.pillar}</span>
                    <h3 style={{ marginTop: 10 }}>{e.title}</h3>
                    <p style={{ marginBottom: 8 }}><Icon name="calendar" size={15} /> {d.weekday}, {d.long} · {e.time}</p>
                    <p style={{ marginBottom: 10 }}><Icon name="pin" size={15} /> {e.place}</p>
                    <p style={{ display: 'block', color: 'var(--ink)' }}>{e.text}</p>
                  </div>
                  <a className="btn btn--outline" href="#register">Attend</a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section bg-cream" id="register" style={{ scrollMarginTop: 90 }}>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Register</span>
            <h2>Let us know you’re coming.</h2>
            <p>Registering helps us plan food, materials and volunteer roles. We’ll send you a reminder a few days before.</p>
            <ul className="checklist">
              <li>Volunteers get a role and a briefing before the day</li>
              <li>Guests and sponsors are welcome to see our work first-hand</li>
              <li>Members of the public don’t need to register for free outreaches. Just come!</li>
            </ul>
          </div>
          <div className="donate-box"><h3>Event registration</h3><RsvpForm /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Past events</span>
              <h2>What we’ve done recently.</h2>
            </div>
            <Link className="link-arrow" to="/gallery">See the photos</Link>
          </div>
          <div className="list-rows">
            {pastEvents.map((e) => (
              <div className="row-card" key={e.title}>
                <div>
                  <div className="row-card__meta"><span className="pill pill--blue">{fmtDate(e.date).long}</span></div>
                  <h3>{e.title}</h3>
                  <p>{e.result}</p>
                </div>
                <Icon name="target" size={26} style={{ color: 'var(--green)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Can’t make it? You can still help." text="Sponsor a food hamper, cover a patient’s medicine or pay for a graduate’s starter kit." />
    </>
  )
}
