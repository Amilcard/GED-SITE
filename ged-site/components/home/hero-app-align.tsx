import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroAppAlign() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
            Le séjour commence avant le départ.<br />
            <span className="text-secondary">Et continue bien après.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            Association loi 1901 — accompagnement éducatif et organisation de séjours.
            <br />
            Chaque projet est préparé avec l’équipe éducative et l’enfant/le jeune, pour un cadre clair, adapté, et sans mauvaise surprise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="btn-pill btn-primary h-12 text-base"
            >
              <Link href="https://app.groupeetdecouverte.fr">
                Voir les séjours
              </Link>
            </Button>

            <Button
              asChild
              className="btn-pill btn-secondary h-12 text-base"
            >
              <Link href="/contact">
                Échanger avec l’équipe
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
