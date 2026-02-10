'use client';

import { Calendar as CalendarIcon, Phone } from 'lucide-react';

interface CalendarWidgetProps {
  agencadaUrl?: string;
}

export function CalendarWidget({ agencadaUrl = "https://www.agencada.com" }: CalendarWidgetProps) {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Split Layout: Text Left / Calendar Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Text Content */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <CalendarIcon className="w-5 h-5 text-secondary" />
              <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                Réponse en 15 minutes
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-primary mb-6 leading-tight">
              BESOIN D'UNE SOLUTION IMMÉDIATE ?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nos experts sont disponibles pour auditer vos besoins en 15 minutes. Choisissez votre créneau ci-contre, on vous rappelle à l'heure dite.
            </p>

            <div className="bg-gray-50 border border-border rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-600 flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <span>
                  <strong className="text-primary block mb-1">Pas de robot, une vraie équipe.</strong>
                  Vous parlez directement avec un expert terrain qui connaît les enjeux de l'ASE et de l'accompagnement éducatif.
                </span>
              </p>
            </div>

            {/* Alternative contact */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-gray-600 mb-3">
                Vous préférez nous appeler directement ?
              </p>
              <a 
                href="tel:+33478522578" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
              >
                <Phone className="w-5 h-5" />
                04 78 52 25 78
              </a>
            </div>
          </div>

          {/* Right: Embedded Calendar */}
          <div className="lg:sticky lg:top-24">
            <div className="card-corporate p-0 overflow-hidden">
              {/* Calendar Iframe - DIRECTLY EMBEDDED */}
              <div className="relative w-full bg-gray-50" style={{ minHeight: '600px' }}>
                <iframe
                  src={agencadaUrl}
                  className="w-full h-full"
                  style={{ minHeight: '600px', border: 'none' }}
                  title="Réserver un rendez-vous avec Groupe et Découverte"
                  loading="lazy"
                />
              </div>
              
              {/* Calendar Footer Help */}
              <div className="bg-gray-100 px-6 py-3 border-t border-border">
                <p className="text-xs text-gray-600 text-center">
                  <span className="font-bold text-primary">💡</span> Sélectionnez un créneau puis remplissez vos coordonnées pour confirmer votre rendez-vous.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
