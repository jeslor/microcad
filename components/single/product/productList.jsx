import styles from "@/styles/products.module.css";
import ProductListItem from "./productListItem";



const ProductList = ({products}) => {

  return (
    <div className={styles.productList}>
       {
        products.length === 0 
        ?<div className="flex items-center justify-center w-full h-24"> <h1 className="font-bold text-2xl text-primaryLight">no products found</h1></div>  
        :products.map((product) =>  (<ProductListItem product={product} key={product.description} />))
      }
   
  </div>
  )
}

export default ProductList