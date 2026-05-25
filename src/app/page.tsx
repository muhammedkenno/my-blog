// src/app/page.tsx
import Link from "next/link"
import { strapiGet } from "@/lib/api"

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
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-2">Blog Posts 📝</h1>
      <p className="text-gray-400 mb-8">Powered by Strapi CMS</p>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-5">
              <h2 className="text-lg font-medium">{post.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}