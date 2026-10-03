// Local server: runs the API and, after `npm run build`, serves the website too.
// On Vercel this file is not used. Vercel serves client/dist and runs api/index.js.
import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import app from './app.js'
import { storageMode } from './storage.js'

const PORT = process.env.PORT || 5050
const CLIENT_DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'client', 'dist')

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(CLIENT_DIST))
  app.get('/{*splat}', (req, res) => res.sendFile(path.join(CLIENT_DIST, 'index.html')))
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT} (storage: ${storageMode})`))
