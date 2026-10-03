import { Link } from 'react-router-dom'
import Icon from './Icon'
import { org, formatPhone, telHref, programs } from '../data/site'
import { useSubmit, FormStatus } from './ui'
import { images } from '../data/images'

export default function Footer() {
  const [state, submit] = useSubmit('/api/newsletter')
  const socials = Object.entries(org.socials).filter(([, url]) => url)

  return (
    <footer className="footer">
      <div className="wrap footer__news">
        <div>
          <h3>Get stories and updates in your inbox</h3>
          <p>One short email a month. No spam, and you can unsubscribe whenever you like.</p>
        </div>
        <div>
          {state.status === 'success' ? (
            <FormStatus state={state} />
          ) : (
            <form className="newsletter" onSubmit={submit}>
              <input type="email" name="email" required placeholder="Your email address" aria-label="Email address" />
              <button className="btn btn--green" disabled={state.status === 'loading'}>Subscribe</button>
            </form>
          )}
          {state.status === 'error' && <div style={{ marginTop: 10 }}><FormStatus state={state} /></div>}
        </div>
      </div>
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <img className="footer__logo" src={images.brand.logo} alt={org.name} />
            <p className="footer__tagline">{org.tagline}</p>
            <p>A Nigerian non-profit helping families get healthcare, food, schooling and a way to earn a living.</p>
            {socials.length > 0 && (
              <div className="socials">
                {socials.map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name}><Icon name={name} size={17} /></a>
                ))}
              </div>
            )}
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/impact">Impact & Reports</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4>Our Work</h4>
            <ul>
              {programs.map((p) => (
                <li key={p.slug}><Link to={`/programs/${p.slug}`}>{p.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Take Action</h4>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/get-involved#volunteer">Volunteer</Link></li>
              <li><Link to="/get-involved#fundraise">Fundraise</Link></li>
              <li><Link to="/partners#sponsor">Sponsor a Programme</Link></li>
              <li><Link to="/get-help">Get Help</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4>Head office</h4>
            <ul>
              <li>{org.addressLines.map((l) => <span key={l}>{l}<br /></span>)}</li>
              {org.phones.map((p) => (
                <li key={p}><a href={telHref(p)}>{formatPhone(p)}</a></li>
              ))}
              <li><Link to="/contact">Send a message</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} {org.name}. All rights reserved.</span>
        <span className="footer__legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/safeguarding">Safeguarding</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/terms">Photo credits</Link>
        </span>
      </div>
    </footer>
  )
}
