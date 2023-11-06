import { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import styles from "@/styles/products.module.css";
  import { StateContext } from '@/components/providers/stateProvider';
import BrandInput from './brandInput';
import AdvancedFilter from './advancedFilter';
import { Key } from 'lucide-react';

interface Props {
    handlePriceChange: ()=> void,
    brands:[]
    brandFilters:[]
    productSpecifications: []
    handleFilters:()=>void
    specificationFilters: []
    handleSpecificationFilters: (specificationFilters:string[])=>void,
}

const FilterContainer = ({
    handlePriceChange, 
    brands, 
    brandFilters, 
    handleFilters, 
    productSpecifications,
    specificationFilters,
    handleSpecificationFilters
}:Props) => {
    const {openFilter, handleOpenFilter} = useContext(StateContext);
    const filterContainerClasses = openFilter ? `${styles.filterContainer} ${styles.filterContainerOpen}` : `${styles.filterContainer}`;
    

  return (
    <div onClick={handleOpenFilter} className={`${filterContainerClasses}`}>
        <div  className={styles.filterContainerInner} onClick={(e)=>e.stopPropagation()}>
            <div className={`${styles.filter} ${styles.filter1} text-primaryLight`}>
                <h5 className="font-bold text-primarymedium">price</h5>
                <form action="" className='flex pt-3 items-end'>
                <div className='flex-col inline-flex'>
                    <label className="text-xs font-bold pl-3" htmlFor="min">Min</label>
                    <div className={styles.inner}>
                    $
                    <input type="number" />
                    </div>
                </div>
                -
                <div className='ml-3 inline-flex flex-col'>
                    <label className="text-xs font-bold pl-3" htmlFor="max">Max</label>
                    <div className={styles.inner}>
                    $
                    <input type="number" />
                    </div>
                </div>
                <button className='pt-2 text-xs text-slate-100 border-primaryLight bg-primarymedium'>filter</button>
                </form>

                <Select  onValueChange={handlePriceChange}>
                <SelectTrigger className={`${styles.sortWithPrice}`}>
                    <SelectValue className={styles.secetOPtion}  placeholder="sort by Price" />
                </SelectTrigger>
                    <SelectContent className='bg-slate-200'>
                    <SelectGroup >
                        <SelectLabel>Sort by price</SelectLabel>
                        <SelectItem value="low to high">low to high</SelectItem>
                        <SelectItem value="high to low">high to low</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                
            </div>
            <div className={`${styles.filter} ${styles.filter2} text-primaryLight`}>
                <h5 className="font-bold text-primarymedium mb-3">Brand</h5>
                <div className={styles.brands}>
                    {brands.map(br=>
                        <BrandInput name={br} brandFilters={brandFilters} handleFilters={handleFilters} />
                    )}
                </div>
            </div>
            <div className={`${styles.filter} ${styles.filter3} text-primaryLight`}>
                <h5 className="font-bold text-primarymedium mb-3">Advanced Filter</h5>
                {
                    productSpecifications.map((spec:[], index)=>(
                        <AdvancedFilter
                         specification={spec}
                         specificationFilters={specificationFilters}
                        handleSpecificationFilters={handleSpecificationFilters} 
                         
                        />
                    ))
                }  
            </div>
        </div> 
    </div>
  )
}

export default FilterContainer;