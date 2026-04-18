import logoTrama from '../assets/logo-trama.jpg'

/**
 * Marca da Trama: usa o ícone do arquivo `logo-trama.jpg`, recortando
 * apenas o quadrado da esquerda (a face) com `background-size: auto 100%`
 * e `background-position: left center`.
 */
type Props = {
  size?: number
  className?: string
  title?: string
}

export function BrandMark({ size = 48, className, title }: Props) {
  const label = title ?? 'Logotipo Trama'
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className={['brand-mark', className].filter(Boolean).join(' ')}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${logoTrama})`,
      }}
    />
  )
}
