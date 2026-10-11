import { Check, Terminal } from 'lucide-react'
import { Section, Heading, Reveal, SlideIn, GlowOrb } from '../components/ui'

const pts = ['Designs tailored to each business', 'Mobile-first development', 'Clear communication', 'Transparent project scope', 'Practical, maintainable solutions', 'Support after launch under agreed terms']
const code = [['scope', 'agreed before development'], ['design', 'tailored to your business'], ['build', 'mobile-first'], ['launch', 'reviewed with you'], ['support', 'under agreed terms']]

export default function Why() {
  return (
    <Section id="why" tone="surface">
      <GlowOrb color="brand" size={400} bottom="-200px" left="-100px" />
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <SlideIn direction="left">
          <Heading eyebrow="Why DUMBWEB" title="A Better Website. A Straightforward Process." />
          <ul className="space-y-4">
            {pts.map((p, i) => (
              <Reveal key={p} delay={i * 0.06}>
                <li className="flex items-start gap-3 text-lg text-white/80">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-emerald/10">
                    <Check size={14} className="text-accent-emerald" aria-hidden="true" />
                  </span>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </SlideIn>
        <SlideIn direction="right">
          <div role="img" aria-label="Illustration of a project workspace listing how DUMBWEB works" className="glass overflow-hidden shadow-glow">
            <div className="flex items-center gap-2 border-b border-white/5 bg-surface-raised px-5 py-3.5">
              <i className="h-2.5 w-2.5 rounded-full bg-accent-rose/60" />
              <i className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" />
              <i className="h-2.5 w-2.5 rounded-full bg-accent-emerald/60" />
              <span className="ml-3 flex items-center gap-1.5 text-xs text-white/30">
                <Terminal size={12} aria-hidden="true" /> project.config
              </span>
            </div>
            <div className="space-y-1.5 p-6 font-mono text-sm">
              <div className="text-white/25">{"// project.config"}</div>
              {code.map(([k, v]) => (
                <div key={k}>
                  <span className="text-brand-light">{k}</span>
                  <span className="text-white/30">: </span>
                  <span className="text-accent-emerald">"{v}"</span>
                  <span className="text-white/20">,</span>
                </div>
              ))}
            </div>
          </div>
        </SlideIn>
      </div>
    </Section>
  )
}
