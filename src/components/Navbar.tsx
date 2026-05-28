"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/components/LanguageProvider"
import { LanguageToggle } from "@/components/LanguageToggle"

export function Navbar() {
  const { language } = useLanguage()
  const pathname = usePathname()

  const labels = {
    home: language === "ar" ? "المدونة" : "Blog",
    projects: language === "ar" ? "المشاريع" : "Projects",
    about: language === "ar" ? "عني" : "About",
    contact: language === "ar" ? "تواصل" : "Contact",
    name: language === "ar" ? "محمد كنو" : "Muhammed Kenno",
  }

  const navLinks = [
    { href: "/", label: labels.home, match: (path: string) => path === "/" },
    { href: "/projects", label: labels.projects, match: (path: string) => path === "/projects" || path.startsWith("/projects/") },
    { href: "/about", label: labels.about, match: (path: string) => path === "/about" },
    { href: "/contact", label: labels.contact, match: (path: string) => path === "/contact" },
  ]

  return (
    <nav dir="ltr" className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-950/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-slate-100">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/25">MK</span>
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{labels.name}</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          {navLinks.map((link) => {
            const isActive = link.match(pathname || "")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${isActive ? "text-cyan-200 font-semibold" : "hover:text-cyan-200"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}
