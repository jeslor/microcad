"use client";
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Reseller Program</h1>
            <p>IMPORTERS - EXPORTERS - RESELLERS Refurbished off lease equipment - large bulk purchases - Monitors, Laptops, Desktops We take care of logistics ship to your port of choice.
            </p>
            <p>For quotes on volume purchases and todays list of equipment email pamme@microcad.ca</p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/reseller.webp" alt="services" />
            </div>
        </div>
    </section>

   </div>
  )
}

export default Page