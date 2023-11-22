
import styles from "@/styles/account.module.css"
const BilingInformation = ({user}:any) => {
  return (
    <div className={styles.personalInformation}>
        <h4>Personal information</h4>
        <p>Manage your personal information, including phone number , email address where you can be contacted</p>
        <div className={styles.iformationDetails}>
            {user?.country && (
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
           {user?.country && (
             <div className={styles.info}>
             <label htmlFor="">Country Region</label>
             {user?.country}
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

export default BilingInformation