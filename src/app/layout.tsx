// src/app/layout.tsx
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Cairo } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/LanguageProvider"
import { Navbar } from "@/components/Navbar"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
})

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "Muhammed Kenno | Fullstack Web Developer",
  description: "أنا محمد كنو، مهندس حاسوب درست في جامعة كراووك وعملت في تركيا وفي التجارة. أعمل كمبرمج ويب fullstack وأقدم حلولاً تقنية وتصميمية احترافية.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Muhammed Kenno | Fullstack Web Developer",
    description: "أنا محمد كنو، مهندس حاسوب درست في جامعة كرابوك وعملت في تركيا وفي التجارة. أعمل كمبرمج ويب fullstack وأقدم حلولاً تقنية وتصميمية احترافية.",
    type: "website",
  },
  keywords: [
    "Muhammed Kenno",
    "مهندس حاسوب",
    "fullstack web developer",
    "تطوير ويب",
    "Strapi",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "SEO",
    "Turkey",
    "commerce",
    "portfolio",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cairo.className}>
      <body className={`${plusJakarta.className} min-h-screen bg-slate-950 text-slate-100 antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}