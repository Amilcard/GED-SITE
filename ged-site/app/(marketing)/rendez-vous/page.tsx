export default function RendezVousPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Prendre rendez-vous
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Choisissez votre créneau pour échanger avec notre équipe.
            <br className="hidden md:block" />
            Nous vous répondons dans les 24h.
          </p>
        </div>
      </section>

      {/* TidyCal Embed */}
      <section className="flex-1 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-brand overflow-hidden">
            <iframe
              src="https://tidycal.com/groupeetdecouverte/30mns-pour-echanger-1jj658e"
              title="Prendre rendez-vous - TidyCal"
              className="w-full h-[800px] md:h-[900px]"
              frameBorder="0"
              loading="lazy"
            />
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 bg-gray-50 rounded-xl border border-gray-100 p-8">
            <h3 className="text-xl font-heading font-bold text-primary mb-4 text-center">
              Vous préférez nous contacter autrement ?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
              <a
                href="tel:+33423161671"
                className="text-primary hover:text-secondary underline font-medium"
              >
                📞 04 23 16 16 71
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href="https://wa.me/33628057667"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary underline font-medium"
              >
                💬 WhatsApp : 06 28 05 76 67
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href="mailto:contact@groupeetdecouverte.fr"
                className="text-primary hover:text-secondary underline font-medium"
              >
                ✉️ contact@groupeetdecouverte.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
