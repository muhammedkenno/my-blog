"use client"

import { useLanguage } from "@/components/LanguageProvider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex overflow-hidden rounded-full border border-slate-800/80 bg-slate-950/70 text-xs font-semibold text-slate-200 shadow-sm">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 transition ${language === "en" ? "bg-sky-500/20 text-white" : "bg-transparent text-slate-300 hover:bg-slate-900/70"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`px-3 py-1 transition ${language === "ar" ? "bg-sky-500/20 text-white" : "bg-transparent text-slate-300 hover:bg-slate-900/70"}`}
      >
        AR
      </button>
    </div>
  )
}
