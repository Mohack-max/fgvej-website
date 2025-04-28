'use client';
import Image from 'next/image';

export default function DirectorMessagePage() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        
        {/* Picture Side */}
        <div className="flex-shrink-0">
          <Image
            src="/CEO1.jpg" // <-- put the director image in /public/director.jpg
            alt="Directeur Général FGVEJ"
            width={350}
            height={450}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Text Side */}
        <div className="flex-1 text-center md:text-left overflow-y-auto max-h-[500px] pr-2">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Mot du Président - Sidamar COULIBALY
          </h2>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
{`Chers Partenaires, Chers Investisseurs,

C’est avec un profond engagement et une grande fierté que je vous souhaite la bienvenue sur le site officiel du Fonds de Garantie Verte pour les Jeunes Entrepreneurs (FGVEJ). Cette plateforme se veut être un espace d'échange et de transparence, reflétant notre volonté de proximité avec tous les acteurs œuvrant pour le développement durable et inclusif du Mali.

Depuis sa création, le FGVEJ s'est positionné comme un catalyseur de l'entrepreneuriat vert, en facilitant l'accès au financement pour les jeunes porteurs de projets innovants et respectueux de l'environnement. Notre mission est de soutenir la création et l'expansion des petites et moyennes entreprises (PME) dirigées par des jeunes, en leur offrant des garanties adaptées qui réduisent les risques pour les institutions financières partenaires.

Conscients des défis auxquels sont confrontés les jeunes entrepreneurs, notamment en matière d'accès au crédit, nous avons mis en place des mécanismes de garantie efficaces, en collaboration étroite avec les banques, les incubateurs et les structures d'accompagnement. Cette synergie vise à créer un écosystème favorable à l'émergence d'une nouvelle génération d'entrepreneurs engagés dans la transition écologique et énergétique.

Nos ambitions pour les années à venir sont claires :
• Renforcer notre présence dans toutes les régions du Mali, afin d'assurer une couverture nationale et équitable de nos services.
• Accélérer le traitement des demandes de garantie, en simplifiant les procédures et en réduisant les délais de réponse.
• Poursuivre la digitalisation de nos processus, pour une gestion plus efficace et transparente.
• Diversifier nos interventions en explorant de nouvelles formes de financement à garantir, adaptées aux besoins spécifiques des jeunes entrepreneurs.

Nous sommes convaincus que le développement durable du Mali passe par l'autonomisation économique de sa jeunesse. En soutenant les initiatives entrepreneuriales vertes, le FGVEJ contribue activement à la création d'emplois, à la réduction de la pauvreté et à la préservation de notre environnement.

Je tiens à remercier chaleureusement tous nos partenaires pour leur confiance et leur collaboration. Ensemble, continuons à œuvrer pour un avenir prospère, inclusif et durable pour notre pays.

Sidamar COULIBALY
Le Président
`}
          </p>
        </div>

      </div>
    </div>
  );
}
