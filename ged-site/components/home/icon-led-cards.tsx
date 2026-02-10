import { CalendarClock, PhoneOutgoing, ClipboardCheck } from 'lucide-react';

export function IconLedCards() {
  const cards = [
    {
      icon: CalendarClock,
      title: "Avant",
      description: "Préparation & coordination.",
    },
    {
      icon: PhoneOutgoing,
      title: "Pendant",
      description: "Lien & réactivité.",
    },
    {
      icon: ClipboardCheck,
      title: "Après",
      description: "Bilan & retours.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            On ne se contente pas d’inscrire.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une fois le séjour validé, on prépare, on coordonne, on suit.
            <br className="hidden md:block" />
            Et on fait un retour utile à l’équipe éducative.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-brand p-8 shadow-brand text-center hover:scale-105 transition-transform duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 text-secondary">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
