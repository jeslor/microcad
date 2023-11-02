"use client"
import {usePathname, useParams} from 'next/navigation';
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import styles from "@/styles/products.module.css";
import { da } from '@vidstack/react/dist/types/vidstack-react.js';


const page = () => {
    let { parentCategory } = useParams();
    const refurbrished:any =[]
    const specialOffer:any = []
    data.forEach((item: any) => {
      for (const products in item) {
        item[products].forEach((product:any) => {
          if(!product.isNew ){
            refurbrished.push(product);
          }
          if(product.isSpecialOffer){
            specialOffer.push(product);
          }
        }) 
      }   
    });   
    
    const finalProducts = parentCategory === "refurbrished" ? refurbrished :  specialOffer 

  return (
      <div className={`${styles.products} customwidth mx-auto`}>
        <h1 className="capitalize font-bold text-lg">{parentCategory}</h1>
        <ProductList products={finalProducts} />
      </div>
  )
}

export default page