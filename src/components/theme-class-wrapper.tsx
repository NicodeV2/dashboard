'use client'

import { useEffect, useState } from 'react'

const themes = ['theme-red', 'theme-violet', 'theme-emerald', 'theme-olive']

export function ThemeClassWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const html = document.documentElement
    const current = themes.find((t) => html.classList.contains(t))

    if (!current) {
      // En caso raro de que por alguna razón el SSR no haya puesto el tema
      const cookieMatch = document.cookie.split('; ').find(row => row.startsWith('theme='))
      const fallback = cookieMatch?.split('=')[1] ?? 'theme-violet'

      html.classList.remove(...themes)
      html.classList.add(fallback)
    }

    setMounted(true)
  }, [])

  if (!mounted) return null
  return <>{children}</>
}
