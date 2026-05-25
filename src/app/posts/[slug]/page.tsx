// src/app/posts/[slug]/page.tsx
import Link from "next/link"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import { strapiGet } from "@/lib/api"

type StrapiPost = {
  id: number
  title: string
  description: string
  slug: string
  content: any[]
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
      <main className="min-h-screen bg-gray-950 text-white p-10">
        <h1 className="text-2xl text-red-400">Post not found 😅</h1>
        <Link href="/" className="text-blue-400 mt-4 block hover:underline">
          ← Back
        </Link>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10 max-w-2xl">
      <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-blue-400 mt-6 mb-3">
        {post.title}
      </h1>

      <p className="text-gray-400 mb-8 text-sm">{post.description}</p>

      <div className="text-gray-300 leading-relaxed">
        <BlocksRenderer content={post.content} />
      </div>
    </main>
  )
}