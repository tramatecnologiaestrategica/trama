import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
}

/** Aplica `.reveal` + `.reveal--in` quando o elemento entra na viewport. */
export function Reveal({
  children,
  delay = 0,
  as,
  className,
  style,
}: Props) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useReveal<HTMLDivElement>()
  const merged: CSSProperties = {
    ...style,
    transitionDelay: delay ? `${delay}ms` : undefined,
  }
  const cls = ['reveal', visible && 'reveal--in', className]
    .filter(Boolean)
    .join(' ')
  return (
    <Tag ref={ref} className={cls} style={merged}>
      {children}
    </Tag>
  )
}
