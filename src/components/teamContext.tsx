"use client"

import React, { createContext, useContext, useState } from "react"

type Team = {
  name: string
  logo: string
  plan: string
}

type TeamContextType = {
  activeTeam: Team
  setActiveTeam: (team: Team) => void
}

const TeamContext = createContext<TeamContextType | undefined>(undefined)

export const useTeam = () => {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error("useTeam debe usarse dentro de un TeamProvider")
  }
  return context
}

export const TeamProvider = ({
  children,
  initialTeam,
}: {
  children: React.ReactNode
  initialTeam: Team
}) => {
  const [activeTeam, setActiveTeam] = useState<Team>(initialTeam)

  return (
    <TeamContext.Provider value={{ activeTeam, setActiveTeam }}>
      {children}
    </TeamContext.Provider>
  )
}
