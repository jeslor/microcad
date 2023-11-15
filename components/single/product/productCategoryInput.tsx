import styles from "@/styles/products.module.css";

interface Props {
  productCategory:any,
    categoryFilters: string[],
    handleTypeFilters: (typeFilters:any[])=>void
}

const ProductCategoryInput = ({productCategory, handleTypeFilters, categoryFilters}:Props) => {


    const hadlebrandClick = ()=>{
       
        if(!productCategory.isCategoryChecked){
          productCategory.isCategoryChecked = true
            categoryFilters.push(productCategory);
        }
        else{
          productCategory.isCategoryChecked = false
            categoryFilters = categoryFilters.filter((typeFilter:any)=>typeFilter.isCategoryChecked === true)
        }
        handleTypeFilters(categoryFilters)
        window.scrollTo(0, 0);
        
    }
    
  return (
    <div className={styles.brand}>
    <input type='checkbox' onClick={hadlebrandClick} readOnly checked={productCategory.isTypeChecked}/>
      <span className='text-xs'>{productCategory.label}</span>
  </div>
  )
}

export default ProductCategoryInput