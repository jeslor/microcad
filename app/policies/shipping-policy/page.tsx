"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
            <h1 className="!pb-0">Shipping policy</h1>
    </section>

    <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">Flat-Rate Shipping Limit</h2>
        <p className="text-primarymedium pb-5">
        Flat rate shipping applies only to items shipped within Canada and USA which meet the following weight/dimension limitations:
        </p>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="la:shipping-fast" />
            <span>
            No greater than 100cm/39" in length
            </span>
            </li>
            <li>
            <Icon icon="la:shipping-fast" />
                <span>
                No greater than 8 cubic feet/.22 cubic metres
                </span>
            </li>
            <li>
            <Icon icon="la:shipping-fast" />
                <span>
                No greater than 10kg/22lbs
                </span>
            </li>
        </ul>
        <p className="text-primarymedium pb-3">
        Any items exceeding these limits may be subject to an oversized shipping surcharge.
        </p>
        <p className="text-primarymedium pb-3">
        If additional freight charges are required for your order, a representative of Microcad will contact you to discuss details.
        </p>
        <p className="text-primarymedium pb-3 font-semibold">
        (Microcad reserves the right to choose carrier).
        </p>

    </section>
    <section className={`${styles.serviceDetail} text-slate-50 `}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Carriers used:</h3>
            <div>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >UPS</h4>
                </article>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >FedEX</h4>
                </article>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >Couriers Plus</h4>
                </article>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >Purolator</h4>
                </article>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >Canada Post</h4>
                </article>
                <article>
                   <Icon icon="material-symbols:local-shipping-outline-rounded" />
                    <h4 >Canapar</h4>
                </article>
            </div>
       </div>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-0 pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Taxes:</h3>
            <p className="text-primarymedium">
              <strong className="pr-2">Fulfillment Fee (Drop shipment fee):</strong>
              No additional fulfillment fee for orders shipped directly to end-users.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Order Pick-up</h3>
            <p className="text-primarymedium pb-2">
            Pick-up area hours are scheduled for your convenience as follows:
            </p>
            <p className="text-primarymedium ">
            <strong className="pr-2">London, Ontario: 1-800-848-3572.</strong>
            9:00 a.m. until 5 p.m. Monday-Friday
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Order Cut-off Times</h3>
            <p className="text-primarymedium">
            Orders received in the warehouse by 10:00 a.m. EST will be processed the same day.
            </p>
       </div>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50 `}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor">Payment Methods:</h3>
            <p className="text-primarymedium pb-3">Upon processing of an order, Microcad will charge the total amount of the order to the chosen method of payment. In stock items will be shipped immediately. Backordered items will ship as they become available. Credits or refunds will be issued for unavailable items and overdue backordered items as soon as requested or determined that an item is not available.</p>
            <p className="text-primarymedium pb-3">Microcad does NOT charge any credit card or payment surcharges. We gladly accept the following payment methods:</p>
            <div>
                <article>
                <Icon icon="fluent:payment-16-regular" />
                    <h4 >Visa</h4>
                </article>
                <article>
                <Icon icon="fluent:payment-16-regular" />
                    <h4 >Mastercad</h4>
                </article>
                <article>
                <Icon icon="fluent:payment-16-regular" />
                    <h4 >Corporate P.O. (approved by Microcad)</h4>
                </article>
                <article>
                <Icon icon="fluent:payment-16-regular" />
                    <h4 >PayPal Prepaid Company Cheque, Cashier's Cheque, Money Order or Bank Draft</h4>
                </article>
                <article>
                <Icon icon="fluent:payment-16-regular" />
                    <h4 >Electronic Payment</h4>
                </article>
            </div>
            <p className="text-primarymedium pb-2">No C.O.D. orders will be accepted. Sorry, no credit cards issued outside of Canada will be accepted as payment. US residents must make payment by PayPal.</p>
       </div>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-0 pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Stock Availability</h3>
            <p className="text-primarymedium pb-3">
            Our online stock reflects our inventory across many warehouses. If you place an order for an item that is not in stock at our warehouse(Special Order), please expect a delay until we can either bring in new stock or have stock transferred in from another location. If you are unsure about the availability of an item, please contact us by phone or email.
            </p>
            <p className="text-primarymedium">
            Items that are out of stock entirely, will need to be ordered from our supplier(s), and may take between 1-30 business days, unless otherwise noted. If it will take longer, our support staff will inform you of the availability. Note: Due to stock variances and unforeseeable errors, stock levels may be inaccurate.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Refused Shipment / Charges</h3>
            <p className="text-primarymedium">
            A $25 charge per refused shipment will be charged unless the refusal is based on a MICROCAD error or damaged shipment.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Hardware /Software and Software Licensing</h3>
            <p className="text-primarymedium">
            Customers (End-users for drop shipment) should thoroughly count and inspect all cartons for damage before signing for the shipment. This includes palletized freight. All exceptions should be clearly noted on the carrier? delivery receipt.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Short Shipments</h3>
            <p className="text-primarymedium">
            MICROCAD may not accept liability for shipments claimed as shortage where customer/end-user has not signed for number of cartons received (signing for number of skids or pallets is not acceptable). Shipments signed as subject to carton count after delivery are also unacceptable.
            </p>
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Damaged Shipments</h3>
            <p className="text-primarymedium">
            In cases of external (visible) carton damage, customers should refuse the damaged carton(s) and clearly note the refusal on the carrier delivery receipt. Claims for external damage will not be accepted unless the bill of lading is signed as damaged. MICROCAD customer service should be notified within 48 hours of the refusal. Claims for external (visible carton damage) will not be honoured when not refused by the customer/end-user at time of receipt. All claims for concealed product damage or shortage must be reported to MICROCAD customer service within 48 hours of receipt. Claims made after 48 hours from receipt date will not be honoured. Customer/end-user should make the product and packaging available for carrier inspection if requested.
            </p>
       </div>
    </section>
  </div>
)}

export default page