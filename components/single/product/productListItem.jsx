"use client";
import {useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider';
import styles from "@/styles/products.module.css";
import Image from 'next/image';


const ProductListItem = ({product}) => {
  const { setCartHandler, handleproductToOpen } = useContext(StateContext);


  const addCartHandler = (event,product) => {
    event.stopPropagation(); 
    event.preventDefault(); 
      setCartHandler(product)
  }

const handleOpenProductButton = (event) => {
  event.stopPropagation();
  event.preventDefault();
  handleproductToOpen(product);
}


 const marking = product.isNew ? "New" : <Image className="text-slate-50" src="/static/media/icons/recycle.svg" width={18} height={18} />;
 const coloring = product.isNew ? styles.productListItemNew : `${styles.productListItemNew} ${styles.productListItemRefurb}`;





  return (
    <a href={`/products/product/${product.name}`} className={styles.ProductListItem} key={product.description}>
    <div className={coloring}>{marking}</div>
    <button onClick={handleOpenProductButton} className={styles.ProductListItemViewProduct}>view product</button>
    <div className={styles.productImage}>
      <img
        src={product.imageURL}
        alt={product.name}
      />
    </div>
  <div className={`${styles.productListItemBottom} flex pt-3`}>
    <div className="">
      <h2 className="text-sm font-bold text-primayColor">{product.name}</h2>
      <h4 className="pt-2 text-sm font-bold text-secondaryMedium">$ {product.price.toLocaleString()}</h4>
      <div className="flex items-center justify-between">
        <button onClick={ (e)=>addCartHandler(e,product)} className="pt-2 text-xs text-primaryLight border-primaryLight">Add to cart</button>
        {product.quantity > 0 
        ? <h4 className="pt-2 text-xs font-bold text-slate-400">In Stock</h4>
        : <h4 className="pt-2 text-xs font-bold text-slate-400">Out of Stock</h4>}
      </div>
    </div>
  </div>
  </a>
  )
}

export default ProductListItem