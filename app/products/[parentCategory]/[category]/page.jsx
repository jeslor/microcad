"use client";
import {useContext } from 'react'
import { StateContext } from '@/components/providers/stateProvider';

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import { Icon } from '@iconify/react/dist/iconify.js';
import Script from 'next/script';

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

    const handlePriceChange = (e) =>{
      console.log(e.target.value);
    }



 
  return (
    <div className={`${styles.products} customwidth mx-auto px-3`}>
      <Script src="/static/js/selectOption.js" />
      <div className={` ${styles.productsHeader} customwidth mx-auto `}>
        <h1 className="capitalize font-bold text-lg text-primayColor">{category}</h1>
        <div className={`${styles.priceFilters} text-primarymedium`}>
          <p className="font-semibold text-sm">sort by price:</p>
          <select data-te-select-init>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
          </select>
        </div>
        <div className={`${styles.openFilter} font-semibold text-sm`}>open Filters: <div className={`${styles.filterIcon} bg-primarymedium`}><Icon icon="line-md:check-list-3-filled" /></div></div>
      </div>
      <div className={styles.productsContainer}>
      <div className={`${styles.filterContainer}`}>
        <div className={`${styles.filter} ${styles.filter1}`}>
          <h2 className="font-bold text-primarymedium">price</h2>
          <div className="flex justify-between">
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
          </div>
        </div>
      </div>
      <ProductList products={finalProducts} />
      </div>

    </div>
  )
}
