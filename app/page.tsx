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
        <p>
          Unlock the full potential of your business, gaming, and social media
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum itaque distinctio nesciunt aliquam temporibus voluptatibus facere, nulla magni impedit.
        </p>
          <button className='microcadBtn'>
            level up now
            <Icon icon="la:angle-right" />
          </button>
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
            <img src="/static/media/images/3cx.webp" alt="partner1" />
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
