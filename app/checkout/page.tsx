"use server"
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import CheckoutPage from "./checkOutPage";
import { getUserByEmail } from "@/lib/actions/user.actions"

const CheckOutSessionWrapper = async() => {
    let currUser = null
    const session:any = await getServerSession(authOptions)

    if (session) {
         currUser = await getUserByEmail(session?.user.email)
    }
  
  return (
    <CheckoutPage user={currUser} />
  )
}

export default CheckOutSessionWrapper


