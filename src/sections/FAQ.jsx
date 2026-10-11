import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Section, Heading, GlowOrb } from '../components/ui'
import { faqs } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" tone="surface">
      <GlowOrb color="cyan" size={300} top="-100px" left="-100px" />
      <Heading center eyebrow="FAQ" title="Questions, answered honestly." />
      <div className="mx-auto max-w-3xl divide-y divide-white/5 glass overflow-hidden">
        {faqs.map(([q, a], i) => {
          const o = open === i
          return (
            <div key={q} className="transition-colors duration-300 hover:bg-white/[0.02]">
              <h3>
                <button type="button" id={`faq-b${i}`} aria-expanded={o} aria-controls={`faq-p${i}`} onClick={() => setOpen(o ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-white/80 transition-colors hover:text-white">
                  {q}
                  <ChevronDown className={`shrink-0 text-white/30 transition-all duration-300 motion-reduce:transition-none ${o ? 'rotate-180 text-brand-light' : ''}`} aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-p${i}`} role="region" aria-labelledby={`faq-b${i}`} className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${o ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'}`}>
                <div className="overflow-hidden"><p className="px-6 pb-5 text-white/45 leading-relaxed">{a}</p></div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
