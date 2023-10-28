"use client";
import { useParams } from "next/navigation";
import styles from "@/styles/product.module.css";
import {data} from'@/constants/data';




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
      <div className="grid grid-cols-3">
        {finalProducts.map((product) =>  (
            <div className="flex flex-col items-center justify-center" key={product.description}>
              <img src={product.imageURL} alt={product.name} className="w-full object-contain h-40" />
              <h1 className="text-sm font-bold">{product.name}</h1>
              <h1 className="text-sm font-bold">{product.description}</h1>
            </div>
          )
        )}
      </div>
    </div>
  )
}
