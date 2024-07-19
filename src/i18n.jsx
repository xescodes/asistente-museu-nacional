// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Exhibitions": "Exhibitions",
      "Visit": "Visit",
      "Blog": "Blog",
      "Assistant": "Assistant",
      "History": "History"
    }
  },
  es: {
    translation: {
      "Home": "Inicio",
      "Exhibitions": "Exposiciones",
      "Visit": "Visitar",
      "Blog": "Blog",
      "Assistant": "Asistente",
      "History": "Historial"
    }
  },
  ca: {
    translation: {
      "Home": "Inici",
      "Exhibitions": "Exposicions",
      "Visit": "Visitar",
      "Blog": "Blog",
      "Assistant": "Assistent",
      "History": "Historial"
    }
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "Exhibitions": "Expositions",
      "Visit": "Visiter",
      "Blog": "Blog",
      "Assistant": "Assistant",
      "History": "Historique"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;