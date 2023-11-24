"use client"
import { useState, useEffect } from "react";
import UserEditForm from "@/components/forms/userEditForm"
import styles from "@/styles/auth.module.css"
import { useSession } from 'next-auth/react';
import Spinner from "@/components/single/spinner/spinner";
import { getUserByEmail } from "@/lib/actions/user.actions";
const page = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const {data: session, status} = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getUser = async() => {

    if(session?.user){
      const userEmail:any = session.user.email;
      const user = await getUserByEmail(userEmail as string);
      setCurrentUser(user);
    }
  }

  useEffect(()=>{
    setIsLoading(true);
    getUser();   
    setIsLoading(false); 
  }, [status])


  return isLoading?<Spinner />: (
    <div className={`${styles.login} customwidth mx-aut`}>
    <h2 className="text-primayColor">Edit account</h2>
  <div className={`${styles.loginWrapper} ${styles.loginWrapperEdit}`}>
  <div className={styles.userInputs}>
  <h6 className='font-bold text-primarymedium pb-3'>Account Information</h6>
  {
    currentUser !== null&&(
      <UserEditForm userData ={currentUser} />
    )
  }
    </div>

  </div>
</div>
  )
}

export default page