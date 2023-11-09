"use client"
import {useEffect, useState} from 'react';
import { useParams} from 'next/navigation';
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import styles from "@/styles/products.module.css";
import ProductHeader from '@/components/single/headers/productHeader';
import FilterContainer from '@/components/single/product/filterContainer';
import { da } from '@vidstack/react/dist/types/vidstack-react.js';


const page = () => {

  let [finalProducts, setFinalProducts] = useState([]);
  let [priceFilter, setPriceFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  let [brandFilters, setBrandFilter] = useState<[]>([]);
  let { parentCategory }:{parentCategory:string} = useParams();
  
    const refurbrished:any =[]
    const specialOffer:any = []
    const productTypes:any = []


    data.forEach((item: any) => {
      for (const products in item) {
        productTypes.push(products);
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
    

    useEffect(() => {
      let finalProducts:any = [];
      if (brandFilters.length && !typeFilters.length) {
        if (parentCategory === "refurbrished") {
          finalProducts = refurbrished.filter((product:any)=> brandFilters.some((brand:any)=> brand === product.brand));       
        }else{
          finalProducts = specialOffer.filter((product:any)=> brandFilters.some((brand)=> brand === product.brand));
        }
         return setFinalProducts(finalProducts)
      }

      if (typeFilters.length && !brandFilters.length) {
        data.forEach((item: any) => { 
          for (const products in item) {  
            if(typeFilters.some((type)=> type === products)){
              finalProducts = [...finalProducts, ...item[products]]
            }       
          }
        });
        if (parentCategory === "refurbrished") {
          finalProducts = finalProducts.filter((product:any)=> !product.isNew);
        }else{
          finalProducts = finalProducts.filter((product:any)=> product.isSpecialOffer);
        }
        return setFinalProducts(finalProducts)
      }


      if(typeFilters.length && brandFilters.length){
        data.forEach((item: any) => { 
          for (const products in item) {  
            if(typeFilters.some((type)=> type === products)){
              finalProducts = [...finalProducts, ...item[products]]
            }       
          }
        });
        if (parentCategory === "refurbrished") {
          finalProducts = finalProducts.filter((product:any)=> !product.isNew);
        }else{
          finalProducts = finalProducts.filter((product:any)=> product.isSpecialOffer);
        }
        
        finalProducts = finalProducts.filter((product:any)=> brandFilters.some((brand:any)=> brand === product.brand));
        return setFinalProducts(finalProducts)
      }
     
      finalProducts = parentCategory === "refurbrished" ? refurbrished :  specialOffer 
        return setFinalProducts(finalProducts);
    

    },[parentCategory, brandFilters, typeFilters]);

    

    const handlePriceChange = (value:string) =>{
      setPriceFilter(value);
      if (value === 'low to high') {
        setFinalProducts(finalProducts.sort((a:any,b:any)=> a.price - b.price));
      }
      if (value === 'high to low') {
        setFinalProducts(finalProducts.sort((a:any,b:any)=> b.price - a.price));
        
      }
    }

 const productBrands:any = parentCategory === "refurbrished" 
                          ? Array.from(new Set(refurbrished.map((product:any)=> product.brand))).sort() 
                          : Array.from(new Set(specialOffer.map((product:any)=> product.brand))).sort();


 
  const handleBrandFilters = (selectedBrands:[])=>{
    setBrandFilter([...selectedBrands]);
  }

  const handleTypeFilters = (selectedTypes:string[])=>{    
    setTypeFilters([...selectedTypes]);
  }


  return (
      <div className={`${styles.products} customwidth mx-auto px-3`}>
         <ProductHeader category={parentCategory} handlePriceChange={handlePriceChange} />
         <div className={styles.productsContainer}>
        <FilterContainer 
          brandOrType={parentCategory}
          handlePriceChange={handlePriceChange} 
          brands={productBrands} 
          brandFilters={brandFilters}
          handleBrandFilters={handleBrandFilters} 
          productTypes={productTypes.sort()}
          typeFilters={typeFilters}
          handleTypeFilters={handleTypeFilters}
         
        />
        <ProductList products={finalProducts} />
      </div>
      </div>
  )
}

export default page