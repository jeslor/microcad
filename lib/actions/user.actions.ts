"use server";
import User from '../models/user.model';
import { connectToDatabase } from "../mongoose";

export const getLoggedInUser = async (id: string) => {
    try {
        await connectToDatabase();
        const res  =  await User.findById(id);
        const user = JSON.parse(JSON.stringify(res));
        return user;
    } catch (error) {
        console.log(error);
        
    }

}

export const getUserByEmail = async (email: string) => {
    try {
        await connectToDatabase();
        const res = await User.findOne({email});
        const user = JSON.parse(JSON.stringify(res));
        return user;
    } catch (error) {
        
    }
}

export const updateUserData = async (id: string, data: any) => {
   try {
    await connectToDatabase();
    const res = await User.findByIdAndUpdate(id, data);
    return JSON.stringify(res);
   } catch (error) {
    
   }
    
}