import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AppEducationalTool() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Le choix fait aussi partie du travail éducatif.
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Dans la réalité, le choix d’un séjour se fait souvent rapidement.
                Mais pas toujours le temps d’impliquer vraiment le jeune.
              </p>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="mb-4 font-medium text-primary">
                  Nous avons développé cet outil pour ça :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary-800" />
                    </div>
                    <span>Le jeune consulte les séjours sur l'app (ou le site)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary-800" />
                    </div>
                    <span>Il indique ses préférences et motivations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-secondary-800" />
                    </div>
                    <span>Vous gardez le dernier mot sur la décision</span>
                  </li>
                </ul>
              </div>

              <p className="font-medium text-primary">
                Impliquer le jeune dans le choix, c’est déjà préparer le séjour.
              </p>
            </div>
          </div>

          {/* Visual Content (Mockup Placeholder) */}
          <div className="lg:w-1/2 relative w-full flex justify-center">
            {/* Phone Frame Mockup */}
            <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-primary-900 overflow-hidden">
               {/* App Header Mockup */}
               <div className="h-14 bg-primary flex items-center justify-center text-white text-sm font-medium">
                 Groupe & Découverte
               </div>
               {/* App Content Placeholder */}
               <div className="p-4 bg-gray-50 h-full">
                 <div className="w-full h-32 bg-white rounded-xl shadow-sm mb-4 animate-pulse"></div>
                 <div className="w-full h-32 bg-white rounded-xl shadow-sm mb-4 animate-pulse delay-75"></div>
                 <div className="w-full h-32 bg-white rounded-xl shadow-sm mb-4 animate-pulse delay-150"></div>
                 <div className="absolute bottom-8 left-0 right-0 px-6">
                    <div className="w-full h-12 bg-secondary rounded-full shadow-sm flex items-center justify-center text-primary font-bold text-sm">
                      CHOISIR CE SÉJOUR
                    </div>
                 </div>
               </div>

               {/* Reflection */}
               <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
