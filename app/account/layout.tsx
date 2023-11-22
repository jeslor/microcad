import styles from "@/styles/account.module.css"
export default async function RootLayout({
    children
  }: {
    children: React.ReactNode
  }) {



    return (
        <section className={`${styles.pageHeight} bg-slate-100`}>
          {children}
        </section>
    )
}