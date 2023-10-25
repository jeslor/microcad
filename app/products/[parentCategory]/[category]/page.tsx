"use client";
import { useParams } from "next/navigation";
import styles from "@/styles/product.module.css";


export default function page() {

  let { parentCategory, category } = useParams();
  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&');
   
 
    
  return (
    <div className={`${styles.products} customwidth mx-auto`}>
        <h1 className="capitalize font-bold text-lg">{category}</h1>
    </div>
  )
}
