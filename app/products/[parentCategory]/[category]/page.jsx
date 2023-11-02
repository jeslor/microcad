"use client";
import {useContext, useState, useEffect } from 'react'
import { StateContext } from '@/components/providers/stateProvider';

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import { Icon } from '@iconify/react/dist/iconify.js';
import Script from 'next/script';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { revalidatePath } from 'next/cache';

export default function page() {
  let { parentCategory, category } = useParams();
  let [finalProducts, setFinalProducts] = useState([]);
  let [filter, setFilter] = useState('');
  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();
  const products = data.find((product) =>{
       for (const key in product) {
        if (product[key].length > 0 && key === category) {
          return key[0];
        }
       }
    });
    const handlePriceChange = (value) =>{
      setFilter(value);
      let filteredProducts = finalProducts = finalProducts.sort((a,b) => {
        return value === 'low to high' ? a.price - b.price : b.price - a.price;
      });
      setFinalProducts(filteredProducts);
  }
    useEffect(() => {
      setFinalProducts(products[category]);
    },  [category,filter] )

    



 
  return (
    <div className={`${styles.products} customwidth mx-auto px-3`}>
      <Script src="/static/js/selectOption.js" />
      <div className={` ${styles.productsHeader} customwidth mx-auto `}>
        <h1 className="capitalize font-bold text-lg text-primayColor">{category}</h1>
        <div className={`${styles.priceFilters} text-primarymedium`}>
          <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue className={styles.secetOPtion}  placeholder="sort by Price" />
            </SelectTrigger>
            <SelectContent className='bg-slate-200'>
              <SelectGroup >
                <SelectLabel>Sort by price</SelectLabel>
                <SelectItem value="low to high">low to high</SelectItem>
                <SelectItem value="high to low">high to low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
