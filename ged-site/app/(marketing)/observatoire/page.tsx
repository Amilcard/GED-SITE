import { Header } from '@/components/layout/header';

export default function ObservatoirePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="py-20 lg:py-32 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
            Comprendre pour <span className="text-brand">mieux agir</span>
          </h1>
          <p className="text-xl text-secondary/70">
            L'Observatoire Groupe & Découverte analyse l'impact éducatif réel de nos parcours.
          </p>
        </div>

        {/* DATA VIZ PLACEHOLDERS */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="aspect-[4/3] bg-muted rounded-brand border border-border flex items-center justify-center p-8 relative overflow-hidden group hover:border-brand transition-colors">
            <div className="text-center">
              <span className="text-5xl mb-4 block">📊</span>
              <p className="font-bold text-secondary">Graphique Satisfaction</p>
              <p className="text-sm text-secondary/50">Données en cours de traitement</p>
            </div>
          </div>
          <div className="aspect-[4/3] bg-muted rounded-brand border border-border flex items-center justify-center p-8 relative overflow-hidden group hover:border-brand transition-colors">
            <div className="text-center">
              <span className="text-5xl mb-4 block">📈</span>
              <p className="font-bold text-secondary">Graphique Impact Social</p>
              <p className="text-sm text-secondary/50">Données en cours de traitement</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center bg-brand/5 rounded-brand p-12">
          <p className="text-2xl font-heading font-bold text-brand mb-4">
            Rapport Annuel 2025
          </p>
          <p className="text-secondary/70">
            Téléchargement disponible prochainement pour nos partenaires institutionnels.
          </p>
        </div>

      </main>
    </div>
  );
}
