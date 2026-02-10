import config from '../../site-config.json';

export function ProcessTimeline() {
  // @ts-ignore
  const process_timeline = config.pages_content.process_timeline || {
    title: "Comment ça marche ?",
    subtitle: "Un processus simple et sécurisé pour vos placements.",
    steps: [
       { "icon": "📝", "actor": "VOUS", "step": "1", "title": "Demande Express", "desc": "Remplissez le formulaire de diagnostic en 2 min." },
       { "icon": "🔍", "actor": "NOUS", "step": "2", "title": "Analyse 360°", "desc": "Étude de faisabilité et sécurité immédiate." },
       { "icon": "🤝", "actor": "NOUS", "step": "3", "title": "Matching", "desc": "Proposition du lieu de vie adapté au profil." },
       { "icon": "✅", "actor": "VOUS", "step": "4", "title": "Validation", "desc": "Conventionnement et départ du jeune." }
    ]
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
            {process_timeline.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {process_timeline.subtitle}
          </p>
        </div>

        {/* TIMELINE GRID */}
        <div className="relative">
          {/* CONNECTING LINE (Desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-brand/20 via-primary/20 to-brand/20 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process_timeline.steps.map((step: any, index: number) => (
              <div key={index} className="relative flex flex-col items-center text-center group">

                {/* STEP CIRCLE */}
                <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-card flex flex-col items-center justify-center mb-6 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-4xl mb-1">{step.icon}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${step.actor === 'VOUS' ? 'bg-secondary text-white' : 'bg-primary text-white'}`}>
                    {step.actor}
                  </span>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold border-2 border-white">
                    {step.step}
                  </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
