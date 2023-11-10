"use client";
import '@/app/globals.css'
import { useContext } from "react";
import { StateContext } from '@/components/providers/stateProvider';
import styles from "@/styles/products.module.css"




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { openProduct, productToOpen } = useContext(StateContext);
  let product: any = productToOpen;
    
    

  return (
    <section className={`${styles.pageHeight} bg-slate-100`}>
        {openProduct&&(
          <div className={styles.singleProductView}>
            <div className={styles.singleProductInner}>
              <div className={styles.singleProductViewlose}>+</div>
            <h1>{product.name}</h1>
            </div>
          </div>
        )}
        {children}
    </section>
  )
}
