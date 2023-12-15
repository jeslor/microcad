"use server"
import { getServerSession } from "next-auth/next";
import CheckoutPage from "./checkOutPage";
import { getUserByEmail } from "@/lib/actions/user.actions"
import authOptions from "@/lib/configs/authOptions";

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


