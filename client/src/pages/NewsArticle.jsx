import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { CTA, photo, fmtDate } from '../components/ui'
import { news } from '../data/content'
import NotFound from './NotFound'

export default function NewsArticle() {
  const { slug } = useParams()
  const a = news.find((n) => n.slug === slug)
  if (!a) return <NotFound />
  const more = news.filter((n) => n.slug !== slug).slice(0, 3)
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const text = encodeURIComponent(a.title)

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={photo(a.image, a.fallback)} />
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/news">News</Link></div>
          <span className="card__tag" style={{ '--c': a.color, position: 'static', display: 'inline-block', marginBottom: 18 }}>{a.tag}</span>
          <h1>{a.title}</h1>
          <div className="article__meta">
            <span><Icon name="calendar" size={15} /> {fmtDate(a.date).long}</span>
            <span><Icon name="users" size={15} /> {a.author}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="article">
            <p className="article__lead reveal">{a.excerpt}</p>
            {a.body.map((para, i) => <p className="reveal" key={i}>{para}</p>)}
            <div className="share reveal">
              <strong style={{ color: 'var(--navy)', marginRight: 6 }}>Share this story</strong>
              <a href={`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" aria-label="Share on WhatsApp"><Icon name="whatsapp" size={18} /></a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook"><Icon name="facebook" size={18} /></a>
              <a href={`https://x.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" aria-label="Share on X"><Icon name="x" size={18} /></a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn"><Icon name="linkedin" size={18} /></a>
            </div>
            <Link className="link-arrow reveal" to="/news" style={{ display: 'inline-block' }}>Back to all news</Link>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow">Keep reading</span><h2>More stories.</h2></div></div>
          <div className="grid-3">
            {more.map((s) => (
              <article className="card" key={s.slug}>
                <div style={{ overflow: 'hidden' }}>
                  <div className="card__img" style={photo(s.image, s.fallback)}>
                    <span className="card__tag" style={{ '--c': s.color }}>{s.tag}</span>
                  </div>
                </div>
                <div className="card__body">
                  <div className="card__meta"><span>{fmtDate(s.date).long}</span></div>
                  <h3>{s.title}</h3>
                  <Link className="link-arrow" to={`/news/${s.slug}`}>Read story</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
