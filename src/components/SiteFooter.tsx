import { siteConfig } from '../siteConfig'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__legal">
          © {year} {siteConfig.legalName}. Todos os direitos reservados.
        </p>
        <div className="site-footer__links">
          <a href={siteConfig.links.instagram} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href={siteConfig.links.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="#topo">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  )
}
