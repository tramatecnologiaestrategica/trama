import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type Item = {
  title: string
  body: string
  icon: ReactNode
}

const items: Item[] = [
  {
    title: 'Sites e landing pages',
    body: 'Páginas rápidas, responsivas e preparadas para conversão — com conteúdo que guia o visitante até o próximo passo.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h18v14H3zM3 9h18M7 5v14"
        />
      </svg>
    ),
  },
  {
    title: 'Identidade digital',
    body: 'Tipografia, cores, componentes e tom de voz alinhados à sua marca para uma presença coerente em todos os pontos de contato.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l2.5 5.5L20 10l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1.5L12 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Evolução e manutenção',
    body: 'Ajustes, novas seções, métricas e pequenas melhorias contínuas para o site acompanhar o negócio sem dor de cabeça.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5"
        />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section
      className="section services"
      id="servicos"
      aria-labelledby="servicos-heading"
    >
      <div className="section__inner">
        <Reveal className="section__head">
          <span className="section__eyebrow">o que fazemos</span>
          <h2 id="servicos-heading" className="section__title">
            Estratégia, design e código — em uma costura só.
          </h2>
          <p className="section__intro">
            Da primeira versão ao crescimento: entregamos sites que comunicam
            bem, carregam rápido e são fáceis de atualizar.
          </p>
        </Reveal>

        <ul className="services__grid">
          {items.map((it, idx) => (
            <li key={it.title} style={{ listStyle: 'none' }}>
              <Reveal delay={idx * 90}>
                <article className="card">
                  <span className="card__icon">{it.icon}</span>
                  <h3 className="card__title">{it.title}</h3>
                  <p className="card__body">{it.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
