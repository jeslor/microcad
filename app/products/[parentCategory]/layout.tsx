"use client";
import '@/app/globals.css'
import { useContext } from "react";
import { StateContext } from '@/components/providers/stateProvider';
import styles from "@/styles/products.module.css"
import Image from 'next/image';
import AddToCartButton from '@/components/single/cart/AddToCartButton';




export default function RootLayout({
  children
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
                <div className={styles.singleProduct}>
                  <div className={styles.singleProductImage}>
                    <img src={product.imageURL} alt={product.name} />
                  </div>
                  <div className={styles.productDetails}>
                   <h2 className={styles.singleProductName}>{product.name}</h2>    
                   <h6 className={styles.singleProductModel}><span>Model:</span> {product.model}</h6>
                    <h6 className={styles.singleProductType}><span>Type:</span> {product.type}</h6>
                    {product.price>0&&( <h6 className={styles.singleProductPrice}>${`${' '}${product.price.toLocaleString()}`}</h6>)}
                   {product.quantity>0?(
                      <h6 className={styles.singleProductInStock}>In Stock</h6>
                    ):(
                      <h6 className={styles.singleProductOutOfStock}>Out of Stock</h6>
                    )}
                    <h5>Looks and Shipping</h5>
                   <h6 className={styles.singleProductColor}>{product.color}</h6>
                    <h6 className={styles.singleProductWeight}><span>Weight:</span>{product.weight}</h6>
                      <AddToCartButton  product={product} />
                    <div className={styles.productDescription}>
                      <h5>Description</h5>
                      <p>{product.description}</p>
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
