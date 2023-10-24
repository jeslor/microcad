"use client";
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
    const pathname = usePathname();
    
    

  return (
    <section className={`${styles.pageHeight} bg-slate-100`}>
        <div id="leftMenuOpener" className="leftMenuOpener">
            <div className="leftMenuContent">
                <div className="brulMenu"> </div>
                <div className="leftMenuInner">
                    <button>
                        Menu
                    <Icon icon="la:angle-right" />
                    </button>  
                </div>
            </div>
        </div>
        <div className={`${styles.servicesHolder} customwidth mx-auto`}>
            <div id="leftMenu" className={styles.leftMenu}>
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
