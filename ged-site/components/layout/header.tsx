import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-secondary/80">
          <Link href="/" className="hover:text-brand transition-colors">
            ACCUEIL
          </Link>
          <Link href="/qui-sommes-nous" className="hover:text-brand transition-colors">
            L'ASSOCIATION
          </Link>
          <Link href="/sejours-distanciation" className="hover:text-brand transition-colors">
            SÉJOURS DE DISTANCIATION
          </Link>
          <a href="https://app.groupeetdecouverte.fr" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
            COLONIES DE VACANCES
          </a>
          <Link href="/contact" className="hover:text-brand transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* CTA */}
        {/* CTA - REMOVED AS REQUESTED */}
        {/* <div className="flex items-center gap-4">...</div> */}
      </div>
    </header>
  );
}
