// About

// Contact
// Titre
export const titleContact = {
  title: "Contact",
};

// Importer l'adresse de votre entreprise
export const googleMaps = {
  googleMaps: { address: "24 rue Emile Basly, 62149 Cuinchy" },
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
    lien: "https://effervescent-pithivier-a313e9.netlify.app/",
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
    lien: "",
    targetBlank: false,
  },
  {
    label: "LABEL EMAIL",
    contact: "contact@email.com",
    click: true,
    mode: "mail",
    mail: "",
    phone: "",
    lien: "contact@email.com",
    targetBlank: false,
  },
];

export const infosPiedDePage = {
  // Renseigner le nom de l'entreprise
  nomEntreprise: { label: "NOM DE L'ENTREPRISE" },
};

export const VALID_LICENSES = [
  "A9F2-ZK1B-H72S-PLQ8",
  "E4A9-8B3F-FD19-29C1-774A",
];
