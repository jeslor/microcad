import styles from "@/styles/checkout.module.css"

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