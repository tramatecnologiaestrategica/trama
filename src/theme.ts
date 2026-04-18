export type Theme = 'light' | 'dark'

/** Manter igual ao script inline em `index.html` (evita flash de tema). */
const STORAGE_KEY = 'trama-theme'

export function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'light' || v === 'dark') return v
  } catch {
    /* ignore */
  }
  return null
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}
