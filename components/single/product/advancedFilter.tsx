import AdvancedFilterInput from "./advancedFilterInput"

interface Props {
    specification: any[]
    specificationFilters: []
    handleSpecificationFilters: (specificationFilters:[])=>void,
}

const AdvancedFilter = ({
    specification,
    specificationFilters,
    handleSpecificationFilters
}:Props) => {
    
  return (
    <div>
        <h6 className="text-xs font-bold py-2">{specification[0]}</h6>
        <ul>
            {specification[1].sort((a:any,b:any)=>parseInt(a)-parseInt(b)).map((item:string, index:number) => {
                return (
                    <AdvancedFilterInput
                        filter={item}
                        key={index} 
                        specificationFilters={specificationFilters}
                        handleSpecificationFilters={handleSpecificationFilters}
                    />
                )
            })}
        </ul>
    </div>
  )
}

export default AdvancedFilter