"use client";
import { useState, useEffect, useContext } from 'react'


import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import FilterContainer from '@/components/single/product/filterContainer';
import Script from 'next/script';
import ProductHeader from '@/components/single/headers/productHeader';


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
      <ProductHeader category={category} handlePriceChange={handlePriceChange} />
      <div className={styles.productsContainer}>
        <FilterContainer handlePriceChange={handlePriceChange}/>
        <ProductList products={finalProducts} />
      </div>

    </div>
  )
}
