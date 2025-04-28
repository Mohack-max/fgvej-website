import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, BarChart, BookOpen, Users } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import NewsCard from "@/components/news-card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fonds de Garantie Verte pour les Jeunes Entrepreneurs
            </h1>
            <p className="text-xl mb-8">
              Soutenir les jeunes entrepreneurs engagés dans des projets écologiques et durables. Notre mission est de
              faciliter l'accès aux financements pour ces entrepreneurs en réduisant les obstacles financiers grâce à
              des garanties de prêt, un accompagnement stratégique, et une formation en pratiques écologiques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/plateforme">Accéder à la Plateforme</Link>
              </Button>
              <Button asChild size="lg"  className="bg-green-600 hover:bg-green-700">
                <Link href="/qui-sommes-nous">En Savoir Plus</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/ressources/CEO">PRESIDENT DIRECTEUR GÉNÉRAL</Link>
              </Button>

            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/jpeg;base64,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')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Points Forts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Points Forts du FGVEJ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-t-4 border-t-green-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Garantie de Prêts à Taux Zéro</h3>
                <p className="text-gray-600">
                  FGVEJ prend en charge les frais de garantie auprès du FGSP, qui couvre jusqu'à 50% du financement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accompagnement Personnalisé</h3>
                <p className="text-gray-600">
                  Nos experts aident les entrepreneurs à élaborer des plans d'affaires solides et adaptés à leurs
                  projets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Formation en Pratiques Écologiques</h3>
                <p className="text-gray-600">
                  Formation de 5 jours en pratiques durables, financée par nos partenaires.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600">
              <CardContent className="pt-6">
                <div className="mb-4 bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Impact Écologique et Social</h3>
                <p className="text-gray-600">
                  Contribution à la préservation de l'environnement tout en favorisant la création d'emplois.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Access Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Accès Rapide à la Plateforme des Entrepreneurs Verts</h2>
            <p className="text-xl mb-8">
              Vous êtes un jeune entrepreneur vert ? Accédez directement à notre plateforme pour découvrir les services,
              vous inscrire, et soumettre votre projet. Rejoignez une communauté d'entrepreneurs engagés pour un avenir
              durable.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/plateforme">Accéder à la Plateforme</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Grâce à FGVEJ, j'ai pu lancer mon projet de gestion des déchets plastiques et contribuer à la réduction de la pollution dans ma communauté. Leur soutien financier et technique m'a permis de concrétiser mon rêve."
              author="Aïcha S."
              role="Entrepreneure verte"
              imageSrc="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="Le programme de formation en écologie m'a donné les compétences nécessaires pour intégrer des pratiques durables dans mon entreprise agricole. Aujourd'hui, je produis plus tout en consommant moins d'eau."
              author="Moussa K."
              role="Agriculteur durable"
              imageSrc="/placeholder.svg?height=200&width=200"
            />

            <TestimonialCard
              quote="Sans les frais de garantie pris en charge par FGVEJ, je n'aurais jamais pu obtenir le financement pour mon projet d'énergie solaire. Maintenant, plus de 100 foyers dans mon village ont accès à l'électricité."
              author="Fatou D."
              role="Entrepreneur en énergie renouvelable"
              imageSrc="/placeholder.svg?height=200&width=200"
            />
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Actualités et Événements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Prochain Atelier de Sensibilisation"
              description="« Financer et lancer son projet vert », le 15 Juin 2024. Inscrivez-vous dès maintenant pour participer."
              date="15 Juin 2024"
              href="/actualites/atelier-sensibilisation"
            />

            <NewsCard
              title="Rencontre Annuelle des Partenaires"
              description="Décembre 2024 - Réunion des acteurs du secteur vert pour favoriser les synergies et développer de nouveaux partenariats."
              date="10 Décembre 2024"
              href="/actualites/rencontre-partenaires"
            />

            <NewsCard
              title="Lancement du Programme de Mentorat"
              description="FGVEJ lance un nouveau programme de mentorat pour connecter les jeunes entrepreneurs avec des experts du secteur vert."
              date="1 Juillet 2024"
              href="/actualites/programme-mentorat"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
              <Link href="/actualites">
                Voir toutes les actualités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à lancer votre projet vert ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez FGVEJ et bénéficiez d'un soutien financier et technique pour faire la différence dans votre
            communauté.
          </p>
          <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100">
            <Link href="/soumettre-projet">Déposer Votre Projet</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
