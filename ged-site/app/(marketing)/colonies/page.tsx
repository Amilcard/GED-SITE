import { Compass, Palmtree, Mountain, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ColoniesPage() {
  const colonies = [
    {
      title: "Canoë Cocktail",
      location: "Ardèche",
      description: "Descente de l'Ardèche, bivouac et découverte de la nature sauvage.",
      image: "https://groupeetdecouverte.fr/storage/2023/11/Canoe-Cocktail.jpg",
      age: "12-17 ans",
      category: "Aventure",
      price: "450€",
    },
    {
      title: "Char à Voile",
      location: "Charente-Maritime",
      description: "Glisse sur les plages de l'Atlantique et découverte du milieu marin.",
      image: "https://groupeetdecouverte.fr/storage/2025/05/CJH-ST-GEORGES-DIDONNE-_-CHAR-A-VOILE-07-640x362-1-300x300.jpeg",
      age: "11-15 ans",
      category: "Sport nautique",
      price: "520€",
    },
    {
      title: "Diamant Bleu",
      location: "Alpes",
      description: "Séjour multi-activités en montagne : randonnée, escalade et air pur.",
      image: "https://groupeetdecouverte.fr/storage/2025/05/slide-DIAMANTBLEU-08-300x300.jpg",
      age: "8-12 ans",
      category: "Montagne",
      price: "480€",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://groupeetdecouverte.fr/storage/2023/10/pexels-photo-6139667.jpeg"
          alt="Colonies de Vacances"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            Colonies de Vacances
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Des séjours éducatifs mémorables conçus pour l'épanouissement des jeunes.
          </p>
        </div>
      </section>

      {/* Intro Section - Simplified for clarity */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-primary mb-8 leading-tight">
                Plus qu'une colo, une aventure humaine
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Groupe et Découverte s'engage à offrir des vacances qui ont du sens. 
                Nos séjours privilégient le collectif, l'apprentissage par l'expérience et la découverte de nouveaux horizons.
              </p>
            </div>

            {/* DETAIL_INFO_GRID Implementation */}
            <div className="bg-white border border-border p-6 rounded-[24px]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">L'essentiel à savoir</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#F8F8F8] p-4 rounded-[16px] flex items-center gap-3">
                  <div className="text-muted-foreground w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Encadrement</span>
                    <span className="text-sm font-bold text-primary">Diplômés d'État</span>
                  </div>
                </div>
                <div className="bg-[#F8F8F8] p-4 rounded-[16px] flex items-center gap-3">
                  <div className="text-muted-foreground w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Inclusion</span>
                    <span className="text-sm font-bold text-primary">Mixité Sociale</span>
                  </div>
                </div>
                <div className="bg-[#F8F8F8] p-4 rounded-[16px] flex items-center gap-3">
                  <div className="text-muted-foreground w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Palmtree className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Activités</span>
                    <span className="text-sm font-bold text-primary">Sport & Culture</span>
                  </div>
                </div>
                <div className="bg-[#F8F8F8] p-4 rounded-[16px] flex items-center gap-3">
                  <div className="text-muted-foreground w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">Destinations</span>
                    <span className="text-sm font-bold text-primary">France & Europe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colonies Grid */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Nos destinations phares
              </h2>
              <p className="text-gray-600">Explorez nos séjours classés par thématiques.</p>
            </div>
            <Link href="/contact">
              <Button className="btn-pill btn-secondary hidden md:flex">
                Tous les séjours
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colonies.map((colo, index) => (
              <div key={index} className="bg-white border border-border rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="aspect-video relative overflow-hidden">
                  <Image 
                    src={colo.image}
                    alt={colo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                    <span>{colo.category}</span>
                    <span>•</span>
                    <span>{colo.age}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mt-2">
                    {colo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {colo.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-secondary font-extrabold text-xl">
                      {colo.price}
                    </span>
                    <Link href="/contact">
                      <Button variant="outline" className="rounded-full px-4 py-1 text-xs font-bold border-border text-primary hover:bg-muted">
                        Réserver
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Prêt à faire ses valises ?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Contactez notre équipe pour recevoir les dossiers d'inscription ou pour toute information complémentaire sur nos séjours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="btn-pill btn-primary px-10 h-14 text-lg border-none">
                Contacter l'équipe
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
