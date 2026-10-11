import { motion } from 'framer-motion'
import { Section, Heading, Reveal, GlowOrb } from '../components/ui'

const steps = [
  ['Discovery', 'Understand the business, target audience, goals, and required features.', 'brand'],
  ['Design', 'Prepare a tailored visual direction and homepage concept.', 'cyan'],
  ['Development', 'Build, test, and optimize the agreed website across devices.', 'purple'],
  ['Launch', 'Review the final website, deploy it, and hand over the agreed deliverables.', 'emerald'],
]

const dotColors = { brand: 'bg-brand', cyan: 'bg-accent-cyan', purple: 'bg-accent-purple', emerald: 'bg-accent-emerald' }
const glowColors = { brand: 'shadow-[0_0_12px_rgba(99,102,241,0.4)]', cyan: 'shadow-[0_0_12px_rgba(34,211,238,0.4)]', purple: 'shadow-[0_0_12px_rgba(192,132,252,0.4)]', emerald: 'shadow-[0_0_12px_rgba(52,211,153,0.4)]' }

export default function Process() {
  return (
    <Section id="process" tone="surface">
      <GlowOrb color="purple" size={400} top="-100px" right="-200px" />
      <Heading eyebrow="How we work" title="From first conversation to launch." />

      {/* Animated progress line */}
      <motion.div aria-hidden="true" className="mb-10 hidden h-px origin-left md:block"
        style={{ background: 'linear-gradient(90deg, #6366F1, #22D3EE, #C084FC, #34D399)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <ol className="grid gap-5 md:grid-cols-4">
        {steps.map(([t, d, color], i) => (
          <Reveal as="li" key={t} delay={i * 0.12} className="h-full">
            <div className="glass-card h-full group">
              <div className="mb-4 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${dotColors[color]} ${glowColors[color]}`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">Step {i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{t}</h3>
              <p className="mt-2 text-white/50 leading-relaxed">{d}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
