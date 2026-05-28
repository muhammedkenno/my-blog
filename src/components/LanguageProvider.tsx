"use client"

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

type Language = "en" | "ar"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = localStorage.getItem("site-language")
    if (stored === "ar" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("site-language", language)
    document.documentElement.lang = language === "ar" ? "ar" : "en"
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
