// src/app/projects/page.tsx
import Link from "next/link"
import { projects } from "@/lib/projects"
import { LocalizedText } from "@/components/LocalizedText"

export default function ProjectsPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <section className="glass-card rounded-4xl border border-slate-800/80 p-10 mb-10">
          <LocalizedText
            tag="p"
            className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
            en="Projects"
            ar="المشاريع"
          />
          <LocalizedText
            tag="h1"
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            en="Real work, real progress."
            ar="عمل حقيقي، تقدم حقيقي."
          />
          <LocalizedText
            tag="p"
            className="mt-5 max-w-3xl text-slate-300 leading-8"
            en="These projects reflect my technical growth and my focus on delivering user-friendly experiences. Each work is designed to be practical and buildable."
            ar="هذه المشاريع تعكس تطوري التقني وتركيزي على تقديم تجربة مستخدم سلسة. كل عمل مصمم ليكون عمليًا ويمكن تطبيقه فعليًا."
          />
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group">
              <article className="glass-card rounded-3xl border border-slate-800/70 p-6 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-400/20">
                    {project.done ? "✅" : project.id}
                  </span>
                  <LocalizedText
                    tag="span"
                    className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300"
                    en={project.status}
                    ar={project.statusAr}
                  />
                </div>

                <div className="mt-5">
                  <LocalizedText
                    tag="h2"
                    className="text-xl font-semibold text-white"
                    en={project.title}
                    ar={project.titleAr}
                  />
                  <LocalizedText
                    tag="p"
                    className="mt-3 text-slate-400 leading-7"
                    en={project.description}
                    ar={project.descriptionAr}
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-sky-300">
                  <LocalizedText
                    tag="span"
                    className="rounded-full bg-sky-500/10 px-3 py-1"
                    en={project.tech}
                    ar={project.techAr ?? project.tech}
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}