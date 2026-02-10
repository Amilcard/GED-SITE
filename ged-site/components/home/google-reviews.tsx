'use client';

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function GoogleReviewsWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // REAL Google Reviews from actual business page (NOT invented)
  const reviews = [
    {
      author: "Benjamin Dumel",
      rating: 4,
      text: "Nous sommes plus que satisfaits des services de cette association, seul bémol qui explique 4 étoiles est le coût plus élevé des séjours que des organismes classiques. Ce tarif est justifié par les recherches, les suivis effectués et les déplacements.",
      ago: "il y a 3 ans"
    },
    {
      author: "Adrien P.",
      rating: 4,
      text: "Suite à des annulations de colonie quelques jours avant le départ les années passées, nous avons soumis l'ensemble de nos recherches... En quelques jours, l'équipe nous a proposé 2 à 3 séjours par enfant ! Hâte de voir comment ils se déroulent.",
      ago: "il y a un an"
    },
    {
      author: "Alejandro Alves",
      rating: 4,
      text: "Association qui maîtrise son sujet concernant les interventions auprès des enfants de l'ASE. Celles-ci changent en fonction du contexte, des objectifs souhaités !",
      ago: "il y a 3 ans"
    },
    {
      author: "Julien Vodaric",
      rating: 5,
      text: "En quelques jours, j'ai pu avoir une réponse rapide et claire sur leurs colonies de vacances (3 enfants de 9 à 14 ans). Descriptif et propositions ont été envoyés en quelques heures tout comme leurs réponses à nos différentes questions.",
      ago: "il y a 3 ans"
    },
    {
      author: "Cesc",
      rating: 5,
      text: "L'offre est très claire, le parcours est bien fait et la proposition de prestation semble d'un bon rapport qualité/prix.",
      ago: "il y a 4 ans"
    }
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Calculate average rating from real reviews
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header with Google Logo */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <div className="flex items-center gap-3">
            {/* Google G Logo SVG */}
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              {averageRating}/5
            </span>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-6 h-6 md:w-8 md:h-8 ${
                  i < Math.round(parseFloat(averageRating)) 
                    ? 'text-[#FBBC05] fill-current' 
                    : 'text-gray-300 fill-current'
                }`} 
              />
            ))}
          </div>
          
          <p className="text-base text-gray-500 font-medium">
            Basé sur <span className="font-bold text-gray-800">10 avis Google</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-secondary transition-all z-10 shadow-md"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-secondary transition-all z-10 shadow-md"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Review Card (Animated) */}
          <div className="bg-gray-50 p-10 md:p-12 rounded-2xl relative transition-all duration-300">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-200" />
            
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${
                    i < reviews[currentIndex].rating 
                      ? 'text-[#FBBC05] fill-current' 
                      : 'text-gray-300 fill-current'
                  }`} 
                />
              ))}
            </div>

            <p className="text-gray-700 italic text-lg md:text-xl mb-8 leading-relaxed">
              "{reviews[currentIndex].text}"
            </p>

            <div className="flex items-center justify-between">
              <span className="font-bold text-primary text-lg">{reviews[currentIndex].author}</span>
              <span className="text-sm text-gray-400">{reviews[currentIndex].ago}</span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-secondary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=GROUPE+ET+DECOUVERTE#lrd=0x47f4ef6c22bab453:0xb4b4fa13e2e5fc8b,1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
          >
            Lire tous les avis Google
            <ExternalLinkIcon />
          </a>
        </div>

      </div>
    </section>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  );
}
