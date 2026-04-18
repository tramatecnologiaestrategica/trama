import { useEffect, useState } from 'react'
import { BrandMark } from './BrandMark'
import { ThemeToggle } from './ThemeToggle'
import { siteConfig } from '../siteConfig'

export function SiteHeader() {
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="site-header" data-elevated={elevated}>
      <a className="site-header__brand" href="#topo" aria-label="Ir ao topo">
        <BrandMark size={44} />
        <span className="site-header__titles">
          <span className="site-header__name">{siteConfig.brandName}</span>
          <span className="site-header__tag">{siteConfig.tagline}</span>
        </span>
      </a>
      <nav className="site-header__nav" aria-label="Principal">
        <a href="#servicos">Serviços</a>
        <a href="#como-funciona">Como funciona</a>
        <ThemeToggle />
        <a href="#contato" className="site-header__cta">
          Contato
        </a>
      </nav>
    </header>
  )
}
