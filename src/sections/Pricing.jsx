import { Check, Star } from 'lucide-react'
import { Section, Heading, Reveal, ReviewLink, GlowOrb } from '../components/ui'

const plans = [
  { name: 'Starter Website', price: 'From $150', items: ['One-page website', 'Responsive design', 'Services and business information', 'Contact details and enquiry CTA', 'Basic on-page SEO setup', 'One agreed revision round'] },
  { name: 'Business Website', price: 'From $250', hi: true, items: ['Up to five pages', 'Responsive design', 'Service pages', 'Contact or enquiry form', 'WhatsApp or click-to-call integration where appropriate', 'Basic on-page SEO setup', 'Two agreed revision rounds'] },
  { name: 'Custom Website', price: "Let's Discuss", items: ['Custom layouts and functionality', 'Advanced integrations where required', 'Larger websites or specialized requirements', 'Scope and quotation agreed before development'] },
]

export default function Pricing() {
  return (
    <Section id="pricing">
      <GlowOrb color="brand" size={500} top="-200px" left="50%" />
      <Heading eyebrow="Pricing" title="Simple Starting Prices. Clear Project Scope." />
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className="h-full">
            <div className={`relative h-full rounded-2xl p-7 transition-all duration-500 ${
              p.hi
                ? 'border border-brand/30 bg-brand-glow shadow-glow hover:shadow-glow-lg'
                : 'glass hover:border-white/10'
            }`}>
              {p.hi && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white shadow-glow-sm">
                  <Star size={12} aria-hidden="true" /> Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-3 text-4xl font-extrabold tracking-tight text-gradient">{p.price}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-white/60">
                    <Check size={16} className="mt-0.5 shrink-0 text-accent-emerald" aria-hidden="true" />{it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="glass-strong p-7 text-sm text-white/55 sm:p-8">
          <p><b className="text-white/80">These are starting prices in USD, not fixed quotes for every project.</b> The final quote depends on your scope and is agreed before development begins.</p>
          <p className="mt-3">Domain registration, hosting, paid plugins, third-party subscriptions, extensive content creation, and ongoing maintenance are separate unless explicitly included in your proposal.</p>
          <ReviewLink className="btn btn-primary mt-6">Get a Project Quote</ReviewLink>
        </div>
      </Reveal>
    </Section>
  )
}
