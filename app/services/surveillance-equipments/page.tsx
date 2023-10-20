"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Surveillance Equipment</h1>
            <p>
            At Microcad when we design video surveillance solutions, we work closely with customers to figure out what works best for them. For us, it's not all about innovation itself – it's about solving real problems for our customers.            
            </p>
            <p>
            Our technical teams always choose best in class products for our customers. For video surveillance solutions Microcad partner with; Axis and Hikvision.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/surveillance.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
      <div className={`${styles.mantainance} ${styles.category}`}>
        <h3 className="text-primayColor ">Microcad surveillance solutions.</h3>
        <p className="text-primarymedium pb-5">Microcad design video surveillance solutions for; home, office, manufacturing and municipalities. Please contact our MSP team for your free consultation, design and quote (519) 937-9039 msp@microcad.ca</p>
        <p className="text-primarymedium pb-4">Microcad video surveillance offerings include:</p>
        <div>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Wearables</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >PTZ cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Thermal cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Fixed box cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Panoramic cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Network intercoms</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Fixed dome cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Positioning cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Fixed bullet cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Access control integration</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >No cost onsite consultations</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Onboard specialty cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Explosion-protected cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Power over Ethernet (PoE) cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >On premise and cloud hosted solutions</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Indoor and outdoor network camera applications</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Low light high resolution network surveillance cameras</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Video management software and intrusions detection alerting</h4>
          </article>
          <article>
            < Icon icon="fluent:camera-dome-16-regular" />
            <h4 >Custom built Network Video Recorders (NVR) and workstations</h4>
          </article>
        </div>
      </div>
    </section>


   </div>
  )
}

export default Page