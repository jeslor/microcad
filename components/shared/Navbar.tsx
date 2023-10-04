'use client';
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="mainNav bg-primaryColor">  
                <div className="navContent justify-end">
                    <div className="links flex">
                        <a className="navbarLinks" href="/">
                        <Icon className="text-lg pe-1" icon="mdi:account" />
                            register
                        </a>
                        <a className="navbarLinks" href="/contact"><Icon className="text-lg pe-1" icon="mdi:login" />Login</a>
                        <a className="navbarLinks" href="/about"><Icon className="text-lg pe-1" icon="mdi:lock-reset" />Forgot password</a>
                        <a className="navbarLinks" href="/products">services</a>
                        <a className="navbarLinks" href="/products">partners</a>
                        <a className="navbarLinks" href="/products">policies</a>
                        <a className="navbarLinks" href="/products">About</a>
                        <a className="navbarLinks" href="/products">Contact</a>
                    </div>
                </div>   
                
            </div>
            <div className="subNav">
                <div className="navContent justify-between items-end">
                    <Link href='/' className="flex items-center pt-3 pb-2">
                        <Image src="/media/microcad_logo.png" alt="Microcad Logo" width={200} height={50} />
                    </Link>
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
                </div>
            </div>  
        </div>
    )
}