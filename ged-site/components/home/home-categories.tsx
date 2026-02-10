import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function HomeCategories() {
  const categories = [
    { label: "Tout voir", href: "https://app.groupeetdecouverte.fr" },
    { label: "Montagne", href: "https://app.groupeetdecouverte.fr?theme=montagne" },
    { label: "Bords de mer", href: "https://app.groupeetdecouverte.fr?theme=mer" },
    { label: "Plein air", href: "https://app.groupeetdecouverte.fr?theme=plein-air" },
    { label: "Découverte", href: "https://app.groupeetdecouverte.fr?theme=decouverte" },
    { label: "Sport", href: "https://app.groupeetdecouverte.fr?theme=sport" },
  ];

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              href={cat.href}
              className="px-4 py-2 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 font-medium text-sm whitespace-nowrap transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
