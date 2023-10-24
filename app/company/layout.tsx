"use client";
import '@/app/globals.css'
import styles from "@/styles/services.module.css"
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const  services = [
    {
        title: "About us",
        link:"/company"
    },
    {
        title: "careers",
        link: "/company/careers"
    },
    {
        title: "company awards",
        link: "/company/awards"
    },
    {
        title: "customer service",
        link: "/company/customer-service"
    },
    {
        title: "privacy policy",
        link: "/company/privacy-policy"
    },
    {
        title: "testimonials",
        link: "/company/testimonials"
    },
    
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
                <h2 className="text-primaryLight">About us</h2>
                <ul>
                    {services.map((service, index) => (
                        <li key={index} className={`${service.link ===pathname?'bg-primayColor text-slate-100':'bg-slate-200'} hover:bg-slate-300 text-primayColor`}>
                            <a href={service.link}>
                                <span className="block">{service.title}</span>
                                {service.link ===pathname &&  <Icon icon="la:angle-right" />}                             
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
