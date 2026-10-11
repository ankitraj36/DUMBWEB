// Decorative CSS website mockups. Sizes use em so the whole mockup scales with `fs`.
function Site({ p, fs, phone }) {
  const d = p.dark
  return (
    <div className={`p-[1.6em] leading-tight ${d ? 'text-white' : 'text-white'}`} style={{ fontSize: fs, background: d ? 'rgba(6,7,10,0.9)' : 'rgba(12,14,20,0.95)' }}>
      <div className="flex items-center justify-between gap-2">
        <b className="text-[1.3em]" style={{ color: p.accent }}>{p.name}</b>
        {!phone && <span className="opacity-40">Services · About · Contact</span>}
        <span className="rounded-full px-[0.8em] py-[0.4em] font-semibold text-white" style={{ background: p.accent }}>{p.cta}</span>
      </div>
      <div className={`mt-[1.6em] rounded-lg p-[1em] ${p.center ? 'text-center' : ''}`} style={p.band ? { background: p.accent } : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <h4 className="text-[2.1em] font-extrabold leading-none">{p.headline}</h4>
        <p className="mt-[0.6em] opacity-60">{p.sub}</p>
      </div>
      <div className={`mt-[1em] grid gap-[0.8em] ${phone ? '' : 'grid-cols-3'}`}>
        {p.cards.map((c) => (
          <div key={c} className="rounded-lg border border-white/10 bg-white/5 p-[0.9em]">
            <i className="mb-[0.5em] block h-[1.2em] w-[1.2em] rounded-md" style={{ background: p.accent }} />{c}
          </div>
        ))}
      </div>
      {!phone && <p className="mt-[1em] rounded-lg border border-white/5 bg-white/3 p-[0.9em] opacity-40">Sample testimonial placeholder. Demo content only.</p>}
    </div>
  )
}

export const Browser = ({ p, fs = 8, className = '' }) => (
  <div className={`glass overflow-hidden shadow-glass-lg ${className}`}>
    <div className="flex items-center gap-1.5 border-b border-white/5 bg-surface-raised px-3 py-2">
      <i className="h-2 w-2 rounded-full bg-accent-rose/60" />
      <i className="h-2 w-2 rounded-full bg-accent-amber/60" />
      <i className="h-2 w-2 rounded-full bg-accent-emerald/60" />
      <span className="ml-2 min-w-0 truncate rounded-md bg-white/5 px-2.5 py-0.5 text-[8px] text-white/30">{p.url}</span>
      <span className="ml-auto shrink-0 rounded-full bg-brand/20 px-2 py-0.5 text-[7px] font-semibold text-brand-light">Concept</span>
    </div>
    <Site p={p} fs={fs} />
  </div>
)

export const Phone = ({ p, fs = 6, className = '' }) => (
  <div className={`overflow-hidden rounded-2xl border-2 border-white/10 shadow-glass ${className}`} style={{ background: 'rgba(12,14,20,0.95)' }}><Site p={p} fs={fs} phone /></div>
)
