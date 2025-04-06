import { AppSidebar } from "@/components/app-sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { data } from "@/config/sidebarMenu"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TeamProvider } from "@/components/teamContext"
import { ThemeClassWrapper } from "@/components/theme-class-wrapper"

export default async function Page({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <TeamProvider initialTeam={data.teams[0]}>
        <AppSidebar />
      </TeamProvider>
      <ThemeClassWrapper>
        <SidebarInset>{children}</SidebarInset>
      </ThemeClassWrapper>
    </SidebarProvider>
  )
}
