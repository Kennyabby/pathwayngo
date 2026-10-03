import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui'
import { policies, photoCredits } from '../data/content'
import { images } from '../data/images'

export default function Policy({ kind }) {
  const p = policies[kind]
  return (
    <>
      <PageHero crumb={p.title} title={p.title} intro={`Last updated ${p.updated}`} image={images.banners.policies} fallback="var(--fb-blue)" />
      <section className="section">
        <div className="wrap">
          <div className="policy">
            <p className="policy__note reveal">{p.intro}</p>
            {p.sections.map(([title, text]) => (
              <div className="reveal" key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            ))}
            {kind === 'terms' && (
              <div className="reveal">
                <h2>Photo credits</h2>
                <p>
                  Some photos on this website come from <a href="https://www.pexels.com" target="_blank" rel="noreferrer">Pexels</a> and
                  are used under the <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">Pexels License</a>.
                  They show people and places similar to the communities we serve, but they are not photos of our beneficiaries
                  unless stated. Thank you to the photographers:
                </p>
                <p style={{ fontSize: '.9rem', lineHeight: 2 }}>
                  {photoCredits.map((id, i) => (
                    <span key={id}>
                      <a href={`https://www.pexels.com/photo/${id}/`} target="_blank" rel="noreferrer">Photo {i + 1}</a>
                      {i < photoCredits.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            )}
            <div className="mini-nav reveal" style={{ marginTop: 50 }}>
              {Object.entries(policies).filter(([k]) => k !== kind).map(([k, v]) => (
                <Link key={k} to={`/${k}`}>{v.title}</Link>
              ))}
              <Link to="/contact">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
