import { MongoDBAdapter } from "@auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/adapters/mongoDB"
import bcrypt from "bcrypt"
import User from "@/lib/models/user.model"
import { connectToDatabase } from "@/lib/mongoose";


const authOptions:any =     {
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET,
    debug: process.env.NODE_ENV === "development",
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { },
              password: {}
            },
            async authorize(credentials:any) {
                 const { email, password } = credentials;
                connectToDatabase();
                const foundUser = await User.findOne({email});
                
                if (foundUser) {
                    const isMatch = await bcrypt.compare(password, foundUser.hashPassword);
                    
                    if (isMatch) {
                        return foundUser;
                  
                    }

                    if (!isMatch) {
                        console.log("password is not match");
                        
                    }
                }

                return null
            }
          })
    ],
    callbacks: {
        async session({ session,token, user }:any) {
            return session;
        },
    },
}


export default authOptions;