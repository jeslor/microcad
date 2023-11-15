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
    let [availableBrands, setAvailableBrands] = useState<[]>([]);
    let [availableCategories, setAvailableCategories] = useState<[]>([]);
    const [priceFilter, setPriceFilter] = useState('');


    const setBrands = (products:any) =>{
      let productBrands:any = products.map((product:any)=> product.brand);
      productBrands = [...new Set<any>(productBrands)].map((brand:any)=> ({label:brand, isBrandChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
      setAvailableBrands(productBrands);
    }

    const setCategories = (products:any) =>{
      let productTypes:any = products.map((product:any)=> product.category);
      productTypes = [...new Set<any>(productTypes)].map((category:any)=> ({label:category, isTypeChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
      setAvailableCategories(productTypes);
    }


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


    useEffect(() => {
      if (finalProducts.length) {
        setBrands(finalProducts);
        setCategories(finalProducts);
      }
    },[finalProducts])



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
                   <FilterContainer 
                      brandOrType={parentCategory}
                      handlePriceChange={handlePriceChange} 
                      brands={availableBrands} 
                      brandFilters={[]}
                      handleBrandFilters={()=>{}} 
                      productCategories={availableCategories}
                      typeFilters={[]}
                      handleTypeFilters={()=>{}}
                    
                    />
                    <ProductList products={finalProducts} />
                </div>
            }   
        </div>
    )

}

export default page