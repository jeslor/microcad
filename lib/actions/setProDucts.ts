"use server"
import {data} from'@/constants/data';
import { categories } from '@/constants/categories';
import Product from '@/lib/models/product.model';
import { connectToDatabase } from '@/lib/mongoose'
import Specification from '../models/Specification';

export const setAllProducts = async () => {
    await connectToDatabase();
    let products:any = [];
    data.forEach(groupedProducts=>{
        const GroupedProducts = Object.values(groupedProducts)[0];
        const category = Object.keys(groupedProducts)[0];
        let parentCategory:any = "";
        categories.forEach(cat=>{
            if(cat.subCategories.filter(subCat=>subCat.toLocaleLowerCase()===category.toLocaleLowerCase()).length>0){
                parentCategory = cat.category;
            }
        })
        GroupedProducts.forEach(async (product:any)=>{
            product.parentCategory = parentCategory;
            product.category = category;
            const specifications:any = [];
            for(const spec in product.specifications){
                const specification = new Specification({
                    name:spec,
                    value:typeof product.specifications[spec]==="string"?product.specifications[spec]:product.specifications[spec].toString()
                })
                specifications.push(specification);
                const response = await specification.save();
                if(!response){
                    console.log("error saving specification", specification);
                    
                }
            }
            product.specifications = specifications;

            const res = await Product.create(product);
            if(!res){
                console.log("error saving product", product);
                
            }

        })     
    })
}