const env = import.meta.env
export const config = {
  email: env.VITE_CONTACT_EMAIL || 'ankitraj3736@gmail.com',
  formEndpoint: env.VITE_FORM_ENDPOINT || '',
  whatsapp: (env.VITE_WHATSAPP_NUMBER || '9508656237').replace(/\D/g, ''),
}
