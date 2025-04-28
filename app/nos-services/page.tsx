import { Shield, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl max-w-3xl">
            Découvrez les services offerts par FGVEJ pour soutenir les jeunes entrepreneurs dans leurs projets
            écologiques.
          </p>
        </div>
      </section>

      {}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Garantie et Financement</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">Simplifiez votre Accès au Financement</h3>
              <p className="text-gray-700 mb-6">
                FGVEJ offre une garantie partielle pour les prêts bancaires, en prenant en charge les frais de garantie
                pour permettre aux jeunes entrepreneurs d'accéder au financement sans frais additionnels. Grâce à notre
                partenariat avec le Fonds de Garantie du Secteur Privé (FGSP) du Mali, nous couvrons 50 % du montant
                financé par la banque, facilitant ainsi l'obtention des prêts nécessaires au lancement et au
                développement de projets écologiques.
              </p>

              <h4 className="text-lg font-semibold mb-3">Avantages :</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Réduction des risques pour les banques partenaires.</p>
                </li>
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Aucune charge de garantie pour l'entrepreneur.</p>
                </li>
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Garantie applicable sur des projets de 10 à 100 millions de FCFA.</p>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">Conditions de la Garantie</h4>
              <p className="text-gray-700">
                La garantie couvre les projets verts respectant des critères d'impact écologique et de viabilité
                économique. Chaque projet est évalué pour s'assurer qu'il contribue à la réduction de l'empreinte
                carbone et à la préservation de l'environnement.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4
                .0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Garantie et Financement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accompaniment and Business Plans Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&au
                to=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA
                3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBlbnZpcm9ubWVudHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Accompagnement et Plans d'Affaires"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Accompagnement et Plans d'Affaires</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Un Accompagnement Personnalisé pour Structurer votre Projet
              </h3>
              <p className="text-gray-700 mb-6">
                FGVEJ offre aux jeunes entrepreneurs un accompagnement complet pour l'élaboration de leurs plans
                d'affaires. Nos experts travaillent main dans la main avec chaque entrepreneur pour concevoir des
                stratégies de développement solides et assurer leur viabilité financière.
              </p>

              <ul className="space-y-4 mb-6">
                <li>
                  <h4 className="text-lg font-semibold">Frais du Plan d'Affaires :</h4>
                  <p className="text-gray-700">
                    Ce service est proposé moyennant 10 % du montant du prêt, payable uniquement après l'accord
                    bancaire. Cela permet de structurer des projets solides sans frais initiaux pour les entrepreneurs.
                  </p>
                </li>
                <li>
                  <h4 className="text-lg font-semibold">Étapes de l'Accompagnement :</h4>
                  <ul className="space-y-2 pl-6 mt-2">
                    <li className="flex">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <p>Évaluation des besoins du projet.</p>
                    </li>
                    <li className="flex">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <p>Structuration du plan d'affaires.</p>
                    </li>
                    <li className="flex">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <p>Conseil stratégique et suivi des objectifs.</p>
                    </li>
                  </ul>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">Préparez-vous à Réussir</h4>
              <p className="text-gray-700">
                Notre accompagnement ne se limite pas à la préparation du plan d'affaires ; nous assurons également un
                suivi continu pour maximiser les chances de succès du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecological Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Formation en Pratiques Écologiques</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apprendre les Pratiques Durables</h3>
              <p className="text-gray-700 mb-6">
                Une fois le financement obtenu, FGVEJ propose une formation de 5 jours en écologie et en pratiques
                durables, financée par des subventions de nos partenaires. Cette formation est conçue pour aider les
                entrepreneurs à intégrer des pratiques responsables dans leurs activités et à maximiser leur impact
                environnemental.
              </p>

              <h4 className="text-lg font-semibold mb-3">Contenu de la Formation :</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Gestion durable des ressources naturelles.</p>
                </li>
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Énergies renouvelables et efficacité énergétique.</p>
                </li>
                <li className="flex">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  <p>Techniques d'agriculture durable et gestion des déchets.</p>
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">Accès et Inscription :</h4>
              <p className="text-gray-700 mb-6">
                Cette formation est gratuite pour les entrepreneurs financés par FGVEJ. Une fois le financement
                approuvé, les entrepreneurs peuvent s'inscrire directement sur notre plateforme pour participer aux
                sessions.
              </p>

              <h4 className="text-lg font-semibold mb-3">Un Soutien Technique pour votre Succès</h4>
              <p className="text-gray-700">
                FGVEJ s'engage à offrir aux entrepreneurs verts les compétences dont ils ont besoin pour réussir leurs
                projets et contribuer à un avenir plus durable.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679917152773-588c2a0a9ad7?w=600&auto=
                format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGdyZWVuJTIwZW52aXJvbm1lbnR8ZW58MHx8MHx8fDA%3D"
                alt="Formation en Pratiques Écologiques"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à bénéficier de nos services ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez FGVEJ dès aujourd'hui et accédez à notre garantie sans frais, notre accompagnement personnalisé,
            et notre formation en pratiques écologiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="text-white border-white hover:bg-green-800">
              <Link href="/soumettre-projet">Soumettre un Projet</Link>
            </Button>
            <Button asChild size="lg"  className="text-white border-white hover:bg-green-800">
              <Link href="/contact">Nous Contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
