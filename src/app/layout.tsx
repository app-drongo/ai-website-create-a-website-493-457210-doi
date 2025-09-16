import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Acme SaaS',
  description: 'Streamline your workflow with our powerful SaaS platform.',
  keywords: ['saas', 'software', 'technology', 'app', 'cloud'],
  openGraph: {
    title: 'Acme SaaS',
    description: 'Streamline your workflow with our powerful SaaS platform.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}