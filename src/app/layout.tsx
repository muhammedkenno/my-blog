// src/app/layout.tsx
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-gray-950`}>

        <nav className="border-b border-gray-800 px-10 py-4 flex gap-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {children}

      </body>
    </html>
  )
}