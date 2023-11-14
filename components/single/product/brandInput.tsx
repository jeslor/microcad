import styles from "@/styles/products.module.css";
import { set } from "mongoose";
import {useState} from 'react'

interface Props {
    brand:any,
    brandFilters: {}[],
    handleBrandFilters: ({})=>void
}

const BrandInput = ({brand, handleBrandFilters, brandFilters}:Props) => {
  const [isnativeChecked, setIsNativeChecked] = useState(false)


    const hadlebrandClick = ()=>{    

        if(!brand.isBrandChecked){
          brand.isBrandChecked = true
            brandFilters.push(brand);
        }
        else{
          brand.isBrandChecked = false
           brandFilters = brandFilters.filter((brandFilter:any)=>brandFilter.isBrandChecked === true)
        }
        handleBrandFilters(brandFilters)
        window.scrollTo(0, 0);
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} defaultChecked={brand.isBrandChecked}/>
      <span className='text-xs'>{brand.label}</span>
  </div>
  )
}

export default BrandInput