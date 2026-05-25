// src/app/projects/page.tsx
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-2">My Projects 🚀</h1>
      <p className="text-gray-400 mb-8">My journey to the job market.</p>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-5 flex items-center gap-4">

              <span className="text-2xl">
                {project.done ? "✅" : project.id}
              </span>

              <div>
                <p className="text-lg font-medium">{project.title}</p>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <p className="text-blue-400 text-xs mt-1">{project.tech}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}