import { useState } from 'react'
import { string } from 'zod';

interface AdvancedFilterInputProps {
    filter: string,
    specificationFilters: [],
    handleSpecificationFilters: (specificationFilters:[])=>void,
}

const AdvancedFilterInput = ({filter, specificationFilters, handleSpecificationFilters}:AdvancedFilterInputProps) => {
    const [checked, setChecked] = useState(false);


    const handleCheckBoxChange = ()=>{
        setChecked(prevChecked=>!prevChecked);
       if(checked === false){
           specificationFilters.push(filter);
        }else{
            const index = specificationFilters.indexOf(filter);
            if (index > -1) {
                specificationFilters.splice(index, 1);
              }
        }       
        handleSpecificationFilters(specificationFilters)
    }

  return (
    <li className="text-xs">
        <input type="checkbox" className="mr-2" checked={checked} onChange={handleCheckBoxChange}/>
        {filter}
    </li>
  )
}

export default AdvancedFilterInput