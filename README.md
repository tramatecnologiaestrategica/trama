<div align="center">

<img src="./src/assets/logo-trama.jpg" alt="Trama" width="512" style="border-radius:0px" />

<h1>
  <span style="color:#7c5cff">Trama</span>
</h1>

<p><strong>tecnologia estratégica</strong></p>

<p><em>Sites com clareza, performance e identidade.</em></p>

<p>
  <img alt="Status" src="https://img.shields.io/badge/status-em%20produção-7c5cff?style=for-the-badge" />
  <img alt="Site" src="https://img.shields.io/badge/site-trama.blucaju.com.br-7c5cff?style=for-the-badge&logo=googlechrome&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/uso-privado-1f2937?style=for-the-badge" />
</p>

</div>

---

<div align="center">

### Tecnologias

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=000000" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" />
  <img alt="Nginx" src="https://img.shields.io/badge/Nginx-prod-009639?style=for-the-badge&logo=nginx&logoColor=white" />
  <img alt="Let's Encrypt" src="https://img.shields.io/badge/HTTPS-Let's%20Encrypt-003A70?style=for-the-badge&logo=letsencrypt&logoColor=white" />
</p>

</div>

---

## Sobre

A **Trama Tecnologia Estratégica** é uma agência que **cria landing pages e sites institucionais** para empresas e profissionais. O processo é conduzido pelo nosso time, **da estratégia ao lançamento** — o cliente não monta nada sozinho: fazemos **briefing**, definimos a mensagem, desenhamos, implementamos e publicamos.

Este repositório é o **site da própria agência**: a vitrine de posicionamento, serviços e contato.

---

## Como funciona o site

A landing está estruturada em quatro blocos, na mesma ordem que o usuário percorre:

| Bloco | Função |
|------|--------|
| **Hero** | Posicionamento principal: *“Sites com clareza, performance e identidade.”* + CTAs (projeto / WhatsApp). |
| **Serviços** | Cards: *Sites e landing pages*, *Identidade digital*, *Evolução e manutenção*. |
| **Processo / Confiança** | Como entregamos — da estratégia ao lançamento, em parceria com o time do cliente. |
| **Contato** | CTA final direcionando para WhatsApp e e-mail. |

Recursos já implementados:

- Tema **claro/escuro** com persistência em `localStorage`.
- **Animações de entrada** suaves nas seções.
- **Tipografia** *Plus Jakarta Sans* (display) + *Inter* (texto).
- **Configuração centralizada** em `src/siteConfig.ts` (marca, e-mail, WhatsApp, redes).
- **Deploy** estático em produção: **trama.blucaju.com.br** (Nginx + HTTPS Let’s Encrypt).

---

## Como rodar

```bash
npm install
npm run dev          # ambiente de desenvolvimento (Vite)
npm run build        # gera /dist para produção
npm run preview      # serve o build localmente
npm run lint         # análise estática
```

Estrutura principal:

```
src/
├── components/      # SiteHeader, Hero, Services, ProcessOrTrust, ContactCta, SiteFooter, ThemeToggle, Reveal, BrandMark
├── hooks/           # useReveal
├── styles/          # global.css (tokens de cor, tipografia, layout)
├── assets/          # logo, padrões, imagens
├── siteConfig.ts    # marca, contatos, links
├── theme.ts         # tema light/dark
├── App.tsx
└── main.tsx
```

---

## O que falta para a v1 fechar

Itens curtos antes de considerar o site institucional “fechado”:

- Substituir **dados reais** em `src/siteConfig.ts` (e-mail, WhatsApp com DDI, Instagram, LinkedIn).
- Revisar **textos legais** no rodapé (razão social, CNPJ, endereço se aplicável).
- **SEO**: `<title>`, `meta description`, **Open Graph** e favicon final.
- **Métricas**: Plausible ou GA4 + eventos de clique nos CTAs (WhatsApp, e-mail).
- (Opcional) **Formulário** de contato com envio por e-mail, além do WhatsApp.

---

## Roadmap

| Versão | Foco |
|--------|------|
| **v0.x** | Site institucional estável, dados reais, SEO básico, métricas. |
| **v1**   | Página/seção **Planos** (Simple · Plus · Pro) integrada ao WhatsApp. |
| **v1+**  | **Cases / portfólio**, depoimentos e changelog público. |
| **v2**   | Páginas internas por serviço, blog leve e otimizações avançadas. |

---

## Planos comerciais (proposta)

> Os cards abaixo são a base para a futura **seção “Planos”** do site. O texto é proposta — escopo final e preços fechados pelo time antes da publicação.

<table>
<tr>
  <th align="left" width="33%">
    <img alt="Simple" src="https://img.shields.io/badge/PLANO-SIMPLE-94a3b8?style=for-the-badge" /><br/>
    <sub>Para presença rápida e direta.</sub>
  </th>
  <th align="left" width="33%">
    <img alt="Plus" src="https://img.shields.io/badge/PLANO-PLUS-7c5cff?style=for-the-badge" /><br/>
    <sub>Para narrativa e conversão.</sub>
  </th>
  <th align="left" width="33%">
    <img alt="Pro" src="https://img.shields.io/badge/PLANO-PRO-0f172a?style=for-the-badge" /><br/>
    <sub>Para presença completa e evolução contínua.</sub>
  </th>
</tr>
<tr>
  <td valign="top">

- Landing **enxuta** (1 página)
- Estrutura essencial de seções
- Identidade aplicada ao layout
- Responsivo (mobile / desktop)
- CTA para WhatsApp
- 1 rodada de revisão

  </td>
  <td valign="top">

- Tudo do **Simple**
- Mais seções (benefícios, provas sociais)
- Refinamento de **copy** no briefing
- Ajustes de identidade (cores, tipografia)
- SEO básico configurado
- 2 rodadas de revisão

  </td>
  <td valign="top">

- Tudo do **Plus**
- Prioridade na fila de produção
- Mais rodadas de revisão
- Opcional: **manutenção** mensal
- Novas seções em ciclo
- Acompanhamento pós-lançamento

  </td>
</tr>
</table>

### Tasks do roadmap de planos

- [ ] Definir **escopo final** e nomes comerciais (podem ou não permanecer Simple/Plus/Pro).
- [ ] **Precificação** e prazos médios por plano.
- [ ] Wireframe da **seção “Planos”** alinhada ao visual atual da landing.
- [ ] Implementar componente `<Plans />` com 3 cards e CTA por plano (mensagem pré-preenchida no WhatsApp).
- [ ] Adicionar **FAQ** curto abaixo dos planos (formas de pagamento, prazos, o que está incluso).

---

## Infraestrutura

- **Servidor**: VPS Linux, Nginx servindo `dist/` como site estático.
- **Domínio**: `trama.blucaju.com.br` (registro A para o IP da VPS).
- **TLS**: certificado Let’s Encrypt emitido via Certbot, renovação automática.
- **Atualização**: `git pull` + `npm ci` + `npm run build`; o Nginx serve a nova `dist/` imediatamente.

---

## Licença

Projeto **privado** da Trama Tecnologia Estratégica — uso interno e clientes; não redistribuir sem autorização.
