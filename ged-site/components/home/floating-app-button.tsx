import Link from 'next/link';
import { Smartphone } from 'lucide-react';

export function FloatingAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/app-download"
        className="
          flex items-center gap-3 pl-4 pr-5 py-3
          bg-white hover:bg-gray-50 text-primary
          rounded-full shadow-lg border border-gray-100
          transition-all hover:-translate-y-1 hover:shadow-xl
        "
      >
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary-900">
          <Smartphone className="w-4 h-4" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs text-gray-500 font-medium">Pour les jeunes</span>
          <span className="text-sm font-bold leading-none">Voir sur l'app</span>
        </div>
      </Link>
    </div>
  );
}
