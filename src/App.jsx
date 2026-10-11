import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { Home, ServicesPage, WorkPage, About, ContactPage, Privacy, Terms, NotFound } from './pages'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
