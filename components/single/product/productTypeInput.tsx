import styles from "@/styles/products.module.css";
import { type } from "os";
import {useState} from 'react'

interface Props {
    name:string,
    typeFilters: string[],
    handleTypeFilters: (typeFilters:string[])=>void
}

const ProductTypeInput = ({name, handleTypeFilters, typeFilters}:Props) => {
    const [typeState, setTypeSate] = useState(false)


    const hadlebrandClick = ()=>{
        setTypeSate(prevBrandState=>!prevBrandState);
       
        if(!typeState){
          typeFilters.push(name);
        }
        else{
            const index = typeFilters.indexOf(name);
            if (index > -1) {
              typeFilters.splice(index, 1);
              }
        }
        handleTypeFilters(typeFilters)
        window.scrollTo(0, 0);
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} checked={typeState}/>
      <span className='text-xs'>{name}</span>
  </div>
  )
}

export default ProductTypeInput