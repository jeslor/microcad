"use client";
import '@/app/globals.css'
import styles from "@/styles/products.module.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
    
    

  return (
    <section className={`${styles.pageHeight} bg-slate-100`}>
        {children}
    </section>
  )
}
