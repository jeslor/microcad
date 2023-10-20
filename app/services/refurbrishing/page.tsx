"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Microcad Refurbrished</h1>
            <p>
              Many of our machines are purchased off lease from large organizations and leasing companies. Although our inventory is comprised of both new and refurbished units, our refurbishing department continues to thrive as customers keep coming back for quality high end business grade product.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/refurbrishingService.webp" alt="refurbrishing" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Why Buy Refurbished?</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="iconoir:pc-firewall" />            
            <span>
            When searching for a system to suit vour needs. new is not always better. When comparing new and refurbished systems, a similar price point can mean a big difference in quality and performance. Take for example: If you buy a new $299 system at a large retailer you will be buying an entry level machine with latest technology.
            </span>
            </li>
            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
                If you were to spend that same amount on a refurbished machine, you can get a high end business class machine (which would have originall retailed for over $2000 and would out-pertorm the entry level machine. Whether your customer is on a budget or simply doesn't require the latest technology to complete their tasks. a refurbished system can be found to suit their needs                
                </span>
            </li>

            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
            Customer requirements, very few industries require the latest generation of technology                </span>
            </li>
            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
            Custom builds, get what you want for a price you can afford               
            </span>
            </li>
            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
            Fully tested, new products can be defective out of the box
            </span>            
            </li>
            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
            Every refurbished system is fully tested and checked for issues before being sold               
            </span>
            </li>
 
        </ul>

    </section>
    <section className={`${styles.listDivs}`}>
        <h2 className="text-primayColor ">MAR PC? What's That?</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="iconoir:pc-firewall" />            
            <span>
            When buying refurbished products we strive to do more than save you money. A very common question is the difference between a MAR PC and a system that does not have a MAR. Many of our MAR PC's are business grade products purchased off lease and refurbished. It is common to see a business grade system that is several years old outperforming a new entry level machine. New is not always better!            
            </span>
            </li>
            <li>
            <Icon icon="iconoir:pc-firewall" />                
            <span>
              MARs have access to specially developed tools to help install Windows properly on refurbished PCs.
              This includes access to the Microsoft Windows
              Device Driver library which contains thousands of drivers tested by Microsoft to work with Windows.                
              </span>
            </li>
        </ul>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Microcad Refurbrishing Process</h3>
            <p className="text-primarymedium pb-3">Products that are refurbished by Microcad are tailored to our customer's needs. Whether you are a retail customer expeding a
              "like new" experience, or a vendor hoping to sell our refurbrished systems in your store, we have a process in place for you
            </p>
            <p className="text-primarymedium pb-3">
            Microcad technicians sort and repair all systems to find the right system for the right customer. The processes in place allow us to find and address issues found in all systems before they make it to our customers.
            </p>
            <div>
                <article className="!bg-indigo-950 !flex-col">
                <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                <h3 className="!text-md uppercase !pt-0">1: Product Sourcing</h3>
                  <h4 >Acquiring PCs from large leasing companies</h4>
                </article>
                <article className="!bg-indigo-900 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">2: Initial cleaning</h3>
                  <h4 >Remove dust and debris from systems using advanced downdraft and compressed air technology</h4>
                </article>
                <article className="!bg-indigo-800 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">3: Registration</h3>
                  <h4 >Sort and register all systems depending on make model, type and specifications</h4>
                </article>
                <article className="!bg-indigo-700 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">4: Repairs</h3>
                  <h4 >Address any issues found during initial registration</h4>
                </article>
                <article className="!bg-indigo-600 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">5: TEsting</h3>
                  <h4 >Comprehensive pysical and system tests on hardware</h4>
                </article>
                <article className="!bg-indigo-500 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">6: Imaging</h3>
                  <h4 >Deploy Operating system/recovery enviroment and ensure full functionality</h4>
                </article>
                <article className="!bg-orange-300 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">7: Cleaning</h3>
                  <h4 >Thorough clean the unit to "like new" condition</h4>
                </article>
                <article className="!bg-orange-400 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">8: Comestic Repair</h3>
                  <h4 >Fix any scratches or blemishes as much as possible. this can include " skinning" a unit</h4>
                </article>
                <article className="!bg-orange-500 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">9: Quality Control</h3>
                  <h4 >Final inspection of system to ensure a continous high level of quality</h4>
                </article>
                <article className="!bg-orange-600 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">10: Custom packagingr</h3>
                  <h4 >System is packaged according to customer specitications</h4>
                </article>
                <article className="!bg-orange-700 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-sm uppercase !pt-0">11: Custom labeling</h3>
                  <h4 >Packaging is labelled in accordance with customer requirements which can include UPC, specifications, part numbers and logos</h4>
                </article>
                <article className="!bg-orange-800 !flex-col">
                  <Icon icon="streamline:interface-edit-drawing-board-board-design-drawing-easel-process" />                  
                  <h3 className="!text-md uppercase !pt-0">12: Final Product</h3>
                  <h4 >Quality Microcad refurbrished product</h4>
                </article>

            </div>
       </div>
    </section>

   </div>
  )
}

export default Page