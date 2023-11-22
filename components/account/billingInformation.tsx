
import styles from "@/styles/account.module.css"
const BillingInformation = ({user}:any) => {
  return <div className={styles.billingInformation}>
        <h4>Billing information</h4>
        <p>Manage your personal information, including phone number , email address where you can be contacted</p>
        {(user?.paymentMethod  || user?.billingStreet || user?.billingCity ||user?.billingProvince ||user?.billingZipCode || user.billingPhone )?(
        <div className={styles.informationDetails}>
            {user?.paymentMethod && (
                    <div className={styles.info}>
                    <label htmlFor="">Preffered paymentMethod</label>
                    {user.paymentMethod}
                </div>
            )}
           {(user?.billingStreet || user?.billingCity ||user?.billingProvince ||user?.billingZipCode || user.billingPhone )&& (
             <div className={styles.info}>
             <label htmlFor="">Adress</label>
              <ol>
                {user?.billingStreet && <li><span>Street:</span> {user?.billingStreet}</li>}
                {user?.billingCity && <li><span>city:</span>{user?.billingCity}</li>}
                {user?.billingProvince && <li><span>province/State:</span>{user?.billingProvince}</li>}
                {user?.billingZipCode && <li><span>zipCode:</span>{user?.billingZipCode}</li>}
                {user?.billingPhone && <li><span>country:</span>{user?.billingPhone}</li>}
              </ol>
            </div>
           )}
        </div>
          ):(
            <h3 className="pt-4 text-secondaryMedium text-lg">No billing information provided</h3>
          )}
    </div>


}

export default BillingInformation