'use client'

import { SessionProvider } from "next-auth/react"

interface Props {
  children: React.ReactNode
}

export function CustomSessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>
}
