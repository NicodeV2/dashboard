'use client'

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeClassWrapper } from "@/components/theme-class-wrapper"
import { CustomSessionProvider } from "@/components/auth/session-provider"

interface Props {
  children: React.ReactNode
  themeMode: "light" | "dark" | "system"
  themeClass: string
}

export function RootLayoutClient({ children, themeClass }: Props) {
  return (
    <html lang="en" className={themeClass} suppressHydrationWarning>
      <body className="antialiased">
        <CustomSessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-mode"
          >

            <ThemeClassWrapper>
              {children}
            </ThemeClassWrapper>
          </ThemeProvider>
        </CustomSessionProvider>
      </body>
    </html>
  )
}
