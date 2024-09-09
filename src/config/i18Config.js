import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import spanishContent from "../lang/es.json";
import englishContent from "../lang/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {translation:spanishContent},
    en: {translation:englishContent},
  },
  lng:'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
