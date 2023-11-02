import styles from "@/styles/products.module.css";
import ProductListItem from "./productListItem";



const ProductList = ({products}) => {

  return (
    <div className={styles.productList}>
    {products.map((product) =>  (
      <ProductListItem product={product} key={product.description} />
      )
    )}
  </div>
  )
}

export default ProductList