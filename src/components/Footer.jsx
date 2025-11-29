import { infosPiedDePage } from "../config/site.config";

export default function Footer() {
  const date = new Date();

  return (
    <footer className="bg-gray-950 border-t border-gray-900 py-8 text-center text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {date.getFullYear()} {infosPiedDePage.nomEntreprise.label}. TOUS
          DROITS RÉSERVÉS.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-gray-300 transition-colors uppercase"
          >
            {/* MODIFIER LE TEXTE LIEN MENTIONS LEGALES ICI */}
            MENTIONS LÉGALES
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors uppercase"
          >
            {/* MODIFIER LE TEXTE LIEN CONFIDENTIALITE ICI */}
            CONFIDENTIALITÉ
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors uppercase"
          >
            {/* MODIFIER LE TEXTE LIEN CGV ICI */}
            CGV
          </a>
        </div>

        <p>
          {/* MODIFIER LE CREDIT CREATEUR SITE ICI */}
          SITE RÉALISÉ PAR{" "}
          <span className="text-indigo-500 font-bold uppercase">
            StellarWeb Agency
          </span>
        </p>
      </div>
    </footer>
  );
}
