import config from '../../site-config.json';
import { AppCard } from '@/components/ui/app-card';

export function SolutionsFilter() {
  const { solutions_filter } = config.pages_content.home_section;

  // Mapping des images par ID (placeholders thématiques)
  const getSolutionImage = (id: string) => {
    switch (id) {
      case 'inclusion': return 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop'; // Social group
      case 'renforce': return 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1000&auto=format&fit=crop'; // Hiking support
      case 'rupture': return 'https://images.unsplash.com/photo-1533240332313-0dbdd3199061?q=80&w=1000&auto=format&fit=crop'; // Mountain challenge
      default: return 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1000&auto=format&fit=crop';
    }
  };

  const getSolutionPrice = (id: string) => {
    switch (id) {
      case 'inclusion': return '65€/j';
      case 'renforce': return '180€/j';
      case 'rupture': return '240€/j';
      default: return undefined;
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 -mt-12 relative z-10 px-4 max-w-6xl mx-auto">
      {solutions_filter.map((solution) => (
        <AppCard
          key={solution.id}
          title={solution.title}
          subtitle={solution.desc}
          image={getSolutionImage(solution.id)}
          price={getSolutionPrice(solution.id)}
          tag="DISPOSITIF ASE"
          location="France Entière"
          features={['Habilité', 'Transport Inclus']}
        />
      ))}
    </div>
  );
}
