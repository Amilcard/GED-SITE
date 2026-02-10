import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Smartphone, Users, Activity, CheckCircle2, FileText } from 'lucide-react';

export function ValuePropSection() {
  return (
    <section className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content - CityCrunch B2B Tone */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              PLUS QU'UN CATALOGUE,<br/>
              <span className="text-secondary">UN OUTIL DE MÉDIATION.</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              L'application est votre support d'échange. Elle permet de construire le choix <strong>AVEC</strong> le jeune, pas à sa place.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">DÉCLENCHEUR D'ENVIE</p>
                  <p className="text-gray-300">
                    Interface visuelle 'Kids Mode' pour capter l'intérêt du jeune et sortir du refus.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">CHOIX PARTAGÉ</p>
                  <p className="text-gray-300">
                    Vous validez le cadre (Pro), il valide l'activité (Fun). Le contrat moral est scellé.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <Activity className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">SUIVI ÉDUCATIF</p>
                  <p className="text-gray-300">
                    Accès direct au journal de bord et aux observations terrain pendant le séjour.
                  </p>
                </div>
              </li>
            </ul>

            <Button 
              asChild 
              className="btn-pill btn-primary bg-secondary text-primary hover:bg-secondary/90 border-none px-8 py-6 text-lg font-bold"
            >
              <Link href="https://app.groupeetdecouverte.fr" target="_blank">
                VOIR LA DÉMO MÉDIATION
              </Link>
            </Button>
          </div>

          {/* Visual: Two-Person Mediation Scene (Educator + Teen) */}
          <div className="relative">
            {/* Split Screen Effect: Educator View + Teen View */}
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Container for both screens */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Left: Educator/Pro View */}
                <div className="relative aspect-[9/16] bg-gray-900 border-4 border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-white flex flex-col">
                    {/* Pro Header */}
                    <div className="bg-primary h-16 flex items-center justify-center">
                      <span className="text-white font-bold text-xs uppercase tracking-wider">MODE PRO</span>
                    </div>
                    {/* Pro Content */}
                    <div className="p-3 space-y-2 flex-1 bg-gray-50">
                      <div className="h-12 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                        <CheckCircle2 className="w-5 h-5 text-blue-900" />
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-full bg-gray-200 rounded" />
                        <div className="h-2 w-3/4 bg-gray-200 rounded" />
                      </div>
                      <div className="mt-4 p-2 bg-white rounded-lg shadow-sm border">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-[10px] font-bold text-gray-700">Suivi actif</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Teen/Kids Mode View */}
                <div className="relative aspect-[9/16] bg-gray-900 border-4 border-gray-700 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-white flex flex-col">
                    {/* Kids Header */}
                    <div className="bg-gradient-to-r from-secondary to-secondary/80 h-16 flex items-center justify-center">
                      <span className="text-white font-bold text-xs uppercase tracking-wider">MON ESPACE</span>
                    </div>
                    {/* Kids Content */}
                    <div className="p-3 space-y-2 flex-1">
                      <div className="h-16 bg-white rounded-xl flex flex-col items-center justify-center border-2 border-secondary shadow-md p-2">
                        <FileText className="w-6 h-6 text-secondary mb-1" />
                        <span className="text-[8px] font-bold text-primary">Séjour A</span>
                      </div>
                      <div className="h-16 bg-white rounded-xl flex flex-col items-center justify-center border-2 border-secondary shadow-md p-2">
                        <FileText className="w-6 h-6 text-secondary mb-1" />
                        <span className="text-[8px] font-bold text-primary">Séjour B</span>
                      </div>
                      <div className="mt-4 p-2 bg-white/90 backdrop-blur rounded-lg border-2 border-dashed border-secondary">
                        <p className="text-[10px] text-center font-bold text-primary">
                          Choix visuel<br/>des options
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Connection Visual between screens */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white p-3 rounded-full shadow-2xl border-4 border-secondary">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
