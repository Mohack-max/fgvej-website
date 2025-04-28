"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const routes = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/qui-sommes-nous",
    label: "Qui Sommes-Nous ?",
  },
  {
    href: "/nos-services",
    label: "Nos Services",
  },
  {
    href: "/projets-finances",
    label: "Projets Financés",
  },
  {
    href: "/partenariats",
    label: "Partenariats",
  },
  {
    href: "/ressources",
    label: "Ressources",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-600">FGVEJ</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === route.href ? "text-green-600" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4">
          <Button asChild variant="outline">
            <Link href="/auth/login">Connexion</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">S'inscrire</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-green-600",
                    pathname === route.href ? "text-green-600" : "text-muted-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="outline">
                  <Link href="/auth/login">Connexion</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">S'inscrire</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
