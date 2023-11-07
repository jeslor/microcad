"use client";
import LandingPage from '@/components/single/Hero/hero';
import styles from '@/styles/home.module.css';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Home() {
  return (
    <main >
     <LandingPage />
     <section className={`${styles.leveup} customwidth mx-auto`}>
      <div className={`${styles.leftContent} text-primayColor`}>
        <h2 >Level up</h2>
        <p className='text-primaryLight'>
          Unlock the full potential of your business, and education with office 365
        </p>
        <p className='text-primaryLight'>Play the next-gen and classic games you want, at the graphics setting you want, and with the peripherals you want on a Windows 11 PC.</p>
          <a href='/services/microsoft-office-365' className='microcadBtn w-fit '>
            level up now
            <Icon icon="la:angle-right" />
          </a>
      </div>
      <div className={styles.rightContent}>
        <ul className={`${styles.leveUpIcons} text-primayColor`}>
            <li><div> <Icon icon="bi:windows" /></div> <span>windows 11</span></li>
            <li><div> <Icon icon="simple-icons:microsoftoffice" /></div> <span>Office 365</span></li>
        </ul>
        <div className={styles.imageHolder}>
          <img src="/static/media/images/levelup.webp" alt="leveup" />
        </div>
      </div>
     </section>
     <section className={`${styles.trusted} bg-slate-100 `}>
        <h2 className='text-primayColor'>Trusted by</h2>
        <div className={`${styles.partnerLogos} customwidth mx-auto`}>
          <div>
            <img src="/static/media/images/partnercx.webp" alt="partner1" />
          </div>
          <div>
            <img src="/static/media/images/bestBuy.png" alt="partner2" />
          </div>
          <div>
            <img src="/static/media/images/costcoWholesale.svg" alt="partner3" />
          </div>
          <div>
            <img src="/static/media/images/microsoftRefurbrish.jpg" alt="partner4" />
          </div>        
          <div>
            <img src="/static/media/images/synnex.png" alt="partner5" />
            </div>  
        </div>
     </section>
    </main>
  )
}
