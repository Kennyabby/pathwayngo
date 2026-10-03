// ---------------------------------------------------------------------------
// Where form submissions are kept.
//
// On Vercel the file system is read-only and wiped between requests, so
// submissions go to Redis (Upstash, added from the Vercel Marketplace).
// On your own computer, with no Redis configured, they are saved as JSON
// files in server/data so you can develop without any setup.
// ---------------------------------------------------------------------------
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DATA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'data')

// The Vercel Upstash integration sets KV_REST_API_*; a direct Upstash setup uses UPSTASH_REDIS_REST_*.
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

export const storageMode = REDIS_URL && REDIS_TOKEN ? 'redis' : process.env.VERCEL ? 'none' : 'file'

async function redis(command) {
  const res = await fetch(REDIS_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  })
  const json = await res.json()
  if (!res.ok || json.error) throw new Error(`Redis error: ${json.error || res.status}`)
  return json.result
}

const key = (collection) => `pf:${collection}`

export async function save(collection, record) {
  const entry = { id: crypto.randomUUID(), createdAt: new Date().toISOString(), ...record }

  if (storageMode === 'redis') {
    await redis(['LPUSH', key(collection), JSON.stringify(entry)])
    return entry
  }
  if (storageMode === 'none') {
    throw new Error('No storage configured. Add Upstash Redis to this Vercel project (see README).')
  }

  const file = path.join(DATA_DIR, `${collection}.json`)
  const rows = await load(collection)
  rows.push(entry)
  await fs.mkdir(DATA_DIR, { recursive: true })
  await fs.writeFile(file, JSON.stringify(rows, null, 2))
  return entry
}

export async function load(collection) {
  if (storageMode === 'redis') {
    const rows = await redis(['LRANGE', key(collection), '0', '-1'])
    return rows.map((r) => JSON.parse(r)).reverse()
  }
  if (storageMode === 'none') return []
  try {
    return JSON.parse(await fs.readFile(path.join(DATA_DIR, `${collection}.json`), 'utf8'))
  } catch {
    return []
  }
}

// Newsletter sign-ups are kept in a set so the same email is only stored once.
export async function addSubscriber(email) {
  const normalised = email.toLowerCase()
  if (storageMode === 'redis') {
    const added = await redis(['SADD', key('newsletter:emails'), normalised])
    if (added) await save('newsletter', { email: normalised })
    return
  }
  const existing = await load('newsletter')
  if (!existing.some((r) => r.email.toLowerCase() === normalised)) await save('newsletter', { email: normalised })
}
