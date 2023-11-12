"use client";
import '@/app/globals.css'
import { useContext } from "react";
import { StateContext } from '@/components/providers/stateProvider';
import styles from "@/styles/products.module.css"
import Image from 'next/image';




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { openProduct, productToOpen, handleCloseProduct } = useContext(StateContext);
  let product:any = productToOpen;
    
    

  return (
    <section className={`${styles.pageHeight} bg-slate-100`}>
        {openProduct&&(
          <div className={styles.singleProductView}>
            <div className={styles.singleProductInner}>
              <button onClick={handleCloseProduct} className={styles.singleProductViewlose}>+</button>
            <div >
              <h2>{product.name}</h2>
              <div className={styles.singleProduct}>
                <div className={styles.singleProductImage}>
                  <img src={product.imageURL} alt={product.name} />
                </div>
                <div className={styles.productDetails}>
                  
                </div>
              </div>
            </div>
            </div>
          </div>
        )}
        {children}
    </section>
  )
}
