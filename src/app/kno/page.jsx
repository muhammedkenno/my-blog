"use client"

import { useState } from "react"
import { LocalizedText } from "@/components/LocalizedText"
import { useLanguage } from "@/components/LanguageProvider"

const CATEGORIES = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "frontend", en: "Frontend", ar: "الواجهة الأمامية" },
  { id: "backend", en: "Backend", ar: "الواجهة الخلفية" },
  { id: "tools", en: "Tools", ar: "الأدوات" },
]

const ACCENT = {
  sky:     { icon: "bg-sky-500/15 text-sky-300 ring-sky-400/25",     bar: "bg-sky-400",     badge: "bg-sky-500/15 text-sky-300" },
  blue:    { icon: "bg-blue-500/15 text-blue-300 ring-blue-400/25",   bar: "bg-blue-400",   badge: "bg-blue-500/15 text-blue-300" },
  cyan:    { icon: "bg-cyan-500/15 text-cyan-300 ring-cyan-400/25",   bar: "bg-cyan-400",   badge: "bg-cyan-500/15 text-cyan-300" },
  green:   { icon: "bg-green-500/15 text-green-300 ring-green-400/25", bar: "bg-green-400", badge: "bg-green-500/15 text-green-300" },
  emerald: { icon: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/25", bar: "bg-emerald-400", badge: "bg-emerald-500/15 text-emerald-300" },
  purple:  { icon: "bg-purple-500/15 text-purple-300 ring-purple-400/25", bar: "bg-purple-400", badge: "bg-purple-500/15 text-purple-300" },
  orange:  { icon: "bg-orange-500/15 text-orange-300 ring-orange-400/25", bar: "bg-orange-400", badge: "bg-orange-500/15 text-orange-300" },
  amber:   { icon: "bg-amber-500/15 text-amber-300 ring-amber-400/25", bar: "bg-amber-400",  badge: "bg-amber-500/15 text-amber-300" },
  slate:   { icon: "bg-slate-600/30 text-slate-300 ring-slate-400/20", bar: "bg-slate-400",  badge: "bg-slate-600/30 text-slate-300" },
  white:   { icon: "bg-white/10 text-white ring-white/20",            bar: "bg-white/80",    badge: "bg-white/10 text-white" },
}

const SKILLS = [
  {
    name: "React",
    category: "frontend",
    level: 85,
    accent: "sky",
    icon: "⚛",
    en: "Building complex UIs with hooks, context, and reusable component systems.",
    ar: "بناء واجهات مستخدم معقدة باستخدام Hooks والـ Context وأنظمة المكونات القابلة لإعادة الاستخدام.",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 70,
    accent: "white",
    icon: "▲",
    en: "SSR, App Router, API routes, and production-ready deployment builds.",
    ar: "SSR وApp Router ومسارات API والبنيات الجاهزة للإنتاج.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 45,
    accent: "blue",
    icon: "TS",
    en: "Typing components, API contracts, and utility functions. Growing rapidly.",
    ar: "تحديد أنواع المكونات وعقود API ودوال الأدوات. أتطور بسرعة.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 75,
    accent: "cyan",
    icon: "≋",
    en: "Utility-first styling for responsive, dark-mode-ready, polished UIs.",
    ar: "تنسيق مدعوم بالمرافق لواجهات عصرية متجاوبة وداعمة للوضع الداكن.",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 80,
    accent: "green",
    icon: "⬡",
    en: "REST APIs, middleware pipelines, authentication, and server-side logic.",
    ar: "REST APIs وخطوط الـ middleware والمصادقة والمنطق من جانب الخادم.",
  },
  {
    name: "Express",
    category: "backend",
    level: 80,
    accent: "slate",
    icon: "EX",
    en: "Routing, error handling, middleware chains, and modular API architecture.",
    ar: "التوجيه ومعالجة الأخطاء وسلاسل الـ middleware وبنية API المعيارية.",
  },
  {
    name: "MongoDB",
    category: "backend",
    level: 75,
    accent: "emerald",
    icon: "🍃",
    en: "Schema design, aggregation pipelines, indexing, and Mongoose ODM.",
    ar: "تصميم المخطط ومسارات التجميع والفهرسة وـ Mongoose ODM.",
  },
  {
    name: "Strapi",
    category: "backend",
    level: 50,
    accent: "purple",
    icon: "S",
    en: "Headless CMS, content types, REST API generation, and lifecycle hooks.",
    ar: "CMS بدون رأس وأنواع المحتوى وإنشاء REST API وخطافات دورة الحياة.",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 80,
    accent: "orange",
    icon: "⑂",
    en: "Branching strategies, pull requests, conflict resolution, and team workflows.",
    ar: "استراتيجيات التفرع وطلبات السحب وحل التعارضات وسير عمل الفريق.",
  },
  {
    name: "Microsoft Office",
    category: "tools",
    level: 95,
    accent: "amber",
    icon: "📊",
    en: "Expert-level Word, Excel (formulas, pivot tables), and PowerPoint for professional use.",
    ar: "خبرة عالية في Word وExcel (الصيغ والجداول المحورية) وPowerPoint للاستخدام الاحترافي.",
  },
  {
    name: "VS Code",
    category: "tools",
    level: 90,
    accent: "blue",
    icon: "</>",
    en: "Extensions, integrated debugging, multi-cursor editing, and terminal workflows.",
    ar: "الامتدادات والتصحيح المتكامل والتحرير متعدد المؤشرات وسير عمل الطرفية.",
  },
]

const LEVEL_LABEL = {
  en: (n) => n >= 80 ? "Advanced" : n >= 60 ? "Intermediate" : "Learning",
  ar: (n) => n >= 80 ? "متقدم" : n >= 60 ? "متوسط" : "مبتدئ",
}

export default function KnoPage() {
  const [active, setActive] = useState("all")
  const { language } = useLanguage()

  const filtered = active === "all" ? SKILLS : SKILLS.filter((s) => s.category === active)

  const counts = {
    frontend: SKILLS.filter((s) => s.category === "frontend").length,
    backend:  SKILLS.filter((s) => s.category === "backend").length,
    tools:    SKILLS.filter((s) => s.category === "tools").length,
  }

  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero */}
        <section className="glass-card rounded-4xl border border-slate-800/80 p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <LocalizedText
                tag="p"
                className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
                en="Knowledge hub"
                ar="مركز المعرفة"
              />
              <LocalizedText
                tag="h1"
                className="text-5xl font-semibold tracking-tight text-white sm:text-6xl"
                en="Every tool I've used to ship real products."
                ar="كل أداة استخدمتها لإيصال منتجات حقيقية."
              />
              <LocalizedText
                tag="p"
                className="mt-6 max-w-xl text-slate-300 leading-8"
                en="A transparent breakdown of my technical stack — where I'm strong, where I'm growing, and how I use each technology in practice."
                ar="تفصيل شفاف لمجموعتي التقنية — أين أتميز، وأين أنمو، وكيف أستخدم كل تقنية في الممارسة الفعلية."
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { labelEn: "Frontend", labelAr: "الواجهة الأمامية", count: counts.frontend, color: "text-sky-300" },
                { labelEn: "Backend",  labelAr: "الواجهة الخلفية",  count: counts.backend,  color: "text-emerald-300" },
                { labelEn: "Tools",    labelAr: "الأدوات",          count: counts.tools,    color: "text-amber-300" },
              ].map(({ labelEn, labelAr, count, color }) => (
                <div key={labelEn} className="rounded-3xl border border-slate-800/70 bg-slate-950/95 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    {language === "ar" ? labelAr : labelEn}
                  </p>
                  <p className={`mt-2 text-3xl font-semibold ${color}`}>{count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter tabs */}
        <div dir="ltr" className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all ${
                active === cat.id
                  ? "bg-sky-500/20 text-sky-200 ring-1 ring-sky-400/40"
                  : "text-slate-400 hover:text-sky-300 hover:bg-sky-500/10"
              }`}
            >
              {language === "ar" ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill) => {
            const a = ACCENT[skill.accent]
            const labelFn = LEVEL_LABEL[language] ?? LEVEL_LABEL.en
            return (
              <div
                key={skill.name}
                className="glass-card group flex flex-col rounded-3xl border border-slate-800/70 p-6 hover:-translate-y-1"
              >
                {/* Icon + name */}
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-bold ring-1 ${a.icon}`}
                  >
                    {skill.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-white truncate">{skill.name}</p>
                    <span className={`mt-0.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.18em] ${a.badge}`}>
                      {labelFn(skill.level)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm text-slate-400 leading-6">
                  {language === "ar" ? skill.ar : skill.en}
                </p>

                {/* Progress bar */}
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-slate-500">
                    <LocalizedText tag="span" en="Proficiency" ar="مستوى الإتقان" />
                    <span className="font-semibold text-slate-300">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-700 ${a.bar}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-center text-sm text-slate-600">
          <LocalizedText
            tag="span"
            en="Proficiency scores are honest self-assessments, not certifications."
            ar="تقييمات الإتقان هي تقييمات ذاتية صادقة، وليست شهادات."
          />
        </p>

      </div>
    </main>
  )
}
