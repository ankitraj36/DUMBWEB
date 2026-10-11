import { Link } from 'react-router-dom'
import { Section, GlowOrb } from './components/ui'
import { config } from './config'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Services from './sections/Services'
import Work from './sections/Work'
import Why from './sections/Why'
import Process from './sections/Process'
import Pricing from './sections/Pricing'
import Lead from './sections/Lead'
import FAQ from './sections/FAQ'

const Head = ({ eyebrow, title, text }) => (
  <section className="relative overflow-hidden bg-ink">
    <GlowOrb color="brand" size={500} top="-200px" left="30%" />
    <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />
    <div className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
    <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-light">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-light animate-pulse-glow" />
        {eyebrow}
      </p>
      <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl leading-[1.1] text-white">{title}</h1>
      {text && <p className="mt-5 max-w-2xl text-lg text-white/50 leading-relaxed">{text}</p>}
    </div>
  </section>
)

const Legal = ({ title, items }) => (
  <>
    <Head eyebrow="Legal" title={title} />
    <Section>
      <div className="mx-auto max-w-3xl space-y-8">
        {items.map(([h, t]) => (
          <div key={h} className="glass-card">
            <h2 className="text-xl font-semibold text-white">{h}</h2>
            <p className="mt-3 text-white/50 leading-relaxed">{t}</p>
          </div>
        ))}
      </div>
    </Section>
  </>
)

export const Home = () => <><Hero /><Problem /><Services /><Work /><Why /><Process /><Pricing /><Lead /><FAQ /></>

export const ServicesPage = () => (
  <><Head eyebrow="Services" title="Website design and development, built around your business." text="From a single landing page to a full redesign, here is how we can help." /><Services page /><Pricing /><FAQ /></>
)

export const WorkPage = () => <><Head eyebrow="Our work" title="Concept projects that show our approach." text="Fictional demonstrations of layout, content and calls to action for local businesses." /><Work /></>

export const About = () => (
  <><Head eyebrow="About" title="A straightforward approach to small business websites." text="DUMBWEB designs and builds modern, mobile-friendly websites for small businesses in the United States and United Kingdom." /><Why /><Process /><Lead /></>
)

export const ContactPage = () => (
  <><Head eyebrow="Contact" title="Have a Project in Mind?" text="Tell us what you need. We will review your requirements and discuss a suitable solution and quote." /><Lead contact /><FAQ /></>
)

export const Privacy = () => (
  <Legal title="Privacy Policy" items={[
    ['What we collect', 'When you use our enquiry form we receive what you enter: your name, business name, email address, country, optional website URL, service required, budget range and project description.'],
    ['How we use it', 'We use these details only to respond to your enquiry, prepare a proposal and run a project if you choose to proceed. We do not sell your data.'],
    ['Who processes it', 'Enquiries are delivered through a third-party form service (for example Formspree) and an email provider, which process the data on our behalf.'],
    ['Cookies and analytics', 'This website does not set advertising or analytics cookies by default. If that changes, this policy and a consent notice will be updated.'],
    ['Retention and your rights', `We keep enquiry details as long as needed to respond and for reasonable business records. You can ask to access, correct or delete your data, or object to its use, by emailing ${config.email}. Depending on where you live you may have rights under UK GDPR, GDPR or US state privacy laws.`],
  ]} />
)

export const Terms = () => (
  <Legal title="Terms of Service" items={[
    ['Using this website', 'This website provides general information about DUMBWEB services. Content is provided as is and may change without notice.'],
    ['Prices and quotes', 'Prices shown are starting prices, not fixed quotes. Scope, price, timeline and deliverables are agreed in a written proposal before development begins.'],
    ['Third-party costs', 'Domain registration, hosting, paid plugins, third-party subscriptions, extensive content creation and ongoing maintenance are separate unless explicitly included in your proposal.'],
    ['Demonstration work', 'Projects shown on this website are fictional concepts created to demonstrate our approach. They are not real client work.'],
    ['Project terms', 'Ownership of deliverables, revision rounds, payment terms and support are set out in the agreed proposal for each project.'],
    ['Liability and contact', `We do not guarantee specific sales, traffic or search ranking results. Questions about these terms: ${config.email}.`],
  ]} />
)

export const NotFound = () => (
  <><Head eyebrow="404" title="This page does not exist." text="Check the address, or go back to the home page." /><Section><Link to="/" className="btn btn-primary">Back to home</Link></Section></>
)
