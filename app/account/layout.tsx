import styles from "@/styles/account.module.css"

export default function RootLayout({
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