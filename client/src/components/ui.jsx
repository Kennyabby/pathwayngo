import { useState } from 'react'
import { Link } from 'react-router-dom'

// Background with a real photo (from client/public/img) layered over a brand gradient
// fallback, so the design still looks finished before photos are added.
export const photo = (file, fallback = 'var(--fb-blue)') => ({
  backgroundImage: `url(/img/${file}), ${fallback}`,
})

export const fmtDate = (iso) => {
  const d = new Date(iso + 'T00:00:00')
  return {
    day: d.getDate(),
    month: d.toLocaleString('en-GB', { month: 'short' }),
    long: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    weekday: d.toLocaleDateString('en-GB', { weekday: 'long' }),
  }
}

export const initials = (name) =>
  name.replace(/^(Mrs?|Dr|Mama)\.?\s+/, '').split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()

export function PageHero({ title, intro, crumb, image, fallback }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" style={photo(image, fallback)} />
      <div className="wrap">
        <div className="crumbs"><Link to="/">Home</Link> &nbsp;/&nbsp; {crumb}</div>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  )
}

export function CTA({ title = 'Every gift opens a door for someone.', text = 'Your support keeps our outreaches free, our scholars in class and our trainees working. Join us today.' }) {
  return (
    <section className="section--tight">
      <div className="wrap">
        <div className="cta reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__actions">
            <Link className="btn btn--primary" to="/donate">Donate Now</Link>
            <Link className="btn btn--light" to="/get-involved#volunteer">Volunteer</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// Submits a form's fields as JSON to the Express API and tracks status.
export function useSubmit(endpoint) {
  const [state, setState] = useState({ status: 'idle', message: '' })
  async function submit(e, extra = {}) {
    e.preventDefault()
    const form = e.currentTarget
    const data = { ...Object.fromEntries(new FormData(form)), ...extra }
    setState({ status: 'loading', message: '' })
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Submission failed')
      setState({ status: 'success', message: json.message })
      form.reset()
    } catch (err) {
      setState({ status: 'error', message: err.message || 'Could not send. Please call us instead.' })
    }
  }
  return [state, submit]
}

export function FormStatus({ state }) {
  if (state.status === 'success') return <div className="form-success" role="status">{state.message}</div>
  if (state.status === 'error') return <div className="form-error" role="alert">{state.message}</div>
  return null
}

// Hidden honeypot field to catch spam bots.
export const Honeypot = () => (
  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
)
