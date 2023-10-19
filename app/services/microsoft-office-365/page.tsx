"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Office 365</h1>
            <p>Microsoft offer Office and Office 365 in either perpetual licensing or subscription-based licensing. Perpetual simply means you purchase the software one-time. Subscription based Office 365 is purchased either monthly or annually.  The below tables and pricing have been designed to help walk you through the options. If you need help selecting what office version will best suit your needs please contact our IT support team at (519) 937-9039 or (800) 948-3572 msp@microcad.ca
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/officeservice.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Physical (Perpetual Licence Non-Subscription Based):</h2>
        <ul className="text-primarymedium">
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2"> Microsoft Office Home & Student Citizenship 2019 (W2F-00188) $49 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Physical COA sticker, can only be distributed to individuals on social assistance or handicapped individuals can be done via resale through non-profits.
           </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual license            
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2"> Microsoft Office Home and Student 2021 English 1 License NA Only Media less (79G-05396) $175 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Physical Product Key Card           
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual License           
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2"> Microsoft Office Home and Student 2021 French 1 License NA Only Media less (TSD-03525) $323 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Physical Product Key Card          
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual License           
           </div>
            </span>
            </li>
        </ul>
    </section>

    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Digital Delivery (Perpetual Licence Non-Subscription Based):</h2>
        <ul className="text-primarymedium">
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2">Microsoft Office Home and Student 2021 ESD Email Delivery 79G•05343) $175 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Product Key emailed by Microsoft to the end user directly           
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual license            
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2"> Microsoft Office Home and Business 2021 ESD (Email Delivery) (TSD-03489) $323 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Product key emailed ov Microsoft to the end user directly           
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual License           
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2">Microsoft Office Pro 2021 ESD (Email Delivery) (269-17195) $581 Each</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            Product Key emailed by microsoft to the end user directly         
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Perpetual License           
           </div>
            </span>
            </li>
        </ul>
    </section>

    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Microsoft 365 (Monthly Subscriptions):</h2>
        <ul className="text-primarymedium">
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2">Microsoft 365 Business Basic (CFQ7TTCOLH18:0001: P1Y:M) $7.50 Each Per User/Monthly</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            MIcrosoft account emailed by microcad to the end user          
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Monthly Subscription           
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2">Microsoft 365 Apps for Business (CFQ7TTCOLH18:0001: P1Y:M) $10.50 Each Per User/Monthly</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            MIcrosoft account emailed by microcad to the end user          
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Monthly Subscription           
           </div>
            </span>
            </li>
            <li>
            <span>
            <Icon icon="mdi:microsoft-office" />           
            <strong className="pr-2">Microsoft 365 Business Standard (CFQ7TTCOLH18:0001: P1Y:M) $7.50 Each Per User/Monthly</strong>
           <div>
            <strong className="pr-1">
              -
            </strong>
            MIcrosoft account emailed by microcad to the end user          
            </div>
           <div>
           <strong className="pr-1">
              -
            </strong>
            Monthly Subscription           
           </div>
            </span>
            </li>
 
        </ul>
    </section>

   </div>
  )
}

export default Page