export function StatsStrip() {
  const stats = [
    { value: "15+", label: "années d'expérience" },
    { value: "98%", label: "taux de satisfaction" },
    { value: "500+", label: "séjours organisés / an" },
    { value: "24h", label: "délai moyen de réponse" },
  ];

  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
