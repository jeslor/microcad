"use client"
import { useEffect, useState, useContext} from 'react';
import { StateContext } from '@/components/providers/stateProvider';
import { useParams} from 'next/navigation';
import Spinner from '@/components/single/spinner/spinner';
import ProductList from '@/components/single/product/productList';
import styles from "@/styles/products.module.css";
import ProductHeader from '@/components/single/headers/productHeader';
import FilterContainer from '@/components/single/product/filterContainer';
import { getRefurbishedProducts,getSpecialOfferProducts } from '@/lib/actions/product.actions';


const page = () => {
    const { parentCategory }:{parentCategory:string} = useParams();
    const { handhleCurrentProducts} = useContext(StateContext);

    let [finalProducts, setFinalProducts] = useState([]);
    let[availableProducts, setAvailableProducts] = useState<any[]>([]);
    let [availableBrands, setAvailableBrands] = useState<any[]>([]);
    let [brandFilters, setBrandFilter] = useState<[]>([]);
    let [availableCategories, setAvailableCategories] = useState<any[]>([]);
    let [categoryFilters, setCategoriesFilters] = useState<any[]>([]);
    const [priceFilter, setPriceFilter] = useState('');


    const setBrands = (products:any) =>{
      let productBrands:any = products.map((product:any)=> product.brand);
      productBrands = [...new Set<any>(productBrands)].map((brand:any)=> ({label:brand, isBrandChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
      setAvailableBrands(productBrands);
    }

    const setCategories = (products:any) =>{
      let productCategories:any = products.map((product:any)=> product.category);
      productCategories = [...new Set<any>(productCategories)].map((category:any)=> ({label:category, isCategoryChecked:false})).sort((a,b)=> a.label.localeCompare(b.label));
      setAvailableCategories(productCategories);
    }


    // set inital products
    useEffect(() => {
      if (parentCategory === "refurbrished") {
        getRefurbishedProducts().then((res:any)=>{    
          setFinalProducts(res);
          handhleCurrentProducts({products:res, productsLabel:parentCategory});

        }) 
      }
      if (parentCategory === "specialOffer") {
        getSpecialOfferProducts().then((res:any)=>{    
            setFinalProducts(res);
            handhleCurrentProducts({products:res, productsLabel:parentCategory});
        }) 
      }
    },[parentCategory])


    // set initialbrands and categories
    useEffect(() => {
      if (finalProducts.length) {
        setBrands(finalProducts);
        setCategories(finalProducts);
        setAvailableProducts(finalProducts);
      }
    },[finalProducts])


    // adjust products based on filters
    useEffect(() => {
      if (brandFilters.length) {
        availableBrands =  availableBrands.filter((brand:any)=> !brand.isBrandChecked)
        availableBrands = [...new Set<any>(availableBrands)].sort((a,b)=> a.label.localeCompare(b.label));
        availableBrands = [...brandFilters, ...availableBrands]
        setAvailableBrands(availableBrands);
      }else{
        setAvailableBrands([...availableBrands.sort((a,b)=> a.label.localeCompare(b.label))]);
      }

      if (categoryFilters.length) {
        availableCategories = availableCategories.filter((category:any)=> !category.isCategoryChecked)
        availableCategories = [...new Set<any>(availableCategories)].sort((a,b)=> a.label.localeCompare(b.label));
        availableCategories = [...categoryFilters, ...availableCategories]        
        setAvailableCategories(availableCategories);
      }else{
        setAvailableCategories([...availableCategories.sort((a,b)=> a.label.localeCompare(b.label))]);
      }


      let sectionFinalProducts:any = [];
      if (brandFilters.length && !categoryFilters.length) {
          sectionFinalProducts = finalProducts.filter((product:any)=> brandFilters.some((brand:any)=> brand.label === product.brand));       
         return setAvailableProducts(sectionFinalProducts)
      }

      if (categoryFilters.length && !brandFilters.length) {
        sectionFinalProducts = finalProducts.filter((product:any)=> categoryFilters.some((category:any)=> category.label === product.category));
        return setAvailableProducts(sectionFinalProducts)
      }

      if(categoryFilters.length && brandFilters.length){
        sectionFinalProducts = finalProducts.filter((product:any)=> categoryFilters.some((category:any)=> category.label === product.category) && brandFilters.some((brand:any)=> brand.label === product.brand));
        return setAvailableProducts(sectionFinalProducts)
      }

      if(!categoryFilters.length && !brandFilters.length){
        setAvailableProducts(finalProducts);
      }

    },[ brandFilters, categoryFilters,])




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

  const handleCategoriesFilters = (selectedCategories:any[])=>{    
    setCategoriesFilters(prevState=>[...selectedCategories]);
    
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
                      brands={availableBrands} 
                      productCategories={availableCategories}
                      brandFilters={brandFilters}
                      categoryFilters={categoryFilters}
                      handlePriceChange={handlePriceChange} 
                      handleBrandFilters={handleBrandFilters} 
                      handleTypeFilters={handleCategoriesFilters}
                    
                    />
                    <ProductList products={availableProducts} />
                </div>
            }   
        </div>
    )

}

export default page