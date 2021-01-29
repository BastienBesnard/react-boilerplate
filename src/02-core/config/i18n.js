import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationFR from "../../01-assets/locales/fr/translation.json";

const resources = {
    fr: { translation: translationFR }
};

i18n.use(initReactI18next) // Pass i18n down to react-i18next
    .init({
        resources,
        lng: "fr",

        interpolation: {
            escapeValue: false // React is already safes from xss
        }
    });

export default i18n;
