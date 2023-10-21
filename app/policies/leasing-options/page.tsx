"use client";
import styles from "@/styles/services.module.css"
import { Icon } from "@iconify/react/dist/iconify.js"

const page = () => {
  return (
   <div className={styles.contentHolder}>
    <section className={`${styles.intro} text-slate-400 bg-primayColor`}>
            <h1 className="!pb-0">Leasing option</h1>
    </section>
    <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`mt-0 pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Tax structures</h3>
            <p className="text-primarymedium ">
            For the business owner, there are two primary types of leases that determine tax benefits: 1) operating or true leases and 2) capital or finance leases. A lease is usually considered a true lease if, at the end of the lease term, the lessee has the option to purchase the equipment at fair market value (FMV). Conversely, if the lease agreement contains a bargain purchase option, such as $10 or 10 percent of the original purchase price, it would be treated as a finance lease.
            </p>
         
       </div>
       <div className={`pb-7 ${styles.category}`}>
            <h3 className="!pb-1 text-primayColor">Types of leases</h3>
            <p className="text-primarymedium pb-3">
            Fair Market Value Buyout (FMV)
            </p>
            <p className="text-primarymedium">
            This lease structure normally provides the lowest lease payment and normally qualifies as an operating or true lease. (Consult a tax adviser to verify proper tax and accounting treatment.) At the end of the term, the lessee has the option to purchase the equipment for its fair market value as determined at that point in time. This structure is ideal if the expected useful life of the equipment is equal to the lease term, the lessee desires the lowest monthly payment possible or the lessee desires the maximum tax benefits
            </p>
       </div>
      </section>
      <section>

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>24 months</th>
              <th>36 months</th>
              <th>48 months</th>
              <th>60 months</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$2,500 - $4,999</td>
              <td>$45.78</td>
              <td>$32.28</td>
              <td>$25.58</td>
              <td>NA</td>
            </tr>
            <tr>
              <td>$5,000 - $9,999</td>
              <td>$44.94</td>
              <td>$31.39</td>
              <td>$24.64</td>
              <td>$20.62</td>
            </tr>
            <tr>
              <td>$10,000 - $14,999</td>
              <td>$44.14</td>
              <td>$30.71</td>
              <td>$24.01</td>
              <td>$20.01</td>
            </tr>
            <tr>
              <td>$15,000 - $19,999</td>
              <td>$43.96</td>
              <td>$30.51</td>
              <td>$23.80</td>
              <td>$19.80</td>
            </tr>
            <tr>
              <td>$20,000 - $24,999</td>
              <td>$43.57</td>
              <td>$30.18</td>
              <td>$23.50</td>
              <td>$19.51</td>
            </tr>
            <tr>
              <td>$25,000 - $49,999</td>
              <td>$43.57</td>
              <td>$30.18</td>
              <td>$23.50</td>
              <td>$19.51</td>
            </tr>
            <tr>
              <td>END OF TERM</td>
              <td>FMV</td>
              <td>FMV</td>
              <td>FMV</td>
              <td>FMV</td>
            </tr>
          </tbody>
        </table>
      </div>
        
        
      </section>
    </div>
  )
};

export default page;