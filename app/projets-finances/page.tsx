import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Projets Financés et Témoignages</h1>
          <p className="text-xl max-w-3xl">
            Découvrez les projets soutenus par FGVEJ et les témoignages des entrepreneurs qui ont bénéficié de notre
            accompagnement.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Découvrez les Réalisations de FGVEJ</h2>

          <Tabs defaultValue="all" className="w-full mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">Tous les Projets</TabsTrigger>
                <TabsTrigger value="waste">Gestion des Déchets</TabsTrigger>
                <TabsTrigger value="agriculture">Agriculture Durable</TabsTrigger>
                <TabsTrigger value="energy">Énergies Renouvelables</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
  title="Gestion des Déchets Plastiques"
  location="Bamako, Mali"
  category="Gestion des Déchets"
  description="Ce projet vise la collecte et le recyclage des déchets plastiques pour réduire la pollution urbaine. Les plastiques recyclés sont transformés en matériaux de construction, contribuant ainsi à une économie circulaire."
  impact={[
    "Environ 50 tonnes de plastique recyclées par an",
    "Réduction de l'empreinte carbone",
    "Création de 15 emplois locaux",
  ]}
  imageSrc="https://t3.ftcdn.net/jpg/04/23/54/22/240_F_423542257_mpe2jmamcL45QBZfCkx9NbI9IRAPb8WE.jpg" 
