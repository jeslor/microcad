"use client";
import { useParams } from "next/navigation";


export default function page() {

  let { parentCategory, category } = useParams();

  category = category.toLocaleString().replaceAll('_', ' ').replace('%26', '&');
  




   
 
    
  return (
    <div>
        <h1 className="capitalize font-bold text-lg">{category}</h1>
    </div>
  )
}
