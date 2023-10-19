"use client";
import '@/app/globals.css'
import styles from "@/styles/services.module.css"
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const  services = [
    {
        title: "services",
        link:"/services"
    },
    {
        title: "3CX Phone System",
        link: "/services/3cx"
    },
    {
        title: "cloud computing",
        link: "/services/cloud-computing"
    },
    {
        title: "computer rental",
        link: "/services/computer-rental"
    },
    {
        title: "computer repair",
        link: "/services/computer-repair"
    },
    {
        title: "digital menu boards",
        link: "/services/digital-menu-boards"
    },
    {
        title: "digital signage",
        link: "/services/digital-signage"
    },
    {
        title: "digital signage outdoor",
        link: "/services/digital-signage-outdoor"
    },
    {
        title: "gaming PCs (Extreme series)",
        link: "https://www.mxggaming.com"
    },
    {
        title: "managed services (Onsite)",
        link: "/services/managed-services-onsite"
    },
    {
        title: "microsoft office 365",
        link: "/services/microsoft-office-365"
    },
    {
        title: "refurbrishing",
        link: "/services/refurbrishing"
    },
    {
        title: "reseller program",
        link: "/services/reseller-program"
    },
  
    {
        title: "sit stand desks",
        link: "/services/sit-stand-desks"
    },
    {
      title: "surveillance equipments",
        link: "/services/surveillance-equipments"
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
        <div className={`${styles.servicesHolder} customwidth mx-auto`}>
            <div className={styles.leftMenu}>
                <h2 className="text-primaryLight">Services</h2>
                <ul>
                    {services.map((service, index) => (
                        <li key={index} className={`${service.link ===pathname?'bg-primayColor text-slate-100':'bg-slate-200'} hover:bg-slate-300 text-primayColor`}>
                            <Link href={service.link}>
                                <span className="block">{service.title}</span>
                                {service.link ===pathname &&  <Icon icon="la:angle-right" />}                             
                            </Link>
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
