const Testimonials = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <section className="bg-gray-900 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          {/* MODIFIER LA CATEGORIE/SOUS-TITRE DE LA SECTION AVIS ICI */}
          <h2 className="text-sm font-bold text-indigo-500 tracking-[0.2em] uppercase mb-3">
            SECTION AVIS
          </h2>
          {/* MODIFIER LE TITRE PRINCIPAL DE LA SECTION AVIS ICI */}
          <h3 className="text-4xl font-black uppercase">TITRE TÉMOIGNAGES</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative"
            >
              <div className="text-2xl mb-4 text-yellow-500">★★★★★</div>
              {/* MODIFIER LE TEXTE DE L'AVIS CLIENT ICI */}
              <p className="text-gray-300 italic mb-6">"{lorem}"</p>
              <div className="font-bold flex items-center">
                <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
                <div>
                  {/* MODIFIER LE NOM DU CLIENT ICI */}
                  NOM CLIENT {item}
                  <div className="text-indigo-500 text-sm uppercase">
                    {/* MODIFIER LA SOURCE DE L'AVIS (GOOGLE, ETC) ICI */}
                    SOURCE AVIS
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
