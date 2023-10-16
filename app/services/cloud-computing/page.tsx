"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Cloud Computing</h1>
            <p>
            Cloud Solutions can be as  simple as a shared storage space or remote access to your files; or as complex as an advanced virtualized infrastructure or moving a multi-million dollar IT organization to the cloud.            </p>
        </div>
        <div className={styles.rightContent}>

            <div className={styles.imageHolder}>
                <img src="/static/media/images/cloudComputing.svg" alt="cloud computing" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">What is cloud computing?</h2>
        <p className="text-primarymedium">Cloud computing is the delivery of computing services; including servers, storage, databases, backups, networking, software, analytics, and intelligence over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You pay only for cloud services you use, helping you lower your operating costs, run your infrastructure more efficiently, and scale as your business needs change.</p>

      

    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.listDivs} ${styles.category} !pt-0`}>
            <h3 className="text-primayColor"> What are the benefits of cloud computing? </h3>

            <ul className="text-primarymedium">
            <li>
              <Icon icon="pepicons-print:cloud" />
                <span>
                Cloud computing is a big shift from the traditional way businesses think about IT resources. Here are seven common reasons organizations are turning to cloud computing services; Cost, Speed, Global Scale, Productivity, Performance, Reliability and Security.
                </span>
            </li>
            <li>
              <Icon icon="pepicons-print:cloud" />
                <span>
                For our cloud computing solutions at Microcad we partner with; Microsoft Azure, Amazon Web Services (AWS), Google Cloud, and VMWare Cloud.
                </span>
            </li>
            <li>
              <Icon icon="pepicons-print:cloud" />
                  <span>
                  For our cloud backup solutions at Microcad we partner with; Acronis and Datto.
                  </span>
            </li>
            
        </ul>
        </div>
      </section>
      <section className={styles.prices}>
        <div className={styles.priceInfo}>
          <p className="text-slate-200">Please contact our Microcad IT Support and Managed Services Group for your quote (519) 937-9039 msp@microcad.ca</p>
          <h6 className="text-lg font-bold text-secondaryMedium">starting at $0.30 per GB per month</h6>
        </div>
        <div className={styles.cloudPrices}>
          <img src="/static/media/images/cloudPrices.svg" alt="cloud prices" />
        </div>

      </section>
   </div>
  )
}

export default Page;