import { siteConfig, whatsappHref } from '../siteConfig'
import { Reveal } from './Reveal'

export function ContactCta() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    'Contato via site Trama',
  )}`

  return (
    <section className="section cta" id="contato" aria-labelledby="cta-heading">
      <Reveal>
        <div className="cta__panel">
          <h2 id="cta-heading" className="cta__title">
            Vamos conversar?
          </h2>
          <p className="cta__text">
            Conte em poucas linhas o que precisa (site novo, redesign ou
            suporte). Respondemos com próximos passos e prazos realistas.
          </p>
          <div className="cta__actions">
            <a className="btn btn--primary" href={mailto}>
              Enviar e-mail
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
          <p className="cta__fine">
            E-mail:{' '}
            <a href={mailto} className="inline-link">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
