"use client";
import {useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider';

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';





export default function page() {

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

 
  return (
    <div className={`${styles.products} customwidth mx-auto`}>
        <h1 className="capitalize font-bold text-lg">{category}</h1>
        <ProductList products={finalProducts} />
    </div>
  )
}
