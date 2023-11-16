"use client";
import { useState, useEffect } from 'react'

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import ProductList from '@/components/single/product/productList';
import FilterContainer from '@/components/single/product/filterContainer';
import Spinner from '@/components/single/spinner/spinner';
import ProductHeader from '@/components/single/headers/productHeader';
import { getCategoryProducts } from '@/lib/actions/product.actions';
import specification from '@/lib/models/specification';



export default function page() {
    let { category }:{category:string} = useParams();
    category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();

    let [finalProducts, setFinalProducts] = useState<any[]>([]);
    let[availableProducts, setAvailableProducts] = useState<any[]>([]);
    const [priceFilter, setPriceFilter] = useState('');
    let [availableBrands, setAvailableBrands] = useState<any[]>([]);
    let [brandFilters, setBrandFilter] = useState<[]>([]);
    let [availableProductCategoryFilters, setAvailableProductCategoryFilters] = useState<any[]>([]);
    let [specificationFilters, setSpecificationFilters] = useState<any[]>([]);


    const setBrands = (products:any) =>{
        let productBrands:any = products.map((product:any)=> product.brand);
        productBrands = [...new Set<any>(productBrands)].map((brand:any)=> ({label:brand, isBrandChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
        setAvailableBrands(productBrands);
    }

    const setSpecifications = (products:any) =>{
        let specificationFilters:any  = {};
        products.forEach((product:any) => {
           let productSpecifications = product.specifications;
           productSpecifications.forEach((specification:any) => {
                if (specificationFilters[specification.name]) {
                    specificationFilters[specification.name].push(specification.value);
                    specificationFilters[specification.name] = [...new Set<any>(specificationFilters[specification.name])].sort();
                }else{
                    specificationFilters[specification.name] = [];
                    specificationFilters[specification.name].push(specification.value);
                }
           });
        });
        specificationFilters = Object.entries(specificationFilters)
        setAvailableProductCategoryFilters(specificationFilters);
    }
   
//    get initial category products
    useEffect(() => {
        getCategoryProducts(category).then((res:any)=>{    
            setFinalProducts(res);
            setAvailableProducts(res);
        }) 
        
    },[category])



// setInitial Brands and advanced filters
    useEffect(() => {
        if (finalProducts.length) {
            setBrands(finalProducts);         
            setSpecifications(finalProducts);            
        }
    },[finalProducts])


 // adjust the products based on filters
 useEffect(() => {
    if (brandFilters.length) {
        availableBrands =  availableBrands.filter((brand:any)=> !brand.isBrandChecked)
        availableBrands = [...new Set<any>(availableBrands)].sort((a,b)=> a.label.localeCompare(b.label));
        availableBrands = [...brandFilters, ...availableBrands]
        setAvailableBrands(availableBrands);
    }else{
        setAvailableBrands([...availableBrands.sort((a,b)=> a.label.localeCompare(b.label))]);
    }

    let sectionFinalProducts:any = [];
    const filterProductswithSpecificationFilters = (products:any) =>{
        let filteredProducts:any = [];
        finalProducts.forEach((product:any) => {
            let productFlags:any = [];
            let productSpecifications = product.specifications;
            productSpecifications.forEach((specification:any) => {
             let currentFilterName  = specification.name;
             let currentFilterValue = specification.value;
             specificationFilters.forEach((filter:any) => {                
                 if (filter.title === currentFilterName ) {
                     if (filter.filters.some((value:any)=> value === currentFilterValue)) {
                         let productFlag = true;
                         productFlags.push(productFlag);
                     }else{
                         let productFlag = false;
                         productFlags.push(productFlag);
                     }
                 }
             });
             
            })
            productFlags = [...new Set<any>(productFlags)];
             if (productFlags.length === 1 && productFlags[0] === true) {
                 filteredProducts.push(product);
             }
 
        }); 
        return filteredProducts;
        
    }
    if (brandFilters.length && specificationFilters.length ===0) {
        sectionFinalProducts = finalProducts.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));               
        return setAvailableProducts(sectionFinalProducts)
    }

    if(!brandFilters.length && specificationFilters.length){
       const filterdProducts = filterProductswithSpecificationFilters(finalProducts);
      return setAvailableProducts(filterdProducts); 
    }
    if (brandFilters.length && specificationFilters.length) {
        let filterdProducts:any = filterProductswithSpecificationFilters(finalProducts);

            filterdProducts = filterdProducts.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));
            return setAvailableProducts(filterdProducts);
        
    }


    if(!specificationFilters.length && !brandFilters.length){
        setAvailableProducts(finalProducts);
      }

 },[brandFilters, specificationFilters])







    const handlePriceChange = (value:string) =>{
        setPriceFilter(value);
        if (value === 'low to high') {
          setAvailableProducts(availableProducts.sort((a:any,b:any)=> a.price - b.price));
        }
        if (value === 'high to low') {
          setAvailableProducts(availableProducts.sort((a:any,b:any)=> b.price - a.price));
          
        }
    }

    const handleBrandFilters = (selectedBrands:[])=>{
        setBrandFilter(prevState=>[...selectedBrands]);
    }

    const handleSpecificationFilters = (selectedSpecifications:any[])=>{
        setSpecificationFilters(prevState=>[...selectedSpecifications]);
    }


    return (
        <div className={`${styles.products} customwidth mx-auto px-3`}>
            <ProductHeader category={category} handlePriceChange={handlePriceChange} />
                {finalProducts.length === 0
                ? <Spinner />
                :<div className={styles.productsContainer}>
                    <FilterContainer 
                    handlePriceChange={handlePriceChange} 
                    brands={availableBrands} 
                    brandFilters={brandFilters} 
                    handleBrandFilters={handleBrandFilters} 
                    productSpecifications={availableProductCategoryFilters}
                    specificationFilters={specificationFilters}
                    handleSpecificationFilters={handleSpecificationFilters}
                    />
                    <ProductList products={availableProducts} />
                </div>
            }
    
        </div>
      )



}