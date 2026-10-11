import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react'
import { config } from '../config'

const init = { name: '', business: '', email: '', country: 'USA', website: '', service: '', budget: '', message: '', consent: false, _gotcha: '' }
const serviceOpts = ['Business website', 'Website redesign', 'Landing page', 'Website maintenance', 'Not sure yet']
const budgetOpts = ['Under $250', '$250 – $500', '$500 – $1,000', '$1,000+', 'Not sure yet']
const box = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 aria-[invalid=true]:border-accent-rose/50 transition-all duration-300'

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Enter your full name.'
  if (!v.business.trim()) e.business = 'Enter your business name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address, like name@company.com.'
  if (v.website.trim() && !/^(https?:\/\/)?[^\s.]+\.[^\s]{2,}$/.test(v.website.trim())) e.website = 'Enter a valid URL, or leave this blank.'
  if (!v.service) e.service = 'Choose the service you need.'
  if (v.message.trim().length < 10) e.message = 'Describe your project in at least 10 characters.'
  if (!v.consent) e.consent = 'Agree to the privacy notice to send your enquiry.'
  return e
}

const Field = ({ k, label, opt, error, className = '', children }) => (
  <div className={className}>
    <label htmlFor={k} className="mb-2 block text-sm font-medium text-white/70">{label}{opt && <span className="font-normal text-white/30"> (optional)</span>}</label>
    {children}
    {error && <p id={`${k}-err`} className="mt-1.5 text-sm text-accent-rose">{error}</p>}
  </div>
)

export default function LeadForm() {
  const [v, setV] = useState(init)
  const [err, setErr] = useState({})
  const [status, setStatus] = useState('idle')
  const form = useRef(null)
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
  const f = (k) => ({ id: k, name: k, value: v[k], onChange: set(k), className: box, 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-err` : undefined })

  async function submit(ev) {
    ev.preventDefault()
    if (status === 'sending' || v._gotcha) return
    const e = validate(v)
    setErr(e)
    if (Object.keys(e).length) {
      setStatus('invalid')
      setTimeout(() => form.current?.querySelector('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    if (!config.formEndpoint) return setStatus('demo')
    setStatus('sending')
    try {
      const r = await fetch(config.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...v, consent: 'Agreed to privacy notice' }),
      })
      if (!r.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div role="status" className="glass-strong p-8 text-center shadow-glow">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-emerald/10">
        <CheckCircle2 className="text-accent-emerald" size={32} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-2xl font-bold text-white">Thank you. Your enquiry was sent.</h3>
      <p className="mt-2 text-white/50">We will review your details and reply to {v.email}.</p>
      <button type="button" className="btn btn-primary mt-6" onClick={() => { setV(init); setErr({}); setStatus('idle') }}>Send another enquiry</button>
    </div>
  )

  const notes = {
    invalid: ['border-accent-rose/20 bg-accent-rose/5 text-accent-rose', 'Check the highlighted fields and try again.'],
    error: ['border-accent-rose/20 bg-accent-rose/5 text-accent-rose', `Your enquiry was not sent because something went wrong. Try again, or email ${config.email}.`],
    demo: ['border-accent-amber/20 bg-accent-amber/5 text-accent-amber', `Demo mode: no form endpoint is configured, so nothing was sent. Email ${config.email} instead. Site owner: see the README to connect Formspree.`],
  }[status]

  return (
    <form ref={form} noValidate onSubmit={submit} className="glass-strong p-6 shadow-glass-lg sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles size={16} className="text-brand-light" aria-hidden="true" />
        <span className="text-sm font-semibold text-white/60">Free Website Review</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field k="name" label="Full name" error={err.name}><input {...f('name')} autoComplete="name" aria-required="true" /></Field>
        <Field k="business" label="Business name" error={err.business}><input {...f('business')} autoComplete="organization" aria-required="true" /></Field>
        <Field k="email" label="Work email" error={err.email}><input {...f('email')} type="email" autoComplete="email" aria-required="true" /></Field>
        <Field k="country" label="Country"><select {...f('country')}><option>USA</option><option>UK</option><option>Other</option></select></Field>
        <Field k="website" label="Current website URL" opt error={err.website}><input {...f('website')} type="url" placeholder="https://" autoComplete="url" /></Field>
        <Field k="service" label="Type of service required" error={err.service}>
          <select {...f('service')} aria-required="true"><option value="">Select a service</option>{serviceOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field k="budget" label="Estimated budget" opt className="sm:col-span-2">
          <select {...f('budget')}><option value="">Select a range</option>{budgetOpts.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field k="message" label="Project description" error={err.message} className="sm:col-span-2">
          <textarea {...f('message')} rows={4} aria-required="true" />
        </Field>
      </div>
      <input name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={v._gotcha} onChange={set('_gotcha')} />
      <div className="mt-5">
        <label className="flex items-start gap-3 text-sm text-white/50">
          <input type="checkbox" id="consent" checked={v.consent} onChange={set('consent')} aria-invalid={!!err.consent} aria-describedby={err.consent ? 'consent-err' : undefined} className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-brand" />
          <span>I agree to the <Link to="/privacy" target="_blank" className="font-medium text-brand-light underline transition-colors hover:text-white">Privacy Policy</Link> and consent to DUMBWEB using these details to respond to my enquiry.</span>
        </label>
        {err.consent && <p id="consent-err" className="mt-1 text-sm text-accent-rose">{err.consent}</p>}
      </div>
      <div aria-live="polite">{notes && <p role={status === 'demo' ? 'status' : 'alert'} className={`mt-5 rounded-xl border p-4 text-sm ${notes[0]}`}>{notes[1]}</p>}</div>
      <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-6 w-full">
        {status === 'sending' ? <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending…</> : 'Request a Free Website Review'}
      </button>
    </form>
  )
}
