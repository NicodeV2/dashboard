// src/app/dashboard/user/profile/page.tsx

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"

export default function EditProfilePage() {
  return (
    <div>
        <Header main='Usuario' sub='Perfil' />
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Editar perfil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Foto de perfil */}
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/avatar.png" alt="avatar" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <Button variant="outline">Cambiar foto</Button>
          </div>

          <Separator />

          {/* Formulario */}
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" placeholder="Nicolás Araya" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Correo</Label>
              <Input id="email" type="email" placeholder="tu@email.com" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Cuéntanos algo sobre ti..." />
            </div>
          </div>

          <Separator />

          <div className="flex justify-end">
            <Button>Guardar cambios</Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}
