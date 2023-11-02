import enTranslation from "./locales/en.json";
import noTranslation from "./locales/no.json";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    no: {
      translation: noTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
