import { Link } from 'react-router-dom'
import { PageHero, CTA, photo, initials } from '../components/ui'
import { stories, testimonials } from '../data/content'

export default function Stories() {
  return (
    <>
      <PageHero
        crumb="Stories"
        title="Every number is a person."
        intro="Behind our figures are mothers, grandparents, students and young workers. These are a few of their stories, shared with their permission."
        image="hero-stories.jpg"
        fallback="var(--fb-warm)"
      />

      <section className="section">
        <div className="wrap split split--wide">
          <div>
            <span className="eyebrow">Featured</span>
            <blockquote className="quote">{testimonials[0].quote}</blockquote>
            <div className="person">
              <div className="person__avatar">{initials(testimonials[0].name)}</div>
              <div><strong>{testimonials[0].name}</strong><span>{testimonials[0].role}</span></div>
            </div>
          </div>
          <div className="media media--tall" style={photo('story-feature.jpg', 'var(--fb-green)')} />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 50 }}>
            <span className="eyebrow">Stories of change</span>
            <h2>In their own words.</h2>
          </div>
          <div className="grid-2">
            {stories.map((s) => (
              <article className="story-card" key={s.name}>
                <div className="story-card__img" style={photo(s.image, s.fallback)} />
                <div className="story-card__body">
                  <span className="pill" style={{ background: `color-mix(in srgb, ${s.color} 12%, white)`, color: s.color }}>{s.program}</span>
                  <h3 style={{ marginTop: 14 }}>{s.headline}</h3>
                  <p>{s.text}</p>
                  <strong style={{ color: 'var(--navy)' }}>{s.name}, {s.age}</strong>
                  <span style={{ color: 'var(--muted)', fontSize: '.9rem' }}> · {s.place}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="wrap split">
          <div>
            <span className="eyebrow">Our promise</span>
            <h2>We tell stories with care.</h2>
            <p>We only share a story or photo when the person has agreed in writing, and a parent has agreed for children. Some names have been shortened to protect privacy. Anyone can ask us to remove their story at any time.</p>
          </div>
          <div className="testimonials" style={{ gridTemplateColumns: '1fr' }}>
            {testimonials.slice(1).map((t) => (
              <div className="testimonial" key={t.name} style={{ padding: 26 }}>
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

      <section className="section--tight">
        <div className="wrap center">
          <h2>Has Pathway Finders helped you?</h2>
          <p className="lead">We’d love to hear your story. It helps others find the courage to ask for help.</p>
          <Link className="btn btn--green" to="/contact">Share your story</Link>
        </div>
      </section>

      <CTA title="Help write the next story." />
    </>
  )
}
