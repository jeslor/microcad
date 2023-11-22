"use client"
import {useEffect, useState} from "react";
import styles from "@/styles/account.module.css"
import { useSession } from "next-auth/react";
import Spinner from "@/components/single/spinner/spinner";
import PersonalInformation from "@/components/account/personalInformation";
import Link from "next/link";


const page = () => {
    const [user, setUser] = useState<any>(null);
    const session = useSession();

    useEffect(()=>{
        if(session?.status === "authenticated"){
            setUser(session?.data?.user)
        }
    }, [session.status])

    console.log(user);
    
    
    
    
  return  user === null?(
      <Spinner />
    ):(
    <div className={`${styles.account} customwidth mx-auto`}>
    <div className={styles.accountHeader}>
      <h1>Account</h1>
      <Link href={`/account/edit/${user._id}`} className="microcadBtn flex">
        edit
        <img className="pl-2" src="/static/media/icons/edit.svg" alt="edit icon" />
        </Link>
    </div>
    <div className={styles.accountContent}>
      <div className={styles.accountLeft}>
        <div className={styles.profilePhoto}>
          <img src="/static/media/icons/user.svg" alt="" />
        </div>
        <h2 className={styles.userName}>
            {`${user?.firstName} ${user?.lastName}`}
        </h2>
          <p className={styles.userEmail}> {user?.email}</p>

        <div className={styles.accountDetails}>
            <ul>
              <li className={styles.active}>
                Persional Information
              </li>
              <li>
                Billing & Payments
              </li>
              <li>
                Oreder history
              </li>
              <li>
                Gift Cards
              </li>
              
            </ul>
        </div>


      </div>
      <div className={styles.accountRight}>
        <PersonalInformation user={user} />
      </div>
    </div>

    </div>
  )
}

export default page