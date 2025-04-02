import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }else {
    redirect("/dashboard")
  }
  //hacemos un return que diga no deberias estar aqui
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">No deberias estar aqui</h1>
     
    </div>
  );
}
