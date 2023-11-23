import styles from "@/styles/account.module.css"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { headers } from 'next/headers';
import HeaderLink from "@/components/account/headerLink";
import { getUserByEmail } from "@/lib/actions/user.actions";

export default async function RootLayout({

    children
  }: {
    children: React.ReactNode
  }) {
    const data:any = await getServerSession(authOptions); 
    const user = data?.user;

    const currentUser  = await getUserByEmail(user?.email);
    const _headers = headers();
    const currentUrl = _headers.get("x-url");

    
    return (
        <section className={`${styles.pageHeight} bg-slate-100`}>
            <div className={`${styles.account} customwidth mx-auto`}>
            <div className={styles.accountHeader}>
              <h1>Account</h1>
              <HeaderLink user={currentUser} />
            </div>
          {children}
          </div>
        </section>
    )
}