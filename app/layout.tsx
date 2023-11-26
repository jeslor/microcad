import Navbar from '@/components/shared/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import {StateProvider} from '@/components/providers/stateProvider'
import {NextAuthProvider} from '@/components/providers/sessionProvider';
import { Inter } from 'next/font/google'
import Bottombar from '@/components/shared/Bottombar'
import styles from '@/styles/main.module.css'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {AuthenticatedUserProvider} from '@/components/providers/AuthenticatedUserProvider';
import { getUserByEmail } from '@/lib/actions/user.actions';


const inter = Inter({ subsets: ['latin'] })




export const metadata: Metadata = {
  title: `Microcad Computer Corp`,
  description: 'Microcad Computer Corp is a nationwide distributor of computer products. Established since 1991, we have the experience and the means to provide you with the latest products and technologies to cater to all of your home/business applications.',
  keywords: "refurbished london computer managed.services repair computer.repair london.ontario.computer.repair london.ontario.computers refurbished.computers.london"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let loggedInUser:any = null;
  const session:any = await getServerSession(authOptions);
  if (session) {
      loggedInUser = await getUserByEmail(session.user.email);
  }

  return (
    <html lang="en">

      <NextAuthProvider>
      <StateProvider>
        <AuthenticatedUserProvider>
          <body className={`${inter.className} ${styles.main}`}>
            <Navbar user ={loggedInUser}/>
              {children}
            <Bottombar />
          </body>
        </AuthenticatedUserProvider>
      </StateProvider>
    </NextAuthProvider>

    </html>
  )
}
