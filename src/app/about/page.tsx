// src/app/about/page.tsx

type Skill = {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"  // ← TypeScript union type
}

const skills: Skill[] = [
  { name: "Next.js", level: "Intermediate" },
  { name: "TypeScript", level: "Beginner" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Strapi", level: "Beginner" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me 👋</h1>

      <p className="text-gray-300 mb-10 max-w-xl">
        I am a computer engineering student in my final semester, building projects to enter the job market.
      </p>

      <h2 className="text-2xl font-semibold mb-4">My Skills</h2>

      <div className="flex flex-col gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 rounded-xl p-4 flex justify-between items-center"
          >
            <span className="text-lg">{skill.name}</span>

            <span className={`
              text-sm px-3 py-1 rounded-full font-medium
              ${skill.level === "Intermediate" ? "bg-green-500/20 text-green-400" : ""}
              ${skill.level === "Advanced" ? "bg-yellow-500/20 text-yellow-400" : ""}
              ${skill.level === "Beginner" ? "bg-blue-500/20 text-blue-400" : ""}
            `}>
              {skill.level}
            </span>

          </div>
        ))}
      </div>
    </main>
  )
}