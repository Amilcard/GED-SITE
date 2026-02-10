import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function StayTypesGrid() {
  const types = [
    {
      title: "Se poser, respirer",
      description: "Retrouver un rythme, souffler, reprendre des repères dans un cadre bienveillant.",
      link: "/catalogue/se-poser"
    },
    {
      title: "Prendre du recul",
      description: "Changer d’environnement pour stabiliser une situation et rompre avec le quotidien.",
      link: "/catalogue/prendre-du-recul"
    }
  ];

  return (
    <section className="bg-white py-20 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-2xl font-bold text-primary mb-12">
          Nos typologies de séjour
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {types.map((type, index) => (
            <Link
              key={index}
              href={type.link}
              className="group block p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary-600 transition-colors">
                {type.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>
              <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                Voir les séjours <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
