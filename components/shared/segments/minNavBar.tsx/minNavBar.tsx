"use client"
import Link from 'next/link';
import { Icon } from '@iconify/react';

const MinNavBar = () => {
  return (
    <div className=" mx-auto flex justify-end">
    <div className="links flex">
        <Link  className="navbarLinks" href="/register"><Icon className="text-lg pe-1" icon="mdi:account" />register</Link>
        <Link className="navbarLinks" href="/login"><Icon className="text-lg pe-1" icon="mdi:login" />Login</Link>
        <Link className="navbarLinks" href="/reset-password"><Icon className="text-lg pe-1" icon="mdi:lock-reset" />Forgot password</Link>
        <Link className="navbarLinks" href="/services">services</Link>
        <Link className="navbarLinks" href="/partners">partners</Link>
        <Link className="navbarLinks" href="/policies">policies</Link>
        <Link className="navbarLinks" href="/company">About</Link>
        <Link className="navbarLinks" href="/company/awards">Awards</Link>
        <Link className="navbarLinks" href="/contact">Contact</Link>
    </div>
</div>   
  )
}

export default MinNavBar