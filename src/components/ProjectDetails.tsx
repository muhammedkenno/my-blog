"use client"

import Link from "next/link"
import { LocalizedText } from "@/components/LocalizedText"
import { useLanguage } from "@/components/LanguageProvider"
import type { Project } from "@/lib/projects"

export function ProjectDetails({ project }: { project: Project }) {
  const { language } = useLanguage()

  return (
    <section className="glass-card rounded-4xl border border-slate-800/80 p-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <LocalizedText
            tag="p"
            className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
            en="Project details"
            ar="تفاصيل المشروع"
          />
          <LocalizedText
            tag="h1"
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl mb-4"
            en={project.title}
            ar={project.titleAr}
          />
          <LocalizedText
            tag="p"
            className="text-slate-300 leading-8"
            en={project.description}
            ar={project.descriptionAr}
          />
        </div>

        <div className="flex flex-col gap-4">
          <LocalizedText
            tag="span"
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${project.status === "Completed"
                ? "bg-emerald-500/20 text-emerald-300"
                : project.status === "In Progress"
                  ? "bg-amber-500/20 text-amber-300"
                  : "bg-slate-700/20 text-slate-400"
              }`}
            en={project.status}
            ar={project.statusAr}
          />
          <LocalizedText
            tag="p"
            className="text-sm text-slate-400"
            en="Tech stack"
            ar="أدوات التقنية"
          />
          <LocalizedText
            tag="p"
            className="text-sky-300 font-medium"
            en={project.tech}
            ar={project.techAr ?? project.tech}
          />
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/projects" className="text-slate-300 hover:text-white transition-colors text-sm">
            ← {language === "ar" ? "العودة إلى المشاريع" : "Back to projects"}
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-white mb-4">{language === "ar" ? "ما يتضمنه المشروع" : "What this project includes"}</h2>
          <ul className="space-y-4">
            {(language === "ar" && project.featuresAr ? project.featuresAr : project.features).map((feature) => (
              <li key={feature} className="flex gap-3 text-slate-300">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
