"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
            <h1 className="!pb-0">Rental policy</h1>
    </section>

    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Microcad LCD Projector Rentals</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="material-symbols:policy-outline" />
            <span>
             Microcad offers the widest selection of brand name projectors for rent. There are thousands of items, which can be delivered all across Canada, including: LCD Projectors, Projector screens, Floor, Wall or Ceiling mounts, and many other projectors and peripheral devices.
            </span>
            </li>
            <li>
              <Icon icon="material-symbols:policy-outline" />
                <span>
                LCD Projector rentals are available for conventions, tradeshows, corporate meetings, presentations, your office, and much more. Projectors, screens, mounts and other periphery devices all add to your presentation, whatever the purpose.
                </span>
            </li>
        </ul>

    </section>
    <section className={`${styles.listDivs} !pt-0`}>
        <h2 className="text-primayColor ">Microcad PC Computer Rentals - Digital Signage</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="material-symbols:policy-outline" />
            <span>
            Microcad offers the widest selection of brand name desktop computer equipment for rent. Thousands of items, which can be delivered all across Canada. Rent brand name PC desktop / tower computers including; Lenovo, HP, Dell and more.
            </span>
            </li>
            <li>
              <Icon icon="material-symbols:policy-outline" />
                <span>
                Microcad rentals provide you with a full range of technical support including complete configuration of all computer equipment and custom software loads. Our technical staff can install and take down all the rental equipment. Customers can rent computers and related technology by the day, week, month or year. Renting computers is a simple, easy and cost effective solution for corporate training, presentations, short-term employees and projects.
                </span>
            </li>
            <li>
              <Icon icon="material-symbols:policy-outline" />
                <span>
                Microcad offers desktop accessories like wireless keyboards and mice, software, memory and hard drive upgrade. We also offer a whole range of computer peripherals such as colour printers, scanners, wireless notebooks, presentation size monitors and projectors, including all the upgrade options and networking accessories to go with them.
                </span>
            </li>
            <li>
              <Icon icon="material-symbols:policy-outline" />
                <span>
                Whether you are presenting at a major trade show or in charge of a large corporate event, Microcad's computer rental services will meet your needs.
                </span>
            </li>
        </ul>

    </section>
   </div>
  )
}

export default page