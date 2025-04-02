'use client'

import { SessionProvider } from "next-auth/react"
import { type Session } from "next-auth"

interface Props {
  children: React.ReactNode
  session: Session | null
}

export function CustomSessionProvider({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
