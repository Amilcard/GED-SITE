import Link from 'next/link';
import { Logo } from '@/components/logo';
import { MapPin, Phone, Mail, ExternalLink, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* 1. Identity */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-4 inline-block backdrop-blur-sm">
               <Logo variant="white" />
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Hub National du Loisir Éducatif.
              <br/>
              Tiers de confiance pour les parcours éducatifs de la jeunesse.
            </p>
          </div>

          {/* 2. Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-heading uppercase tracking-wider text-secondary">
              Nous contacter
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span className="text-gray-300">
                  33 Rue de la République<br/>
                  69002 Lyon
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+33478522578" className="text-gray-300 hover:text-white transition-colors">
                  04 78 52 25 78
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contact@groupeetdecouverte.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@groupeetdecouverte.fr
                </a>
              </div>
            </div>
          </div>

          {/* 3. Liens Professionnels (Moved from Header) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-heading uppercase tracking-wider text-secondary">
              Espace Professionnel
            </h3>
            <div className="flex flex-col gap-4">
              <Link 
                href="https://app.groupeetdecouverte.fr" 
                target="_blank"
                className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-bold text-sm">Accès Éducateurs</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </Link>

              <Link 
                href="#pros" 
                className="group flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:scale-[1.02]"
              >
                 <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-bold text-xs">PRO</span>
                  </div>
                  <span className="font-bold text-sm">Espace Partenaires</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium uppercase tracking-wide">
          <p>© {new Date().getFullYear()} Groupe et Découverte. Tous droits réservés.</p>
          <div className="flex gap-6">
             <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
             <Link href="/politique-confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
