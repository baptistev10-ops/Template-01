// About
export const aboutSection = {
  // Titres de l'écran d'accueil
  homeTitle: {
    firstTitle: "TITRE PRINCIPAL",
    secondTitle: "ACCROCHEUR ICI",
  },

  // Paragraphe déscription
  homeDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
};

// Contact
// Titre
export const titleContact = {
  title: "Contact",
};

// Importer l'adresse de votre entreprise
export const googleMaps = {
  googleMaps: { address: "Paris" },
  // Exemple "75 rue du Plouich, 59259 Aubers"
};

// Ajouter des infos
export const labelContacts = [
  {
    label: "LABEL ADRESSE :",
    contact: "123 Rue Lorem Ipsum, 00000 Ville",
    // Mettre à true pour que l'adresse indiqué soit cliquable
    click: true,
    // Indiquer le mode (mail, phone ou lien)
    mode: "lien",
    mail: "",
    phone: "",
    link: "https://effervescent-pithivier-a313e9.netlify.app/",
    // Mettre à true si le lien doit s'ouvrir dans une nouvelle page
    targetBlank: true,
  },
  {
    label: "LABEL TÉLÉPHONE :",
    contact: "01 23 45 67 89",
    click: true,
    mode: "phone",
    mail: "",
    phone: "0781705561",
    link: "",
    targetBlank: false,
  },
  {
    label: "LABEL EMAIL",
    contact: "contact@email.com",
    click: true,
    mode: "mail",
    mail: "",
    phone: "",
    link: "contact@email.com",
    targetBlank: false,
  },
];

export const infosPiedDePage = {
  // Renseigner le nom de l'entreprise
  nomEntreprise: { label: "NOM DE L'ENTREPRISE" },
};
