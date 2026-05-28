"use client"

import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"

export function LocalizedBackToBlogLink() {
  const { language } = useLanguage()

  return (
    <Link
      href="/"
      className="text-slate-400 hover:text-white transition-colors text-sm"
    >
      ← {language === "ar" ? "العودة إلى المدونة" : "Back to blog"}
    </Link>
  )
}
