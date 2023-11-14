import { useState } from 'react'

interface AdvancedFilterInputProps {
    filter: string,
    specificationFilters: any[],
    parentFilter: [],
    handleSpecificationFilters: (specificationFilters:string[])=>void,
}

const AdvancedFilterInput = ({filter, specificationFilters,parentFilter, handleSpecificationFilters}:AdvancedFilterInputProps) => {
    const [checked, setChecked] = useState(false);


    const handleCheckBoxChange = ()=>{
        setChecked(prevChecked=>!prevChecked);
       if(checked === false){
            if (specificationFilters.map((specFil)=>specFil.title).includes(parentFilter)) {
               specificationFilters.forEach((specFil)=>{
                   if(specFil.title === parentFilter){
                       specFil.filters.push(filter)
                   }
               })
            }else{
                specificationFilters.push({
                    title: parentFilter,
                    filters: [filter]
                })
            }
     
        }else{
            specificationFilters.forEach((specFil)=>{
                if(specFil.title === parentFilter){
                    const index = specFil.filters.indexOf(filter);
                    if (index > -1) {
                        specFil.filters.splice(index, 1);
                      }
                }
                if (specFil.filters.length === 0) {
                    const index = specificationFilters.indexOf(specFil);
                    if (index > -1) {
                        specificationFilters.splice(index, 1);
                      }
                    
                }
            })
        }       
        handleSpecificationFilters(specificationFilters)
        window.scrollTo(0, 0);
    }

  return (
    <li className="text-xs">
        <input type="checkbox" className="mr-2" checked={checked} readOnly onChange={handleCheckBoxChange}/>
        {filter}
    </li>
  )
}

export default AdvancedFilterInput