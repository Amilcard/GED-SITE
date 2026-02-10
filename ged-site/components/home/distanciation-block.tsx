import Link from 'next/link';

export function DistanciationBlock() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="bg-white rounded-brand border border-secondary/20 shadow-brand p-8 md:p-12 md:flex md:items-center md:justify-between relative overflow-hidden">
          
          {/* Decorative Background Element (Subtle) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              Besoin d'une rupture de cadre ?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-0">
              Découvrez nos séjours de distanciation (7-17 ans) : un encadrement renforcé et un projet individuel pour apaiser les situations de crise.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0 md:ml-8">
            <Link 
              href="/sejours-distanciation" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-pill text-white bg-secondary hover:bg-secondary/90 shadow-sm transition-colors"
            >
              Découvrir le dispositif
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
