// Optional email alert for each new submission, sent through Resend
// (https://resend.com). Does nothing unless RESEND_API_KEY and NOTIFY_EMAIL are set.
const { RESEND_API_KEY, NOTIFY_EMAIL, NOTIFY_FROM } = process.env

const titles = {
  contact: 'New contact message',
  volunteers: 'New volunteer application',
  partners: 'New partnership enquiry',
  pledges: 'New donation pledge',
  'help-requests': 'New request for help',
  applications: 'New job application',
  rsvps: 'New event registration',
}

const escape = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

export async function notify(collection, record) {
  if (!RESEND_API_KEY || !NOTIFY_EMAIL) return
  const rows = Object.entries(record)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#5b6676"><b>${escape(k)}</b></td><td>${escape(v)}</td></tr>`)
    .join('')
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: NOTIFY_FROM || 'Pathway Finders Website <onboarding@resend.dev>',
        to: NOTIFY_EMAIL.split(',').map((e) => e.trim()),
        subject: `${titles[collection] || 'New submission'} from the website`,
        html: `<h2>${titles[collection] || 'New submission'}</h2><table>${rows}</table>`,
      }),
    })
    if (!res.ok) console.error('Email alert failed:', res.status, await res.text())
  } catch (err) {
    // A failed email should never stop the form from being saved.
    console.error('Email alert failed:', err)
  }
}
