import { HeroAppAlign } from '@/components/home/hero-app-align';
import { ManifestoBanner } from '@/components/home/manifesto-banner';
import { ProcessStepper } from '@/components/home/process-stepper';
import { ValuePropSection } from '@/components/home/value-prop-section'; // Replaces DistanciationBlock
import { IconLedCards } from '@/components/home/icon-led-cards';
import { TimelineSimple } from '@/components/home/timeline-simple';
import { StatsStrip } from '@/components/home/stats-strip';
import { ContactSimple } from '@/components/home/contact-simple';
import { FloatingAppButton } from '@/components/home/floating-app-button';
import { GoogleReviewsWidget } from '@/components/home/google-reviews';
import { CalendarWidget } from '@/components/home/calendar-widget';

export default function MarketingHomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Hero (Message rassurant) */}
      <HeroAppAlign />

      {/* 2. Manifesto Banner (Statement institutionnel) */}
      <ManifestoBanner />

      {/* 4. Process Stepper (4 étapes visuelles) */}
      <ProcessStepper />

      {/* 5. Timeline Simple (Avant/Pendant/Après avec visuels) */}
      <TimelineSimple />

      {/* 6. NEW Value Prop Section (Replaces DistanciationBlock) */}
      <ValuePropSection />

      {/* 7. Icon-Led Cards (Rôles clairs) */}
      <IconLedCards />

      {/* 8. Stats Strip (Crédibilité) */}
      <StatsStrip />

      {/* 9. Contact (Simple) */}
      <ContactSimple />

      {/* 10. Calendar Widget - Real-time Availability */}
      <CalendarWidget agencadaUrl="https://www.agencada.com" />

      {/* 11. Social Proof (Google Reviews) - Above Footer */}
      <GoogleReviewsWidget />

      {/* Floating Action Button */}
      <FloatingAppButton />
    </main>
  );
}
