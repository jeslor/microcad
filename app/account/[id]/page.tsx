"use client"

import { useParams } from "next/navigation"
import styles from "@/styles/account.module.css"

const page = () => {
    const {id} = useParams()
    console.log(id);
    
  return (
    <div className={`${styles.checkout} mx-auto`}>

    </div>
  )
}

export default page