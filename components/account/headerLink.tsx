"use client";
import { useSession } from "next-auth/react";
import {useEffect } from "react";
import {redirect } from "next/navigation"
import { usePathname } from "next/navigation";
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
        <a href={`/account/${user._id}`} className="microcadBtn flex">
          {user?.firstName}
        <img className="pl-2" src="/static/media/icons/user.svg" alt="edit icon" />
        </a>
      ):(
        <a href={`/account/edit/${user._id}`} className="microcadBtn flex">
        edit
        <img className="pl-2" src="/static/media/icons/edit.svg" alt="edit icon" />
        </a>
      )

      return link
    
  }
}

export default HeaderLink