"use client";
import { Icon } from '@iconify/react/dist/iconify.js';
import styles from "@/styles/services.module.css"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Digital Menu Boards</h1>
            <p>
              As a leading provider of sperior digital singnage, we offer a wide range of Digital Menu Boards to the Food, Retail and Hospitality industries.
              We povide consultation services and customized digital signage solutions for small to large scale establishments world wide.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/digitalMenu.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Some of the advantages of a Digital Menu Board.</h2>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  Change pricing and menu offering removely, easily and instantly
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  Increase sales per customer by cross selling / upselling
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  Attract customers with eye-catching multimedia graphics                
                </span>
            </li>
            <li>
                <Icon icon="ant-design:setting-outlined" />
                <span>
                  Easily add new products and services to your menu                
                </span>
            </li>
           <li>
            <Icon icon="ant-design:setting-outlined" />
            <span>
              Eliminate unnecessary printing costs and distribution delays            
            </span>
           </li>
           <li>
            <Icon icon="ant-design:setting-outlined" />
            <span>
              Improve communications between you and your customers            
            </span>
           </li>
           <li>
            <Icon icon="ant-design:setting-outlined" />
            <span>
              Entertain, inform, and improve perceived wait times           
            </span>
           </li>
        </ul>
    </section>

   </div>
  )
}

export default Page