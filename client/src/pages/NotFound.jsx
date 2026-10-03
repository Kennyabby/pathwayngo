import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="reveal">
        <span className="eyebrow">404</span>
        <h1>We couldn’t find that page</h1>
        <p className="lead">It may have moved, or the link might be wrong. Try one of these instead.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link className="btn btn--navy" to="/">Back to home</Link>
          <Link className="btn btn--outline" to="/programs">Our work</Link>
          <Link className="btn btn--outline" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
