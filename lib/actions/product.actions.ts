"use server";
import { connectToDatabase } from "../mongoose";
import Product from "../models/product";
import Specification from "../models/specification";


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
        const res = await Product.find({ isNewProduct: false });
        const products = JSON.parse(JSON.stringify(res));
        return products;
       
    } catch (error) {
        console.log(error);
        
    }
   
}

export const getSpecialOfferProducts = async () => {
    try {
        await connectToDatabase();
        const res = await Product.find({ isSpecialOffer: true });
        const products = JSON.parse(JSON.stringify(res));
        return products;
        
    } catch (error) {
        console.log(error);
    }
}


export const getCategoryProducts = async (category: string) => {
    try {
        await connectToDatabase();
        const res = await Product.find({ category: category }).populate({
            path: "specifications",
           
        })
        const products = JSON.parse(JSON.stringify(res));
        return products;
        
    } catch (error) {
        console.log(error);
    }
}