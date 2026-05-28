// src/app/posts/[slug]/page.tsx
import Link from "next/link"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { strapiGet } from "@/lib/api"
import { LocalizedBackToBlogLink } from "@/components/LocalizedBackToBlogLink"

type StrapiPost = {
  id: number
  title: string
  description: string
  slug: string
  content: unknown[]
}

async function getPost(slug: string): Promise<StrapiPost | null> {

  const data = await strapiGet(
    `/api/posts?filters[slug][$eq]=${slug}&populate=*`
  )

  if (!data.data || data.data.length === 0) return null
  return data.data[0]
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="py-14">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass-card rounded-4xl border border-slate-800/80 p-10">
            <h1 className="text-2xl text-red-400">Post not found 😅</h1>
            <div className="mt-4 inline-block">
              <LocalizedBackToBlogLink />
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-14">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass-card rounded-4xl border border-slate-800/80 p-10">
          <LocalizedBackToBlogLink />

          <h1 className="text-5xl font-semibold tracking-tight text-white mt-6 mb-4">{post.title}</h1>
          <p className="text-slate-300 mb-10 text-base leading-7">{post.description}</p>

          <div className="prose prose-invert max-w-none text-slate-200">
            <BlocksRenderer content={post.content} />
          </div>
        </div>
      </div>
    </main>
  )
}