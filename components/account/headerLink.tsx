"use client";
import { useContext } from "react";
import { AuthenticantedUserContext } from "../providers/AuthenticatedUserProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
const HeaderLink = ({user}:{user:any}) => {
  const {authenticatedUser, handleAuthenticatedUser}  = useContext(AuthenticantedUserContext);
  handleAuthenticatedUser(user)

    const path = usePathname();   
    const link = path?.includes('/edit')?(
        <Link href={`/account/${user?._id}`} className="microcadBtn flex">
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

export default HeaderLink