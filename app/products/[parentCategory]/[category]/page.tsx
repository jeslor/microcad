"use client";
import { useState, useEffect } from 'react'

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import ProductList from '@/components/single/product/productList';
import FilterContainer from '@/components/single/product/filterContainer';
import Spinner from '@/components/single/spinner/spinner';
import ProductHeader from '@/components/single/headers/productHeader';
import { getCategoryProducts } from '@/lib/actions/product.actions';



export default function page() {
    let { category }:{category:string} = useParams();
    category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();

    let [finalProducts, setFinalProducts] = useState([]);
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
            setBrands(availableProducts);         
            setSpecifications(availableProducts);            
        }
        
    },[finalProducts])






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
                {availableProducts.length === 0
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
                    <ProductList products={finalProducts} />
                </div>
            }
    
        </div>
      )



}