import { Eye, Inbox, Smartphone, Check, Zap } from 'lucide-react'
import { Section, Heading, Reveal, GlowOrb } from '../components/ui'

const issues = [
  [Eye, 'An outdated first impression', 'Customers may hesitate if a website looks unprofessional or difficult to use.', 'rose'],
  [Inbox, 'Missed enquiries', 'Confusing contact information and difficult enquiry forms can create unnecessary friction.', 'amber'],
  [Smartphone, 'Poor mobile experience', 'Customers should be able to navigate services, call the business, or submit an enquiry from any device.', 'cyan'],
]
const help = ['Thoughtful design', 'Responsive development', 'Clear calls to action', 'Straightforward enquiry journeys']

const iconColors = { rose: 'text-accent-rose', amber: 'text-accent-amber', cyan: 'text-accent-cyan' }
const bgColors = { rose: 'bg-accent-rose/10', amber: 'bg-accent-amber/10', cyan: 'bg-accent-cyan/10' }

export default function Problem() {
  return (
    <Section id="problem">
      <GlowOrb color="purple" size={400} top="-150px" right="-100px" />
      <Heading eyebrow="The problem" title="Your Website Should Work as Hard as You Do." />
      <div className="grid gap-5 md:grid-cols-3">
        {issues.map(([Icon, t, d, color], i) => (
          <Reveal key={t} delay={i * 0.1} className="h-full">
            <div className="glass-card h-full">
              <span className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${bgColors[color]}`}>
                <Icon className={iconColors[color]} size={24} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-white/50 leading-relaxed">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <div className="glass-strong p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
              <Zap className="text-brand-light" size={20} aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-bold text-white">How DUMBWEB helps</h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {help.map((h) => (
              <li key={h} className="flex items-start gap-2.5 font-medium text-white/80">
                <Check size={18} className="mt-0.5 shrink-0 text-accent-emerald" aria-hidden="true" />{h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
