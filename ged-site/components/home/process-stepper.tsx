export function ProcessStepper() {
  const steps = [
    {
      number: "1",
      title: "Repérage",
      description: "On repère ce qui est cohérent pour le jeune.",
    },
    {
      number: "2",
      title: "Participation",
      description: "Le jeune consulte, réagit, motive son choix.",
    },
    {
      number: "3",
      title: "Validation",
      description: "L’équipe éducative tranche, on verrouille le cadre.",
    },
    {
      number: "4",
      title: "Suivi du séjour",
      description: "Préparation, lien pendant le séjour, bilan au retour.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Le séjour commence avant le départ. Et continue après.
          </h2>
        </div>

        {/* Stepper Grid */}
        <div className="relative mb-12">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-gray-200 shadow-card flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-primary bg-secondary/10 inline-block px-6 py-2 rounded-brand">
            Un séjour validé, c’est le début du travail.
          </p>
        </div>
      </div>
    </section>
  );
}
