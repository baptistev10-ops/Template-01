const ServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-indigo-500 mb-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
    />
  </svg>
);

const Services = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <section id="services" className="bg-gray-950 py-24 md:py-32 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          {/* MODIFIER LA CATEGORIE/SOUS-TITRE DE LA SECTION SERVICES ICI */}
          <h2 className="text-sm font-bold text-indigo-500 tracking-[0.2em] uppercase mb-3">
            CATÉGORIE SECTION
          </h2>
          {/* MODIFIER LE TITRE PRINCIPAL DE LA SECTION SERVICES ICI */}
          <h3 className="text-4xl md:text-6xl font-black uppercase mb-6">
            TITRE SECTION SERVICES
          </h3>
          {/* MODIFIER LA DESCRIPTION GLOBALE DES SERVICES ICI */}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500 hover:bg-gray-800/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-gray-800 w-fit p-3 rounded-lg mb-6 group-hover:bg-indigo-900/30 transition-colors">
                {/* MODIFIER L'ICONE DU SERVICE ICI (DANS LE COMPOSANT SERVICEICON) */}
                <ServiceIcon />
              </div>
              {/* MODIFIER LE NOM DU SERVICE INDIVIDUEL ICI */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors uppercase">
                NOM SERVICE {item}
              </h3>
              {/* MODIFIER LA DESCRIPTION DU SERVICE INDIVIDUEL ICI */}
              <p className="text-gray-400 mb-6 leading-relaxed grow">{lorem}</p>
              <div className="mt-auto pt-6 border-t border-gray-800">
                {/* MODIFIER LE TEXTE DU LIEN EN SAVOIR PLUS ICI */}
                <span className="text-sm font-bold text-indigo-300 uppercase flex items-center gap-2 cursor-pointer hover:gap-4 transition-all">
                  EN SAVOIR PLUS &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="zoom-in">
          {/* MODIFIER LE TEXTE DU BOUTON D'ACTION DE LA SECTION SERVICES ICI */}
          <button className="bg-white text-indigo-950 hover:bg-gray-200 font-black py-5 px-12 rounded-full text-lg transition-all shadow-xl shadow-indigo-900/20 hover:-translate-y-1 uppercase">
            DÉMARRER UN PROJET AVEC NOUS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
