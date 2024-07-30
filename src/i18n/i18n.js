import i18next from "i18next";
import ptbr from "../locales/ptbr.json";

i18next.init({
  lng: "pt-BR",
  debug: true,
  resources: {
    "pt-BR": {
      translation: ptbr,
    },
  },
});

export default i18next;
