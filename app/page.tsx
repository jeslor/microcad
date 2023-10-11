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
        <h1 >Level up</h1>
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
        <div className={styles.leveUpIcons}>
            <div className={styles.windows11}>
            <Icon icon="bi:windows" />
              windows 11
            </div>
            <div className={styles.office1}>
            <Icon icon="simple-icons:microsoftoffice" />
              Office 2023
            </div>
            <div className={styles.office2}>
            <Icon icon="arcticons:microsoftoffice" />
              Office 365
            </div>
        </div>
        <div className={styles.imageHolder}>
          <img src="/static/media/images/levelup.webp" alt="leveup" />
        </div>
      </div>

     </section>
    </main>
  )
}
