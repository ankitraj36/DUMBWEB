import { useEffect, useRef, useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { Section, Heading, Reveal, GlowOrb } from '../components/ui'
import { Browser, Phone } from '../components/Mockup'
import { projects } from '../data'

export default function Work() {
  const [sel, setSel] = useState(null)
  const dlg = useRef(null)
  useEffect(() => {
    const d = dlg.current
    if (sel && !d.open) d.showModal()
    if (!sel && d.open) d.close()
  }, [sel])
  return (
    <Section id="work">
      <GlowOrb color="cyan" size={400} top="-100px" right="-150px" />
      <Heading eyebrow="Our work" title="Designs Built Around Real Business Needs." text="Three fictional concept projects showing how we approach layout, content and calls to action. They are demonstration work, not real client projects." />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.1} className="h-full">
            <article className="glass group h-full overflow-hidden transition-all duration-500 hover:border-brand/20 hover:shadow-glow-sm hover:-translate-y-1">
              <div className="relative p-5 pb-9" style={{ background: 'rgba(255,255,255,0.02)' }} role="img" aria-label={`Concept Project: desktop and mobile preview of a ${p.cat.toLowerCase()} for the fictional business ${p.name}`}>
                <Browser p={p} fs={7} />
                <Phone p={p} fs={5} className={`absolute bottom-3 w-[28%] ${i % 2 ? 'left-3' : 'right-3'}`} />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">{p.cat} · Concept Project</p>
                <h3 className="mt-1.5 text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm text-white/45 leading-relaxed">{p.goal}</p>
                <button type="button" onClick={() => setSel(p)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-white">View Concept <ArrowUpRight size={14} aria-hidden="true" /></button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <dialog ref={dlg} onClose={() => setSel(null)} onClick={(e) => e.target === dlg.current && setSel(null)} aria-label="Concept preview" className="m-auto max-h-[90vh] w-[min(92vw,56rem)] overflow-auto rounded-2xl border border-white/10 bg-surface-raised p-0 text-white backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        {sel && (
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-light">Concept Project · Demonstration work</p>
                <h3 className="mt-1.5 text-2xl font-bold">{sel.name}: {sel.cat}</h3>
              </div>
              <button type="button" autoFocus onClick={() => setSel(null)} aria-label="Close concept preview" className="rounded-xl p-2.5 transition-colors hover:bg-white/5"><X aria-hidden="true" /></button>
            </div>
            <div className="grid items-end gap-4 sm:grid-cols-[1fr_150px]">
              <Browser p={sel} fs={11} />
              <Phone p={sel} fs={8} className="hidden sm:block" />
            </div>
            <p className="mt-6 text-white/70"><b className="text-white">Design objective:</b> {sel.goal}</p>
            <p className="mt-2 text-sm text-white/40">A fictional demonstration design, not a real client project.</p>
          </div>
        )}
      </dialog>
    </Section>
  )
}
