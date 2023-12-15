"use server"
import { getServerSession } from 'next-auth';
import { getUserByEmail } from "@/lib/actions/user.actions";
import UserAccountComponent from "@/components/account/userAccountComponent";
import authOptions from '@/lib/configs/authOptions';

const page = async() => {
  let currentUser = null;
  const session:any = await getServerSession(authOptions);
  const user = await getUserByEmail(session.user.email);
  if (user) {
    currentUser = user;
  }
  

  return <UserAccountComponent  user={currentUser}/>;
}

export default page