import styles from "@/styles/products.module.css";
import { type } from "os";
import {useState} from 'react'

interface Props {
    productType:any,
    typeFilters: string[],
    handleTypeFilters: (typeFilters:any[])=>void
}

const ProductTypeInput = ({productType, handleTypeFilters, typeFilters}:Props) => {


    const hadlebrandClick = ()=>{
       
        if(!productType.isTypeChecked){
            productType.isTypeChecked = true
          typeFilters.push(productType);
        }
        else{
            productType.isTypeChecked = false
            typeFilters = typeFilters.filter((typeFilter:any)=>typeFilter.isTypeChecked === true)
        }
        handleTypeFilters(typeFilters)
        window.scrollTo(0, 0);
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} checked={productType.isTypeChecked}/>
      <span className='text-xs'>{productType.label}</span>
  </div>
  )
}

export default ProductTypeInput