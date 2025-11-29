const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-950 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* MODIFIER LA CATEGORIE/SOUS-TITRE DE LA SECTION PORTFOLIO ICI */}
          <h2 className="text-sm font-bold text-indigo-500 tracking-[0.2em] uppercase mb-3">
            CATÉGORIE SECTION
          </h2>
          {/* MODIFIER LE TITRE PRINCIPAL DE LA SECTION PORTFOLIO ICI */}
          <h3 className="text-4xl md:text-5xl font-black uppercase">
            TITRE GALERIE
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            "bg-indigo-900",
            "bg-purple-900",
            "bg-blue-900",
            "bg-slate-800",
            "bg-zinc-800",
            "bg-indigo-950",
          ].map((bgColor, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`aspect-square ${bgColor} rounded-xl border border-gray-800/50 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-all duration-500`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-indigo-900/20 transition-colors"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {/* MODIFIER LE NOM DU PROJET ICI */}
                <h4 className="font-bold text-xl uppercase">
                  NOM PROJET {index + 1}
                </h4>
                {/* MODIFIER LA CATEGORIE OU LE TAG DU PROJET ICI */}
                <p className="text-indigo-300 text-sm">TAG / CATÉGORIE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
