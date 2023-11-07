"use client";
import React from 'react';
import '@/app/globals.css'
import styles from "@/styles/services.module.css"
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const  policies = [
    {
        title: "Policies",
        link:"/policies"
    },
    {
        title:"leasing options",
        link:"/policies/leasing-options"
    },
    {
        title:"private label shipping",
        link:"/policies/private-label-shipping"
    },
    {
        title:"rental",
        link:"/policies/rental"
    },
    {
        title:"return policy",
        link:"/policies/return-policy"
    },
    {
        title:"shipping policy",
        link:"/policies/shipping-policy"
}
  
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [leftMenu, setLeftMenu] = React.useState(false);
    const pathname = usePathname();

    const handleOpenLeftMenu = () => {
        setLeftMenu(!leftMenu);
        if (leftMenu) {
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto'; 
        } 
        
        if (!leftMenu){
            document.body.style.overflow = "hidden";
            document.body.style.height = '100vh'; 
   
        }
        
    }


    const openLeftMenuClasses = leftMenu ? `${styles.leftMenu} ${styles.leftMenuOpen}` : `${styles.leftMenu}`;
    const openLeftMenuInnerClasses = leftMenu ? `${styles.leftMenuInner} ${styles.activeLeftInner}` : `${styles.leftMenuInner}`;


  return (
    <section className={`${styles.pageHeight} bg-slate-100`}>
        <div  className={styles.leftMenuOpener}>
                <div className={styles.leftMenuContent}>
                    <div className={styles.brulMenu}> </div>
                    <div className={`${openLeftMenuInnerClasses}`}>
                        <button onClick={handleOpenLeftMenu}>
                            Menu
                        <Icon icon="la:angle-right" />
                        </button>  
                    </div>
                </div>
        </div>
        <div className={`${styles.servicesHolder} customwidth mx-auto`}>
            <div className={`${openLeftMenuClasses}`}>
                <h2 className="text-primaryLight">policies</h2>
                <ul>
                    {policies.map((policy, index) => (
                        <li key={index} className={`${policy.link ===pathname?'bg-primayColor text-slate-100':'bg-slate-200'} hover:bg-slate-300 text-primayColor`}>
                            <a href={policy.link}>
                                <span className="block">{policy.title}</span>
                                {policy.link ===pathname &&  <Icon icon="la:angle-right" />}                             
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.content}>
                {children}      
            </div>
        </div>  
    </section>
  )
}
