"use client"
import {setAllProducts} from "@/lib/actions/setProDucts";
const page = () => {


   const addProducts = async () => {
      setAllProducts();

   }


  return (
    <div className="h-screen flex items-center justify-center flex-col">
        <h1>Send Data to database</h1>
        <button onClick={addProducts} className="microcadBtn">Start</button>
    </div>
  )
}

export default page