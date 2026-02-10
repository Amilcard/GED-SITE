export function DifferenceSection() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block py-1 px-3 rounded-md bg-secondary/10 text-secondary-700 text-xs font-bold uppercase tracking-wider mb-4">
              Notre Approche
            </span>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Ce qui fait la différence.
            </h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Un séjour ne se résume pas à un départ. C’est le cadre sur place qui compte.
              Nous veillons à ce que chaque environnement soit cohérent, stable et réellement utile.
              <br /><br />
              Pas de promesses impossibles. Juste un cadre qui tient.
            </p>
          </div>
        </div>

        {/* Visual Separator if needed, consistent with App style (e.g. subtle HR) */}
        <div className="w-full h-px bg-gray-100 mt-16 md:mt-24" />
      </div>
    </section>
  );
}
