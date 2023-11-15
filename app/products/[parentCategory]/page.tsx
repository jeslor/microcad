"use client"
import {use, useEffect, useState} from 'react';
import { useParams} from 'next/navigation';
import {data} from'@/constants/data';
import Spinner from '@/components/single/spinner/spinner';
import ProductList from '@/components/single/product/productList';
import styles from "@/styles/products.module.css";
import ProductHeader from '@/components/single/headers/productHeader';
import FilterContainer from '@/components/single/product/filterContainer';
import { getRefurbishedProducts,getSpecialOfferProducts } from '@/lib/actions/product.actions';


const page = () => {
    const { parentCategory }:{parentCategory:string} = useParams();

    const [finalProducts, setFinalProducts] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');


    useEffect(() => {
       if (parentCategory === "refurbrished") {
        getRefurbishedProducts().then((res:any)=>{    
          setFinalProducts(res);
        }) 
       }
         if (parentCategory === "specialOffer") {
          getSpecialOfferProducts().then((res:any)=>{    
             setFinalProducts(res);
          }) 
         }
    },[getRefurbishedProducts, getSpecialOfferProducts])






    const handlePriceChange = (value:string) =>{
        setPriceFilter(value);
        if (value === 'low to high') {
          setFinalProducts(finalProducts.sort((a:any,b:any)=> a.price - b.price));
        }
        if (value === 'high to low') {
          setFinalProducts(finalProducts.sort((a:any,b:any)=> b.price - a.price));
          
        }
      }

    return (
        <div className={`${styles.products} customwidth mx-auto px-3`}>
            
            <ProductHeader category={parentCategory} handlePriceChange={handlePriceChange} />
            {
                finalProducts.length === 0 
                ? <Spinner />
                :<div className={styles.productsContainer}>
                    <ProductList products={finalProducts} />
                </div>
            }   
        </div>
    )

}

export default page