"use client";
import { useState, useEffect, useContext } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import { StateContext } from '@/components/providers/stateProvider';

import Script from 'next/script';
import ProductHeader from '@/components/single/headers/productHeader';


export default function page() {
  let { parentCategory, category } = useParams();
  let [finalProducts, setFinalProducts] = useState([]);
  let [filter, setFilter] = useState('');
  const {openFilter, handleOpenFilter} = useContext(StateContext);



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


    const filterContainerClasses = openFilter ? `${styles.filterContainer} ${styles.filterContainerOpen}` : `${styles.filterContainer}`;
    



 
  return (
    <div className={`${styles.products} customwidth mx-auto px-3`}>
      <Script src="/static/js/selectOption.js" />
      <ProductHeader category={category} handlePriceChange={handlePriceChange} />
      <div className={styles.productsContainer}>
      <div onClick={handleOpenFilter} className={`${filterContainerClasses} bg-primaryLight`}>
        <div  className={styles.filterContainerInner} onClick={(e)=>e.stopPropagation()}>
          <div className={`${styles.filter} ${styles.filter1} text-primaryLight`}>
            <h5 className="font-bold text-primarymedium">price</h5>
            <form action="" className='flex pt-3 items-end'>
              <div className='flex-col inline-flex'>
                <label htmlFor="min">Min</label>
                <div className={styles.inner}>
                  $
                <input type="number" />
                </div>
              </div>
              -
              <div className='ml-3 inline-flex flex-col'>
                <label htmlFor="max">Max</label>
                <div className={styles.inner}>
                  $
                <input type="number" />
                </div>
              </div>
              <button className='pt-2 text-xs text-slate-100 border-primaryLight bg-primarymedium'>filter</button>
            </form>

            <Select  onValueChange={handlePriceChange}>
              <SelectTrigger className={`${styles.sortWithPrice}`}>
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
          <div className={`${styles.filter} ${styles.filter2} text-primaryLight`}>
            <h5 className="font-bold text-primarymedium">Brand</h5>
            
          </div>
        </div> 
      </div>
      <ProductList products={finalProducts} />
      </div>

    </div>
  )
}
