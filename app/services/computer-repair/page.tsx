"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Computer Repair</h1>
            <p>
            If your personal computer's acting up, it's time to call 
            Microcad. We'll resolve your software or hardware problems 
            fast. Use a Mac? We have a Geek for that too! Don't run your 
            laptop into the ground by leaving overheating and battery 
            problems unaddressed. We can repair or replace problem parts 
            that are slowing you down before they cause catastrophic failure.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/computerRepair.svg" alt="services" />
            </div>
        </div>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-7 pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Printer Repair</h3>
            <p className="text-primarymedium">
              Printers and other external devices can cause more problems than the computers they're connected to. If your printer jams and leaks, your scanner garbles your documents, or your external hard drive is making a suspicious ticking sound, it's time to call Microcad.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Business Services</h3>
            <p className="text-primarymedium">
            Computers are the heart of modern business, so every moment they're down you're losing time and money. Microcad charges the same low rates for business customers as for residential and we can have a tech on site within 24 hours of your call, helping you get some of that time and money back.            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Notebook Repair</h3>
            <p className="text-primarymedium">
              At Microcad we are experts in providing replacement for damaged Laptop LCD Screens. We provide best quality, brand new A+++ replacement LCD for all major Laptop Brands.
            </p>
            <p className="text-primarymedium pt-5">
            If your Laptop LCD screen is broken, damaged or cracked during use or has dead pixels / lines or the picture sharpness is reduced and backlight is not working, don’t panic. We can provide you excellent quality replacement LCD screen at very reasonable rate compared to the companies like Sony, Dell, Compaq, HP, Apple, etc. We take pride in our quality and price. You need not buy a new laptop if your LCD screen is damaged as you can easily replace it yourself with these simple DIY steps.We will be very happy in assisting you in identifying the correct screen, replacement or repair of your Notebook LCD Screen.            </p>
       </div>

    </section>

    <section className={`${styles.listDivs} ${styles.ComputerRepair}`}>
        <h2 className="text-primayColor ">Microcad Services.</h2>
        <ul className="text-primarymedium">
            <li>
              <Icon icon="fluent-mdl2:repair" />
            <span>
              Wireless Network Configuration.
            </span>
            </li>
            <li>
                <Icon icon="fluent-mdl2:repair" />                
                <span>
                  New Computer setup                
                </span>
            </li>
            <li>
                <Icon icon="fluent-mdl2:repair" />                
                <span>
                  Data Backup and Recovery                
                </span>
            </li>
            <li>
                <Icon icon="fluent-mdl2:repair" />                
                <span>
                  Business Network Firewall Setup                
                </span>
            </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Upgrading cpu, memory, video cards, hard drives, and more            
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Slow Computer          
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Windows Errors           
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Networking Problems           
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Printer Not Printing           
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Virus and Spyware Removal           
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                  Broken Internet          
                </span>
           </li>
           <li>
                <Icon icon="fluent-mdl2:repair" />            
                <span>
                Scanner Not Working        
                </span>
           </li>
        </ul>
    </section>
   </div>
  )
}

export default Page