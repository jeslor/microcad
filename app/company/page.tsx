"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>About us</h1>
            <p>Microcad's IT Support & Managed Services Provider (MSP) 
                Program is yet another feather in our cap of IT products 
                and services. By subscribing to our MSP program your company 
                will be able to better focus on your own business activity 
                rather than pursuing IT related issues, we'll take care of 
                all that.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/service.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Keep your IT healthy through our Managed Services Program.</h2>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="ant-design:setting-outlined" />
            <span>
            With Managed Services you simply pay a small fixed monthly fee based on 
            the size of your IT infrastructure.  Our automated remote monitoring and 
            management is proactive so we keep track of events before they can cause 
            business disruptions and cost you hefty bills.
            </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                Our MSP team offer a 30-day try-before-you-buy managed services trial so you can get a feel for the program and our support teams.
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                We will remotely fix most of the issues without bothering you and give you regular updates about the health of your system and even meet to discuss their performance and offer our expert advice.
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                Our services include automated proactive monitoring and management of your entire IT infrastructure, antivirus and web protection, mobile device management, app control, managed backup for your critical data, and lots of customizable management options that we can discuss with you.
                </span>
            </li>
           <li>
            <Icon icon="ant-design:setting-outlined" />
            <span>
            To learn more about the MSP program please click the above image to complete the Managed Service Program Information Request form and our MSP team will reachout to you.  Alternativly you can always contact our MSP team at (519) 937-9039 msp@microcad.ca
            </span>
           </li>
        </ul>

    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Monitoring and Mantainance</h3>
            <div>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Remote Monitorign and system Health</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Antivirus, Anti Malware & Security solutions</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Cloud Services</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Backup solutions</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Patch management</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Business Continunity Planning</h4>
                </article>
            </div>
       </div>
       <div className={`${styles.helpDesk} ${styles.category} `}>
            <h3 className="text-primayColor"> Help Desk and Support</h3>
            <div>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >custom Service Levels</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >800 Help Desk Support</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Support Ticketing System</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Remote and Onsite Support</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Training</h4>
                </article>
            </div>
       </div>
       <div className={`${styles.helpDesk} ${styles.category}`}>
            <h3 className="text-primayColor"> Your IT Department</h3>
            <div>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Each account is assigned a Senior IT Consultant.
                        Our senior consultants work closely with vour business on planning, asset management and risk mitigation.</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Microcad IT Support is Your IT Department with Remote Support and or Onsite Support Options.</h4>
                </article>
                <article>
                    <Icon icon="carbon:cloud-services" />
                    <h4 >Proactive Monitoring, Maintenance and Support for all Systems.</h4>
                </article>

            </div>
       </div>
    </section>
    <section className={`${styles.listDivs} ${styles.networkSystem}`}>
        <h2 className="text-primayColor pb-1 mb-1">Computer and Network Support
            Specialists IT Managed Service
            Provider (MSP).
        </h2>
        <h5 className="uppercase text-secondaryColor font-bold text-sm pb-4">London's largest technology provider.</h5>
        <ul className="text-slate-200">
            <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
            <span>
            On-site and remote support available.
            </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
                <span>
                    Best rates in South Western Ontario starting at
                    $85 per hour.
                </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
                <span>
                    Proactive systems monitoring in the Microcad
                    Network Operations Centre (NOC).
                </span>
            </li>
            <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
                <span>
                    Large global online distributer with 20,000 sq ft
                    facility in London including: retail and tech centre.
                </span>
            </li>
           <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
            <span>
                Sales, service and installation of: voice and data infrastructure, Windows, Apple & Android products.
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
            <span>
            Microcad builds 35,000 systems every 12 months.
            </span>
           </li>
           <li>
                <Icon icon="carbon:ibm-cloud-kubernetes-service" />
            <span>
            Dozens of local business references in all verticals.
            </span>
           </li>
        </ul>

    </section>
   </div>
  )
}

export default page