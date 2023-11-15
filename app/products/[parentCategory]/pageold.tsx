"use client"
import {useEffect, useState} from 'react';
import { useParams} from 'next/navigation';
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import styles from "@/styles/products.module.css";
import ProductHeader from '@/components/single/headers/productHeader';
import FilterContainer from '@/components/single/product/filterContainer';
import { getRefurbishedProducts,getSpecialOfferProducts } from '@/lib/actions/product.actions';


const page = () => {

  let [finalProducts, setFinalProducts] = useState([]);
  let [priceFilter, setPriceFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  let [availableTypes, setAvailableTypes] = useState<[]>([]);
  let [availableBrands, setAvailableBrands] = useState<[]>([]);
  let [brandFilters, setBrandFilter] = useState<[]>([]);
  let { parentCategory }:{parentCategory:string} = useParams();
  const [sampleRefurbishedProducts, setSampleRefurbishedProducts] = useState<any>([]);
  
    const refurbrished:any =[]
    const specialOffer:any = []
    let productTypes:any = []




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



     let productBrands:any = parentCategory === "refurbrished" 
                          ? refurbrished.map((product:any)=> product.brand)
                          : specialOffer.map((product:any)=> product.brand);

    productBrands = [...new Set<any>(productBrands)].map((brand:any)=> ({label:brand, isBrandChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
    productTypes = productTypes.map((type:string)=>({label:type, isTypeChecked:false})).sort((a:any,b:any)=> a.label.localeCompare(b.label));

    
    useEffect(() => {      

      if (brandFilters.length) {
        productBrands = [...brandFilters, ...productBrands.filter((brand:any)=> !brandFilters.some((brandFilter:any)=> brandFilter.label === brand.label)).sort()]
        setAvailableBrands(productBrands);
      }else{
        setAvailableBrands(productBrands);
      }

      if (typeFilters.length) {
        productTypes = [...typeFilters, ...productTypes.filter((type:any)=> !typeFilters.some((typeFilter:any)=> typeFilter.label === type.label)).sort()]
        setAvailableTypes(productTypes);
      }else{
        setAvailableTypes(productTypes);
      }
      
      let finalProducts:any = [];
      if (brandFilters.length && !typeFilters.length) {
        if (parentCategory === "refurbrished") {
          finalProducts = refurbrished.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));       
        }else{
          finalProducts = specialOffer.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));
        }
         return setFinalProducts(finalProducts)
      }

      if (typeFilters.length && !brandFilters.length) {
        data.forEach((item: any) => { 
          for (const products in item) {  
            if(typeFilters.some((type:any)=> type.label === products)){
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
            if(typeFilters.some((productType:any)=> productType.label === products)){
              finalProducts = [...finalProducts, ...item[products]]
            }       
          }
        });
        if (parentCategory === "refurbrished") {
          finalProducts = finalProducts.filter((product:any)=> !product.isNew);
        }else{
          finalProducts = finalProducts.filter((product:any)=> product.isSpecialOffer);
        }
        
        finalProducts = finalProducts.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));
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
 
  const handleBrandFilters = (selectedBrands:[])=>{
    setBrandFilter([...selectedBrands]);
  }

  const handleTypeFilters = (selectedTypes:any[])=>{    
    setTypeFilters([...selectedTypes]);
    
  }


  return (
      <div className={`${styles.products} customwidth mx-auto px-3`}>
         <ProductHeader category={parentCategory} handlePriceChange={handlePriceChange} />
         <div className={styles.productsContainer}>
        <FilterContainer 
          brandOrType={parentCategory}
          handlePriceChange={handlePriceChange} 
          brands={availableBrands} 
          brandFilters={brandFilters}
          handleBrandFilters={handleBrandFilters} 
          productCategories={availableTypes}
          typeFilters={typeFilters}
          handleTypeFilters={handleTypeFilters}
         
        />
        <ProductList products={finalProducts} />
      </div>
      </div>
  )
}

export default page