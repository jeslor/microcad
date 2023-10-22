"use client";
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Customer service</h1>
            <p>
            Microcad has provided 31 years of exceptional customer service. Our no hassle policy has applied to all our clients no matter how large or small your purchase is. We pride ourselves in putting our customers first and ensuring your shopping experience is one that will have you coming back for more. Along with our price match policy you can rest assured Microcad is watching out for you. Our staff are trained, experienced and qualified to advise you on the latest trends in technology so your not alone when deciding on your purchase. Live help and free unlimited technical support is available at all times. Microcad the #1 technology partner.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/customerservice.webp" alt="services" />
            </div>
        </div>

    </section>

   </div>
  )
}

export default Page