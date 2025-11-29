const About = () => {
  const loremLong =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const loremShort =
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <section id="about" className="bg-gray-900 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image à gauche */}
        <div
          className="aspect-4/3 bg-gray-800 rounded-2xl relative overflow-hidden border border-gray-700 shadow-xl"
          data-aos="fade-right"
        >
          <div className="absolute inset-0 bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-500 font-bold text-2xl text-center p-4">
            {/* MODIFIER L'IMAGE DE PRESENTATION OU LE TEXTE PLACEHOLDER ICI */}
            IMAGE PRÉSENTATION / ÉQUIPE
          </div>
        </div>

        {/* Texte à droite */}
        <div data-aos="fade-left">
          {/* MODIFIER LA CATEGORIE/SOUS-TITRE DE LA SECTION A PROPOS ICI */}
          <h2 className="text-sm font-bold text-indigo-500 tracking-[0.2em] uppercase mb-3">
            SECTION INFO
          </h2>
          {/* MODIFIER LE TITRE PRINCIPAL DE LA SECTION A PROPOS ICI */}
          <h3 className="text-4xl font-black mb-8 uppercase">
            TITRE PRÉSENTATION
          </h3>
          {/* MODIFIER LE PARAGRAPHE LONG DE PRESENTATION ICI */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {loremLong}
          </p>
          {/* MODIFIER LE PARAGRAPHE COURT DE PRESENTATION ICI */}
          <p className="text-gray-400 leading-relaxed mb-8">{loremShort}</p>
          {/* MODIFIER LE TEXTE DU LIEN/BOUTON DETAIL ICI */}
          <button className="text-indigo-400 font-bold border-b-2 border-indigo-500/30 hover:border-indigo-500 pb-1 transition-all uppercase">
            LIEN VERS DÉTAIL &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
