"use client";
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Sit Stand Desks</h1>
            <p>
            Please visit Microcad's ErgoMicro website for full deatils on our ergonomic product offerings.  Please call or email anytime should you have any questions or if you would like more information (800) 948-3572 salesteam@microcad.ca            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/sitStandDesk.webp" alt="services" />
            </div>
        </div>
    </section>

   </div>
  )
}

export default Page