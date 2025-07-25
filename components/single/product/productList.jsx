import styles from "@/styles/products.module.css";
import ProductListItem from "./productListItem";
import { useState } from "react";



const ProductList = ({products}) => {

  return (
    <div className={styles.productList}>

     
       {
        products.length === 0 
        ?<div className="flex items-center justify-center w-full h-24"> <h1 className="font-bold text-2xl text-primaryLight text-center pl-12">No products found</h1></div>  
        :products.map((product) =>  (<ProductListItem  product={product} key={product.description} />))
      }
   
  </div>
  )
}

export default ProductList