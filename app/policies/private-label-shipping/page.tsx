"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
            <h1 className="!pb-0">Private label shipping</h1>
    </section>
    <section className={`${styles.listDivs} !pt-10`}>
        <p className="text-primarymedium pb-4">Would you like to lighten your workload, save money and eliminate days from the product delivery cycle? Now you can enhance your reputation for customer responsiveness with Private Label Delivery, Microcad's innovative drop-shipping service:</p>
        <ul className="text-primarymedium">
            <li>
                <Icon icon="iconoir:privacy-policy" />
                <span>
                    We rush packages directly to your customers, yet all parcels display your company's logo on the shipping labels and your custom text on the packing lists.
                </span>
            </li>
            <li>
                <Icon icon="iconoir:privacy-policy" />
                <span>
                    You receive the customer's praise, because every order looks just like you shipped it yourself.
                </span>
            </li>
            <li>
                <Icon icon="iconoir:privacy-policy" />
                <span>
                The process cuts back on the turnaround time to the end user and decreases your overall shipping cost and handling efforts
                </span>
            </li>
            <li>
                <Icon icon="iconoir:privacy-policy" />
                <span>
                The service works great whether you place orders through your sales team or over the Web.
                </span>
            </li>
            <li>
                <Icon icon="iconoir:privacy-policy" />
                <span>
                    The warehouse address will be on the packing list and shipping label to facilitate returns.
                </span>
            </li>
            <li>
                <Icon icon="iconoir:privacy-policy" />               
              <span>
              Costs will not be on the packing list for:
                </span>
                <ul className={styles.innerList}>
                  <li>U.S. customers shipping within the U.S</li>
                  <li>Canadian customers shipping within Canada</li>
                </ul>
            </li>

        </ul>

    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-0 pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Is there a fee involved?</h3>
            <p className="text-primarymedium">
            Absolutely not! Enrollment in the Private Label Delivery Program is FREE along with customizing your company logo to fit the packing slip and shipping label.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">How to Sign up for Private Label Delivery</h3>
            <p className="text-primarymedium">
                To take advantage of the new Private Label Delivery capabilities available from Microcad. Submit your company logo, address, and all related shipping information and Microcad will do the rest.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">When You Place an Order</h3>
            <p className="text-primarymedium">
            Once your label information is set up in our system, you can use Private Label Delivery on any dropship order. Just let your Microcad Sales Representative know which orders you would like drop shipped directly to your customers using Private Label Delivery. When ordering over the Web, select the Blind Packaging option on the Shipping Destination tab of the Online Order form. Your custom Private Label files are automatically used for all fulfillment orders. For information on courier tracking numbers, please contact your Microcad team.
            </p>
       </div>

    </section>
   </div>
  )
}

export default page