/>


                <ProjectCard
                  title="Agriculture Durable et Économie d'Eau"
                  location="Région de Ségou"
                  category="Agriculture Durable"
                  description="Ce projet d'agriculture durable met en place des techniques d'irrigation goutte-à-goutte pour économiser l'eau tout en augmentant les rendements agricoles."
                  impact={[
                    "Réduction de la consommation d'eau de 30 %",
                    "Augmentation de la production agricole",
                    "Création de 10 emplois dans la communauté",
                  ]}
                  imageSrc="https://t3.ftcdn.net/jpg/06/59/06/44/240_F_659064484_0fBXflsbdiwk2H5K6rvGW1pZwwQL4OcU.jpg"
                />

                <ProjectCard
                  title="Production d'Énergies Renouvelables"
                  location="Région de Kayes"
                  category="Énergies Renouvelables"
                  description="Installation de panneaux solaires dans les zones rurales pour fournir une source d'énergie propre et renouvelable aux habitants."
                  impact={[
                    "Alimentation de plus de 100 foyers en énergie solaire",
                    "Réduction des émissions de CO₂",
                    "Soutien à l'autonomie énergétique locale",
                  ]}
                  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBogvjG8_VG9g9K7ofDwuOQA-6B_1ceBQW-g&s"
                />

                <ProjectCard
                  title="Centre de Compostage Communautaire"
                  location="Sikasso, Mali"
                  category="Gestion des Déchets"
                  description="Création d'un centre de compostage qui transforme les déchets organiques en engrais naturel pour les agriculteurs locaux."
                  impact={[
                    "Traitement de 20 tonnes de déchets organiques par mois",
                    "Production d'engrais naturel pour 50 agriculteurs",
                    "Réduction des déchets mis en décharge",
                  ]}
                  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzK0O3tHzVZDQ8hGM-drDeTrM4NH_7SFj5g&s"
                />

                <ProjectCard
                  title="Ferme Aquaponique Urbaine"
                  location="Bamako, Mali"
                  category="Agriculture Durable"
                  description="Système aquaponique combinant l'élevage de poissons et la culture de légumes sans sol, économisant 90% d'eau par rapport à l'agriculture traditionnelle."
                  impact={[
                    "Production de légumes et de poissons toute l'année",
                    "Économie d'eau significative",
                    "Création de 8 emplois permanents",
                  ]}
                  imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNc871qSeHzwXMOsr0ugSSPVBTm3LSfWBxYQ&s"
                />

                <ProjectCard
                  title="Éclairage Solaire pour Villages"
                  location="Région de Mopti"
                  category="Énergies Renouvelables"
                  description="Installation de lampadaires solaires dans 5 villages non connectés au réseau électrique, améliorant la sécurité et permettant des activités nocturnes."
                  impact={[
                    "Éclairage pour 5 villages et 2000 habitants",
                    "Amélioration de la sécurité nocturne",
                    "Extension des heures d'activité économique",
                  ]}
                  imageSrc="data:image/jpeg;base64,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"
                />
              </div>
            </TabsContent>

            <TabsContent value="waste" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Gestion des Déchets Plastiques"
                  location="Bamako, Mali"
                  category="Gestion des Déchets"
                  description="Ce projet vise la collecte et le recyclage des déchets plastiques pour réduire la pollution urbaine. Les plastiques recyclés sont transformés en matériaux de construction, contribuant ainsi à une économie circulaire."
                  impact={[
                    "Environ 50 tonnes de plastique recyclées par an",
                    "Réduction de l'empreinte carbone",
                    "Création de 15 emplois locaux",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />

                <ProjectCard
                  title="Centre de Compostage Communautaire"
                  location="Sikasso, Mali"
                  category="Gestion des Déchets"
                  description="Création d'un centre de compostage qui transforme les déchets organiques en engrais naturel pour les agriculteurs locaux."
                  impact={[
                    "Traitement de 20 tonnes de déchets organiques par mois",
                    "Production d'engrais naturel pour 50 agriculteurs",
                    "Réduction des déchets mis en décharge",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />
              </div>
            </TabsContent>

            <TabsContent value="agriculture" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Agriculture Durable et Économie d'Eau"
                  location="Région de Ségou"
                  category="Agriculture Durable"
                  description="Ce projet d'agriculture durable met en place des techniques d'irrigation goutte-à-goutte pour économiser l'eau tout en augmentant les rendements agricoles."
                  impact={[
                    "Réduction de la consommation d'eau de 30 %",
                    "Augmentation de la production agricole",
                    "Création de 10 emplois dans la communauté",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />

                <ProjectCard
                  title="Ferme Aquaponique Urbaine"
                  location="Bamako, Mali"
                  category="Agriculture Durable"
                  description="Système aquaponique combinant l'élevage de poissons et la culture de légumes sans sol, économisant 90% d'eau par rapport à l'agriculture traditionnelle."
                  impact={[
                    "Production de légumes et de poissons toute l'année",
                    "Économie d'eau significative",
                    "Création de 8 emplois permanents",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />
              </div>
            </TabsContent>

            <TabsContent value="energy" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="Production d'Énergies Renouvelables"
                  location="Région de Kayes"
                  category="Énergies Renouvelables"
                  description="Installation de panneaux solaires dans les zones rurales pour fournir une source d'énergie propre et renouvelable aux habitants."
                  impact={[
                    "Alimentation de plus de 100 foyers en énergie solaire",
                    "Réduction des émissions de CO₂",
                    "Soutien à l'autonomie énergétique locale",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />

                <ProjectCard
                  title="Éclairage Solaire pour Villages"
                  location="Région de Mopti"
                  category="Énergies Renouvelables"
                  description="Installation de lampadaires solaires dans 5 villages non connectés au réseau électrique, améliorant la sécurité et permettant des activités nocturnes."
                  impact={[
                    "Éclairage pour 5 villages et 2000 habitants",
                    "Amélioration de la sécurité nocturne",
                    "Extension des heures d'activité économique",
                  ]}
                  imageSrc="/placeholder.svg?height=400&width=600"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              <Link href="/projets-finances">
                Voir tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ils Partagent Leur Expérience avec FGVEJ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Grâce à FGVEJ, j'ai pu lancer mon entreprise de recyclage des plastiques. Leur soutien financier et technique a été essentiel pour surmonter les obstacles initiaux. Aujourd'hui, je contribue à réduire la pollution plastique tout en créant des emplois dans ma communauté."
              author="Aïcha S."
              role="Projet de Recyclage des Déchets Plastiques"
              imageSrc="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="FGVEJ m'a permis de réaliser mon rêve d'agriculture durable en m'aidant à obtenir un financement sans frais de garantie. Avec leurs conseils et leur formation en écologie, j'ai pu mettre en place des techniques qui économisent l'eau et augmentent mes rendements agricoles."
              author="Moussa K."
              role="Projet d'Agriculture Durable"
              imageSrc="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="Le soutien de FGVEJ a été déterminant pour apporter l'électricité solaire dans mon village. Leur équipe m'a aidée à préparer mon projet et à obtenir le financement nécessaire. Aujourd'hui, plus de 100 foyers profitent d'une énergie propre."
              author="Fatou D."
              role="Énergie Solaire pour les Zones Rurales"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
            <a href="/soumettre-projet/temoins">
                 <button> PLUS DE TEMOIGNAGE </button>
             </a>

            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Inspiré par ces projets ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez FGVEJ et transformez votre idée en un projet écologique à impact positif. Bénéficiez de notre
            soutien financier et technique pour faire la différence.
          </p>
          <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100">
            <Link href="/soumettre-projet">Soumettre Votre Projet</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  location: string
  category: string
  description: string
  impact: string[]
  imageSrc: string
}

function ProjectCard({ title, location, category, description, impact, imageSrc }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-green-600">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mt-auto">
          <h4 className="font-semibold mb-2">Impact :</h4>
          <ul className="space-y-1">
            {impact.map((item, index) => (
              <li key={index} className="flex text-sm text-gray-600">
                <span className="text-green-600 font-bold mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
