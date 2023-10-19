"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Managed Services (Onsite)</h1>
            <p>We provide a first class IT support and outsourcing service to small and medium sized businesses i(2-500 users). We offer both contracted and non-contracted solutions.
              Our engineers work around the clock ensuring your IT is fully functioning. We know how important business continuity is, so we go the extra mile, so you can concentrate on things that matter, your own business.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/managedservices.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Microcad</h2>
        <p className="text-primarymedium pb-5">Provides a complete "end to end" network design and installation service from the initial site survey & performance requirement determination, through cabling installation, network infrastructure hardware installation & configuration, server & client PC installation, client software & applications software installation, to the final commissioning, testing and documentation of the completed network installation.</p>
        <ul className="text-primarymedium">
            <li>
            <span>
              <Icon icon="uil:icons" />
           <strong className="pr-2"> Site Survey:</strong>
            A cabling engineer will attend site and document the physical and environmental characteristics of the site and establish the network performance and cabling installation requirements.
            </span>
            </li>
            <li>
                <span>
                  <Icon icon="uil:icons" />
                <strong className="pr-2">Network Design:</strong>
                Network topology & infrastructure hardware are specified to meet agreed performance and environmental requirements                </span>
            </li>
            <li>
                <span>
                  <Icon icon="uil:icons" />
                <strong className="pr-2">Network Cabling Installation:</strong>
                In collaboration with selected partner companies, where necessary, supply and install structured cabling systems for data, & voice if required.                </span>
            </li>
            <li>
                <span>
                  <Icon icon="uil:icons" />
                <strong className="pr-2">Network Infrastructure Hardware Installation:</strong>
                Patch Panels, Hubs, Switches & Routers, supplied, installed configured to meet operational requirements.                </span>
            </li>
           <li>
            <span>
              <Icon icon="uil:icons" />
            <strong className="pr-2">Server Installation & Client PC Installation:</strong>
            Server Hardware and Server Software installed and configured as per agreed requirements. Client Applications Software installed as per standard install procedures, customised to particular requirements.            </span>
           </li>
           <li>
            <span>
              <Icon icon="uil:icons" />
            <strong className="pr-2">Installation Hand-over:</strong>
            Once the installation has been completed to the customer's satisfaction, the documentation is handed over and the necessary support agreements put into place. 
            </span>
            </li>
        </ul>

    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Onsite Service Contracts</h2>
        <p className="text-primarymedium pb-5">In addition to a full line of IT hardware and software, Microcad offers a comprehensive roster of technology services designed to help you save time and resources.</p>
        <ul className="text-primarymedium">
            <li>
              <Icon icon="uil:icons" />            
              <span>
            <strong className="pr-2">Lower Costs and Optimize IT:</strong>
            Microcad provides a comprehensive suite of IT Lifecycle solutions to lower total cost of ownership of IT assets. The Insight Integration solutions provide a cost effective alternative to performing simple to complex integration tasks on the IT equipment you purchase to run your business.
           </span>
            </li>
            <li>
              <Icon icon="uil:icons" />                
              <span>
                <strong className="pr-2">Reduce Rollout Cost:</strong>
                Microcad Integration Services can perform the complex tasks of software imaging, hardware configuration and user preparation within our state-of-the-art Integration Labs at a substantially lower cost than performing the same tasks at your own facility.   
                </span>        
            </li>
            <li>
              <Icon icon="uil:icons" />                
              <span>
                <strong className="pr-2">Simplify Deployment:</strong>
                Microcads Advanced Integration and Custom Configuration services provide a cost-effective alternative to performing simple and complex integration tasks on the IT equipment you purchase. Our specialists augment your current IT staff resources to deliver solutions that are compatible with your existing infrastructure right out of the box. Your business benefits from:                
                </span>
                <ul className={styles.innerList}>
                  <li>Simplified IT rollouts</li>
                  <li>Augmented IT resources</li>
                  <li>Minimal business interruption</li>
                  <li>Scalable configurations set for growth</li>
                  <li>Protection against DOA products and failures</li>
                </ul>
            </li>
            <li>
              <Icon icon="uil:icons" />                
              <span>
                <strong className="pr-2">Advanced Integration and Custom Configuration:</strong>
                Patch Panels, Hubs, Switches & Routers, supplied, installed configured to meet operational requirements.                </span>
            </li>
           <li>
              <Icon icon="uil:icons" />            
              <span>
            <strong className="pr-2">Server Installation & Client PC Installation:</strong>
            Server Hardware and Server Software installed and configured as per agreed requirements. Client Applications Software installed as per standard install procedures, customised to particular requirements.            </span>
           </li>
           <li>
              <Icon icon="uil:icons" />            
              <span>
            <strong className="pr-2">Installation Hand-over:</strong>
            Once the installation has been completed to the customer's satisfaction, the documentation is handed over and the necessary support agreements put into place. 
            </span>
            </li>
        </ul>

    </section>

    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Hardware Installation Services</h2>
        <p className="text-primarymedium pb-3">Is your organization going through a technology refresh? Do you need assistance deploying and configuring hardware? Hardware Installation Services, a Microcad custom services solution, can make the process as hassle-free as possible.</p>
        <p className="text-primarymedium pb-5">Hardware Installation Services can include:</p>
        <ul className="text-primarymedium">
            <li>
              <Icon icon="uil:icons" />            
            <span>
              Operating systems           
            </span>
            </li>
            <li>
              <Icon icon="uil:icons" />            
            <span>
              Installation of new equipment         
            </span>
            </li>

            <li>
              <Icon icon="uil:icons" />            
            <span>
              Antivirus and security programs          
            </span>
            </li>

            <li>
              <Icon icon="uil:icons" />            
            <span>
              Training software/hardware need          
            </span>
            </li>

            <li>
              <Icon icon="uil:icons" />            
            <span>
              De-installation and moving of existing equipment          
            </span>
            </li>

            <li>
              <Icon icon="uil:icons" />            
            <span>
              Configuration (if necessary) to assure compliance with your firm's network infrastructure.          
            </span>
            </li>


        </ul>

    </section>

   </div>
  )
}

export default Page