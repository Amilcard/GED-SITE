import { Target, Heart, Lightbulb, Search, Users as UsersIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function LAssociationPage() {
  const principes = [
    {
      icon: Search,
      titre: "Sélection Rigoureuse",
      description: "Partenariat avec plus de 30 organismes audités pour garantir qualité et sécurité.",
    },
    {
      icon: UsersIcon,
      titre: "Inclusion Totale",
      description: "Pas de ségrégation : les enfants sont intégrés avec les vacanciers classiques.",
    },
    {
      icon: FileText,
      titre: "Suivi Individualisé",
      description: "Bilan de séjour détaillé et retours réguliers aux référents sociaux.",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://groupeetdecouverte.fr/storage/2023/10/Image-notre-projet-2.jpg"
          alt="L'Association Groupe et Découverte"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            L'Association
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Faire du loisir un outil éducatif et un droit pour tous les enfants.
          </p>
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-8 leading-tight">
                Notre mission depuis 2012
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-sans">
                Groupe et Découverte est un Hub National du Loisir Éducatif. Nous agissons pour que chaque enfant, quelle que soit sa situation sociale, puisse bénéficier de vacances de qualité. 
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Target className="text-secondary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">Innovation Sociale</h4>
                    <p className="text-gray-600 text-sm">Développer des solutions pour rendre le loisir accessible.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Heart className="text-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">Inclusion</h4>
                    <p className="text-gray-600 text-sm">Garantir une mixité sociale réelle dans nos séjours.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-[16px] overflow-hidden shadow-md">
              <Image 
                src="https://groupeetdecouverte.fr/storage/2023/11/Image-colonie-vacances-projet.jpg"
                alt="Projet Éducatif"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre Approche (Les 3 Piliers) */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-16">
            Notre Approche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principes.map((principe, index) => {
              const IconComponent = principe.icon;
              return (
                <div key={index} className="bg-white border border-border rounded-[16px] p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-[#F8F8F8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider">{principe.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principe.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Histoire Timeline */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-16">
            Notre Histoire
          </h2>
          <div className="space-y-12">
            {[
              { year: "2012", title: "Création", desc: "Lancement des colonies pour enfants de l'ASE." },
              { year: "2020", title: "Diversification", desc: "Début des séjours de distanciation spécialisés." },
              { year: "2026", title: "Hub National", desc: "Référence du loisir éducatif solidaire." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start text-left bg-gray-50 p-6 rounded-[16px] border border-border">
                <span className="text-2xl font-black text-secondary">{item.year}</span>
                <div>
                   <h4 className="text-lg font-bold text-primary mb-1">{item.title}</h4>
                   <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-8">Envie de nous rejoindre ?</h2>
          <p className="text-xl opacity-90 mb-12">Découvrez comment nous pouvons collaborer pour le bien-être des enfants.</p>
          <Link href="/contact">
            <Button className="btn-pill btn-primary px-12 py-4">
              Nous contacter
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
