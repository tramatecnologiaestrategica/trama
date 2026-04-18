import { useCallback, useEffect, useState } from 'react'
import type { Theme } from '../theme'
import { applyTheme, getInitialTheme } from '../theme'

function readThemeFromDocument(): Theme {
  const t = document.documentElement.dataset.theme
  if (t === 'dark' || t === 'light') return t
  return getInitialTheme()
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => readThemeFromDocument())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const onClick = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onClick}
      aria-pressed={isDark}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  )
}

function IconMoon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  )
}

function IconSun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  )
}
