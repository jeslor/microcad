"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Services = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>services</h1>
            <p>Microcad's IT Support & Managed Services Provider (MSP) 
                Program is yet another feather in our cap of IT products 
                and services. By subscribing to our MSP program your company 
                will be able to better focus on your own business activity 
                rather than pursuing IT related issues, we'll take care of 
                all that.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/service.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primaryLight">Keep your IT healthy through our Managed Services Program.</h2>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="ant-design:setting-outlined" />
            <span>
            With Managed Services you simply pay a small fixed monthly fee based on 
            the size of your IT infrastructure.  Our automated remote monitoring and 
            management is proactive so we keep track of events before they can cause 
            business disruptions and cost you hefty bills.
            </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                Our MSP team offer a 30-day try-before-you-buy managed services trial so you can get a feel for the program and our support teams.
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                We will remotely fix most of the issues without bothering you and give you regular updates about the health of your system and even meet to discuss their performance and offer our expert advice.
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                Our services include automated proactive monitoring and management of your entire IT infrastructure, antivirus and web protection, mobile device management, app control, managed backup for your critical data, and lots of customizable management options that we can discuss with you.
                </span>
            </li>
           <li>
            <Icon icon="ant-design:setting-outlined" />
            <span>
            To learn more about the MSP program please click the above image to complete the Managed Service Program Information Request form and our MSP team will reachout to you.  Alternativly you can always contact our MSP team at (519) 937-9039 msp@microcad.ca
            </span>
           </li>
        </ul>

    </section>
   </div>
  )
}

export default Services