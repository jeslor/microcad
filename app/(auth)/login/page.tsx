import React from 'react'
import styles from "@/styles/auth.module.css"
import RegisterForm from '@/components/forms/RegisterForm'


const Page = () => {
  return (
    <div className={`${styles.login} customwidth mx-aut`}>
        <h2>Register</h2>
    <div className={styles.loginWrapper}>
      <div className={styles.userInputs}>
      <h6 className='font-bold text-primarymedium pb-3'>Account Information</h6>
        <RegisterForm />
        </div>
        <div className={styles.information}>
        <h6 className='pb-3 text-primayColor font-semibold'> The Microcad Account Advantage</h6>
          <ul>
            <li>Instant customer and technical service is only a phone call away.</li>
            <li>When Microcad has a deal you can rest assured its always priced below competitors.</li>
            <li>Microcad isn't just a computer distributor but a full authorized service depot.</li>
            <li>The Microcad 'Price Match Guarantee' ensures you always get the lowest price.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Page