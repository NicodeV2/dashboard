import { AppSidebar } from "@/components/app-sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { data } from "@/config/sidebarMenu"

//armamos un nuevo teams pero transformamos el logo de string a react component

  
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TeamProvider } from "@/components/teamContext"

export default async function Page({children}: {
  children: React.ReactNode}
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }
  return (
    <SidebarProvider>
      <TeamProvider initialTeam={data.teams[0]}>
      <AppSidebar />
      </TeamProvider>
      
      <SidebarInset>
        {children}
        
      </SidebarInset>
    </SidebarProvider>
  )
}
