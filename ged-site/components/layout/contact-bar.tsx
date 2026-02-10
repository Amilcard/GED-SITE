import { Button } from '@/components/ui/button';
import config from '../../site-config.json';
import Link from 'next/link';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

export function ContactBar() {
  const { contact_bar } = config.navigation;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-100 shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.05)] p-4 md:p-0">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:h-20">

          {/* Label Mobile Only */}
          <span className="md:hidden text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Permanence Éducative
          </span>

          <div className="flex w-full md:w-auto gap-2 md:gap-4 justify-center md:justify-start">

             {/* WHATSAPP - GHOST STYLE - ORANGE ICON */}
             <Link href={contact_bar.whatsapp.action} target="_blank" className="flex-1 md:flex-none">
               <Button variant="ghost" className="w-full text-primary hover:bg-[#FF5722]/5 font-bold rounded-pill md:px-6 flex items-center gap-2 border border-transparent hover:border-[#FF5722]/20">
                 <MessageSquare size={20} className="text-[#FF5722]" strokeWidth={2.5} />
                 <span className="hidden md:inline">{contact_bar.whatsapp.label}</span>
                 <span className="md:hidden">WhatsApp</span>
               </Button>
             </Link>

             {/* PHONE - OUTLINE STYLE - ORANGE ICON */}
             <Link href={contact_bar.phone.action} className="flex-1 md:flex-none">
               <Button variant="outline" className="w-full bg-white border-gray-200 text-primary hover:bg-[#FF5722]/5 hover:border-[#FF5722]/30 font-bold rounded-pill md:px-6 flex items-center gap-2">
                 <Phone size={20} className="text-[#FF5722]" strokeWidth={2.5} />
                 <span className="hidden md:inline">{contact_bar.phone.label}</span>
                 <span className="md:hidden">Appeler</span>
               </Button>
             </Link>

          </div>

          {/* CALENDLY CTA - OUTLINE STYLE - BLUE ICON */}
          <div className="w-full md:w-auto">
             <Link href={contact_bar.calendly.action} target="_blank">
               <Button variant="outline" className="w-full bg-white border-gray-200 text-primary hover:bg-[#00B0FF]/5 hover:border-[#00B0FF]/30 font-bold rounded-pill md:px-6 shadow-sm flex items-center gap-2">
                 <Calendar size={20} className="text-[#00B0FF]" strokeWidth={2.5} />
                 <span>{contact_bar.calendly.label}</span>
               </Button>
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
