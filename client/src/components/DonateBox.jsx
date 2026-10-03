import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from './Icon'
import { useSubmit, FormStatus, Honeypot } from './ui'
import { programs, donationImpact } from '../data/site'

const AMOUNTS = Object.keys(donationImpact).map(Number)

export default function DonateBox() {
  const [params] = useSearchParams()
  const [frequency, setFrequency] = useState('one-time')
  const [amount, setAmount] = useState(10000)
  const [custom, setCustom] = useState('')
  const [state, submit] = useSubmit('/api/donations/pledge')
  const value = custom ? Number(custom) : amount
  const impact = donationImpact[value]

  return (
    <div className="donate-box">
      <h3 style={{ marginBottom: 18 }}>Make a pledge</h3>
      <div className="tabs" role="tablist">
        {['one-time', 'monthly'].map((f) => (
          <button key={f} type="button" role="tab" aria-selected={frequency === f} className={frequency === f ? 'active' : ''} onClick={() => setFrequency(f)}>
            {f === 'one-time' ? 'Give once' : 'Give monthly'}
          </button>
        ))}
      </div>

      <div className="amounts">
        {AMOUNTS.map((a) => (
          <button key={a} type="button" className={!custom && amount === a ? 'active' : ''} onClick={() => { setAmount(a); setCustom('') }}>
            ₦{a.toLocaleString()}
          </button>
        ))}
      </div>
      <input type="number" min="500" placeholder="Other amount (₦)" value={custom} onChange={(e) => setCustom(e.target.value)} aria-label="Other amount in naira" />

      <div className="impact-note" key={value}>
        {impact
          ? <><strong>₦{value.toLocaleString()}</strong> {impact}</>
          : <>Every gift, big or small, goes straight into our work with families in need.</>}
      </div>

      {state.status === 'success' ? (
        <FormStatus state={state} />
      ) : (
        <form className="form" onSubmit={(e) => submit(e, { amount: String(value || ''), frequency })}>
          <Honeypot />
          <div className="form-row">
            <div><label htmlFor="d-name">Full name *</label><input id="d-name" name="name" required /></div>
            <div><label htmlFor="d-phone">Phone number *</label><input id="d-phone" name="phone" type="tel" required /></div>
          </div>
          <div className="form-row">
            <div><label htmlFor="d-email">Email</label><input id="d-email" name="email" type="email" /></div>
            <div>
              <label htmlFor="d-program">Use my gift for</label>
              <select id="d-program" name="program" defaultValue={params.get('program') || 'Wherever it’s needed most'}>
                <option>Wherever it’s needed most</option>
                {programs.map((p) => <option key={p.slug}>{p.title}</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn--primary" style={{ justifyContent: 'center' }} disabled={state.status === 'loading' || !value}>
            <Icon name="heart" size={18} />
            {state.status === 'loading' ? 'Sending...' : `Pledge ₦${(value || 0).toLocaleString()}${frequency === 'monthly' ? ' a month' : ''}`}
          </button>
          <FormStatus state={state} />
          <p className="form-note">
            <Icon name="shield" size={14} /> To keep you safe, someone from our team will call you to confirm our official
            bank details. We will never ask you to pay into a personal account.
          </p>
        </form>
      )}
    </div>
  )
}
