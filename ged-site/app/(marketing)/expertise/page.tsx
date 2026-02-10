import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-muted/30 font-sans">
      <Header />

      <main className="py-20 lg:py-32">
        <div className="container mx-auto px-4">

          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6">
              Ingénierie Sociale & <br/>
              <span className="text-brand">Niveaux d'Intervention</span>
            </h1>
            <p className="text-xl text-secondary/70">
              Notre expertise ne s'arrête pas à la réservation. Elle commence là où les autres s'arrêtent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 - INCLUSION */}
            <div className="bg-white rounded-brand p-8 border border-border hover:border-brand transition-colors duration-300 shadow-sm group">
              <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors text-brand text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">INCLUSION</h3>
              <p className="text-lg text-secondary/70 leading-relaxed mb-8">
                Le standard Premium. Pour tous. Pas d'option, c'est natif.
              </p>
              <ul className="space-y-3 text-sm text-secondary/60">
                <li className="flex items-center gap-2">✓ PAI individualisé</li>
                <li className="flex items-center gap-2">✓ Mixité sociale garantie</li>
              </ul>
            </div>

            {/* CARD 2 - TRANQUILLITÉ */}
            <div className="bg-white rounded-brand p-8 border border-border hover:border-brand transition-colors duration-300 shadow-sm group">
              <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors text-brand text-2xl">
                🛡️
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">TRANQUILLITÉ</h3>
              <p className="text-lg text-secondary/70 leading-relaxed mb-8">
                Suivi renforcé & Bilan écrit. Traçabilité complète du parcours.
              </p>
              <ul className="space-y-3 text-sm text-secondary/60">
                <li className="flex items-center gap-2">✓ Bilan de fin de séjour</li>
                <li className="flex items-center gap-2">✓ Ligne directe 24/7</li>
              </ul>
            </div>

            {/* CARD 3 - RUPTURE */}
            <div className="bg-white rounded-brand p-8 border border-border hover:border-brand transition-colors duration-300 shadow-sm group">
              <div className="w-14 h-14 bg-brand/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors text-brand text-2xl">
                🏔️
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary mb-4">RUPTURE</h3>
              <p className="text-lg text-secondary/70 leading-relaxed mb-8">
                Distanciation 1 pour 1. Sur mesure. Pour les contextes complexes.
              </p>
              <ul className="space-y-3 text-sm text-secondary/60">
                <li className="flex items-center gap-2">✓ Encadrement dédié</li>
                <li className="flex items-center gap-2">✓ Éloignement géographique</li>
              </ul>
            </div>

          </div>

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-pill px-10 font-bold">
                PARLER À UN EXPERT
              </Button>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
