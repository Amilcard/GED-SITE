import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo placeholder */}
          <div className="mb-12">
            <h1 className="text-6xl font-heading font-bold text-brand-dark">
              GED
            </h1>
            <p className="text-xl text-primary/60 font-heading">
              Groupe et Découverte
            </p>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-brand-dark leading-tight">
            Solution complète de{' '}
            <span className="text-secondary">gestion documentaire</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed">
            Optimisez votre gestion documentaire avec une plateforme moderne,
            sécurisée et intuitive. Conçue pour les entreprises qui veulent
            gagner en efficacité.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" variant="default">
              Découvrir la solution
            </Button>
            <Button size="lg" variant="secondary">
              Demander une démo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark text-center mb-16">
            Pourquoi choisir GED ?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-brand p-8 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-brand flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-heading font-semibold text-brand-dark mb-4">
                Rapidité
              </h4>
              <p className="text-primary/70 leading-relaxed">
                Accédez à vos documents en quelques secondes grâce à notre
                système de recherche intelligent.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-brand p-8 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-brand flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="text-xl font-heading font-semibold text-brand-dark mb-4">
                Sécurité
              </h4>
              <p className="text-primary/70 leading-relaxed">
                Vos données sont protégées avec un chiffrement de niveau
                bancaire et des sauvegardes automatiques.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-brand p-8 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-brand flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-heading font-semibold text-brand-dark mb-4">
                Simplicité
              </h4>
              <p className="text-primary/70 leading-relaxed">
                Interface intuitive conçue pour être adoptée immédiatement par
                vos équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-base text-white/80">
              © 2026 GED - Groupe et Découverte. Tous droits réservés.
            </p>
            <p className="text-sm text-white/60 mt-2">
              Site vitrine construit avec Next.js 16 & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
