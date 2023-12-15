
import authOptions from "@/lib/configs/authOptions";
import NextAuth from "next-auth"






const handler = NextAuth(
 authOptions
);


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



    