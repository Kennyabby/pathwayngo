// The Express API. Used by api/index.js on Vercel and by server/index.js locally.
import express from 'express'
import { save, load, addSubscriber, storageMode } from './storage.js'
import { notify } from './notify.js'

const ADMIN_KEY = process.env.ADMIN_KEY

const app = express()
app.set('trust proxy', true) // so req.ip is the visitor's IP behind Vercel's proxy
app.use(express.json({ limit: '50kb' }))

// Simple in-memory rate limit: 10 submissions per IP per 15 minutes.
const hits = new Map()
function rateLimit(req, res, next) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000
  const recent = (hits.get(req.ip) || []).filter((t) => now - t < windowMs)
  if (recent.length >= 10) {
    return res.status(429).json({ error: 'Too many submissions. Please try again later.' })
  }
  recent.push(now)
  hits.set(req.ip, recent)
  next()
}

const isEmail = (v) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const clean = (v, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

// Builds a POST handler from a list of fields; `required` fields must be non-empty.
function formHandler(collection, fields, required, successMessage) {
  return async (req, res) => {
    const body = req.body || {}
    if (body.website) return res.json({ ok: true, message: successMessage }) // honeypot field
    const record = Object.fromEntries(fields.map((f) => [f, clean(body[f])]))
    const missing = required.filter((f) => !record[f])
    if (missing.length) return res.status(400).json({ error: `Please fill in: ${missing.join(', ')}` })
    if (record.email && !isEmail(record.email)) return res.status(400).json({ error: 'Please enter a valid email address.' })
    try {
      await save(collection, record)
      await notify(collection, record)
      res.json({ ok: true, message: successMessage })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Something went wrong. Please call us instead.' })
    }
  }
}

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------
app.get('/api/health', (req, res) => res.json({ ok: true, storage: storageMode }))

app.post('/api/contact', rateLimit, formHandler(
  'contact',
  ['name', 'email', 'phone', 'subject', 'message'],
  ['name', 'message'],
  'Thank you for reaching out. A member of our team will get back to you within 48 hours.'
))

app.post('/api/volunteer', rateLimit, formHandler(
  'volunteers',
  ['name', 'email', 'phone', 'area', 'availability', 'message'],
  ['name', 'phone', 'area'],
  'Thank you for offering your time! Our volunteer coordinator will call you shortly.'
))

app.post('/api/partner', rateLimit, formHandler(
  'partners',
  ['organisation', 'name', 'email', 'phone', 'type', 'message'],
  ['organisation', 'name', 'email'],
  'Thank you for your interest in partnering with us. We will be in touch within 3 working days.'
))

app.post('/api/donations/pledge', rateLimit, formHandler(
  'pledges',
  ['name', 'email', 'phone', 'amount', 'frequency', 'program'],
  ['name', 'phone', 'amount'],
  'Thank you for your generosity! We will call you to confirm our official account details.'
))

app.post('/api/help-request', rateLimit, formHandler(
  'help-requests',
  ['name', 'phone', 'area', 'need', 'for', 'message', 'consent'],
  ['name', 'phone', 'area', 'need', 'message'],
  'Thank you for reaching out. A member of our team will call you within three working days. If it is urgent, please call us directly.'
))

app.post('/api/careers', rateLimit, formHandler(
  'applications',
  ['name', 'phone', 'email', 'role', 'link', 'message'],
  ['name', 'phone', 'email', 'role', 'message'],
  'Thank you for applying. If you are shortlisted, we will call you within two weeks.'
))

app.post('/api/events/rsvp', rateLimit, formHandler(
  'rsvps',
  ['name', 'phone', 'event', 'as'],
  ['name', 'phone', 'event'],
  'You are registered! We will send you a reminder a few days before the event.'
))

app.post('/api/newsletter', rateLimit, async (req, res) => {
  const email = clean(req.body?.email, 200)
  if (!isEmail(email)) return res.status(400).json({ error: 'Please enter a valid email address.' })
  try {
    await addSubscriber(email)
    res.json({ ok: true, message: 'You are subscribed. Thank you for following our work!' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Something went wrong. Please try again later.' })
  }
})

// Read submissions: GET /api/admin/submissions/contact with header x-admin-key
app.get('/api/admin/submissions/:collection', async (req, res) => {
  if (!ADMIN_KEY || req.get('x-admin-key') !== ADMIN_KEY) return res.status(401).json({ error: 'Unauthorised' })
  const allowed = ['contact', 'volunteers', 'partners', 'pledges', 'newsletter', 'help-requests', 'applications', 'rsvps']
  if (!allowed.includes(req.params.collection)) return res.status(404).json({ error: 'Unknown collection' })
  res.json(await load(req.params.collection))
})

app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }))

// Catch anything unexpected so one bad request can't leave the function in a broken state.
app.use((err, req, res, next) => {
  console.error(err)
  if (res.headersSent) return next(err)
  const status = err.type === 'entity.parse.failed' ? 400 : 500
  res.status(status).json({ error: status === 400 ? 'Invalid request.' : 'Something went wrong. Please call us instead.' })
})

export default app
