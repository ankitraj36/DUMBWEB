import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Reveal = ({ as = 'div', children, delay = 0, className = '' }) => {
  const Tag = motion[as]
  return (
    <Tag className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</Tag>
  )
}

export const FadeIn = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

export const SlideIn = ({ children, direction = 'left', delay = 0, className = '' }) => (
  <motion.div className={className}
    initial={{ opacity: 0, x: direction === 'left' ? -40 : 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>
)

const tones = {
  dark: 'bg-ink',
  surface: 'bg-surface',
  raised: 'bg-surface-raised',
  aurora: 'bg-aurora',
}

export const Section = ({ id, tone = 'dark', className = '', children }) => (
  <section id={id} className={`relative overflow-hidden py-24 sm:py-32 ${tones[tone] || ''} ${className}`}>
    <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
  </section>
)

export const Heading = ({ eyebrow, title, text, center, gradient }) => (
  <Reveal className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    {eyebrow && (
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-light">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse-glow" />
        {eyebrow}
      </p>
    )}
    <h2 className={`text-3xl font-bold tracking-tight sm:text-5xl leading-[1.1] ${gradient ? 'text-gradient' : 'text-white'}`}>{title}</h2>
    {text && <p className="mt-5 text-lg text-white/55 leading-relaxed">{text}</p>}
  </Reveal>
)

export const ReviewLink = ({ children = 'Get a Free Website Review', className = 'btn btn-primary' }) => (
  <Link to="/contact#review" className={className}>{children}</Link>
)

export const GlowOrb = ({ color = 'brand', size = 300, top, left, right, bottom, className = '' }) => {
  const colors = {
    brand: 'bg-brand/20',
    cyan: 'bg-accent-cyan/15',
    purple: 'bg-accent-purple/15',
    emerald: 'bg-accent-emerald/10',
    rose: 'bg-accent-rose/10',
  }
  return (
    <div
      className={`orb ${colors[color] || colors.brand} ${className}`}
      style={{ width: size, height: size, top, left, right, bottom }}
    />
  )
}
