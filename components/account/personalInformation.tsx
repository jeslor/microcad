
import styles from "@/styles/account.module.css"
const PersonalInformation = ({user}:any) => {
  return (
    <div className={styles.personalInformation}>
        <h4>Personal information</h4>
        <p>Manage your personal information, including phone number , email address where you can be contacted</p>
        <div className={styles.informationDetails}>
            {user?.firstName && user?.lastName && (
                    <div className={styles.info}>
                    <label htmlFor="">Name</label>
                    {`${user.firstName} ${user.lastName}`}
                </div>
            )}
           {user?.email && (
             <div className={styles.info}>
             <label htmlFor="">Email</label>
             {user?.email}
            </div>
           )}
           {user?.accountType && (
             <div className={styles.info}>
             <label htmlFor="">Account type</label>
             {user?.accountType}
            </div>
           )}
           {(user?.country || user?.city ||user?.street ||user?.pronvice || user.zipCode )&& (
             <div className={styles.info}>
             <label htmlFor="">Adress</label>
              <ol>
                {user?.street && <li><span>Street:</span> {user?.street}</li>}
                {user?.city && <li><span>city:</span>{user?.city}</li>}
                {user?.province && <li><span>province/State:</span>{user?.province}</li>}
                {user?.zipCode && <li><span>zipCode:</span>{user?.zipCode}</li>}
                {user?.country && <li><span>country:</span>{user?.country}</li>}
              </ol>
            </div>
           )}
           {user?.phone && (
             <div className={styles.info}>
             <label htmlFor="">Phone number</label>
             {user?.phone}
            </div>
           )}
        </div>
    </div>
  )
}

export default PersonalInformation