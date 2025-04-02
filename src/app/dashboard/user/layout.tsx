// src/app/dashboard/user/layout.tsx


import type { ReactNode } from "react"

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <>
     
      <section className="p-4 md:p-6">{children}</section>
    </>
  )
}
