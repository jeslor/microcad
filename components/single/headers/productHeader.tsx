import { Icon } from '@iconify/react/dist/iconify.js';
import styles from "@/styles/products.module.css";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";



interface Props {
    category: string,
    handlePriceChange: (e: string) => void
}

const ProductHeader = ({category, handlePriceChange}:Props) => {
  return (
    <div className={` ${styles.productsHeader} customwidth mx-auto `}>
        <h1 className="capitalize font-bold text-lg text-primayColor">{category}</h1>
        <div className={`${styles.priceFilters} text-primarymedium`}>
        <Select onValueChange={handlePriceChange}>
            <SelectTrigger className="w-[180px]">
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
        <div className={`${styles.openFilter} font-semibold text-sm`}> <span>open Filters:</span> <div className={`${styles.filterIcon} bg-primarymedium`}><Icon icon="line-md:check-list-3-filled" /></div></div>
    </div>
  )
}

export default ProductHeader