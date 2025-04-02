import { AppSidebar } from "@/components/app-sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"


import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default async function Page({children}: {
  children: React.ReactNode}
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
        
      </SidebarInset>
    </SidebarProvider>
  )
}
