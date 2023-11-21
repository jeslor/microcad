
import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/adapters/mongoDB"
import bcrypt from "bcrypt"
import User from "@/lib/models/user.model"
import { connectToDatabase } from "@/lib/mongoose";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";




const handler = NextAuth({
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
            async authorize(credentials:any, req) {
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
        async session({ session }) {

            const userInfos = await User.findOne({email:session.user?.email});
            session.user = userInfos;
                
        
            return session;
        },
    },
});


export { handler as GET, handler as POST };

// export const  authOptions = {
//     adapter: MongoDBAdapter(clientPromise),
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             credentials: {
//                 email:{},
//                 password:{}
//             }
//         }),
//         async authorize(credentials, req) {
//             // Add logic here to look up the user from the credentials supplied
//             const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
//             if (user) {
//               // Any object returned will be saved in `user` property of the JWT
//               return user
//             } else {
//               // If you return null then an error will be displayed advising the user to check their details.
//               return null
      
//               // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//             }
//           }
//     ],
// }



    