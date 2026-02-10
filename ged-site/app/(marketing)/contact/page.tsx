import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="flex-grow bg-background font-sans">
      <main className="grid lg:grid-cols-2">
        {/* LEFT: INFO */}
        <div className="bg-secondary text-white p-12 lg:p-24 flex flex-col justify-center">
          <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
               <span className="text-3xl">📍</span>
             </div>

             <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Siège Social</h1>

             <div className="space-y-2 text-xl font-light text-white/80">
               <p>Brignais (69)</p>
               <p className="font-bold text-white">Pas de robot, une vraie équipe.</p>
             </div>

             <div className="pt-12 border-t border-white/10 text-white/50 text-sm">
                <p>Standard ouvert du Lundi au Vendredi</p>
                <p>9h00 - 18h00</p>
             </div>
          </div>
        </div>

        {/* RIGHT: ACTION */}
        <div className="bg-white p-12 lg:p-24 flex flex-col justify-center items-center text-center">
          <div className="space-y-8 max-w-lg">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
               Besoin d'une solution <span className="text-primary">immédiate ?</span>
             </h2>
             <p className="text-lg text-secondary/60">
               Nos experts sont disponibles pour auditer vos besoins en 15 minutes.
             </p>

             <div className="p-8 border-2 border-dashed border-border rounded-brand bg-muted/30">
               <p className="mb-4 font-bold text-sm text-secondary/40">MODULE DE PRISE DE RDV</p>
               <Link href="/rendez-vous">
                 <Button size="lg" className="w-full text-lg shadow-lg">
                   PRENDRE RDV (15min)
                 </Button>
               </Link>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
