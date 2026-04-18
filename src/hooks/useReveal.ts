import { useEffect, useRef, useState } from 'react'

type Options = IntersectionObserverInit & { once?: boolean }

/** Observa a entrada do elemento na viewport para disparar animações. */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: Options = {},
) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -8% 0px',
    once = true,
  } = options
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) {
              obs.disconnect()
              break
            }
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, visible }
}
