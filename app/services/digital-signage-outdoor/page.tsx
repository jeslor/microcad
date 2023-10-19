"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Outdoor Digital Signage</h1>
            <p>
              Recent by-law changes are now allowing outdoor digital signage. There has never been a better time than now to create your outdoor marketing.
            </p>
            <p>
            Our LED panels are 100% waterproof, energy efficient and does not contain any moving parts to breakdown.
            They are also designed to IP68 standards.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/outdoorsignage.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Why Choose Microcad?</h2>
        <p className="text-primarymedium pb-4">We have the experience and means to provide you with the latest products and technologies to cater to all of you business applications. We will take care of you and continue to partner with your business after implementation to ensure your signed content is professionally maintained.</p>
        <ul className="text-primarymedium">
           
            <li>
              <Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" />                
              <span>
                  City Applications/Permit                
                </span>
            </li>
            <li>
              <Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" />                
              <span>
                  Certified Engineered Drawings                
                </span>
            </li>
            <li>
              <Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" />                
              <span>
                  Full Installation                
                </span>
            </li>
           <li>
              <Icon icon="streamline:shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole" />            
              <span>
              Digital Content & development
            </span>
           </li>
        </ul>

    </section>

    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Target The Community & Increase Revenue</h3>
            <div>
                <article>
                  <Icon icon="tdesign:tv" />                    
                  <h4 >Buying decisions are significantly influenced by digital signage and imagery 50%</h4>
                </article>
                <article>
                  <Icon icon="tdesign:tv" />                    
                  <h4 >Customer's buying decision was influenced by the digital displays 65%</h4>
                </article>
                <article>
                  <Icon icon="tdesign:tv" />                    
                  <h4 >Customers stated that digital displays could influence future buying decisions 85%</h4>
                </article>
               
            </div>
       </div>

    </section>
   </div>
  )
}

export default Page