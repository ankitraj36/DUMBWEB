import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section, Heading, Reveal, GlowOrb } from '../components/ui'
import { services } from '../data'

export default function Services({ page }) {
  return (
    <Section id="services" tone="surface">
      <GlowOrb color="brand" size={500} top="-200px" left="-150px" />
      <GlowOrb color="cyan" size={300} bottom="-100px" right="-100px" />
      <Heading eyebrow="Services" title="Everything You Need to Build a Stronger Online Presence." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.08} className="h-full">
            <article id={s.id} className="glass-card group h-full">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 transition-colors duration-300 group-hover:bg-brand/20">
                <s.icon size={22} className="text-brand-light" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/50 leading-relaxed">{s.text}</p>
              <Link to={page ? '/contact#review' : `/services#${s.id}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-white">
                {page ? 'Ask about this' : 'Learn More'} <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
