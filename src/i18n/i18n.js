import i18next from "i18next";
import translations from "../locales/pt-BR/translation.json";

i18next.init({
  lng: "pt-BR",
  debug: true,
  resources: {
    "pt-BR": {
      translation: translations,
    },
  },
});

export default i18next;
