import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import nl from './i18n/nl.json';

i18n
  .use(new LanguageDetector())
  .use(initReactI18next)
  .init({
    resources: {
      nl: { i18n: { ...nl } },
      en: { i18n: { ...en } }
    },
    lng: 'nl',
    fallbackLng: 'nl',

    ns: ['i18n'],
    defaultNS: 'i18n',

    interpolation: {
      escapeValue: true,
      formatSeparator: '.'
    },

    react: { wait: true },

    keySeparator: '.'
  });

export default i18n;
