import { useState, useEffect } from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // MODIFIER LES TITRES ET LES LIENS DU MENU DE NAVIGATION ICI
  const navLinks = [
    { title: "ACCUEIL", href: "#hero" },
    { title: "SERVICES", href: "#services" },
    { title: "RÉALISATIONS", href: "#portfolio" },
    { title: "À PROPOS", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = "";
      const sections = navLinks.map((link) => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 150;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            currentSection = section;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-gray-950/95 backdrop-blur-md py-3 border-b border-gray-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="shrink-0 font-black text-2xl tracking-wider text-white uppercase cursor-pointer z-50"
          >
            {/* MODIFIER LE NOM DU LOGO TEXTE ICI */}
            LOGO
            <span className="text-indigo-500">.</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeLink === sectionId;
              return (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setActiveLink(sectionId)}
                  className={`text-sm font-bold tracking-widest transition-colors relative group py-2
                    ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {link.title}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-indigo-500 transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                  ></span>
                </a>
              );
            })}
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-bold text-sm transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20"
            >
              {/* MODIFIER LE TEXTE DU BOUTON CONTACT (DESKTOP) ICI */}
              CONTACT
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none transition-transform active:scale-90"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-950 border-b border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6 text-center">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeLink === sectionId;
            return (
              <a
                key={link.title}
                href={link.href}
                onClick={() => handleMobileLinkClick(sectionId)}
                className={`text-lg font-bold tracking-widest block py-2
                  ${
                    isActive
                      ? "text-indigo-400 bg-gray-900 rounded-lg"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {link.title}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-indigo-600 text-white px-6 py-4 rounded font-bold text-sm uppercase shadow-lg inline-block w-full"
          >
            {/* MODIFIER LE TEXTE DU BOUTON CONTACT (MOBILE) ICI */}
            CONTACTEZ-NOUS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
