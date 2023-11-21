import { NextResponse } from "next/server";
import User from "@/lib/models/user.model";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/mongoose";

 export const POST = async(request:Request)=>{
    try {
        const userData = await request.json();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(userData.password, salt);
        const userToRegister = new User({
            accountType: userData.accountType,
            email: userData.email,
            hashPassword,
            firstName: userData.firstName,
            lastName: userData.lastName,
            subscribe: userData.subscribe,
            street: userData.street,
            city: userData.city,
            province: userData.province,
            country: userData.country,
            zipCode: userData.zipCode,
            phone: userData.phone,
            fax: userData.fax,
        });
        await connectToDatabase();
        const registeredUser = await userToRegister.save();
        console.log({registeredUser});
        
    } catch (error) {
        console.log({error});
        
    }

    return NextResponse.json({message:"success"});
 }

