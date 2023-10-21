"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
            <h1 className="!pb-0">Return policy</h1>
    </section>

    <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">Microcad's Return Policies:</h2>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            We will accept stock balance returns for current product up to 7 days from the invoice date, to a maximum of 5% of previous 30 days purchases. Approved open-box returns are subject to a 25% restocking fee.
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Our standard DOA/Defective Return window is 30 days from the invoice date
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Authorized RMA's are valid for 15 days only
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                All special order, discontinued and/or configured products are not returnable
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Credit will be issued at current market value at time of receipt of goods
                </span>
            </li>
        </ul>

    </section>

    <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">General Return Guidelines</h2>
        <p className="text-primarymedium pb-4">All product returns require pre-authorization and a RMA number to be received and processed by Microcad.
            Ways you can obtain your RMA number:
          </p>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            Submit an RMA by logging in and completing the RMA request form
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Call us at 1-800-948-35PC or local 519-661-0355
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Fax your RMA request to 519 661-0362
                </span>
            </li>
            <li>
              <Icon icon="tabler:truck-return" />              
              <span>
              When Requesting a RMA, the following information will be required to obtain a return authorization:
                </span>
                <ul className={styles.innerList}>
                  <li>Company Name</li>
                  <li>Microcad Part </li>
                  <li>Customer information</li>
                  <li>Serial Number</li>
                  <li>Invoice or Sales Order</li>
                  <li>Specific details of the Problem</li>
                </ul>
            </li>
        </ul>

        <p className="text-primarymedium pt-7 pb-4">
          What happens when a return doesn't qualify:
          </p>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            Microcad reserves the right to return products to you that do not comply with the original RMA details
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            For refused shipments and unauthorized returns outside of Microcad's policies, we will deduct a $30 fee (per RA line) from the credit value
            </span>
            </li>
        </ul>
    </section>
    <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">RMA Shipping Instructions</h2>
        <p className="text-primarymedium pb-4">
        It is your responsibility to arrange for delivery and prepay the freight unless Customer Care has authorized the use of Microcad's freight account.
          </p>
          <p className="text-primarymedium pb-3">What to Include:</p>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            Use original manufacturer's boxes and packaging
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                All returns must be complete including accessories, cables, manuals, software
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                All returns must have an RMA number printed on the shipping label
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Please do not write on the box
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Return product promptly - Return Authorizations are valid for 15 days only
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Returns must be shipped freight prepaid and insured using a tracked shipping method
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Returns not meeting the above conditions will be refused and returned to the customer
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                For laser printers, the toner & drums must be removed and packed as per the instructions in the user manual
                </span>
            </li>
            <li>
              <Icon icon="tabler:truck-return" />              
              <span>
              Returns can be sent to the following address:
                </span>
                <ul className={styles.innerList}>
                  <li>
                    <p className="pb-1 font-semibold">Microcad Computer Corp,</p>
                    <p>499 McGregor Avenue</p>
                    <p>London, Ontario N6J 2S8</p>
                  </li>
                </ul>
            </li>
 
        </ul>
      </section>
      <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">Stock Balance Returns</h2>
        <p className="text-primarymedium pb-4">
        Purchases from Microcad are eligible for stock balancing for up to 60 days from date of invoice, and are limited to 5% of your previous 90 days purchases. Subject to exceptions for certain Manufacturers. Please review the Manufacturer Return policies in our Online RMA module prior to requesting your RMA.
        </p>
        <p className="text-primarymedium pb-3">To qualify, please review the following:</p>
        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            Product must be in new, unopened, re-saleable boxes (no defacing or damage)
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Must have all original packaging materials manuals and registration cards included
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Discontinued products do not qualify
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Special order and/or configured products do not qualify
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Must be returned freight prepaid
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Your account with Microcad must be current
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Credit will be issued at current pricing at time of receipt of goods for use against future purchases
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Authorized RMA numbers are only valid for 15 days
                </span>
            </li>
        </ul>
        <p className="text-primarymedium pt-3">Any non-compliant returns will be subject to a restocking fee, or may be returned.</p>
      </section>
      <section className={`${styles.listDivs} !pt-1`}>
        <h2 className="text-primayColor ">DOA / Defective Returns</h2>

        <ul className="text-primarymedium">
            <li>
            <Icon icon="tabler:truck-return" />
            <span>
            For most vendors, the standard DOA/Defective return window is 30 days from Microcad's invoice date, however many vendors have exceptions either by specific product type or for their entire product line. Please review the Manufacturer Return policies in our Online RMA module prior to requesting your RMA.
            </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Manufacturer policies are subject to change without notice.
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                Microcad will make every reasonable effort to exchange DOA and defective products. All original packaging, components, accessories, software and manuals must be included with returned DOA and defective products. DOA and defective products returned incomplete may be assessed a charge for the missing items or returned to you at your expense.
                </span>
            </li>
            <li>
            <Icon icon="tabler:truck-return" />
                <span>
                All computer systems returned as DOA or defective will be tested; other products returned as DOA or defective may be tested. Products found not to be DOA or defective will be subject to return to the customer at the customer's expense.
                </span>
            </li>
        </ul>
      </section>

   </div>
  )
}

export default page