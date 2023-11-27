"use server";
import { connectToDatabase } from "../mongoose";
import Product from "../models/product.model";
import Specification from "../models/specification.model";


export const getAllProducts = async () => {
    await connectToDatabase();
    const products = await Product.find({});
    return products;
}

export const addProduct = async (product: any) => {
    await connectToDatabase();
    const newProduct = new Product(product);
    await newProduct.save();
    return newProduct;
}


export async function getRefurbishedProducts  () {
    try {
        await connectToDatabase();
        const res = await Product.find({ isNewProduct: false }).populate(
           { path: "specifications",
                model: Specification
            }
        );
        const products = JSON.parse(JSON.stringify(res));
        return products;
       
    } catch (error) {
        console.log(error);
        
    }
   
}

export const getSpecialOfferProducts = async () => {
    try {
        await connectToDatabase();
        const res = await Product.find({ isSpecialOffer: true }).populate(
            { path: "specifications",
            model: Specification
        }
        );
        const products = JSON.parse(JSON.stringify(res));
        return products;
        
    } catch (error) {
        console.log(error);
    }
}


export const getCategoryProducts = async (category: string) => {
    try {
        await connectToDatabase();
        
        const res = await Product.find({ category: category }).populate(
            { path: "specifications",
            model: Specification
        }
        );        
        const products = JSON.parse(JSON.stringify(res));
        return products;
        
    } catch (error) {
        console.log(error);
    }
}

export const getSingleProduct = async (id: string) => {
    try {
        await connectToDatabase();
        const res = await Product.findById(id).populate(
            { path: "specifications",
            model: Specification
        }
        );
        const product = JSON.parse(JSON.stringify(res));
        return product;
        
    } catch (error) {
        console.log(error);
    }
}


export const searchProducts = async (search: string) => {
    try {
        await connectToDatabase();
        
        const res = await Product.find({ $text: { $search: search } }).populate(
            { path: "specifications",
            model: Specification
        }
        ).limit(10);
        const products = JSON.parse(JSON.stringify(res));
        return products;
        
    } catch (error) {
        console.log(error);
    }
}