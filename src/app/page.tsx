// src/app/page.tsx
import Link from "next/link"
import { strapiGet } from "@/lib/api"
import { LocalizedText } from "@/components/LocalizedText"

type StrapiPost = {
  id: number
  title: string
  description: string
  slug: string
}

export default async function HomePage() {

  const data = await strapiGet("/api/posts")
  const posts: StrapiPost[] = data.data

  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <section className="glass-card rounded-4xl border border-slate-800/80 p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <LocalizedText
                tag="p"
                className="text-sm uppercase tracking-[0.32em] text-sky-300/70 mb-3"
                en="Engineering journal"
                ar="مدونة - التطوير"
              />
              <LocalizedText
                tag="h1"
                className="text-5xl font-semibold tracking-tight text-white sm:text-6xl"
                en="Real developer notes, clean UI, and production-ready ideas."
                ar="ملاحظات مطور حقيقية ، واجهة نظيفة ، و أفكار جاهزة للإنتاج . "
              />
              <LocalizedText
                tag="p"
                className="mt-6 max-w-xl text-slate-300 leading-8"
                en="Discover the latest blog posts from my Strapi-powered platform."
                ar="اكتشف أحدث المنشورات من منصتي المبنية على Strapi ."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/95 p-5">
                <LocalizedText
                  tag="p"
                  className="text-sm uppercase tracking-[0.24em] text-slate-400"
                  en="Posts"
                  ar="المنشورات"
                />
                <h3 className="mt-3 text-3xl font-semibold text-white">{posts.length}</h3>
              </div>
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/95 p-5">
                <LocalizedText
                  tag="p"
                  className="text-sm uppercase tracking-[0.24em] text-slate-400"
                  en="Powered by"
                  ar="مدعوم بواسطة"
                />
                <p className="mt-3 text-3xl font-semibold text-sky-400">Strapi CMS</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`} className="group">
              <article className="glass-card rounded-3xl border border-slate-800/70 p-6 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                  <LocalizedText
                    tag="span"
                    className="rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300"
                    en="Open"
                    ar="مفتوح"
                  />
                </div>
                <p className="mt-4 text-slate-300 leading-7">{post.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                  <LocalizedText
                    tag="span"
                    className=""
                    en="Read more"
                    ar="اقرأ المزيد"
                  />
                  <LocalizedText
                    tag="span"
                    className="text-slate-400"
                    en="#blog"
                    ar="#المدونة"
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