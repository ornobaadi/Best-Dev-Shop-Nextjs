import Image from 'next/image'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-black text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo dynamically loaded from the public folder */}
            <Link href="/">
              <Image src="/images/logo.png" alt="Best Dev Shop Logo" width={150} height={50} />
            </Link>
            <nav className="space-x-4">
              <Link href="/development">Development</Link>
              <Link href="/it-services">IT Services</Link>
              <Link href="/marketing">Marketing</Link>
              <Link href="/design">Design</Link>
              <Link href="/business-services">Business Services</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white p-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Best Dev Shop. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="#" className="text-sm">Privacy Policy</Link>
              <Link href="#" className="text-sm">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
