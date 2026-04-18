<div align="center">

<img src="./src/assets/logo-trama.jpg" alt="Trama" width="140" />

<h1><span style="color:#2563eb">Trama</span></h1>

<p>
  <strong>Tecnologia Estratégica</strong><br/>
  <sub>Landing pages sob medida · briefing com o cliente · entrega pronta</sub>
</p>

</div>

---

## O que é a Trama

A **Trama Tecnologia Estratégica** é uma agência focada em **criar e publicar landing pages** para empresas e profissionais. O trabalho é **feito pela equipe** (não é um construtor onde o cliente monta sozinho): fazemos **briefing**, alinhamos mensagem e objetivo, desenhamos o fluxo da página, implementamos e entregamos o site pronto — com modelo de **venda por projeto** e evolução em versões futuras.

Este repositório é o **site institucional** da agência: vitrine do posicionamento, serviços, processo e contato.

---

## Stack (resumo)

| Camada | Tecnologias |
|--------|-------------|
| Interface | [React](https://react.dev/) 19 |
| Tipagem | [TypeScript](https://www.typescriptlang.org/) |
| Build & dev | [Vite](https://vite.dev/) 8 |
| Qualidade | ESLint + [`typescript-eslint`](https://typescript-eslint.io/) |

---

## Como rodar localmente

```bash
npm install
npm run dev
```

Build de produção (gera a pasta `dist/`):

```bash
npm run build
npm run preview   # opcional: servir o build localmente
```

---

## O que o site já tem hoje

- **Página única (landing)** com seções: cabeçalho fixo, hero, serviços em cards, processo / confiança, CTA de contato e rodapé.
- **Tema claro/escuro** alternável (`ThemeToggle`).
- **Animações de entrada** nas seções (`Reveal` / `useReveal`).
- **Configuração centralizada** em `src/siteConfig.ts` (marca, e-mail, WhatsApp, links — ainda com **placeholders** como `contato@trama.exemplo` e número de WhatsApp de exemplo: **ajustar antes de ir ao ar definitivo**).
- **Deploy** em produção servindo o build estático (`dist/`) via nginx no subdomínio **trama.blucaju.com.br** (HTTPS).

---

## O que ainda falta / próximos passos

Itens comuns antes de considerar o site “fechado” v1:

- [ ] Substituir **dados reais** em `siteConfig.ts` (e-mail, WhatsApp, redes).
- [ ] Revisar textos legais no rodapé (CNPJ, endereço, política se aplicável).
- [ ] **SEO**: título/descrição por página (quando houver mais rotas), Open Graph, `favicon`/ícones finalizados.
- [ ] **Analytics** (se desejado: ex. Plausible, GA4) e eventos de conversão (clique WhatsApp / formulário).
- [ ] Formulário de contato com backend ou serviço de e-mail (hoje o fluxo é CTA → WhatsApp / links).

---

## Metas e roadmap (versões futuras)

Abaixo ficam as ideias para **evoluir o produto e o site** em releases — incluindo a vitrine de **planos comerciais** no estilo “cards” (ainda não implementada na landing).

### Roadmap sugerido

| Versão | Foco |
|--------|------|
| **v0.x** | Site institucional estável, dados reais, performance e SEO básicos. |
| **v1** | Seção **“Planos”** na landing (ou página dedicada) com **três ofertas**: Simple, Plus e Pro. |
| **v1+** | Cases/portfólio, depoimentos, blog leve ou changelog interno. |

### Planos (definição para ajustar no conteúdo)

Proposta de **diferenciação** entre os níveis — valores e escopo exatos definem com o time antes de publicar:

| Plano | Para quem | O que costuma incluir (conceitual) |
|-------|-----------|-------------------------------------|
| **Simple** | Quem precisa de uma página objetiva, rápida de lançar. | Landing enxuta, estrutura essencial de seções, contato claro, responsivo. |
| **Plus** | Quem quer mais narrativa e conversão. | Tudo do Simple + mais seções (benefícios, provas sociais básicas), refinamento de copy no briefing, ajustes de identidade. |
| **Pro** | Quem precisa de presença mais completa ou evolução contínua. | Tudo do Plus + prioridade na fila, mais rodadas de revisão, opção de manutenção ou novas seções em ciclo. |

### Tasks (backlog do produto/site)

- [ ] Desenhar no Figma (ou wireframe) a **seção de planos** e os textos finais por tier.
- [ ] Implementar **cards de planos** (Simple / Plus / Pro) com CTA para WhatsApp com mensagem pré-preenchida por plano.
- [ ] Definir se haverá **página de política de privacidade** e link no rodapé.
- [ ] Opcional: **estudo de precificação** e nome comercial dos planos (podem mudar de Simple/Plus/Pro).

---

## Licença

Projeto **privado** da Trama Tecnologia Estratégica — uso interno e cliente; não redistribuir sem autorização.
