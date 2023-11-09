import styles from "@/styles/products.module.css";
import {useState} from 'react'

interface Props {
    name:string,
    brandFilters: string[],
    handleBrandFilters: ({})=>void
}

const BrandInput = ({name, handleBrandFilters, brandFilters}:Props) => {
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
        handleBrandFilters(brandFilters)
        window.scrollTo(0, 0);
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} checked={brandState}/>
      <span className='text-xs'>{name}</span>
  </div>
  )
}

export default BrandInput