import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../mongoose";
import Product from "../models/product.model";


export const getAllProducts = async () => {
    await connectToDatabase();
    const products = await Product.find({});
    return products;
}

export const getRefurbrishedProducts = async () => {
    await connectToDatabase();
    const products = await Product.find({isNewProduct:false});
    return products;
}

export const getSpecialOfferProducts = async () => {
    await connectToDatabase();
    const products = await Product.find({isSpecialOffer:true});
    return products;
}

export const addProduct = async (product: any) => {
    await connectToDatabase();
    const newProduct = new Product(product);
    await newProduct.save();
    return newProduct;
}

