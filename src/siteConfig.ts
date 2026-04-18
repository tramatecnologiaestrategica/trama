/** Ajuste e-mail, WhatsApp e redes antes de publicar. */
export const siteConfig = {
  brandName: 'Trama',
  tagline: 'tecnologia estratégica',
  legalName: 'Trama Tecnologia Estratégica',
  email: 'contato@trama.exemplo',
  /** Apenas dígitos com DDI, ex.: 5511999999999 */
  whatsappDigits: '5511999999999',
  whatsappMessage: 'Olá! Vim pelo site da Trama.',
  links: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
} as const

export function whatsappHref(): string {
  const q = encodeURIComponent(siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${q}`
}
