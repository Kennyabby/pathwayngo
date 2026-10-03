import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CTA, photo, fmtDate, initials } from '../components/ui'
import { org, pillars, stats, programs } from '../data/site'
import { events, news, testimonials, partnerGroups } from '../data/content'

// Counts up to `value` once the number scrolls into view.
export function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1800, 1)
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])
  return <strong ref={ref}>{n.toLocaleString()}{suffix}</strong>
}

export default function Home() {
  const featured = testimonials[0]
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__art"><img src="/img/emblem.png" alt="" /></div>
        <div className="wrap">
          <div className="hero__content">
            <span className="eyebrow">Health · Support · Empower · Transform</span>
            <h1>Giving hope.<br /><em>Saving lives.</em></h1>
            <p>
              We bring free healthcare, food, school support and skills training to families who need it most,
              so every person in our community has a real chance at a healthier, brighter future.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/donate"><Icon name="heart" size={18} /> Donate Now</Link>
              <Link className="btn btn--light" to="/programs">See Our Work</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Four pillars ---------- */}
      <section className="pillars">
        <div className="wrap">
          <div className="pillars__grid reveal">
            {pillars.map((p) => (
              <div className="pillar" key={p.key} style={{ '--c': p.color }}>
                <div className="pillar__icon"><Icon name={p.icon} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="section">
        <div className="wrap split">
          <div className="media media--tall reveal" style={photo('about-home.jpg', 'var(--fb-green)')}>
            <div className="media__badge">
              <strong>Since 2018</strong>
              <span>serving families in communities across Nigeria</span>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Who we are</span>
            <h2>Neighbours helping neighbours, with a plan.</h2>
            <p className="lead">
              Pathway Finders Empowerment Initiative is a Nigerian non-profit with its head office in Lagos.
              We started by taking food and medicine to widows and sick neighbours. Today we run six programmes
              in eight states, with the help of doctors, teachers, artisans and more than 150 volunteers.
            </p>
            <ul className="checklist">
              <li>Free medical outreaches and health education</li>
              <li>Monthly food packs for widows, older people and families in crisis</li>
              <li>Scholarships that keep orphans and vulnerable children in school</li>
              <li>Skills training and grants for young people and women</li>
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn--navy" to="/about">Read our story</Link>
              <Link className="btn btn--outline" to="/team">Meet the team</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Why it matters ---------- */}
      <section className="section bg-cream">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Why we do this</span>
            <h2>For many families, every day is a struggle.</h2>
            <p className="lead">
              Across Nigeria, millions of families live on what they earn each day. One illness, a flood or a
              rise in food prices can push a household into crisis.
            </p>
          </div>
          <div className="grid-3">
            <div className="feature">
              <div className="feature__icon" style={{ background: '#fdecea', color: 'var(--red)' }}><Icon name="heart" size={26} /></div>
              <h3>Care costs too much</h3>
              <p>Many people skip hospital visits because of the cost. High blood pressure, diabetes and malaria often go untreated until it is an emergency.</p>
            </div>
            <div className="feature">
              <div className="feature__icon" style={{ background: '#fff1e2', color: 'var(--orange)' }}><Icon name="book" size={26} /></div>
              <h3>Children leave school</h3>
              <p>When money runs out, school fees are often the first thing to go. Children end up hawking or staying at home.</p>
            </div>
            <div className="feature">
              <div className="feature__icon"><Icon name="briefcase" size={26} /></div>
              <h3>Young people can’t find work</h3>
              <p>Many young people finish school with no skill and no job. Women traders can’t get loans to grow their businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Impact numbers ---------- */}
      <section className="section bg-navy">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Our impact so far</span>
              <h2>Real people. Real numbers.</h2>
            </div>
            <Link className="btn btn--light" to="/impact">See our full impact report</Link>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <div className="stat reveal" key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Where we work ---------- */}
      <section className="section--tight bg-cream">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 30 }}>
            <div>
              <span className="eyebrow">Where we work</span>
              <h2 style={{ marginBottom: 0 }}>Reaching families in eight states.</h2>
            </div>
            <Link className="link-arrow" to="/about#where">See what we do in each state</Link>
          </div>
          <div className="mini-nav">
            {org.states.map((s) => (
              <span key={s.name} className="state-chip"><Icon name="pin" size={14} /> {s.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Programs ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Help for today, and a way forward for tomorrow.</h2>
            </div>
            <Link className="link-arrow" to="/programs">View all programmes</Link>
          </div>
          <div className="grid-3">
            {programs.map((p) => (
              <article className="card reveal" key={p.slug}>
                <div style={{ overflow: 'hidden' }}>
                  <div className="card__img" style={photo(p.image, p.fallback)}>
                    <span className="card__tag" style={{ '--c': p.color }}>{p.pillar}</span>
                  </div>
                </div>
                <div className="card__body">
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <Link className="link-arrow" to={`/programs/${p.slug}`}>Learn more</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured story ---------- */}
      <section className="section bg-cream">
        <div className="wrap split split--wide">
          <div className="reveal">
            <span className="eyebrow">Stories of hope</span>
            <blockquote className="quote">{featured.quote}</blockquote>
            <div className="person" style={{ marginBottom: 30 }}>
              <div className="person__avatar">{initials(featured.name)}</div>
              <div>
                <strong>{featured.name}</strong>
                <span>{featured.role}</span>
              </div>
            </div>
            <Link className="link-arrow" to="/stories">Read more stories</Link>
          </div>
          <div className="media media--tall reveal" style={photo('story-feature.jpg', 'var(--fb-warm)')}>
            <div className="media__badge">
              <strong>₦10,000</strong>
              <span>feeds a widow or older person for a whole month</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Ways to help ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Get involved</span>
            <h2>There’s a place for you here.</h2>
            <p className="lead">Give, volunteer or partner with us. Whatever you choose, it reaches real families quickly.</p>
          </div>
          <div className="grid-3">
            <div className="help-card help-card--red reveal">
              <Icon name="gift" size={36} />
              <h3 style={{ marginTop: 18 }}>Donate</h3>
              <p>Give once or monthly. Your gift buys medicine, food packs, school fees and starter kits.</p>
              <Link className="btn btn--light" to="/donate">Give today</Link>
            </div>
            <div className="help-card help-card--green reveal">
              <Icon name="users" size={36} />
              <h3 style={{ marginTop: 18 }}>Volunteer</h3>
              <p>Help at an outreach, mentor a child, teach a trade or support us behind the scenes.</p>
              <Link className="btn btn--light" to="/get-involved#volunteer">Join the team</Link>
            </div>
            <div className="help-card help-card--blue reveal">
              <Icon name="handshake" size={36} />
              <h3 style={{ marginTop: 18 }}>Partner</h3>
              <p>Companies, churches, mosques, hospitals and foundations can sponsor or co-run a programme.</p>
              <Link className="btn btn--light" to="/partners">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Events ---------- */}
      <section className="section bg-green">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Coming up</span>
              <h2>Come and join us.</h2>
            </div>
            <Link className="link-arrow" to="/events">See all events</Link>
          </div>
          <div className="events">
            {events.slice(0, 3).map((e) => {
              const d = fmtDate(e.date)
              return (
                <div className="event reveal" key={e.slug}>
                  <div className="event__date"><strong>{d.day}</strong><span>{d.month}</span></div>
                  <div>
                    <h3>{e.title}</h3>
                    <p><Icon name="pin" size={15} /> {e.place}</p>
                  </div>
                  <Link className="btn btn--outline" to={`/events#${e.slug}`}>Details</Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- News ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">News & updates</span>
              <h2>Latest from the field.</h2>
            </div>
            <Link className="link-arrow" to="/news">All news</Link>
          </div>
          <div className="grid-3">
            {news.slice(0, 3).map((s) => (
              <article className="card reveal" key={s.slug}>
                <div style={{ overflow: 'hidden' }}>
                  <div className="card__img" style={photo(s.image, s.fallback)}>
                    <span className="card__tag" style={{ '--c': s.color }}>{s.tag}</span>
                  </div>
                </div>
                <div className="card__body">
                  <div className="card__meta"><span>{fmtDate(s.date).long}</span></div>
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                  <Link className="link-arrow" to={`/news/${s.slug}`}>Read story</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="section bg-cream">
        <div className="wrap">
          <div className="center reveal" style={{ marginBottom: 50 }}>
            <span className="eyebrow">In their words</span>
            <h2>What people say about us.</h2>
          </div>
          <div className="testimonials">
            {testimonials.map((t) => (
              <div className="testimonial reveal" key={t.name}>
                <div className="stars">★★★★★</div>
                <p>“{t.quote}”</p>
                <div className="person">
                  <div className="person__avatar">{initials(t.name)}</div>
                  <div><strong>{t.name}</strong><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Partners ---------- */}
      <section className="section--tight">
        <div className="wrap">
          <p className="center reveal" style={{ color: 'var(--muted)', fontWeight: 600, marginBottom: 28 }}>We are grateful to work alongside</p>
          <div className="partners">
            {partnerGroups.flatMap((g) => g.items).slice(0, 5).map((name, i) => (
              <div className="partner reveal" key={name + i}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      {/* ---------- Visit us ---------- */}
      <section className="section--tight">
        <div className="wrap grid-3">
          <div className="contact-item reveal">
            <div className="contact-item__icon"><Icon name="pin" /></div>
            <div><h3>Visit</h3><p>{org.address}</p></div>
          </div>
          <div className="contact-item reveal">
            <div className="contact-item__icon"><Icon name="phone" /></div>
            <div><h3>Call</h3><p>{org.phones.join(' · ')}</p></div>
          </div>
          <div className="contact-item reveal">
            <div className="contact-item__icon"><Icon name="clock" /></div>
            <div><h3>Office hours</h3><p>{org.hours}</p></div>
          </div>
        </div>
      </section>
    </>
  )
}
