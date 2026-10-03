import { useEffect, useState } from 'react'
import { PageHero, CTA, photo } from '../components/ui'
import { gallery } from '../data/content'
import { images } from '../data/images'

const heights = [320, 240, 380, 280, 260, 340]

export default function Gallery() {
  const cats = ['All', ...new Set(gallery.map((g) => g.cat))]
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const items = cat === 'All' ? gallery : gallery.filter((g) => g.cat === cat)

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % items.length)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, items.length])

  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Moments from our work."
        intro="Outreach days, classrooms, food drives and graduations. A look at the kind of work we do every week."
        image={images.banners.gallery}
        fallback="var(--fb-warm)"
      />

      <section className="section">
        <div className="wrap">
          <div className="chips">
            {cats.map((c) => (
              <button key={c} className={`chip${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="gallery" key={cat}>
            {items.map((g, i) => (
              <button className="gallery__item reveal reveal--zoom" key={g.image} onClick={() => setOpen(i)} aria-label={`Open photo: ${g.caption}`}>
                <div className="gallery__img" style={{ ...photo(g.image, g.fallback), height: heights[i % heights.length] }} />
                <div className="gallery__cap"><small>{g.cat}</small>{g.caption}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" aria-label="Close" onClick={() => setOpen(null)}>×</button>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()} key={open}>
            <div className="lightbox__img" style={photo(items[open].image, items[open].fallback)} />
            <p>{items[open].caption} <span style={{ opacity: .6 }}>({open + 1} of {items.length})</span></p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
              <button className="btn btn--light" onClick={() => setOpen((open - 1 + items.length) % items.length)}>Previous</button>
              <button className="btn btn--light" onClick={() => setOpen((open + 1) % items.length)}>Next</button>
            </div>
          </div>
        </div>
      )}

      <CTA title="Want to be in the next photo?" text="Join us as a volunteer at our next outreach or food drive." />
    </>
  )
}
