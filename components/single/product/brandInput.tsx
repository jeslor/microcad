import styles from "@/styles/products.module.css";
import {useState} from 'react'

interface Props {
    name:string,
    brandFilters: string[],
    handleFilters: ({})=>void
}

const BrandInput = ({name, handleFilters, brandFilters}:Props) => {
    const [brandState, setBrandChange] = useState(false)


    const hadlebrandClick = ()=>{
        setBrandChange(prevBrandState=>!prevBrandState);
       
        if(!brandState){
            brandFilters.push(name);
        }
        else{
            const index = brandFilters.indexOf(name);
            if (index > -1) {
                brandFilters.splice(index, 1);
              }
        }
        handleFilters(brandFilters)
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} checked={brandState}/>
      <span className='text-xs'>{name}</span>
  </div>
  )
}

export default BrandInput