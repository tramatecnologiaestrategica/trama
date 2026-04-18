import { siteConfig, whatsappHref } from '../siteConfig'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__pattern" />
        <div className="hero__glow" />
        <div className="hero__glow hero__glow--alt" />
      </div>

      <div className="hero__inner">
        <Reveal className="hero__text">
          <span className="hero__eyebrow">tecnologia estratégica</span>
          <h1 id="hero-heading" className="hero__title">
            Sites com <span className="accent">clareza</span>,
            <br />
            performance e identidade.
          </h1>
          <p className="hero__subtitle">
            da estratégia ao lançamento — em parceria com o seu time.
          </p>
          <p className="hero__lead">
            Na {siteConfig.brandName}, desenhamos e construímos páginas digitais
            rápidas, acessíveis e fáceis de evoluir. Tipografia, ritmo e cor a
            serviço da sua mensagem.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              Falar sobre um projeto
            </a>
            <a
              className="btn btn--ghost"
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__visual" delay={150}>
          <div className="hero__card" aria-hidden="true">
            <div className="hero__card-mark" />
            <div>
              <p className="hero__card-name">Trama</p>
              <p className="hero__card-tag">tecnologia estratégica</p>
            </div>
            <div className="hero__card-meta">
              <span className="hero__chip">React</span>
              <span className="hero__chip">Vite</span>
              <span className="hero__chip">UX</span>
              <span className="hero__chip">SEO</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
