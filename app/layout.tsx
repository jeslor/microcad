
import Navbar from '@/components/shared/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {StateProvider} from '@/components/providers/stateProvider'
import {NextAuthProvider} from '@/components/providers/sessionProvider';
import { Inter } from 'next/font/google'
import Bottmbar from '@/components/shared/Bottombar'
import styles from '@/styles/main.module.css'


const inter = Inter({ subsets: ['latin'] })




export const metadata: Metadata = {
  title: `Microcad Computer Corp`,
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

      <StateProvider>
        <NextAuthProvider>
      <body className={`${inter.className} ${styles.main}`}>
          <Navbar />
          {children}
        </body>
        <Bottmbar />
        </NextAuthProvider>
    </StateProvider>

    </html>
  )
}
