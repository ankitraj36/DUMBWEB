import { Globe, RefreshCw, Target, Smartphone, Wrench, MousePointerClick } from 'lucide-react'

export const services = [
  { id: 'development', icon: Globe, title: 'Business Website Development', text: 'Professional websites tailored to the business, its services, and its customers.' },
  { id: 'redesign', icon: RefreshCw, title: 'Website Redesign', text: 'Refresh the layout, visual identity, navigation, and mobile experience of an existing website.' },
  { id: 'landing', icon: Target, title: 'Landing Pages', text: 'Focused pages designed around one clear service, campaign, or enquiry action.' },
  { id: 'responsive', icon: Smartphone, title: 'Mobile-Responsive Design', text: 'Websites that work smoothly across mobile phones, tablets, and desktops.' },
  { id: 'maintenance', icon: Wrench, title: 'Website Maintenance', text: 'Updates, content changes, bug fixes, and technical improvements under an agreed maintenance scope.' },
  { id: 'conversion', icon: MousePointerClick, title: 'Conversion-Focused Improvements', text: 'Clear service information, accessible contact options, enquiry forms, and better calls to action.' },
]

// Fictional demonstration concepts. Replace with real client projects when available.
export const projects = [
  { id: 'cleanspace', name: 'CleanSpace', cat: 'Cleaning Business Website', url: 'cleanspace.example', accent: '#0E9F8E', center: true,
    headline: 'A spotless space, without the stress.', sub: 'Home and office cleaning, booked in minutes.', cta: 'Get a quote',
    cards: ['Home cleaning', 'Office cleaning', 'Deep cleans'], goal: 'Make services and enquiries obvious within seconds, with a calm, trustworthy look.' },
  { id: 'urbancut', name: 'UrbanCut', cat: 'Barbershop Website', url: 'urbancut.example', accent: '#F5B544', dark: true,
    headline: 'Sharp cuts. Clean lines.', sub: 'Walk-ins welcome. Book your chair online.', cta: 'Book now',
    cards: ['Haircuts', 'Beard trims', 'Hot towel shave'], goal: 'Show services, prices and opening hours clearly, with one-tap booking on mobile.' },
  { id: 'buildcraft', name: 'BuildCraft', cat: 'Contractor Website', url: 'buildcraft.example', accent: '#D9480F', band: true,
    headline: 'Quality work. Clear quotes.', sub: 'Renovations, extensions and repairs.', cta: 'Request a quote',
    cards: ['Renovations', 'Extensions', 'Repairs'], goal: 'Present trades and project types with a clear route to a quote request.' },
]
export const consult = { name: 'Northline', url: 'northline.example', accent: '#1E3A8A',
  headline: 'Clear advice for growing firms.', sub: 'Strategy and finance consulting.', cta: 'Book a call', cards: ['Strategy', 'Finance', 'Operations'] }

export const faqs = [
  ['How much does a website cost?', 'Starter websites begin from $150 and five-page business websites from $250. These are starting prices, not fixed quotes. The final price depends on pages, features and content, and is agreed before work begins.'],
  ['How long does development take?', 'It depends on the scope and on how quickly content and feedback arrive. Once requirements are clear, your proposal will include a timeline.'],
  ['Can you redesign my existing website?', 'Yes. We can refresh the layout, visuals, navigation and mobile experience. Add your current URL to the enquiry form and we will review it.'],
  ['Will my website work on mobile devices?', 'Yes. Every website is built mobile-first and checked on phone, tablet and desktop screen sizes.'],
  ['Can you build a website for my specific industry?', 'We focus on local service businesses such as cleaners, trades, salons, barbers, restaurants, contractors and consultants. Tell us about yours and we will say honestly whether we are a good fit.'],
  ['Is hosting included in the price?', 'Not by default. Domain registration, hosting, paid plugins, third-party subscriptions, extensive content creation and ongoing maintenance are separate unless your proposal says otherwise.'],
  ['Can you help after the website launches?', 'Yes, under agreed terms. Support and maintenance scope are agreed in writing, so you know what is covered.'],
  ['How do I get started?', 'Send the enquiry form. We will review your requirements, ask follow-up questions if needed, and discuss a suitable solution and quote.'],
]
