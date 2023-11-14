"use client";
import styles from "@/styles/products.module.css"
import {useParams} from 'next/navigation';

const page = () => {
  const {id}:{id:string} = useParams();
  const singleProduct = id.toLocaleString().replaceAll('%20', ' ').toLowerCase();

  

  

  return (
    <div className={`${styles.products} customwidth mx-auto px-3`}>
      </div>
  )
}

export default page