'use client'

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"

export function DarkMode() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="h-5 w-8 transition-all duration-900 ease-in-out"
      />
      <Moon className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}
