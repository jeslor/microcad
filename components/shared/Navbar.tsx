'use client';
import {useState} from 'react';
import { Icon } from '@iconify/react';
import MainNav from './segments/mainNavBar/mainNav';

export default function Navbar() {
    const [isLinkOpen, setIsLinkOpen] = useState(false);
    const toggleLink = () => setIsLinkOpen(!isLinkOpen);

    return (
        <div className="navbar fixed w-full">
            <div className="mainNav bg-primaryColor hidden sm:block">  
                <div className=" mx-auto flex justify-end">
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