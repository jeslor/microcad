"use client";
import {useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider';

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';





export default function page() {
  const { setCartHandler } = useContext(StateContext);

  let { parentCategory, category } = useParams();
  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();
  const products = data.find((product) =>{
       for (const key in product) {
        if (product[key].length > 0 && key === category) {
          return key[0];
        }
       }
    });
    const finalProducts = products[category];

    const addCartHandler = (event,product) => {
      event.stopPropagation(); 
      event.preventDefault(); 
        setCartHandler(product)
    }
 
  return (
    <div className={`${styles.products} customwidth mx-auto`}>
        <h1 className="capitalize font-bold text-lg">{category}</h1>
      <div className={styles.productList}>
        {finalProducts.map((product) =>  (
            <a href=""  className={styles.ProductListItem} key={product.description}>
              {product.isNew && <div className={styles.productListItemNew}>New</div>}
              <div className={styles.productImage}>
                <img
                // height={200}
                // width={200}
                  src={product.imageURL}
                  alt={product.name}
                />
              </div>
            <div className={`${styles.productListItemBottom} flex pt-3`}>
              <div className="">
                {(product.name &&product.name !== "")&&<h2 className="text-sm font-bold text-primayColor">{product.name}</h2>}
         
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
        )}
      </div>
    </div>
  )
}
