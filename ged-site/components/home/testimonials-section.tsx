export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Nous sommes plus que satisfaits des services de cette association, seul bémol qui explique 4 étoiles est le coût plus élevé des séjours que des organismes classiques. Ce tarif est justifié par les recherches, les suivis effectués et les bilans.",
      author: "Benjamin Dumel",
      role: "Avis Google",
      rating: 4,
    },
    {
      quote: "Nous voudrions simplement féliciter l'ensemble de l'équipe pour le travail effectué. Trois séjours organisés dans la précipitation sur Toussaint et nous avons ce matin reçu les bilans des séjours après avoir été tenu au courant tout au long.",
      author: "Tom Dumoulin",
      role: "Avis Google",
      rating: 4,
    },
    {
      quote: "En quelques jours, j'ai pu avoir une réponse rapide et claire sur leurs colonies de vacances (3 enfants de 9 à 14 ans). Descriptif et propositions envoyés en quelques heures.",
      author: "Julien Vodaric",
      role: "Avis Google",
      rating: 5,
    },
    {
      quote: "Bon retour, mon enfant a été ravi de son séjour, je conseille vraiment.",
      author: "François Order",
      role: "Avis Google",
      rating: 5,
    },
    {
      quote: "Disponible et réactive !!! Continuez ainsi.",
      author: "Lilou Robin",
      role: "Avis Google",
      rating: 5,
    },
    {
      quote: "Suite à des annulations de colonie, en quelques jours l'équipe nous a proposé 2 à 3 séjours par enfant ! Hâte de voir comment ils se déroulent.",
      author: "Adrien P.",
      role: "Avis Google",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Ce qu'ils en disent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retours de professionnels du terrain.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-brand p-8 shadow-card border-l-4 border-secondary"
            >
              {/* Quote */}
              <blockquote className="text-lg text-primary leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author & Rating */}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <div className="font-bold text-primary">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-secondary" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
