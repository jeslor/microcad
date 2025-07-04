"use client";
import { useState, useEffect } from 'react'

import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import ProductList from '@/components/single/product/productList';
import FilterContainer from '@/components/single/product/filterContainer';
import Script from 'next/script';
import ProductHeader from '@/components/single/headers/productHeader';


export default function page() {
  let { category } = useParams();
  let [finalProducts, setFinalProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]); 
  let [priceFilter, setPriceFilter] = useState('');
  let [availableBrands, setAvailableBrands] = useState([]);
  let [brandFilters, setBrandFilter] = useState([]);
  let [specificationFilters, setSpecificationFilters] = useState([]);



  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();
  const products = data.find((product) =>{
       for (const key in product) {
        if (product[key].length > 0 && key === category) {
          return key[0];
        }
       }
    });
    const CategoryProducts = products[category];

    const handlePriceChange = (value) =>{
      setPriceFilter(value);
      if (value === 'low to high') {
        setProductsToShow(finalProducts.sort((a,b)=> a.price - b.price));
      }
      if (value === 'high to low') {
        setProductsToShow(finalProducts.sort((a,b)=> b.price - a.price));
        
      }
    }

    let productBrands = [...new Set(CategoryProducts.map(product=>({label:product.brand, isBrandChecked:false})))].sort((a,b)=> a.label.localeCompare(b.label));


    useEffect(() => {
      if(brandFilters.length){
        productBrands = [...brandFilters, ...productBrands.filter(brand=>brandFilters.every(fil=>fil.label !== brand.label)).sort((a,b)=> a.label.localeCompare(b.label))];
        setAvailableBrands(productBrands);
      }else{
        setAvailableBrands(productBrands);
      }
      if (brandFilters.length > 0 && specificationFilters.length === 0) {
        let filteredProducts = CategoryProducts.filter(product => brandFilters.some(brand=>brand.label === product.brand ));
        return setFinalProducts(filteredProducts);
      }else if (specificationFilters.length > 0 && brandFilters.length === 0) {
        let filteredProducts = []
        CategoryProducts.forEach(product => {
          const specifications = product.specifications;
          const results = [];
          for (const key in specifications) {
           let currSpec = key;
           let currSpecValue = specifications[key];
          let specFilter = specificationFilters.find(fil=>fil.title === currSpec);
           if(typeof specFilter !== 'undefined'){
            if(specFilter.filters.includes(currSpecValue)){
              results.push(true);
            }else{
              results.push(false);
            }
          }
        }
        results.includes(false)? null : filteredProducts.push(product);  
        });
        filteredProducts = [...new Set(filteredProducts)];
        return setFinalProducts(filteredProducts); 
      }else if(brandFilters.length > 0 && specificationFilters.length > 0){
        let filteredProducts = []
        CategoryProducts.forEach(product => {
          const specifications = product.specifications;
          const results = [];
          for (const key in specifications) {
           let currSpec = key;
           let currSpecValue = specifications[key];
          let specFilter = specificationFilters.find(fil=>fil.title === currSpec);
           if(typeof specFilter !== 'undefined'){
            if(specFilter.filters.includes(currSpecValue)){
              results.push(true);
            }else{
              results.push(false);
            }
          }
        }
        results.includes(false)? null : filteredProducts.push(product);  
        });
        filteredProducts = [...new Set(filteredProducts)];
        filteredProducts = filteredProducts.filter(product => brandFilters.includes(product.brand));
        return setFinalProducts(filteredProducts);

      }else{
        setFinalProducts(CategoryProducts);
      }
      return setProductsToShow(finalProducts);
    },  [category, brandFilters, specificationFilters ] );


    let productSpecifications = CategoryProducts.reduce((acc, product)=>{
      const productSpecs = product.specifications;

      for (const key in productSpecs) {
        if (acc[key]) {
          acc[key].push(productSpecs[key]);
          acc[key] = [...new Set(acc[key])];
        }
        else{
          acc[key] = [productSpecs[key]];
        } 
      }
      return acc;
    }, {});
    productSpecifications = Object.entries(productSpecifications)


    const handleBrandFilters = (selectedBrands)=>{
      setBrandFilter([ ...selectedBrands]);
    }

    const handleSpecificationFilters = (selectedSpecifications)=>{
      setSpecificationFilters(prevFilters=>[...selectedSpecifications]);
    }

 
  return (
    <div className={`${styles.products} customwidth mx-auto px-3`}>
      <Script src="/static/js/selectOption.js" />
      <ProductHeader category={category} handlePriceChange={handlePriceChange} />
      <div className={styles.productsContainer}>
        <FilterContainer 
          handlePriceChange={handlePriceChange} 
          brands={availableBrands} 
          brandFilters={brandFilters} 
          handleBrandFilters={handleBrandFilters} 
          productSpecifications={productSpecifications}
          specificationFilters={specificationFilters}
          handleSpecificationFilters={handleSpecificationFilters}
        />
        <ProductList products={finalProducts} />
      </div>

    </div>
  )
}
