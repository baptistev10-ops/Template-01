const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-gray-950 overflow-hidden px-6 pt-20"
    >
      {/* Forme de fond décorative */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-indigo-900/20 to-transparent skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Texte Hero */}
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase">
            {/* MODIFIER LA PREMIERE PARTIE DU TITRE HERO ICI */}
            TITRE PRINCIPAL <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
              {/* MODIFIER LA PARTIE ACCROCHEUSE/COLOREE DU TITRE HERO ICI */}
              ACCROCHEUR ICI
            </span>
          </h1>
          {/* MODIFIER LE PARAGRAPHE D'ACCROCHE DU HERO ICI */}
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded font-bold transition-all shadow-lg shadow-indigo-500/30 hover:-translate-y-1"
            >
              {/* MODIFIER LE TEXTE DU BOUTON PRINCIPAL ICI */}
              ACTION PRIMAIRE
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 px-8 py-4 rounded font-bold transition-all"
            >
              {/* MODIFIER LE TEXTE DU BOUTON SECONDAIRE ICI */}
              ACTION SECONDAIRE
            </a>
          </div>
        </div>

        {/* Image Hero */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="hidden md:block aspect-square bg-gray-800 rounded-3xl border-4 border-gray-800 shadow-2xl shadow-indigo-900/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-gray-900 to-indigo-900/40 flex items-center justify-center text-gray-600 font-black text-4xl text-center p-4">
            {/* MODIFIER L'IMAGE PRINCIPALE DU HERO OU LE TEXTE PLACEHOLDER ICI */}
            IMAGE / VISUEL PRINCIPAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
