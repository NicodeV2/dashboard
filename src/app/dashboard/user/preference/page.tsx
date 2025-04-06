'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Header } from '@/components/header'
import { Calendar } from "@/components/ui/calendar"
import React from 'react'
import { CardDemo } from '@/components/cardDemo'
import { DemoPieChart } from '@/components/demoPieChart'
import { DemoBarraChart } from '@/components/demoBarraChart'



const themes = [
  { name: 'Black', class: 'theme-black' },
  { name: 'Violet', class: 'theme-violet' },
  { name: 'Emerald', class: 'theme-emerald' },
  { name: 'Olive', class: 'theme-olive' },
  { name: 'Red', class: 'theme-red' },
]

export default function ThemeSelectorPage() {
  const [theme, setTheme] = useState('')
  const [date, setDate] = useState<Date | undefined>(new Date())
 // const { setTheme: setModeTheme, resolvedTheme } = useTheme()

  // Carga el tema desde localStorage (ya sincronizado por el layout SSR)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved && themes.some(t => t.class === saved)) {
      setTheme(saved)
    }
  }, [])

  // Aplica el tema visual (sin tocar dark/light)
  useEffect(() => {
    const html = document.documentElement
    const validThemes = themes.map(t => t.class)
    html.classList.remove(...validThemes)

    if (theme) {
      html.classList.add(theme)
      localStorage.setItem('theme', theme)
      document.cookie = `theme=${theme}; path=/`
    }
  }, [theme])


  const aplicaTema = (tema: React.SetStateAction<string>) => {
 
    setTheme(tema)
  
  }
  

  return (
    <div>
      <Header main="Usuario" sub="Contraseña" />

      <div className={cn(
        'min-h-screen flex flex-col items-center justify-center gap-8 transition-colors p-6',
        theme
      )}>
        <h1 className="text-3xl font-bold">Selector de Tema</h1>

        <div className="space-x-4">
          {themes.map((t) => (
            <button
              key={t.name}
              className={cn(
                'px-4 py-2 rounded border transition-colors',
                theme === t.class
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              )}
              onClick={() => aplicaTema(t.class)}
            >
              {t.name}
            </button>
          ))}
        </div>

        

        <div className="flex flex-wrap items-start justify-center gap-6 mt-8">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <CardDemo />
          <DemoPieChart />
          <DemoBarraChart />
        </div>
      </div>
    </div>
  )
}
