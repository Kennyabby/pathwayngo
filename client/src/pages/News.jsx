import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, CTA, photo, fmtDate } from '../components/ui'
import { news } from '../data/content'

export default function News() {
  const tags = ['All', ...new Set(news.map((n) => n.tag))]
  const [tag, setTag] = useState('All')
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date))
  const [lead, ...rest] = sorted
  const list = (tag === 'All' ? rest : sorted.filter((n) => n.tag === tag))

  return (
    <>
      <PageHero
        crumb="News"
        title="News from the field."
        intro="Updates from our outreaches, classrooms, markets and homes across Nigeria."
        image="hero-news.jpg"
        fallback="var(--fb-blue)"
      />

      {tag === 'All' && (
        <section className="section" style={{ paddingBottom: 40 }}>
          <div className="wrap split">
            <div className="media media--tall" style={photo(lead.image, lead.fallback)}>
              <span className="card__tag" style={{ '--c': lead.color, top: 24, left: 24 }}>{lead.tag}</span>
            </div>
            <div>
              <span className="eyebrow">Latest story</span>
              <h2>{lead.title}</h2>
              <p style={{ color: 'var(--muted)' }}>{fmtDate(lead.date).long} · {lead.author}</p>
              <p className="lead">{lead.excerpt}</p>
              <Link className="btn btn--navy" to={`/news/${lead.slug}`}>Read the full story</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-cream">
        <div className="wrap">
          <div className="chips">
            {tags.map((t) => (
              <button key={t} className={`chip${tag === t ? ' active' : ''}`} onClick={() => setTag(t)}>{t}</button>
            ))}
          </div>
          <div className="grid-3" key={tag}>
            {list.map((s) => (
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

      <CTA title="Want news like this every month?" text="Join our mailing list at the bottom of this page, or follow along by supporting our next outreach." />
    </>
  )
}
