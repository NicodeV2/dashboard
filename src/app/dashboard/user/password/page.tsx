'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react"
import { Header } from "@/components/header"

const commonPasswords = [
  "123456", "password", "12345678", "qwerty", "abc123",
  "123456789", "12345", "111111", "1234567"
]

export default function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isLongEnough = newPassword.length >= 8
  const hasUpper = /[A-Z]/.test(newPassword)
  const hasLower = /[a-z]/.test(newPassword)
  const hasNumber = /[0-9]/.test(newPassword)
  const isCommon = commonPasswords.includes(newPassword)
  const matchesConfirm = newPassword === confirmPassword

  const allValid = isLongEnough && hasUpper && hasLower && hasNumber && !isCommon && matchesConfirm

  return (
    <div>
            <Header main='Usuario' sub='Contraseña' />
    <div className="p-4 max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Cambiar contraseña</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="current-password">Contraseña actual</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="new-password">Nueva contraseña</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="confirm-password">Repetir nueva contraseña</Label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <p className="font-medium">Requisitos:</p>
            <Requirement label="Al menos 8 caracteres" valid={isLongEnough} />
            <Requirement label="Una letra mayúscula" valid={hasUpper} />
            <Requirement label="Una letra minúscula" valid={hasLower} />
            <Requirement label="Un número" valid={hasNumber} />
            <Requirement label="Evitar contraseñas comunes" valid={!isCommon} />
            <Requirement label="Coinciden ambas contraseñas" valid={matchesConfirm} />
          </div>

          <Button disabled={!allValid} className="w-full">
            Cambiar contraseña
          </Button>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

function Requirement({ label, valid }: { label: string; valid: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${valid ? "text-green-600" : "text-destructive"}`}>
      {valid ? <CheckCircle size={16} /> : <XCircle size={16} />}
      <span>{label}</span>
    </div>
  )
}
