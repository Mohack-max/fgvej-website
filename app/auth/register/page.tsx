"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
// Update the imports to include the server actions
import { registerUser } from "../../actions/auth"

export default function RegisterPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    entrepreneurType: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, entrepreneurType: value }))
  }

  // Update the handleSubmit function to use the server action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Les mots de passe ne correspondent pas",
        description: "Veuillez vérifier que les mots de passe saisis sont identiques.",
        variant: "destructive",
      })
      return
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Acceptation des conditions requise",
        description: "Veuillez accepter les conditions d'utilisation pour continuer.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const result = await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        entrepreneurType: formData.entrepreneurType,
      })

      toast({
        title: result.success ? "Inscription réussie" : "Erreur",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      })

      if (result.success) {
        // Redirect to login page or dashboard
        // In a real application, you would use router.push('/auth/login')
      }
    } catch (error) {
      console.error("Error registering user:", error)
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'inscription",
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
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Créer un compte</h2>
            <p className="mt-2 text-sm text-gray-600">
              Déjà inscrit ?{" "}
              <Link href="/auth/login" className="font-medium text-green-600 hover:text-green-500">
                Connectez-vous
              </Link>
            </p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Numéro de téléphone</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="entrepreneurType">Type d'entrepreneur</Label>
                  <Select value={formData.entrepreneurType} onValueChange={handleSelectChange}>
                    <SelectTrigger id="entrepreneurType">
                      <SelectValue placeholder="Sélectionnez votre profil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Entrepreneur individuel</SelectItem>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="cooperative">Coopérative</SelectItem>
                      <SelectItem value="association">Association</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))}
                  />
                  <label
                    htmlFor="agreeTerms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    J'accepte les{" "}
                    <Link href="/terms" className="text-green-600 hover:text-green-500">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/privacy" className="text-green-600 hover:text-green-500">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
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
            <h2 className="text-3xl font-bold mb-4">Rejoignez la communauté des entrepreneurs verts</h2>
            <p className="text-xl">
              Créez votre compte pour accéder à notre plateforme et bénéficier de nos services de garantie,
              d'accompagnement et de formation pour votre projet écologique.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
