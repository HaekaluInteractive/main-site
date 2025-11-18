import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Haeka Interactive | African Interactive Media Publishing',
    template: '%s | Haeka Interactive',
  },
  description: 'Publishing the future of African interactive media. Games, music, film, and art that tell uniquely African stories for global audiences.',
  keywords: ['African games', 'interactive media', 'game publishing', 'African music', 'indie games', 'Afrofuturism'],
  authors: [{ name: 'Haeka Interactive' }],
  openGraph: {
    title: 'Haeka Interactive',
    description: 'Publishing the future of African interactive media',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haeka Interactive',
    description: 'Publishing the future of African interactive media',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-obsidian text-gray-100 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
