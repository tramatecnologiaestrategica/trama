import { Reveal } from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    text: 'Entendemos objetivos, público e mensagens-chave para definir o escopo certo.',
  },
  {
    n: '02',
    title: 'Proposta visual',
    text: 'Estrutura, referências e direção de arte com tipografia clara e contraste no que importa.',
  },
  {
    n: '03',
    title: 'Implementação',
    text: 'Desenvolvimento com stack moderna, boas práticas de acessibilidade e SEO básico.',
  },
  {
    n: '04',
    title: 'Lançamento',
    text: 'Deploy, ajustes finais e orientação para você publicar e medir resultados.',
  },
] as const

export function ProcessOrTrust() {
  return (
    <section
      className="section process"
      id="como-funciona"
      aria-labelledby="process-heading"
    >
      <div className="section__inner">
        <Reveal className="section__head">
          <span className="section__eyebrow">como funciona</span>
          <h2 id="process-heading" className="section__title">
            Processo enxuto, com checkpoints claros.
          </h2>
          <p className="section__intro">
            Você acompanha a evolução do projeto sem jargão desnecessário — e
            sabe, a cada etapa, o que vem depois.
          </p>
        </Reveal>

        <ol className="process__steps">
          {steps.map((s, idx) => (
            <li key={s.n} style={{ listStyle: 'none' }}>
              <Reveal delay={idx * 80}>
                <article className="process__step">
                  <span className="process__n" aria-hidden="true">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="process__step-title">{s.title}</h3>
                    <p className="process__step-text">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={120}>
          <figure className="quote">
            <blockquote>
              “Exemplo de depoimento — substitua por um feedback real de cliente
              quando tiver.”
            </blockquote>
            <figcaption>— Nome do cliente, cargo (texto fictício)</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
