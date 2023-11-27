"use client"
import { useState, useEffect, useContext } from "react";
import { StateContext } from "@/components/providers/stateProvider";
import { useParams } from "next/navigation"
import { getSingleProduct } from "@/lib/actions/product.actions"
import styles from "@/styles/products.module.css"
import Spinner from "@/components/single/spinner/spinner";
import AddToCartButton from "@/components/single/cart/AddToCartButton";

const page = () => {
  const {currentProducts} = useContext(StateContext)
  const [product, setProduct] = useState<any>({})
  const { id } = useParams()
  const ProductId:string = id.toString()
  

  const fetchProduct =  async() => {
    let product:any = {}
    if(currentProducts.products.length){
       product = currentProducts.products.find((product:any)=> product._id === ProductId)
    }else{
     product = await getSingleProduct(ProductId)
    }
    setProduct(product)
  }

useEffect(() => {
  fetchProduct()
}, [ProductId]);


    
  return <>
  {product.name !==undefined
    ? (
      <div className={styles.ViewSingleProduct}>
      <div className={styles.singleProductInner}>
        <div className={styles.singleProduct}>
          <div className={styles.singleProductImage}>
            <img src={product.imageURL} alt={product.name} />
          </div>
          <div className={styles.productDetails}>
           <h2 className={styles.singleProductName}>{product.name}</h2>   
           {product.price>0&&( <h6 className={styles.singleProductPrice}>${`${' '}${product.price.toLocaleString()}`}</h6>)} 
           <h6 className={styles.singleProductModel}><span>Model:</span> {product.model}</h6>
            <h6 className={styles.singleProductType}><span>Type:</span> {product.productType}</h6>
           {product.quantity>0?(
              <h6 className={styles.singleProductInStock}>In Stock</h6>
            ):(
              <h6 className={styles.singleProductOutOfStock}>Out of Stock</h6>
            )}
            <h5>Looks and Shipping</h5>
           <h6 ><span>Color:</span>{product.color}</h6>
            <h6 className={styles.singleProductWeight}><span>Weight:</span>{product.weight} lbs</h6>
              <AddToCartButton  product={product} />
            <div className={styles.productDescription}>
              <h5>Description</h5>
              <p>{product.description}</p>
            </div>
            <div className={styles.singleProductSpecificatations}>
              <h5>Specifications</h5>
              {
                product.specifications&&(
                  <ul>
                    {product.specifications.map((spec:any, index:number)=>(
                      <li key={spec._id}><span>{spec.name}:</span>{spec.value}</li>
                    ))}
                  </ul>
                )
              }
            </div>
          </div>
        
        </div>
      </div>
    </div>
    )
    : <Spinner />}
  </>
}

export default page