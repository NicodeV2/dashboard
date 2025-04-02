'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'

const themes = [
  { name: 'Default', class: '' },
  { name: 'Violet', class: 'theme-violet' },
  { name: 'Emerald', class: 'theme-emerald' },
  { name: 'Pink', class: 'theme-pink' },
  { name: 'Orange', class: 'theme-orange' },
]

export default function ThemeSelectorPage() {
  const [theme, setTheme] = useState<string>('')

  return (
     <div>
            <Header main='Usuario' sub='Tema' />
    <div className={cn("min-h-screen flex items-center justify-center transition-colors", theme)}>
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Selector de Tema</h1>
        <div className="space-x-4">
          {themes.map((t) => (
            <button
              key={t.name}
              className={cn(
                'px-4 py-2 rounded border',
                theme === t.class
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
              onClick={() => setTheme(t.class)}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
