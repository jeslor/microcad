"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const Page = () => {
  return (
    <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
        <div className={styles.leftContent}>
            <h1>Computer Rental</h1>
            <p>Microcad rentals provide you with a full range of technical support including complete configuration of all computer equipment and custom software loads. Our technical staff can install and take down all the rental equipment. Customers can rent computers and related technology by the day, week, month or year. Renting computers is a simple, easy and cost effective solution for corporate training, presentations, short-term employees and projects.
            </p>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imageHolder}>
                <img src="/static/media/images/computerRental.webp" alt="computer Rental" />
            </div>
        </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">Benefits of this program.</h2>
        <ul className="text-primarymedium">
            <li>
              <Icon icon="icon-park-twotone:collect-computer" />
            <span>
            Laptops available to rent for as low as $25/week (laptops, desktops, monitors, accessories)
            </span>
            </li>
            <li>
              <Icon icon="icon-park-twotone:collect-computer" />
                <span>
                Ergonomic furniture also available can be shipped (desks, stands)
                </span>
            </li>
            <li>
              <Icon icon="icon-park-twotone:collect-computer" />
                <span>
                Shipped directly to employees homes. Over 3000 computers in stock
              </span>
            </li>
            <li>
              <Icon icon="icon-park-twotone:collect-computer" />
                <span>
                Laptops can be purchased for as low as $149.
                </span>
            </li>
        </ul>
      <p className="text-primarymedium">Please contact us for more information (800) 948-3572 salesteam@microcad.ca</p>
    </section>

   </div>
  )
}

export default Page