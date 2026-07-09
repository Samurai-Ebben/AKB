import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import de from './locales/de.json'
import en from './locales/en.json'

const supportedLanguages = ['en', 'de']
const savedLanguage = localStorage.getItem('language')
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  localStorage.setItem('language', language)
  document.documentElement.lang = language
})

document.documentElement.lang = initialLanguage

export default i18n
