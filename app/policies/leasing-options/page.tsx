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
    <section className={`${styles.serviceDetail} text-slate-50`}>
      <div className={`mt-0 pb-7 ${styles.category}`}>
        <h3 className="!pb-1 text-primayColor">General commercial lease rates</h3>
      </div>
      <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>RATE FACTOR PER $1000.</th>
            <th>FAIR MARKET VALUE END OF TERM</th>
          </tr>
        </thead>
        <thead className={styles.secondHead}>
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
      <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>RATE FACTOR PER $1000.</th>
            <th>$10.00 END OF TERM</th>
          </tr>
        </thead>
        <thead className={styles.secondHead}>
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
            <td>$48.01</td>
            <td>$33.87</td>
            <td>$26.85</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>$5,000 - $9,999</td>
            <td>$47.22</td>
            <td>$33.01</td>
            <td>$25.95</td>
            <td>$21.74</td>
          </tr>
          <tr>
            <td>$10,000 - $14,999</td>
            <td>$46.43</td>
            <td>$32.34</td>
            <td>$25.32</td>
            <td>$21.14</td>
          </tr>
          <tr>
            <td>$15,000 - $19,999</td>
            <td>$46.26</td>
            <td>$32.15</td>
            <td>$25.12</td>
            <td>$20.93</td>
          </tr>
          <tr>
            <td>$20,000 - $24,999</td>
            <td>$45.88</td>
            <td>$31.83</td>
            <td>$24.83</td>
            <td>$20.65</td>
          </tr>
          <tr>
            <td>$25,000 - $49,999</td>
            <td>$45.88</td>
            <td>$31.83</td>
            <td>$24.83</td>
            <td>$20.65</td>
          </tr>
          <tr>
            <td>END OF TERM</td>
            <td>10.00</td>
            <td>10.00</td>
            <td>10.00</td>
            <td>10.00</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className={`${styles.table} ${styles.tablelast}`}>
      <table>
        <thead>
          <tr>
            <th>RATE FACTOR PER $1000.</th>
            <th>STRETCH LEASE PAYMENT OPTION 10%</th>
            <th>EARLY FMV AT END OF TERM</th>
          </tr>
        </thead>
        <thead className={styles.secondHead}>
          <tr>
            <th>Amount</th>
            <th>36/39 months</th>
            <th>48/53 months</th>
            <th>60/66 months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$2,500 - $4,999</td>
            <td>$31.13</td>
            <td>$24.76</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>$5,000 - $9,999</td>
            <td>$30.19</td>
            <td>$23.79</td>
            <td>$19.97</td>
          </tr>
          <tr>
            <td>$10,000 - $14,999</td>
            <td>$29.49</td>
            <td>$23.14</td>
            <td>$19.34</td>
          </tr>
          <tr>
            <td>$15,000 - $19,999</td>
            <td>$29.28</td>
            <td>$22.92</td>
            <td>$19.12</td>
          </tr>
          <tr>
            <td>$20,000 - $24,999</td>
            <td>$28.95</td>
            <td>$22.61</td>
            <td>$18.83</td>
          </tr>
          <tr>
            <td>$25,000 - $49,999</td>
            <td>$28.95</td>
            <td>$22.61</td>
            <td>$18.83</td>
          </tr>
          <tr>
            <td>10% EARLY PAYMENT OPTION AT</td>
            <td>36</td>
            <td>48</td>
            <td>60</td>
          </tr>
          <tr>
            <td>END OF TERM OPTION</td>
            <td>FMV</td>
            <td>FMV</td>
            <td>FMV</td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>
    <section className={styles.listDivs}>
        <h2 className="text-primayColor ">TERMS AND CONDITIONS</h2>
        <ul className="text-primarymedium">
            <li>
            <span>
            <Icon icon="nonicons:vim-terminal-mode-16" />
             Rates are 36 months for IT solutions and office equipment, printer copier 60-66 months
            </span>
            </li>
            <li>
            <span>
            <Icon icon="nonicons:vim-terminal-mode-16" />
             Rates are subject to change based on the credit provided
            </span>
            </li>
            <li>
            <span>
            <Icon icon="nonicons:vim-terminal-mode-16" />
             First and last payments in advance
            </span>
            </li>
            <li>
            <span>
            <Icon icon="nonicons:vim-terminal-mode-16" />
             Pre Authorized payment for all transactions
            </span>
            </li>
            <li>
            <span>
            <Icon icon="nonicons:vim-terminal-mode-16" />
           Applicable taxes are additional
            </span>
            </li>
        </ul>
    </section>
    <section className={`${styles.listDivs} !pt-0`}>
        <h2 className="text-primayColor ">DRIVING BUSINESS FORWARD</h2>

        <p className="text-primarymedium pb-5">The Canadian leasing market for commercial equipment is over 13 Billion and forecasted to grow at about 3% in 2012.</p>
        <p className="text-primarymedium pb-5">Leasing has become the preferred method for most businesses to acquire the technology assets they need to grow and maximize their business.     It is not because they do not have the cash.   They simply understand the importance of not using their working capital to finance a depreciating asset.</p>
        <p className="text-primarymedium pb-5">Leasing is a very strategic sales tool.   When introduced early in the sales cycle it frees the customer to focus on the technology solution rather than the financial side of the equation.   It can be as easy as “Are you looking to spread the payments over 36 months.”</p>
        <p className="text-primarymedium pb-5">When you lead with leasing the customer is more likely to go with a solution that exactly meets their needs, rather than what they can afford right now.   In addition the customer will likely replace a leased product twice within a 10 year period, whereas the outright purchased product will generally  be replace at year five.</p>
        <p className="text-primarymedium pb-5">The values to the reseller in offering leasing to their customers are:</p>

        <ul className="text-primarymedium">
            <li>
            <span>
              <Icon icon="uil:icons" />
              You can convert more quotes in the pipeline to orders and over time drive more sales to your existing customers as there is flexibility in upgrading the hardware solution at any time during the lease.
            </span>
            </li>
            <li>
            <span>
              <Icon icon="uil:icons" />
              Consider the cost of Money!   Leasing accelerates the payment, thus decreases your receivables.  Having the ability to pay for the equipment sooner can often help in the price negotiation or the early payment options.  All contribute to increased margins.   You can enhance your margins further by partnering with a Finance Vendor and participating in the Rewards programs.
            </span>
            </li>
            <li>
            <span>
              <Icon icon="uil:icons" />
              Leasing also ties the customer closer to the Reseller creating barriers for the competition and sales people taking customers should they leave.
            </span>
            </li>
          </ul>
          <p className="text-primarymedium pb-5">When it is time for the Reseller to consider their own exit strategy, the value of a built in annuity customer base holds significant worth.</p>
      </section>
      <section className={`${styles.serviceDetail} text-slate-50`}>
       <div className={`${styles.mantainance} ${styles.category}`}>
            <h3 className="text-primayColor"> Why would your customer want to lease and what are the advantages to them?</h3>
            <p className="text-primarymedium pb-3">
            Well would you pay a new hire their annual salary up front?  As in leasing you are paying for the asset as it is contributing to your business.   It is generally best to pay cash or credit for assets that appreciate and finance those that depreciate.
            </p>
            <p className="text-primarymedium pb-3">
            Having a good relationship with your bank is important, but having too much dependency on your bank is not a good thing.  A lease accelerates the acquisition, and unlike your line of credit, it is not demand note.   Profits are made from the use of the assets.
            </p>
            <p className="text-primarymedium pb-3">
            There is flexibility in the term and payments, but there is also ease of managing the cash flow as payments once agreed are fixed.   Lease payments are an operational expense vs. a capital expense and often get the company approval quicker.  In addition there are potential tax advantages to having an operational lease as an expense.   Additionally the total solution can be leased including 100% software deals.
            </p>
            <p className="text-primarymedium pb-3">
            So overall leasing helps your customer.  It preserves their working capital, improves their cash flow management, and gives the flexibility to respond to their growing needs.
            </p>
            <p className="text-primarymedium pb-3">
            For the Reseller, you can accelerate and increase your sales; expand your customer’s acquisition options; keep your account base active; and you get paid upon delivery.
            </p>
            <p className="text-primarymedium pb-3">
            Action Plan:   If you want to know if leasing is right for your customer mix, try this. Review your pipeline for the past 90 days. Revisit each customer and offer them the opportunity to lease or even the option to defer the payments for 90 days. Guaranteed you will see more than 15% of the opportunities close.
            </p>
          </div>
        </section>
  </div>
  )
};

export default page;