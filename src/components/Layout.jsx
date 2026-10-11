import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { ReviewLink } from './ui'
import { services } from '../data'
import { config } from '../config'

export const Logo = () => (
  <Link to="/" aria-label="DUMBWEB home" className="group flex items-center gap-2.5 text-lg font-extrabold tracking-tight">
    <div className="relative">
      <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="7" fill="url(#logo-grad)" />
        <path d="M7 7v10h4a5 5 0 0 0 0-10H7z" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.6" fill="#fff" />
      </svg>
      <div className="absolute -inset-1 rounded-lg bg-brand/20 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
    <span>DUMB<span className="text-gradient">WEB</span></span>
  </Link>
)

const links = [['Home', '/'], ['Services', '/services'], ['Our Work', '/work'], ['Process', '/#process'], ['About', '/about'], ['Contact', '/contact']]
const titles = { '/services': 'Services', '/work': 'Our Work', '/about': 'About', '/contact': 'Contact', '/privacy': 'Privacy Policy', '/terms': 'Terms of Service' }

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { key } = useLocation()
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => { setOpen(false) }, [key])
  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/5 bg-ink/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav aria-label="Main" className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([l, to]) => to.includes('#')
            ? <Link key={l} to={to} className="text-sm font-medium text-white/50 transition-colors duration-300 hover:text-white">{l}</Link>
            : <NavLink key={l} to={to} end className={({ isActive }) => `text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>{l}</NavLink>)}
          <ReviewLink className="btn btn-primary !px-5 !py-2.5 text-xs" />
        </div>
        <button className="rounded-xl p-2.5 transition-colors hover:bg-white/5 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="border-t border-white/5 bg-ink/95 px-5 pb-8 pt-4 backdrop-blur-2xl lg:hidden">
            {links.map(([l, to]) => <Link key={l} to={to} className="block py-3.5 text-lg font-medium text-white/80 transition-colors hover:text-white">{l}</Link>)}
            <ReviewLink className="btn btn-primary mt-4 w-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const h = 'mb-4 text-sm font-semibold text-white/80'
  const ul = 'space-y-2.5 text-sm text-white/40 [&_a]:transition-colors [&_a:hover]:text-brand-light'
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink">
      {/* Aurora glow at top of footer */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">Modern, mobile-friendly websites for small businesses in the United States and United Kingdom.</p>
        </div>
        <div><h3 className={h}>Quick links</h3><ul className={ul}>{links.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul></div>
        <div><h3 className={h}>Services</h3><ul className={ul}>{services.map((s) => <li key={s.id}><Link to={`/services#${s.id}`}>{s.title}</Link></li>)}</ul></div>
        <div><h3 className={h}>Contact</h3>
          <ul className={ul}>
            <li><a href={`mailto:${config.email}`}>{config.email}</a></li>
            <li>United States &amp; United Kingdom</li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles size={12} className="text-brand-light" aria-hidden="true" />
          © {new Date().getFullYear()} DUMBWEB. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    const t = titles[pathname]
    document.title = t ? `${t} | DUMBWEB` : 'DUMBWEB | Website Design & Development for Small Businesses'
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60)
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
      <Nav />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}
