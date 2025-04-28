"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

import { loginUser } from "../../actions/auth"

export default function LoginPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await loginUser(formData.email, formData.password)

      toast({
        title: result.success ? "Connexion réussie" : "Erreur",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      })

      if (result.success) {

      }
    } catch (error) {
      console.error("Error logging in:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la connexion",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-md mx-auto lg:w-96">
          <div className="mb-6">
            <Link href="/" className="text-green-600 font-bold text-2xl">
              FGVEJ
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Connexion</h2>
            <p className="mt-2 text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link href="/auth/register" className="font-medium text-green-600 hover:text-green-500">
                Inscrivez-vous
              </Link>
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Link
                      href="/auth/forgot-password"
                      className="text-sm font-medium text-green-600 hover:text-green-500"
                    >
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Se souvenir de moi
                  </label>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Connexion en cours..." : "Se connecter"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Bienvenue sur la plateforme FGVEJ</h2>
            <p className="text-xl">
              Connectez-vous pour accéder à votre espace personnel et gérer vos projets écologiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
