// Vercel serverless function. vercel.json sends every /api/* request here,
// and the Express app handles the routing.
import app from '../server/app.js'

export default app
