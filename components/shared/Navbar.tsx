"use client"
import {useState, useEffect} from 'react'
import { Icon } from '@iconify/react';
import MainNav from './segments/mainNavBar/mainNav';
import Link from 'next/link';
import {  useSession } from "next-auth/react";
import { getUserByEmail } from '@/lib/actions/user.actions';
export default   function Navbar() {
    const [loggedInUser, setLOggedInUser] = useState<any>(null);

    const {data:session, status} = useSession();

    const setUserState = async() => {
        if(session?.user){
            const userEmail:any = session.user.email;
            const user = await getUserByEmail(userEmail as string);
            setLOggedInUser(user);
            
        }
    }

    useEffect(()=>{
        setUserState();
    }, [session])
    

    return (
        <div className="navbar fixed w-full z-50">
            <div className="mainNav bg-primaryColor hidden md:block">  
                <div className=" mx-auto flex justify-end">
                    <div className="links flex">
                        {
                          status === "loading"? <span>loading ...</span>:(
                            loggedInUser !==null ? 
                            (
                                <>
                                    <Link  className="navbarLinks cursor-pointer" href={`/account/${loggedInUser._id}`}><Icon className="text-lg pe-1" icon="mdi:account" />{`${loggedInUser.firstName}`}</Link>
                                    <Link className="navbarLinks" href="/api/auth/signout"><Icon className="text-lg pe-1" icon="mdi:logout" />Logout</Link>
                                </>
                            )
                            :(
                                <>
                                    <Link  className="navbarLinks" href="/register"><Icon className="text-lg pe-1" icon="mdi:account" />register</Link>
                                    <Link className="navbarLinks" href="/login"><Icon className="text-lg pe-1" icon="mdi:login" />Login</Link>
                                    <Link className="navbarLinks" href="/reset-password"><Icon className="text-lg pe-1" icon="mdi:lock-reset" />Forgot password</Link>

                                </>
                            )
                          )
                        }
                        <Link className="navbarLinks" href="/services">services</Link>
                        <Link className="navbarLinks" href="/partners">partners</Link>
                        <Link className="navbarLinks" href="/policies">policies</Link>
                        <Link className="navbarLinks" href="/company">About</Link>
                        <Link className="navbarLinks" href="/company/awards">Awards</Link>
                        <Link className="navbarLinks" href="/contact">Contact</Link>
                    </div>
                </div>   
                
            </div>
            <div className="subNav">
                <MainNav user={session?.user} status={status}/>

           
                {/* <div className="navContent justify-between items-end">
                   
                    <div className="subLinks flex">
            
                        <a className="mainNavLinks" href="/products">systems <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks" href="/products">hardware <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks" href="/products">network <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks" href="/products">storage <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks" href="/products">peripherals <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks text-secondaryColor" href="/products">Refubrished <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks text-secondaryColor" href="/products">Special <Icon className="mainNavLinksIcon" icon="ep:arrow-down" /></a>
                        <a className="mainNavLinks text-3xl" href=""><Icon icon="mdi:cart-outline"  /></a>
                    </div>
                </div> */}
            </div>  
        </div>
    )
}