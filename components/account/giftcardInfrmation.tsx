
import styles from "@/styles/account.module.css"
const GiftcardInformation = ({user}:any) => {
  return <div className={styles.billingInformation}>
        <h4>Gift cards and offers</h4>
        <p>See all your coupons and gift cards from microcad</p>
        {(user?.giftCard?.length )?(
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
            <h3 className="pt-4 text-secondaryMedium text-lg">You have got no gift cards at the moment</h3>
          )}
    </div>


}

export default GiftcardInformation