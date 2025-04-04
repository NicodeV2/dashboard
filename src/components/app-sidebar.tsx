"use client"

import * as React from "react"
import { data } from "@/config/sidebarMenu"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useTeam } from "./teamContext"


// This is sample data.
//TODO le quiero agregar la opcion que al cambiar teams(thor,cerbero,atlas,Gonzalo.) Cambie el menu con los reportes. 

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { activeTeam } = useTeam()
  const menus = data.menuByTeam[activeTeam.name as keyof typeof data.menuByTeam] || {
    navMain: [],
    projects: [],
  }
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menus.navMain} />
        <NavProjects projects={menus.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
