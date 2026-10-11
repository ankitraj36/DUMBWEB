const env = import.meta.env
export const config = {
  email: env.VITE_CONTACT_EMAIL || 'hello@dumbweb.com',
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  whatsapp: (env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
}
