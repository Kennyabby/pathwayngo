import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero, CTA } from '../components/ui'
import { faqs, org, formatPhone, telHref } from '../data/site'
import { images } from '../data/images'

export default function Faq() {
  const cats = ['All', ...new Set(faqs.map((f) => f.cat))]
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const list = faqs.filter((f) => (cat === 'All' || f.cat === cat) && (f.q + f.a).toLowerCase().includes(q.toLowerCase()))

  return (
    <>
      <PageHero
        crumb="FAQs"
        title="Questions? We’ve got answers."
        intro="Everything people usually ask about giving, volunteering, getting help and working with us."
        image={images.banners.faq}
        fallback="var(--fb-blue)"
      />

      <section className="section">
        <div className="wrap">
          <div className="faq">
            <input type="search" placeholder="Search questions..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search questions" style={{ marginBottom: 20 }} />
            <div className="chips">
              {cats.map((c) => (
                <button key={c} className={`chip${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
            <div key={cat + q}>
              {list.map((f) => (
                <details key={f.q} className="reveal">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
              {list.length === 0 && <p style={{ color: 'var(--muted)' }}>No questions match that search. Try another word, or ask us directly.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight bg-cream">
        <div className="wrap split">
          <div>
            <h2>Still have a question?</h2>
            <p>Call us, send a WhatsApp message or drop us a note. We’re happy to help.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn--navy" href={telHref(org.phones[0])}>Call {formatPhone(org.phones[0])}</a>
            <Link className="btn btn--outline" to="/contact">Send a message</Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
