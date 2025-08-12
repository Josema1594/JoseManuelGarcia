import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './locales/es/common.json'
import en from './locales/en/common.json'
import fr from './locales/fr/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'fr'],
    resources: {
      es: { common: es },
      en: { common: en },
      fr: { common: fr }
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  })

export default i18n
