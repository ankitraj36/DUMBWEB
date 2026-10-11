import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Section, Reveal, GlowOrb } from '../components/ui'
import LeadForm from '../components/LeadForm'
import { config } from '../config'

export default function Lead({ contact }) {
  const ic = 'text-brand-light'
  const row = 'flex items-center gap-3'
  return (
    <Section id="review" tone={contact ? 'dark' : 'surface'}>
      <GlowOrb color="brand" size={500} top="-150px" left="-200px" />
      <GlowOrb color="purple" size={350} bottom="-100px" right="-150px" />
      <div className="grid items-start gap-14 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl leading-[1.1] text-white">
            {contact ? 'Get in touch' : <>Let's Make Your Website <span className="text-gradient">Work Better.</span></>}
          </h2>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            {contact ? 'Send a few details about your project and we will reply by email.' : "Tell us a little about your business. We'll review your requirements and discuss a suitable website solution."}
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className={row}><span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10"><Mail size={16} className={ic} aria-hidden="true" /></span><a className="text-white/60 underline-offset-4 hover:text-white hover:underline transition-colors" href={`mailto:${config.email}`}>{config.email}</a></li>
            <li className={row}><span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10"><MapPin size={16} className={ic} aria-hidden="true" /></span><span className="text-white/60">Serving the United States &amp; United Kingdom</span></li>
            {config.whatsapp && <li className={row}><span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10"><MessageCircle size={16} className={ic} aria-hidden="true" /></span><a className="text-white/60 underline-offset-4 hover:text-white hover:underline transition-colors" href={`https://wa.me/${config.whatsapp}`} target="_blank" rel="noreferrer">Message us on WhatsApp</a></li>}
          </ul>
          {contact && <a href="#enquiry" className="btn btn-primary mt-8">Request a Quote</a>}
        </Reveal>
        <Reveal className="lg:col-span-3"><div id="enquiry"><LeadForm /></div></Reveal>
      </div>
    </Section>
  )
}
