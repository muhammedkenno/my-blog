import Link from "next/link"


import { projects } from "@/lib/projects"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-950 text-white p-10">
        <h1 className="text-2xl text-red-400">Project not found 😅</h1>
        <Link href="/" className="text-blue-400 mt-4 block hover:underline">
          ← Back to Home
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 max-w-2xl">

      <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-blue-400 mt-6 mb-2">
        {project.title}
      </h1>

      <span className={`
        text-xs px-3 py-1 rounded-full font-medium
        ${project.status === "Completed" ? "bg-green-500/20 text-green-400" : ""}
        ${project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-400" : ""}
        ${project.status === "Planning" ? "bg-gray-500/20 text-gray-400" : ""}
      `}>
        {project.status}
      </span>

      <p className="text-gray-300 mt-6 mb-2">{project.description}</p>

      <p className="text-blue-400 text-sm mb-8">{project.tech}</p>

      <h2 className="text-xl font-semibold mb-4">Features</h2>

      <ul className="flex flex-col gap-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-gray-300">
            <span className="text-blue-400">→</span>
            {feature}
          </li>
        ))}
      </ul>

    </main>
  )
}