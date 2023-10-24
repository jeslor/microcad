"use client";
import { useSelectedLayoutSegments } from 'next/navigation'


export default function page() {

    const segments = useSelectedLayoutSegments();
   console.log(segments);
   
 
    
  return (
    <div>
        <h1 className="capitalize">{'hello'}</h1>
    </div>
  )
}
