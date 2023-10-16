"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>3CX Phone System</h1>
            <p>Accelerate your businesses growth with 3CX phone system. Don’t just rely on phone calls but communicate using Live Chat, Facebook messenger, SMS and video conferencing. All this from a single client so no switching between apps. Choose from web, desktop and mobile clients or easily connect a supported IP phone.
            </p>
        </div>
        <div className={styles.rightContent}>

            <div className={styles.imageHolder}>
                <img src="/static/media/images/cx.webp" alt="3cx services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Why 3CX VoIP phone system, here are six reasons;</h2>
        <ul className="text-primarymedium">
            <li>
                  <Icon icon="simple-icons:voipdotms" />
                <span>
              3CX is affordable and scales with your business.  
            </span>
            </li>
            <li>
                  <Icon icon="simple-icons:voipdotms" />
                    <span>
                  No per user per month fee. One low yearly cost based on system size.
                </span>
            </li>
            <li>
                  <Icon icon="simple-icons:voipdotms" />
                    <span>
                  Bring your own SIP trunk, control your numbers, and lower call costs.
                </span>
            </li>
            <li>
                  <Icon icon="simple-icons:voipdotms" />
                    <span>
                  No bolt-ons, just simple license editions.
                </span>
            </li>
           <li>
                  <Icon icon="simple-icons:voipdotms" />
                <span>
              Save money and connect your existing IP phones.
            </span>
           </li>
           <li>
                  <Icon icon="simple-icons:voipdotms" />
                <span>
              Simple administration with automated upgrades and backups.
            </span>
           </li>
        </ul>

    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Ready to make changes? </h3>
            <p className="text-primarymedium">Contact our IT Support & MSP Group for your free assessment and quote (519) 937-9039 msp@microcad.ca</p>
        </div>
      </section>
   </div>
  )
}

export default Page;