"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>About us</h1>
            <p>Microcad Computer Corporation is a nationwide distributor of computer products. Established since 1991, we have the experience and the means to provide you with the latest products and technologies to cater to all of your home and business applications. We source technology from leading computer industry manufacturers, providing our customers with excellent products, pricing and service. Here at Microcad, we are also a custom systems integrator that offers our own line of Extreme computer systems, servers and workstations to effectively meet your every need.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/aboutus.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <p className="text-primarymedium pb-4">Microcad's business philosophy is to establish long-term, win-win relationships between Microcad, vendors, resellers, and ultimately, the end-users of the products. Microcad understands that having satisfied customers takes commitment, expertise, experience, and persistence. This commitment extends well beyond simply providing quality products, excellent services and competitive prices, focusing on the goal of total customer satisfaction.</p>
        <p className="text-primarymedium pb-4">
        Microcad serves its clients by providing an extensive array of service and support logistics. Our Microcad service centre has been voted #1 by our customers, offering efficient and reliable service. Our experienced technicians are able to offer 24 hour turnaround on repairs ensuring as little downtime as possible.
        </p>
        <p className="text-primarymedium pb-4">
        At Microcad, we strive to be your distribution partner of choice. Not only do we want to help you deliver technology to market in the most efficient manner possible, we also want to help you increase your sales opportunities and profits. After all, we succeed when you succeed.
        </p>
        <h2 className="text-primayColor ">We consider ourselves to be your one stop shop for technology sales and service for:</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="carbon:ibm-content-services" />
            <span>
            Electronics repair depot for: Windows, Apple and Android products
            </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-content-services" />
                <span>
                Custom built gaming systems
                </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-content-services" />
                <span>
                Refurbished systems and parts depot
                </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-content-services" />
                <span>
                Industry aggressive pricing (we beat all advertised prices)
                </span>
            </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            IT Support and Managed Service Provider (MSP) full service onsite and remote
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Networking and hardware support
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            VoIP telephone systems and integration
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Video surveillance solutions
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Digital signage (indoor and outdoor)
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Rentals & leasing
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Private label custom building (Reseller Program)
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Blind drop shipments (Reseller Program)
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            In stock orders available for pickup or delivery within hours
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-content-services" />
            <span>
            Electronic waste pick-up and recycling
            </span>
           </li>

        </ul>

    </section>

   </div>
  )
}

export default page