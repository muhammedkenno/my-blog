import Link from "next/link"
import { projects } from "@/lib/projects"
import { ProjectDetails } from "@/components/ProjectDetails"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <main className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <section className="glass-card rounded-4xl border border-slate-800/80 p-10">
            <h1 className="text-3xl font-semibold text-red-400 mb-4">Project not found 😅</h1>
            <Link href="/projects" className="text-sky-300 hover:text-white transition-colors text-sm">
              ← Back to projects
            </Link>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <ProjectDetails project={project} />
      </div>
    </main>
  )
}