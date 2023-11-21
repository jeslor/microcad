"use client"
import { Icon } from '@iconify/react';
import MainNav from './segments/mainNavBar/mainNav';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
export default   function Navbar() {

    const {data:session} = useSession();
    const user:any = session?.user;
    


    return (
        <div className="navbar fixed w-full z-50">
            <div className="mainNav bg-primaryColor hidden md:block">  
                <div className=" mx-auto flex justify-end">
                    <div className="links flex">
                        {
                            session?.user ? 
                            (
                                <>
                                    <Link className="navbarLinks" href="/account"><Icon className="text-lg pe-1" icon="mdi:account" />{user!.firstName}</Link>
                                    <Link onClick={()=>signOut} className="navbarLinks" href="/api/auth/signout"><Icon className="text-lg pe-1" icon="mdi:logout" />Logout</Link>
                                </>
                            )
                            :(
                                <>
                                    <Link  className="navbarLinks" href="/register"><Icon className="text-lg pe-1" icon="mdi:account" />register</Link>
                                    <Link className="navbarLinks" href="/login"><Icon className="text-lg pe-1" icon="mdi:login" />Login</Link>
                                    <Link className="navbarLinks" href="/reset-password"><Icon className="text-lg pe-1" icon="mdi:lock-reset" />Forgot password</Link>

                                </>
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
                <MainNav />

           
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