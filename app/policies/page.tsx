"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Policies</h1>
            <p>Microcad's sales policies are made to benefit our customers. We believe in making policies simple and hassle free for our customers. We have no fee accounts. You can now buy directly from distribution without any start up fee or minimum orders.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/policies.webp" alt="services" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="carbon:policy" />
            <span>
            We customize your accounts from; retail, corporate, educational and resellers. Your pricing and terms is based on your customer type. Resellers can be assured of their low prices and a customized reseller portals.
            </span>
            </li>
            <li>
                <Icon icon="carbon:policy" />
                <span>
                All new accounts are assigned to your dedicated sales representative along with a dedicated service technician.                 </span>
            </li>
            <li>
                <Icon icon="carbon:policy" />
                <span>
                Our sales and technical team's are experienced and skilled in providing our clients several options from different manufacturers.                </span>
            </li>
            <li>
                <Icon icon="carbon:policy" />
                <span>
                Microcad is not dedicated to any one brand or make, but we work with all manufactures in the IT industry, therefore providing our clients with several options and price points. Just another reason to make Microcad your go to choice for all things tech.                </span>
            </li>
        </ul>
    </section>

   </div>
  )
}

export default page