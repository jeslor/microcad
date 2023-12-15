"use server"
import styles from "@/styles/account.module.css"
import HeaderLink from "@/components/account/headerLink";
import { getServerSession } from "next-auth";
import { getUserByEmail } from "@/lib/actions/user.actions";
import authOptions from "@/lib/configs/authOptions";
export default async function RootLayout({

    children
  }: {
    children: React.ReactNode
  }) {

    let loggedInUser:any = null;
    const session:any = await getServerSession(authOptions);
    if (session) {
        loggedInUser = await getUserByEmail(session.user.email);
        
    }
    

    return (
        <section className={`${styles.pageHeight} bg-slate-100`}>
            <div className={`${styles.account} customwidth mx-auto`}>
            <div className={styles.accountHeader}>
              <h1>Account</h1>
              <HeaderLink user={loggedInUser} />
            </div>
          {children}
          </div>
        </section>
    )
}