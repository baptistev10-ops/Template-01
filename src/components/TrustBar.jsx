const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 text-indigo-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TrustBar = () => {
  return (
    <section className="bg-gray-900 border-y border-gray-800 py-12 px-6">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center gap-3">
          <CheckIcon /> {/* MODIFIER LE PREMIER ARGUMENT DE CONFIANCE ICI */}
          <span className="font-bold text-lg">ARGUMENT FORT 1</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <CheckIcon /> {/* MODIFIER LE DEUXIEME ARGUMENT DE CONFIANCE ICI */}
          <span className="font-bold text-lg">ARGUMENT FORT 2</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          {/* MODIFIER LE CHIFFRE CLE ICI */}
          <span className="font-black text-3xl text-indigo-500">XX+</span>{" "}
          {/* MODIFIER LE LABEL DU CHIFFRE CLE ICI */}
          <span className="font-bold text-lg mt-1">CHIFFRE CLÉ</span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
