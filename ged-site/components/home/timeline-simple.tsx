import Image from 'next/image';

export function TimelineSimple() {
  const timelineItems = [
    {
      phase: "Avant",
      text: "Préparer le départ, caler les infos, éviter les surprises.",
      image: "https://groupeetdecouverte.fr/storage/2023/10/Image-notre-projet-2.jpg",
      alt: "Enfant devant ordinateur - Préparation projet"
    },
    {
      phase: "Pendant",
      text: "Rester joignable, faire le lien, ajuster si besoin.",
      image: "https://groupeetdecouverte.fr/storage/2023/11/Canoe-Cocktail.jpg",
      alt: "Activité canoë - Action en groupe"
    },
    {
      phase: "Après",
      text: "Faire le bilan, capitaliser, repartir sur de bonnes bases.",
      image: "https://groupeetdecouverte.fr/storage/2025/05/slide-TEENSZAPPING-03-300x300.jpg",
      alt: "Enfant souriant - Bilan positif"
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-4">
          Avant / Pendant / Après
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">Simple, carré, utile.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timelineItems.map((item, index) => {
            return (
              <div key={index} className="relative group">
                {/* Connecting Line (Desktop) */}
                {index < timelineItems.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-[60%] w-[80%] h-0.5 bg-gray-200 z-0" />
                )}

                <div className="bg-white rounded-[16px] border border-border shadow-sm relative z-10 transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Phase Label */}
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.05em] text-muted-foreground mb-2">
                      {item.phase}
                    </span>

                    {/* Description */}
                    <p className="text-primary font-bold text-base leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
