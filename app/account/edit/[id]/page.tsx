"use client"
import UserEditForm from "@/components/forms/userEditForm"
import styles from "@/styles/auth.module.css"
import { useSession } from 'next-auth/react';
import Spinner from "@/components/single/spinner/spinner";
const page = () => {
  const {data: session, status} = useSession();

  return status ==="loading"?<Spinner />: (
    <div className={`${styles.login} customwidth mx-aut`}>
    <h2 className="text-primayColor">Edit account</h2>
  <div className={`${styles.loginWrapper} ${styles.loginWrapperEdit}`}>
  <div className={styles.userInputs}>
  <h6 className='font-bold text-primarymedium pb-3'>Account Information</h6>
    <UserEditForm userData ={session?.user} />
    </div>

  </div>
</div>
  )
}

export default page