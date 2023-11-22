"use client";

import { usePathname } from "next/navigation";
const HeaderLink = ({user}:{user:any}) => {
  const currUser = JSON.parse(user)

const path = usePathname();   
    const link = path?.includes('/edit')?(
        <a href={`/account/${currUser._id}`} className="microcadBtn flex">
          {currUser?.firstName}
        <img className="pl-2" src="/static/media/icons/user.svg" alt="edit icon" />
        </a>
      ):(
        <a href={`/account/edit/${currUser._id}`} className="microcadBtn flex">
        edit
        <img className="pl-2" src="/static/media/icons/edit.svg" alt="edit icon" />
        </a>
      )
  return link
}

export default HeaderLink