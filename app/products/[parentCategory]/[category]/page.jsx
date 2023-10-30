"use client";
import { useParams } from "next/navigation";
import styles from "@/styles/products.module.css";
import {data} from'@/constants/data';
import Image from "next/image";




export default function page() {

  let { parentCategory, category } = useParams();
  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&').toLowerCase();
  
    console.log(category);


  const products = data.find((product) =>{
       for (const key in product) {
        if (product[key].length > 0 && key === category) {
          return key[0];
        }
       }
    });
    const finalProducts = products[category];
 
  return (
    <div className={`${styles.products} customwidth mx-auto`}>
        <h1 className="capitalize font-bold text-lg">{category}</h1>
      <div className={styles.productList}>
        {finalProducts.map((product) =>  (
            <div  className={styles.ProductListItem} key={product.description}>
              <div className={styles.productImage}>
                <img
                // height={200}
                // width={200}
                  src={product.imageURL}
                  alt={product.name}
                />
              </div>
              <h1 className="text-sm font-bold">{product.name}</h1>
              <h2 className="text-sm font-bold">{product.model}</h2>
            </div>
          )
        )}
      </div>
    </div>
  )
}
