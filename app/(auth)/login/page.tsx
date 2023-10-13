import React from 'react'
import styles from "@/styles/auth.module.css"
import RegisterForm from '@/components/forms/RegisterForm'


const Page = () => {
  return (
    <div className={`${styles.login} customwidth mx-aut`}>
    
      <div className={styles.userInputs}>
      <RegisterForm />
      </div>
      <div className={styles.information}>
      <h3>Register</h3>
      <h6>The Microcad Account Advantage</h6>
        <h6>Account Information</h6>
        <ul>
          <li>Instant customer and technical service is only a phone call away.</li>
          <li>When Microcad has a deal you can rest assured its always priced below competitors.</li>
          <li>Microcad isn't just a computer distributor but a full authorized service depot.</li>
          The Microcad 'Price Match Guarantee' ensures you always get the lowest price.
        </ul>
      </div>
       

    </div>
  )
}

export default Page