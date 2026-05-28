// src/app/about/page.tsx

import { LocalizedText } from "@/components/LocalizedText"

type Skill = {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
  levelAr: string
  description: string
  descriptionAr: string
}

const skills: Skill[] = [
  {
    name: "MERN",
    level: "Advanced",
    levelAr: "متقدم",
    description: "I build complex full-stack applications with MongoDB, Express, React, and Node.js, and I use this skill to deliver production-ready systems.",
    descriptionAr: "أبني تطبيقات متكاملة مع MongoDB وExpress وReact وNode.js، وأستخدم هذه المهارة لتسليم أنظمة جاهزة للإنتاج.",
  },
  {
    name: "Next.js",
    level: "Intermediate",
    levelAr: "متوسط",
    description: "I work with it regularly and steadily grow my expertise.",
    descriptionAr: "أعمل عليه بانتظام وأطور خبرتي باستمرار.",
  },
  {
    name: "TypeScript",
    level: "Beginner",
    levelAr: "مبتدئ",
    description: "I am learning this area and doubling my practical knowledge.",
    descriptionAr: "أتعلم هذا المجال وأضاعف معرفتي بشكل عملي.",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    levelAr: "متوسط",
    description: "I work with it regularly and steadily grow my expertise.",
    descriptionAr: "أعمل عليه بانتظام وأطور خبرتي باستمرار.",
  },
  {
    name: "Microsoft Office",
    level: "Advanced",
    levelAr: "خبير",
    description: "I am experienced with Word, Excel, and PowerPoint, and I use Office tools professionally in real workflows.",
    descriptionAr: "أنا خبير في Word وExcel وPowerPoint، وأستخدم أدوات Office بشكل احترافي في سير العمل الحقيقي.",
  },
  {
    name: "Strapi",
    level: "Beginner",
    levelAr: "مبتدئ",
    description: "I am learning this area and doubling my practical knowledge.",
    descriptionAr: "أتعلم هذا المجال وأضاعف معرفتي بشكل عملي.",
  },
]

export default function AboutPage() {
  return (
    <main className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <section className="glass-card rounded-4xl border border-slate-800/80 p-10">
          <LocalizedText
            tag="p"
            className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
            en="About me"
            ar="عني"
          />
          <LocalizedText
            tag="h1"
            className="text-5xl font-semibold tracking-tight text-white sm:text-6xl mb-6"
            en="I’m a computer engineer working as a fullstack web developer."
            ar="أنا مهندس حاسوب أعمل كمبرمج ويب fullstack."
          />
          <div className="max-w-3xl space-y-6 text-slate-300 leading-8">
            <LocalizedText
              tag="p"
              className=""
              en="I have skills in Strapi, Next.js, the MERN stack, TypeScript, and Tailwind CSS. I enjoy building real web applications that feel modern, practical, and easy to use."
              ar="أمتلك مهارات في Strapi وNext.js وMERN Stack وTypeScript وTailwind CSS. أستمتع ببناء تطبيقات ويب حقيقية تبدو عصرية وعملية وسهلة الاستخدام."
            />
          </div>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name} className="glass-card rounded-3xl border border-slate-800/70 p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-white">{skill.name}</p>
                <LocalizedText
                  tag="span"
                  className={`rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] ${skill.level === "Intermediate" ? "bg-emerald-500/15 text-emerald-300" : ""} ${skill.level === "Advanced" ? "bg-amber-500/15 text-amber-300" : ""} ${skill.level === "Beginner" ? "bg-sky-500/15 text-sky-300" : ""}`}
                  en={skill.level}
                  ar={skill.levelAr}
                />
              </div>
              <LocalizedText
                tag="p"
                className="mt-4 text-slate-400 leading-7"
                en={skill.description}
                ar={skill.descriptionAr}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}