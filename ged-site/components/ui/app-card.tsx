import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface AppCardProps {
  title: string;
  subtitle: string;
  image: string;
  price?: string;
  tag?: string;
  location?: string;
  features?: string[];
}

export function AppCard({ title, subtitle, image, price, tag, location, features }: AppCardProps) {
  return (
    <article className="h-full flex flex-col md:flex-row bg-white rounded-brand border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* === ZONE 1: IMAGE (Horizontal sur Desktop) === */}
      <div className="relative aspect-[16/10] md:aspect-auto md:w-2/5 bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />

        {/* Badge Location (Overlay like App) */}
        {location && (
             <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary uppercase tracking-wider">
               📍 {location}
             </div>
        )}
      </div>

      {/* === ZONE 2: CONTENU STRUCTURÉ === */}
      <div className="flex flex-col flex-1 p-5">

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-2 mb-3 text-[10px] font-heading font-bold uppercase tracking-widest text-primary/60">
          <span>{tag || 'SOLUTION PRO'}</span>
          {features && features.map((f, i) => (
            <React.Fragment key={i}>
              <span className="w-0.5 h-2.5 bg-gray-300" />
              <span>{f}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Titre (Dark Blue) */}
        <h3 className="text-lg font-extrabold text-primary font-heading leading-tight line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 font-sans line-clamp-2 mb-4">
          {subtitle}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          {/* Prix */}
          {price ? (
            <div className="flex items-baseline gap-1">
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">Dès</span>
              <span className="text-lg font-bold text-secondary font-heading">{price}</span>
            </div>
          ) : (
            <span className="text-xs text-gray-400 font-medium">Sur devis uniquement</span>
          )}

          {/* CTA Minimalist */}
          <span className="px-3 py-1.5 border border-gray-300 rounded text-xs font-bold text-primary transition-all duration-300 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary flex items-center gap-1">
            Voir <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}
