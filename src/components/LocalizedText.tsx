"use client"

import { useLanguage } from "@/components/LanguageProvider"

type LocalizedTextProps = {
  en: string
  ar: string
  tag?: keyof JSX.IntrinsicElements
  className?: string
}

export function LocalizedText({ en, ar, tag = "p", className }: LocalizedTextProps) {
  const { language } = useLanguage()
  const Component = tag as any

  return (
    <Component className={className} dir={language === "ar" ? "rtl" : "ltr"}>
      {language === "ar" ? ar : en}
    </Component>
  )
}
