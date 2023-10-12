import Navbar from '@/components/shared/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Bottmbar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Microcad',
  description: 'Microcad Computer Corp is a nationwide distributor of computer products. Established since 1991, we have the experience and the means to provide you with the latest products and technologies to cater to all of your home/business applications.',
  keywords: "refurbished london computer managed.services repair computer.repair london.ontario.computer.repair london.ontario.computers refurbished.computers.london"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
        <Bottmbar />
    </html>
  )
}
