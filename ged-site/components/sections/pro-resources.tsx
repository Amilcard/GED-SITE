import { Button } from '@/components/ui/button';
import config from '../../site-config.json';
import Link from 'next/link';

export function ProResources() {
  const { pro_space_section } = config.pages_content;

  // Fallbacks for missing config fields
  // @ts-ignore
  const subtitle = pro_space_section.subtitle || "Tous les outils pour faciliter vos démarches administratives et éducatives.";
  // @ts-ignore
  const ctaLabel = pro_space_section.cta || "ACCÈS PORTAIL PARTENAIRE";
  // @ts-ignore
  const resources = pro_space_section.resources || [
    { type: "PDF", name: "Plaquette Institutionnelle 2025", size: "4.2 Mo" },
    { type: "Tool", name: "Calculateur de Reste à Charge", size: null },
    { type: "PDF", name: "Grille de Tarifs & Conditions", size: "1.8 Mo" }
  ];
  // @ts-ignore
  const valueProps = pro_space_section.value_props || [
    "Conventionnement Rapide (48h)", 
    "Facturation Chorus Pro", 
    "Habilitation Nationale"
  ];

  return (
    <section id="pros" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
              {pro_space_section.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </div>
          <Link href="#">
             <Button variant="default" size="lg" className="rounded-pill font-bold px-10 shadow-lg shadow-primary/20">
               {ctaLabel}
             </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource:any, index:number) => (
            <div key={index} className="bg-muted/30 border border-gray-100 rounded-brand p-8 hover:border-brand/50 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 group-hover:border-brand/20 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">
                    {resource.type === 'PDF' ? '📄' : resource.type === 'Tool' ? '🧮' : '🖼️'}
                  </span>
                </div>
                <span className="text-xs font-bold text-brand bg-brand/5 px-2 py-1 rounded-md">
                  {resource.type === 'Tool' ? 'OUTIL EN LIGNE' : 'TÉLÉCHARGEMENT'}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-secondary mb-2 group-hover:text-brand transition-colors">
                {resource.name}
              </h3>

              <div className="flex items-center text-sm text-muted-foreground mt-4">
                {resource.size ? (
                   <span>Taille : {resource.size}</span>
                ) : (
                   <span className="flex items-center gap-1 text-primary font-bold">
                     Lancer le simulateur →
                   </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* VALUE PROPS */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 bg-secondary text-white rounded-2xl p-8 md:p-12">
            {valueProps.map((prop:string, idx:number) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold flex-shrink-0">
                  ✓
                </div>
                <span className="font-heading font-semibold text-lg">{prop}</span>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
