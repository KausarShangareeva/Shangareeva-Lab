import { createContext, useContext, useState } from 'react'
import t from './translations.json'

const LanguageContext = createContext(null)

export const LANGUAGES = [
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
]

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru')

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
