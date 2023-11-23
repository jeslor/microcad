"use client";
import { useSession } from "next-auth/react";
import {useEffect } from "react";
import {redirect } from "next/navigation"
import { usePathname } from "next/navigation";
import Link from "next/link";
const HeaderLink = ({user}:{user:any}) => {

  const {data: session, status} = useSession();
  

  useEffect(()=>{
    if(status === "unauthenticated"){
      redirect('/login');
    }
  },[status])



  if (status === "authenticated") {
    const path = usePathname();   
    const link = path?.includes('/edit')?(
        <Link href={`/account/${user._id}`} className="microcadBtn flex">
          {user?.firstName}
        <img className="pl-2" src="/static/media/icons/user.svg" alt="edit icon" />
        </Link>
      ):(
        <Link href={`/account/edit/${user._id}`} className="microcadBtn flex">
        edit
        <img className="pl-2" src="/static/media/icons/edit.svg" alt="edit icon" />
        </Link>
      )

      return link
    
  }
}

export default HeaderLink