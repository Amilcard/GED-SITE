import { Calendar, Phone, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSimple() {
  const contactMethods = [
    {
      icon: Calendar,
      title: "Prendre rendez-vous",
      description: "Planifiez un échange avec notre équipe",
      cta: "Réserver un créneau",
      href: "/rendez-vous",
      color: "bg-secondary",
      hoverColor: "hover:bg-secondary/90",
    },
    {
      icon: Phone,
      title: "Nous appeler",
      description: "Du lundi au vendredi, 9h-18h",
      cta: "04 23 16 16 71",
      href: "tel:+33423161671",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Réponse rapide par message",
      cta: "06 28 05 76 67",
      href: "https://wa.me/33628057667",
      color: "bg-accent",
      hoverColor: "hover:bg-accent/90",
    },
    {
      icon: Star,
      title: "Google Business",
      description: "Consultez nos avis et laissez le vôtre",
      cta: "Voir les avis",
      href: "https://www.google.com/search?q=GROUPE+ET+DECOUVERTE#lrd=0x47f4ef6c22bab453:0xb4b4fa13e2e5fc8b,1",
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Besoin d'échanger ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est disponible pour répondre à vos questions et vous accompagner dans votre projet.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 shadow-brand p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* CTA Button */}
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-auto w-full"
                >
                  <Button
                    className={`w-full ${method.color} text-white ${method.hoverColor} rounded-pill font-bold shadow-brand-lg hover:scale-105 transition-transform`}
                  >
                    {method.cta}
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Vous pouvez également nous écrire à{' '}
            <a href="mailto:contact@groupeetdecouverte.fr" className="text-secondary underline hover:text-secondary/80">
              contact@groupeetdecouverte.fr
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
