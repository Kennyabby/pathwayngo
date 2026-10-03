import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import DonateBox from '../components/DonateBox'
import { PageHero, photo } from '../components/ui'
import { org, formatPhone, telHref, donationImpact, faqs } from '../data/site'
import { spending } from '../data/content'
import { images } from '../data/images'

export default function Donate() {
  return (
    <>
      <PageHero
        crumb="Donate"
        title="Your gift reaches a real family this month."
        intro="Medicine for a sick grandmother. Fees for a child who wants to stay in school. A sewing machine for a young woman ready to work. You can make it happen."
        image={images.banners.donate}
        fallback="var(--fb-warm)"
      />

      {/* ---------- Pledge ---------- */}
      <section className="section" id="give">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <span className="eyebrow">Why give</span>
            <h2>Small amounts go a long way here.</h2>
            <p className="lead">
              We keep our costs low and work with volunteers, so most of what you give goes straight to the people
              we serve. ₦10,000 really does feed an older person for a month.
            </p>
            <ul className="checklist">
              <li>Pick a programme, or let us use your gift wherever it’s needed most</li>
              <li>Get a thank-you message and updates on what your gift did</li>
              <li>Give monthly so we can plan ahead and help more families</li>
              <li>Ask for a receipt for your records or your company</li>
            </ul>
            <div className="bank">
              <strong style={{ color: 'var(--navy)' }}>Rather speak to someone first?</strong>
              <p style={{ margin: '6px 0 12px', color: 'var(--muted)', fontSize: '.95rem' }}>Call any of our official lines to give by bank transfer or arrange to drop off items.</p>
              <dl>
                {org.phones.map((p, i) => (
                  <div key={p} style={{ display: 'contents' }}>
                    <dt>Line {i + 1}</dt>
                    <dd><a href={telHref(p)}>{formatPhone(p)}</a></dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <DonateBox />
        </div>
      </section>

      {/* ---------- What it buys ---------- */}
      <section className="section bg-cream">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">What your gift does</span>
            <h2>See where your money goes.</h2>
          </div>
          <div className="grid-3">
            {Object.entries(donationImpact).map(([amount, text], i) => (
              <div className="feature" key={amount}>
                <div className="feature__icon" style={{ background: ['#fdecea', '#e7eef9', '#fff1e2', '#fff1e2', 'var(--green-soft)', 'var(--green-soft)'][i], color: ['var(--red)', 'var(--blue)', 'var(--orange)', 'var(--orange)', 'var(--green)', 'var(--green)'][i] }}>
                  <Icon name={['heart', 'gift', 'book', 'book', 'briefcase', 'users'][i]} size={24} />
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--green)' }}>₦{Number(amount).toLocaleString()}</h3>
                <p style={{ fontSize: '1rem' }}>{text.charAt(0).toUpperCase() + text.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Spending ---------- */}
      <section className="section">
        <div className="wrap split">
          <div className="media media--tall" style={photo(images.sections.donateWhereItGoes, 'var(--fb-green)')}>
            <div className="media__badge">
              <strong>90%</strong>
              <span>of every naira goes straight into programmes</span>
            </div>
          </div>
          <div>
            <span className="eyebrow">Where it goes</span>
            <h2>How we spent each ₦100 last year.</h2>
            <p>We publish our spending every year so you know exactly how your money was used.</p>
            <div className="bars" style={{ margin: '30px 0' }}>
              {spending.map((s) => (
                <div key={s.label}>
                  <div className="bar__label"><span>{s.label}</span><span>₦{s.value}</span></div>
                  <div className="bar__track"><div className="bar__fill" style={{ '--w': `${s.value}%`, background: s.color }} /></div>
                </div>
              ))}
            </div>
            <Link className="link-arrow" to="/impact">See our reports</Link>
          </div>
        </div>
      </section>

      {/* ---------- Other ways ---------- */}
      <section className="section bg-navy">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Other ways to give</span>
            <h2>More ways to make a difference.</h2>
          </div>
          <div className="grid-3">
            {[
              ['book', 'Sponsor a child', '₦150,000 keeps one child in school for a full year, with fees, uniform, books and a mentor. We send you termly updates.'],
              ['gift', 'Give items', 'Food, school supplies, medical supplies and training equipment are always welcome. Call us to arrange drop-off.'],
              ['heart', 'Birthday or memorial gift', 'Ask friends to give instead of buying presents, or give in memory of a loved one. We’ll send a thank-you card.'],
              ['briefcase', 'Through your workplace', 'Ask your employer to match your gift, or set up a staff giving scheme and volunteer day.'],
              ['users', 'Church or mosque drive', 'Run a special collection or food drive. We’ll come and share what your congregation’s gift will do.'],
              ['handshake', 'Sponsor a programme', 'Fund a full outreach, scholarship group or skills class. Perfect for companies and foundations.'],
            ].map(([icon, title, text]) => (
              <div className="feature" key={title}>
                <div className="feature__icon"><Icon name={icon} size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link className="btn btn--light" to="/partners#sponsor">See sponsorship packages</Link>
          </div>
        </div>
      </section>

      {/* ---------- Trust ---------- */}
      <section className="section">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Give with confidence</span>
            <h2>Your money is safe with us.</h2>
            <ul className="checklist">
              <li>We only use bank accounts confirmed on our official phone lines</li>
              <li>Every gift is recorded and linked to a programme</li>
              <li>Our trustees review our accounts and we publish yearly reports</li>
              <li>We never share donors’ details with anyone</li>
            </ul>
            <div className="alert-box">
              <strong>Watch out for scams.</strong> If anyone asks you to pay into a personal account in our name,
              please don’t. Call us on {formatPhone(org.phones[0])} to check.
            </div>
          </div>
          <div className="faq">
            {faqs.filter((f) => f.cat === 'Giving').map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <p style={{ marginTop: 20 }}><Link className="link-arrow" to="/faq">More questions</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
