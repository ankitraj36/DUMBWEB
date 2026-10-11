import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ReviewLink, GlowOrb } from '../components/ui'
import { Browser } from '../components/Mockup'
import { projects, consult } from '../data'

const float = (delay) => ({ animate: { y: [0, -10, 0] }, transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay } })

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Aurora background orbs */}
      <GlowOrb color="brand" size={600} top="-200px" left="-100px" />
      <GlowOrb color="cyan" size={400} top="100px" right="-150px" />
      <GlowOrb color="purple" size={350} bottom="-100px" left="30%" />

      {/* Dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

      {/* Gradient line accent */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-glow px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-light"
          >
            <Sparkles size={14} className="animate-pulse-glow" aria-hidden="true" />
            Web Design &amp; Development
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your Business Deserves a{' '}
            <span className="text-gradient">Better Website.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/50"
          >
            We design and build modern, fast, mobile-friendly websites that help small businesses look professional and make it easier for customers to get in touch.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <ReviewLink />
            <Link to="/work" className="btn btn-ghost">Explore Our Work <ArrowRight size={16} aria-hidden="true" /></Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {['#6366F1', '#22D3EE', '#C084FC'].map((c, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-ink" style={{ background: c }} />
              ))}
            </div>
            <p className="text-sm text-white/40">Personalized solutions. Clear communication. No unnecessary complexity.</p>
          </motion.div>
        </div>

        {/* Floating browser mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[340px] w-full max-w-lg sm:h-[430px]"
          role="img"
          aria-label="Three overlapping concept website designs: a cleaning business, a local contractor and a professional services firm. All are demonstration concepts."
        >
          <motion.div className="absolute left-0 top-10 z-10 w-[80%] sm:w-[74%]" {...float(0)}><Browser p={projects[0]} /></motion.div>
          <motion.div className="absolute right-0 top-0 hidden w-[58%] sm:block" {...float(1.5)}><Browser p={projects[2]} /></motion.div>
          <motion.div className="absolute bottom-0 right-0 z-20 w-[60%]" {...float(3)}><Browser p={consult} /></motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-ink to-transparent" />
    </section>
  )
}
