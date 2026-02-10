import { ClipboardCheck, Activity, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SejoursDistanciationPage() {
  const etapes = [
    {
      icon: ClipboardCheck,
      titre: "Prise de Repères",
      description: "Rupture avec l'environnement de crise. Logement individuel en milieu rural. Focus sur les besoins fondamentaux : repos, alimentation.",
      color: "bg-primary",
    },
    {
      icon: Activity,
      titre: "Mise en Mouvement",
      description: "Activités choisies par l'adolescent (sport/art) pour restaurer la confiance et retrouver l'estime de soi.",
      color: "bg-secondary",
    },
    {
      icon: Brain,
      titre: "Approche Thérapeutique",
      description: "Intervention de spécialistes : Art-thérapie, Addictologie, Théâtre-forum. Accompagnement personnalisé.",
      color: "bg-accent",
    },
    {
      icon: Users,
      titre: "Préparation au Retour",
      description: "Co-construction du projet post-séjour avec les référents sociaux. Bilan complet et suivi.",
      color: "bg-primary",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Séjours de Distanciation
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed mb-4">
            Une mise à distance réfléchie
          </p>
          <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
            Accompagnement intensif spécialisé pour adolescents (11-18 ans) en situation de crise (ASE/PJJ). 
            Une rupture avec l'environnement pour reconstruire un projet.
          </p>
        </div>
      </section>

      {/* Processus 4 Étapes */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
            Un processus en 4 étapes
          </h2>
          <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Chaque séjour suit un parcours structuré et adapté aux besoins de l'adolescent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {etapes.map((etape, index) => {
              const IconComponent = etape.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-brand p-8 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className={`w-16 h-16 ${etape.color} rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-3">
                    {index + 1}. {etape.titre}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {etape.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spécificités */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
            Notre différence
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-brand p-8">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Éviter l'institutionnalisation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Changement de lieux ruraux tous les 2-3 semaines pour maintenir la dynamique de rupture.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-brand p-8">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Encadrement renforcé
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Taux d'encadrement exceptionnel : 1 éducateur pour 2 adolescents.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button className="bg-secondary text-white hover:bg-secondary/90 rounded-pill font-bold px-10 shadow-brand-lg">
                Échanger sur un projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
